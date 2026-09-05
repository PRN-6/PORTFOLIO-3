import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Volume2, VolumeX } from 'lucide-react';

const projectsData = [
    {
        id: 'nova',
        title: 'NOVA',
        tagline: 'Privacy-preserving edge-native voice automation & AI desktop assistant.',
        tags: ['Python', 'Edge AI', 'ASR', 'Privacy', 'Automation'],
        version: 'v2.0.0',
        description:
            'An ultra-low latency, 100% private, on-device AI voice assistant and desktop automation framework engineered for local semantic routing and quantized speech recognition.',
        github: 'https://github.com/PRN-6/NOVA',
        demo: null,
        type: 'nova-logo',
        cliOutput: [
            '$ python app.py --nova-core',
            '● [EDGE-AI] Local Transformer ASR initialized',
            '> Privacy: 100% on-device, 0 telemetry',
            '> Latency: 42ms (Dual-lane semantic routing)',
            '> HUD: Listening on local audio stream'
        ],
        ascii: [
            '  ███    ██     ',
            '  ████   ██     ',
            '  ██ ██  ██     ',
            '  ██  ██ ██     ',
            '  ██   ████     '
        ]
    },
    {
        id: 'astrix',
        title: 'Astrix',
        tagline: 'Dynamic college fest management platform for registrations & scheduling.',
        tags: ['React', 'JavaScript', 'Vite', 'Tailwind CSS'],
        version: 'v2.1.0',
        description:
            'A comprehensive event platform designed to handle registrations, scheduling, and live scoreboards with dynamic transitions and real-time coordinator updates.',
        github: 'https://github.com/PRN-6/Astrix',
        demo: 'https://astrix2k26.vercel.app/',
        type: 'a-logo',
        cliOutput: [
            '$ astrix --event-sync',
            '● [READY] Event queue synced',
            '> Attendees: 1,480 registered',
            '> Latency: 14ms (Edge CDN)',
            '> Active Stages: Main Auditorium, Lab 4'
        ],
        ascii: [
            '     ████       ',
            '    ██  ██      ',
            '   ████████     ',
            '  ██      ██    ',
            ' ██        ██   '
        ]
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        tagline: 'Minimalist typography-driven portfolio website.',
        tags: ['React', 'Tailwind v4', 'Vite', 'Kinetic Fonts'],
        version: 'v2.0.0',
        description:
            'A distraction-free, dark-themed personal website focused on data ownership, privacy, kinetic typography, and raw terminal aesthetics.',
        github: 'https://github.com/PRN-6/PORTFOLIO-3',
        demo: '/',
        type: 'p-logo',
        cliOutput: [
            '$ pandadev --whoami',
            '● [SOVEREIGN] All data hosted locally',
            '> Aesthetic: Pitch Black (#000000)',
            '> Font Engine: Kinetic shuffle active',
            '> Status: Building future-proof software'
        ],
        ascii: [
            '  ████████      ',
            '  ██     ██     ',
            '  ████████      ',
            '  ██            ',
            '  ██            '
        ]
    },
    {
        id: '3d-website',
        title: '3D-website',
        tagline: 'Interactive 3D spatial web experience built with React and Three.js.',
        tags: ['Three.js', 'React', 'Node.js', 'WebGL'],
        version: 'v1.0.0',
        description:
            'A spatial web application blending React, Tailwind CSS, GSAP, and Three.js for cinematic 3D camera transitions and real-time WebGL rendering.',
        github: 'https://github.com/PRN-6/3D-website',
        demo: 'https://3-d-website-blond.vercel.app/',
        type: '3d-logo',
        cliOutput: [
            '$ three --render-stats',
            '● [GPU] WebGL 2.0 Canvas initialized',
            '> Framerate: 60 FPS (Stable)',
            '> Geometries: 3,420 polygons',
            '> Shader Passes: Bloom, Vignette'
        ],
        ascii: [
            '    ┌─────────┐ ',
            '   ╱         ╱│ ',
            '  ┌─────────┐ │ ',
            '  │  3 D    │ │ ',
            '  │         │ ╱ ',
            '  └─────────┘   '
        ]
    }
];

const playMechanicalClick = () => {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.035);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.035);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.035);
    } catch {
        // audio context inactive
    }
};

const Projecttemp = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);
    const [centerMode, setCenterMode] = useState('visual'); // 'visual' | 'cli' | 'ascii'
    const [soundEnabled, setSoundEnabled] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);
    const touchStartX = useRef(null);

    const project = projectsData[selectedProjectIndex];

    const handleSwitchProject = (newIndex) => {
        if (soundEnabled) playMechanicalClick();
        setSelectedProjectIndex(newIndex);
    };

    // Keyboard navigation: Left/Right arrows and numbers 1-4
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                handleSwitchProject((selectedProjectIndex + 1) % projectsData.length);
            } else if (e.key === 'ArrowLeft') {
                handleSwitchProject((selectedProjectIndex - 1 + projectsData.length) % projectsData.length);
            } else if (['1', '2', '3', '4'].includes(e.key)) {
                const idx = parseInt(e.key, 10) - 1;
                if (idx < projectsData.length) {
                    handleSwitchProject(idx);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProjectIndex, soundEnabled]);

    // Touch swipe navigation for mobile
    useEffect(() => {
        const handleTouchStart = (e) => {
            touchStartX.current = e.touches[0].clientX;
        };
        const handleTouchEnd = (e) => {
            if (touchStartX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(delta) > 50) {
                if (delta < 0) {
                    // swipe left → next project
                    handleSwitchProject((selectedProjectIndex + 1) % projectsData.length);
                } else {
                    // swipe right → prev project
                    handleSwitchProject((selectedProjectIndex - 1 + projectsData.length) % projectsData.length);
                }
            }
            touchStartX.current = null;
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [selectedProjectIndex, soundEnabled]);

    // 3D Tilt calculation
    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: x * 16, y: -y * 16 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    const renderLogo = (type) => {
        switch (type) {
            case 'nova-logo':
                return (
                    <svg viewBox="0 0 100 100" className="w-28 h-28 sm:w-36 sm:h-36 text-white fill-current drop-shadow-md">
                        <polygon points="20,18 38,18 64,62 64,18 80,18 80,82 62,82 36,38 36,82 20,82" />
                    </svg>
                );
            case 'a-logo':
                return (
                    <svg viewBox="0 0 100 100" className="w-28 h-28 sm:w-36 sm:h-36 text-white fill-current drop-shadow-md">
                        <polygon points="50,16 66,16 84,84 68,84 60,54 40,54 32,84 16,84 34,16" />
                        <polygon points="45,36 55,36 57,44 43,44" className="fill-[#181818]" />
                    </svg>
                );
            case 'p-logo':
                return (
                    <svg viewBox="0 0 100 100" className="w-28 h-28 sm:w-36 sm:h-36 text-white fill-current drop-shadow-md">
                        <path d="M 22 18 L 62 18 C 76 18 82 26 82 38 C 82 50 76 58 62 58 L 38 58 L 38 82 L 22 82 Z M 38 32 L 60 32 C 65 32 67 34 67 38 C 67 42 65 44 60 44 L 38 44 Z" />
                    </svg>
                );
            case '3d-logo':
            default:
                return (
                    <svg viewBox="0 0 100 100" className="w-28 h-28 sm:w-36 sm:h-36 text-white stroke-current fill-none stroke-[6]">
                        <path d="M50 18 L82 36 L82 72 L50 90 L18 72 L18 36 Z" />
                        <path d="M50 18 L50 90" />
                        <path d="M50 54 L82 36" />
                        <path d="M50 54 L18 36" />
                    </svg>
                );
        }
    };

    const renderTriptych = (proj) => (
        <div key={proj.id} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-5xl mx-auto items-stretch">
            {/* Left Card: Title, Version, Tagline & Tech Pills */}
            <div className="border border-zinc-900 bg-black p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[280px] md:min-h-[350px]">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl sm:text-4xl text-white font-pixel font-normal tracking-wide">
                            {proj.title}
                        </h2>
                        <span className="font-mono-code text-[10px] text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded">
                            {proj.version}
                        </span>
                    </div>
                    <p className="text-zinc-400 text-sm font-sans leading-relaxed">
                        {proj.tagline}
                    </p>
                </div>

                <div className="pt-6">
                    <div className="flex flex-wrap gap-1.5 font-mono-code text-[10px] text-zinc-400">
                        {proj.tags.map((tag) => (
                            <span key={tag} className="border border-zinc-900 bg-zinc-950 px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Middle Card: Interactive Canvas with 3D Tilt / CLI / ASCII */}
            <div
                ref={proj.id === project.id ? cardRef : null}
                onMouseMove={proj.id === project.id ? handleMouseMove : undefined}
                onMouseLeave={proj.id === project.id ? handleMouseLeave : undefined}
                className="border border-zinc-900 bg-black p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[260px] sm:min-h-[300px] md:min-h-[350px] relative overflow-hidden group cursor-pointer"
                onClick={() => {
                    const modes = ['visual', 'cli', 'ascii'];
                    const next = modes[(modes.indexOf(centerMode) + 1) % modes.length];
                    if (soundEnabled) playMechanicalClick();
                    setCenterMode(next);
                }}
                title="Click to toggle visual / cli / ascii"
            >
                <div
                    style={
                        proj.id === project.id
                            ? {
                                  transform: `perspective(600px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                                  transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.4s ease' : 'none'
                              }
                            : undefined
                    }
                    className="w-full max-w-[280px] sm:max-w-none mx-auto aspect-square bg-[#181818] border border-zinc-800/80 flex items-center justify-center p-4 sm:p-5 shadow-2xl relative"
                >
                    {centerMode === 'visual' && (
                        <div className="animate-fadeIn transition-transform duration-300 group-hover:scale-105">
                            {renderLogo(proj.type)}
                        </div>
                    )}

                    {centerMode === 'cli' && (
                        <div className="w-full h-full flex flex-col justify-center font-mono-code text-[11px] leading-tight space-y-1.5 text-zinc-300 text-left overflow-hidden">
                            {proj.cliOutput.map((line, idx) => (
                                <p
                                    key={idx}
                                    className={
                                        idx === 0
                                            ? 'text-zinc-100 font-bold'
                                            : line.includes('[EDGE-AI]') || line.includes('[READY]') || line.includes('[SOVEREIGN]') || line.includes('[GPU]')
                                            ? 'text-emerald-400'
                                            : 'text-zinc-400'
                                    }
                                >
                                    {line}
                                </p>
                            ))}
                        </div>
                    )}

                    {centerMode === 'ascii' && (
                        <pre className="font-mono-code text-[11px] sm:text-xs leading-none text-zinc-200 select-none text-center">
                            {proj.ascii.join('\n')}
                        </pre>
                    )}

                    <span className="absolute bottom-2 right-2 text-[9px] font-mono-code text-zinc-600">
                        mode: {centerMode}
                    </span>
                </div>
            </div>

            {/* Right Card: Full Description, GitHub & Live Links */}
            <div className="border border-zinc-900 bg-black p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[260px] md:min-h-[350px]">
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                    {proj.description}
                </p>

                <div className="pt-6 flex items-center justify-between font-mono-code text-sm">
                    <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors group"
                    >
                        <span>GitHub</span>
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    {proj.demo && (
                        <a
                            href={proj.demo}
                            target={proj.demo.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors group text-xs"
                        >
                            <span>live demo</span>
                            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full flex flex-col items-center py-2 select-none">
            {/* Top Toolbar: Audio feedback & interactive mode switcher */}
            <div className="w-full max-w-5xl flex flex-wrap justify-between items-center gap-y-2 mb-3 font-mono-code text-[11px] text-zinc-500 px-1">
                <div className="flex items-center gap-2">
                    <span className="text-zinc-600">PROJECT</span>
                    <span className="text-zinc-300 font-semibold">
                        0{selectedProjectIndex + 1} / 0{projectsData.length}
                    </span>
                    <span className="text-zinc-600 hidden sm:inline">•</span>
                    <span className="text-zinc-400 hidden sm:inline">{project.title}</span>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => {
                            if (!soundEnabled) playMechanicalClick();
                            setSoundEnabled(!soundEnabled);
                        }}
                        className={`flex items-center gap-1 transition-colors cursor-pointer ${
                            soundEnabled ? 'text-zinc-200' : 'text-zinc-600 hover:text-zinc-400'
                        }`}
                        title={soundEnabled ? 'Mute keyboard sound' : 'Enable click sound FX'}
                    >
                        {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
                        <span className="hidden sm:inline">{soundEnabled ? 'sound on' : 'sound off'}</span>
                    </button>

                    <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-900 rounded p-0.5">
                        <button
                            onClick={() => {
                                if (soundEnabled) playMechanicalClick();
                                setCenterMode('visual');
                            }}
                            className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
                                centerMode === 'visual' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                        >
                            visual
                        </button>
                        <button
                            onClick={() => {
                                if (soundEnabled) playMechanicalClick();
                                setCenterMode('cli');
                            }}
                            className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
                                centerMode === 'cli' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                        >
                            cli
                        </button>
                        <button
                            onClick={() => {
                                if (soundEnabled) playMechanicalClick();
                                setCenterMode('ascii');
                            }}
                            className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
                                centerMode === 'ascii' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                        >
                            ascii
                        </button>
                    </div>
                </div>
            </div>

            {/* If showing all, render all 4 cards in sequence */}
            {showAll ? (
                <div className="w-full space-y-12">
                    {projectsData.map((proj) => renderTriptych(proj))}
                </div>
            ) : (
                /* Otherwise render the featured project */
                <div className="w-full">
                    {renderTriptych(project)}
                </div>
            )}

            {/* Project Navigation Switcher Bar */}
            {!showAll && (
                <div className="w-full max-w-5xl flex flex-col items-center gap-4 mt-8 sm:mt-10">
                    <div className="flex items-center flex-wrap justify-center gap-2">
                        {projectsData.map((p, idx) => (
                            <button
                                key={p.id}
                                onClick={() => handleSwitchProject(idx)}
                                aria-label={`Select ${p.title}`}
                                className={`font-mono-code text-xs px-3 sm:px-4 py-1.5 border transition-all cursor-pointer ${
                                    selectedProjectIndex === idx
                                        ? 'border-zinc-500 bg-zinc-900 text-white font-medium shadow-sm'
                                        : 'border-zinc-900 bg-black text-zinc-500 hover:text-zinc-300 hover:border-zinc-800'
                                }`}
                            >
                                {p.title}
                            </button>
                        ))}
                    </div>

                    {/* Keyboard Navigation Tip - hidden on touch devices */}
                    <p className="hidden sm:block font-mono-code text-[11px] text-zinc-600 tracking-wider text-center">
                        tip: press <kbd className="px-1.5 py-0.5 border border-zinc-800 rounded bg-zinc-950 text-zinc-400">←</kbd> <kbd className="px-1.5 py-0.5 border border-zinc-800 rounded bg-zinc-950 text-zinc-400">→</kbd> or <kbd className="px-1.5 py-0.5 border border-zinc-800 rounded bg-zinc-950 text-zinc-400">1-4</kbd> to switch
                    </p>
                    {/* Swipe hint - visible only on mobile */}
                    <p className="sm:hidden font-mono-code text-[11px] text-zinc-600 tracking-wider text-center">
                        // swipe ← → to switch
                    </p>
                </div>
            )}

            {/* Bottom Actions: View All & GitHub Repositories Link */}
            <div className="mt-8 sm:mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono-code text-xs sm:text-sm text-zinc-400">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="hover:text-white transition-colors cursor-pointer tracking-wider"
                >
                    {showAll ? '← back to single showcase' : 'view all projects on page'}
                </button>
                <span className="text-zinc-700">•</span>
                <a
                    href="https://github.com/PRN-6?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                >
                    <span>all repos on GitHub</span>
                    <ArrowUpRight size={13} />
                </a>
            </div>
        </div>
    );
};

export default Projecttemp;