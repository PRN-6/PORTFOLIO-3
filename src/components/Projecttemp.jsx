import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';

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
        image: null // No image yet: left blank as requested
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
        image: p3
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
        demo: 'https://prinson.is-a.dev/',
        image: p1
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
        image: p2
    }
];

const Projecttemp = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);
    const touchStartX = useRef(null);

    const project = projectsData[selectedProjectIndex];

    const handleSwitchProject = (newIndex) => {
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
    }, [selectedProjectIndex]);

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
    }, [selectedProjectIndex]);

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

            {/* Middle Card: Project Image Canvas with 3D Tilt */}
            <div
                ref={proj.id === project.id ? cardRef : null}
                onMouseMove={proj.id === project.id ? handleMouseMove : undefined}
                onMouseLeave={proj.id === project.id ? handleMouseLeave : undefined}
                className="border border-zinc-900 bg-black p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[260px] sm:min-h-[300px] md:min-h-[350px] relative overflow-hidden group"
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
                    className={`w-full max-w-[280px] sm:max-w-none mx-auto aspect-square bg-[#141414] border border-zinc-800/80 flex items-center justify-center ${proj.image ? 'p-0' : 'p-4 sm:p-5'
                        } shadow-2xl relative overflow-hidden`}
                >
                    <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02] overflow-hidden">
                        {proj.image ? (
                            <img
                                src={proj.image}
                                alt={proj.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-[#121212] flex items-center justify-center">
                                {/* Left blank for projects without picture */}
                            </div>
                        )}
                    </div>
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
                        className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors group"
                    >
                        <SiGithub size={13} className="text-zinc-400 group-hover:text-white transition-colors" />
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
            {/* Top Toolbar: Project Index & Title */}
            <div className="w-full max-w-5xl flex justify-between items-center mb-3 font-mono-code text-[11px] text-zinc-500 px-1">
                <div className="flex items-center gap-2">
                    <span className="text-zinc-600">PROJECT</span>
                    <span className="text-zinc-300 font-semibold">
                        0{selectedProjectIndex + 1} / 0{projectsData.length}
                    </span>
                    <span className="text-zinc-600 hidden sm:inline">•</span>
                    <span className="text-zinc-400 hidden sm:inline">{project.title}</span>
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
                                className={`font-mono-code text-xs px-3 sm:px-4 py-1.5 border transition-all cursor-pointer ${selectedProjectIndex === idx
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
                    className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                >
                    <SiGithub size={13} className="text-zinc-500 group-hover:text-white transition-colors" />
                    <span>all repos on GitHub</span>
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
            </div>
        </div>
    );
};

export default Projecttemp;