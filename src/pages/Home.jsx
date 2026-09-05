import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { Github, Linkedin, Mail, Sparkles, Music, Music2 } from 'lucide-react';
import homeAudio from '../assets/audio/homeaudio.mp3';

const FONT_STYLES = [
    { id: 'rye',         className: 'font-rye tracking-wide' },
    { id: 'handwriting', className: 'font-handwriting tracking-wider font-normal' },
    { id: 'pixel',       className: 'font-pixel tracking-normal font-normal' },
    { id: 'silkscreen',  className: 'font-silkscreen tracking-wider font-normal' },
    { id: 'vt323',       className: 'font-vt323 tracking-widest font-normal' },
];

const NAMESPACE = 'prinson-portfolio-2026-v2';

const Home = () => {
    const [currentFontIndex, setCurrentFontIndex] = useState(0);
    const [visitorCount, setVisitorCount] = useState(() => {
        const cached = localStorage.getItem('prinson_cached_visitors');
        return cached ? parseInt(cached, 10) : 1;
    });
    const [clickCount, setClickCount] = useState(() => {
        const cached = localStorage.getItem('prinson_cached_clicks');
        return cached ? parseInt(cached, 10) : 1;
    });
    const [isBouncing, setIsBouncing] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Cycle through fonts every 150ms
    useEffect(() => {
        const interval = setInterval(
            () => setCurrentFontIndex((i) => (i + 1) % FONT_STYLES.length),
            150
        );
        return () => clearInterval(interval);
    }, []);

    // Fetch global visitor & click counts on mount
    useEffect(() => {
        const load = async () => {
            try {
                const visited = sessionStorage.getItem('prinson_session_visit');
                const url = visited
                    ? `https://abacus.jasoncameron.dev/get/${NAMESPACE}/visits`
                    : `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/visits`;
                const res = await fetch(url);
                if (res.ok) {
                    const { value } = await res.json();
                    if (typeof value === 'number') {
                        setVisitorCount(value);
                        localStorage.setItem('prinson_cached_visitors', String(value));
                        if (!visited) sessionStorage.setItem('prinson_session_visit', 'true');
                    }
                }
            } catch { /* use cached */ }

            try {
                const res = await fetch(`https://abacus.jasoncameron.dev/get/${NAMESPACE}/clicks`);
                if (res.ok) {
                    const { value } = await res.json();
                    if (typeof value === 'number') {
                        setClickCount(value);
                        localStorage.setItem('prinson_cached_clicks', String(value));
                    }
                }
            } catch { /* use cached */ }
        };
        load();
    }, []);

    // Sync audio element with isPlaying state
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        isPlaying
            ? audio.play().catch(() => setIsPlaying(false))
            : audio.pause();
    }, [isPlaying]);

    const handleGlobalClick = async () => {
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 150);
        setClickCount((n) => n + 1); // optimistic update
        try {
            const res = await fetch(`https://abacus.jasoncameron.dev/hit/${NAMESPACE}/clicks`);
            if (res.ok) {
                const { value } = await res.json();
                if (typeof value === 'number') {
                    setClickCount(value);
                    localStorage.setItem('prinson_cached_clicks', String(value));
                }
            }
        } catch { /* keep optimistic */ }
    };

    const activeFont = FONT_STYLES[currentFontIndex];

    return (
        <div className="relative w-screen h-screen bg-black text-white flex flex-col justify-between pt-3 pb-3 px-6 sm:pt-4 sm:pb-4 sm:px-10 md:pt-4 md:pb-5 md:px-12 overflow-hidden select-none">
            <audio ref={audioRef} src={homeAudio} loop preload="auto" />

            <Navbar />

            {/* Centre: cycling name + tagline */}
            <main className="w-full flex flex-col items-center justify-center text-center my-auto z-10">
                <div
                    onClick={() => setCurrentFontIndex((i) => (i + 1) % FONT_STYLES.length)}
                    title="Click to cycle font"
                    className="min-h-[120px] sm:min-h-[160px] md:min-h-[200px] flex items-center justify-center cursor-pointer"
                >
                    <h1
                        key={currentFontIndex}
                        className={`text-6xl sm:text-8xl md:text-9xl text-white lowercase transition-all duration-100 ${activeFont.className}`}
                    >
                        prinson
                    </h1>
                </div>
                <p className="font-mono-code text-xs sm:text-sm text-zinc-400 mt-2 sm:mt-4 tracking-wider">
                    # Just a Developer
                </p>
            </main>

            {/* Footer: social links, audio toggle, counters */}
            <footer className="w-full flex flex-wrap justify-between items-center gap-y-3 z-10">
                <div className="flex items-center gap-3 sm:gap-5 text-zinc-400">
                    <a href="https://github.com/PRN-6" target="_blank" rel="noopener noreferrer"
                        className="hover:text-white transition-colors p-1" aria-label="GitHub">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/prinson-nazareth/" target="_blank" rel="noopener noreferrer"
                        className="hover:text-white transition-colors p-1" aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                    <a href="mailto:prinsonroyal1@gmail.com"
                        className="hover:text-white transition-colors p-1" aria-label="Email">
                        <Mail size={18} />
                    </a>
                    <button
                        onClick={() => setIsPlaying((p) => !p)}
                        aria-label={isPlaying ? 'Pause music' : 'Play music'}
                        title={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
                        className={`p-1 transition-colors cursor-pointer ${isPlaying ? 'text-white' : 'text-zinc-600 hover:text-zinc-300'}`}
                    >
                        {isPlaying ? <Music size={17} className="animate-pulse" /> : <Music2 size={17} />}
                    </button>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 text-xs font-mono-code text-zinc-400">
                    <div className="flex items-center gap-1" title="Total visitors">
                        <span className="text-zinc-600">vis:</span>
                        <span className="text-zinc-300 font-semibold">{visitorCount.toLocaleString()}</span>
                    </div>
                    <span className="text-zinc-700">•</span>
                    <button
                        onClick={handleGlobalClick}
                        title="Click to bump the counter!"
                        className={`group flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 border border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded transition-all cursor-pointer select-none active:scale-90 ${isBouncing ? 'scale-105 border-zinc-500 text-white' : ''}`}
                    >
                        <Sparkles size={10} className="text-zinc-500 group-hover:text-amber-400 transition-colors" />
                        <span>clicks:</span>
                        <span className="text-white font-semibold">{clickCount.toLocaleString()}</span>
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default Home;
