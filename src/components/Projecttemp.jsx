import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Terminal, Copy, Check, X, Sparkles } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';
import p4 from '../assets/p4.webp';
import p5 from '../assets/p5.webp';
import p6 from '../assets/p6.webp';

const projectsData = [
    {
        id: 'web66',
        title: 'Web66',
        tagline: 'Architectural Intelligence & Cosmic Visualizer.',
        tags: ['Node.js', 'AST Parser', 'Canvas & Shaders', 'WebSockets', 'CLI'],
        version: 'v1.0.0',
        description:
            'A developer tool that turns raw codebases into living, explorable systems. By combining a lightweight AST parsing engine with a custom celestial rendering system, developers can explore file hierarchies and symbol interactions organically.',
        github: 'https://github.com/PRN-6/web66',
        terminalCommand: 'npx @leozodiac/web66',
        demo: 'https://prn-6.github.io/web66/',
        image: p6,
        challenge:
            'Understanding large-scale software architectures usually involves sifting through nested directories and tracking mental dependency trees. Traditional static architecture diagrams are either outdated, rigid, or heavy to generate.',
        solution:
            'I engineered Web66, a developer tool that turns raw codebases into living, explorable systems. By combining a lightweight AST parsing engine with a custom celestial rendering system, developers can explore file hierarchies and symbol interactions organically.',
        achievements: [
            {
                title: 'Zero-Dependency Core Parser',
                description:
                    'Created an AST symbol extractor in pure Node.js that traverses project trees, identifies core entry points, and extracts functions, interfaces, and cross-file imports without relying on heavy third-party parsing runtimes.'
            },
            {
                title: 'Radial Orbit & Force Layout',
                description:
                    'Built a custom positioning algorithm that stations core entry modules at (0, 0, 0) and projects modules, classes, and helper functions in concentric orbital rings with collision resolution.'
            },
            {
                title: 'Native Real-Time Server',
                description:
                    'Implemented a zero-dependency local HTTP server and native RFC 6455 WebSocket layer for recursive file-system monitoring and live delta updates.'
            },
            {
                title: 'Fluid UI/UX & Canvas Performance',
                description:
                    'Designed custom celestial physics with glowing plasma shaders, particle flows along dependency filaments, search with auto-centering camera kinematics, and responsive inspector drawers.'
            }
        ]
    },
    {
        id: 'privacy68',
        title: 'privacy68',
        tagline: 'Privacy-preserving edge-native voice automation & AI desktop assistant.',
        tags: ['Python', 'Edge AI', 'ASR', 'Privacy', 'Automation'],
        version: 'v1.1.0',
        inDevelopment: true,
        description:
            'An ultra-low latency, 100% private, on-device AI voice assistant and desktop automation framework engineered for local semantic routing and quantized speech recognition.',
        github: 'https://github.com/PRN-6/privacy68',
        demo: 'https://prn-6.github.io/PRIVACY68/index.html',
        image: p5
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
        inDevelopment: true,
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
    },
    {
        id: 'workspace68',
        title: 'workspace68',
        tagline: 'Visual drag-and-drop website builder with AI page generation & React export.',
        tags: ['React', 'Vite', 'Tailwind CSS', 'Zustand', '@dnd-kit', 'JSZip'],
        version: 'v1.0.0',
        description:
            'A modern, browser-based visual website builder. Design responsive pages with drag-and-drop components, full styling controls, AI-assisted generation from reference screenshots, and one-click production-ready React source code export.',
        github: 'https://github.com/PRN-6/workspace68',
        demo: 'https://workspace68.vercel.app/',
        image: p4
    },
    {
        id: 'sereen',
        title: 'Sereen',
        tagline: 'Professional-grade Linux application for Epson projector network control.',
        tags: ['Python', 'GTK4', 'GStreamer', 'Linux', 'Networking'],
        version: 'v1.0.0',
        description:
            'A professional-grade Linux application designed to discover and control Epson projectors over a network. Bridges the gap between proprietary Epson protocols and open-source Linux desktop environments with support for ESC/VP.net and PJLink.',
        github: 'https://github.com/PRN-6/linux-projection',
        demo: '',
        image: null
    }
];

const Projecttemp = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [copiedCmd, setCopiedCmd] = useState(null);
    const [deepDiveProject, setDeepDiveProject] = useState(null);
    const cardRef = useRef(null);
    const touchStartX = useRef(null);

    const project = projectsData[selectedProjectIndex];

    const handleSwitchProject = (newIndex) => {
        setSelectedProjectIndex(newIndex);
    };

    const handleCopy = (cmd) => {
        if (!navigator?.clipboard) return;
        navigator.clipboard.writeText(cmd);
        setCopiedCmd(cmd);
        setTimeout(() => {
            setCopiedCmd((prev) => (prev === cmd ? null : prev));
        }, 2000);
    };

    // Keyboard navigation: Left/Right arrows, 1-N numbers, and Escape to close modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && deepDiveProject) {
                setDeepDiveProject(null);
                return;
            }
            if (deepDiveProject) return;

            if (e.key === 'ArrowRight') {
                handleSwitchProject((selectedProjectIndex + 1) % projectsData.length);
            } else if (e.key === 'ArrowLeft') {
                handleSwitchProject((selectedProjectIndex - 1 + projectsData.length) % projectsData.length);
            } else {
                const num = parseInt(e.key, 10);
                if (!isNaN(num) && num >= 1 && num <= projectsData.length) {
                    handleSwitchProject(num - 1);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProjectIndex, deepDiveProject]);

    // Lock body scroll when modal is active
    useEffect(() => {
        if (deepDiveProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [deepDiveProject]);

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
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h2 className="text-3xl sm:text-4xl text-white font-pixel font-normal tracking-wide">
                            {proj.title}
                        </h2>
                        <div className="flex items-center gap-1.5 shrink-0">
                            {proj.inDevelopment && (
                                <span className="font-mono-code text-[10px] text-amber-400 border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 rounded flex items-center gap-1" title="In Active Development">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                                    in dev
                                </span>
                            )}
                            <span className="font-mono-code text-[10px] text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded">
                                {proj.version}
                            </span>
                        </div>
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
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-[#121212] flex items-center justify-center">
                                <SiGithub size={64} className="text-zinc-800" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Card: Full Description, Terminal Command, Deep Dive, GitHub & Live Links */}
            <div className="border border-zinc-900 bg-black p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[260px] md:min-h-[350px]">
                <div className="space-y-3">
                    <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                        {proj.description}
                    </p>

                    {/* Quick Terminal Action */}
                    {proj.terminalCommand && (
                        <div className="pt-1">
                            <div className="p-2.5 bg-zinc-950 border border-zinc-800/80 rounded flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2 font-mono-code text-xs text-zinc-300 overflow-x-auto hide-scrollbar">
                                    <Terminal size={13} className="text-zinc-500 shrink-0" />
                                    <span className="text-emerald-400 whitespace-nowrap select-all">{proj.terminalCommand}</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleCopy(proj.terminalCommand)}
                                    title="Copy terminal command"
                                    aria-label="Copy terminal command"
                                    className="text-zinc-500 hover:text-white p-1 rounded hover:bg-zinc-800 transition-colors shrink-0 cursor-pointer"
                                >
                                    {copiedCmd === proj.terminalCommand ? (
                                        <span className="text-[10px] font-mono-code text-emerald-400 flex items-center gap-1">
                                            <Check size={12} /> copied
                                        </span>
                                    ) : (
                                        <Copy size={13} />
                                    )}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Architecture & Deep Dive Button */}
                    {(proj.achievements || proj.challenge) && (
                        <div className="pt-1">
                            <button
                                type="button"
                                onClick={() => setDeepDiveProject(proj)}
                                className="font-mono-code text-xs text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-950 hover:bg-zinc-900 px-3 py-1.5 rounded transition-all cursor-pointer flex items-center gap-2 group w-fit"
                            >
                                <Sparkles size={12} className="text-amber-400 group-hover:scale-110 transition-transform" />
                                <span>Architecture & Deep Dive</span>
                                <ArrowUpRight size={13} className="text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                        </div>
                    )}
                </div>

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

                    {proj.demo ? (
                        <a
                            href={proj.demo}
                            target={proj.demo.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors group text-xs"
                        >
                            <span>live demo</span>
                            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    ) : proj.terminalCommand ? (
                        <span className="text-[11px] text-zinc-600 font-mono-code">// npx run</span>
                    ) : null}
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

            {/* If showing all, render all cards in sequence */}
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
                        tip: press <kbd className="px-1.5 py-0.5 border border-zinc-800 rounded bg-zinc-950 text-zinc-400">←</kbd> <kbd className="px-1.5 py-0.5 border border-zinc-800 rounded bg-zinc-950 text-zinc-400">→</kbd> or <kbd className="px-1.5 py-0.5 border border-zinc-800 rounded bg-zinc-950 text-zinc-400">1-{projectsData.length}</kbd> to switch
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

            {/* Architecture & Deep Dive Modal */}
            {deepDiveProject && (
                <div
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setDeepDiveProject(null)}
                >
                    <div
                        className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 rounded-none max-h-[88vh] overflow-y-auto hide-scrollbar flex flex-col gap-6 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-2xl sm:text-3xl text-white font-pixel">
                                        {deepDiveProject.title}
                                    </h2>
                                    <span className="font-mono-code text-[11px] text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded">
                                        {deepDiveProject.version}
                                    </span>
                                </div>
                                <p className="font-mono-code text-xs text-zinc-400 mt-1">
                                    {deepDiveProject.tagline}
                                </p>
                            </div>
                            <button
                                onClick={() => setDeepDiveProject(null)}
                                className="p-1.5 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900 rounded transition-colors cursor-pointer"
                                aria-label="Close dialog"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Challenge */}
                        {deepDiveProject.challenge && (
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 font-mono-code text-xs text-amber-400 uppercase tracking-wider">
                                    <span>🎯 The Challenge</span>
                                </div>
                                <p className="text-zinc-300 text-sm leading-relaxed font-sans pl-1 border-l-2 border-amber-500/30">
                                    {deepDiveProject.challenge}
                                </p>
                            </div>
                        )}

                        {/* Solution */}
                        {deepDiveProject.solution && (
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 font-mono-code text-xs text-emerald-400 uppercase tracking-wider">
                                    <span>💡 The Solution</span>
                                </div>
                                <p className="text-zinc-300 text-sm leading-relaxed font-sans pl-1 border-l-2 border-emerald-500/30">
                                    {deepDiveProject.solution}
                                </p>
                            </div>
                        )}

                        {/* Architecture & Technical Achievements */}
                        {deepDiveProject.achievements && (
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 font-mono-code text-xs text-cyan-400 uppercase tracking-wider">
                                    <span>⚙️ Architecture & Technical Achievements</span>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    {deepDiveProject.achievements.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="p-3.5 bg-black/60 border border-zinc-900 rounded space-y-1.5 hover:border-zinc-800 transition-colors"
                                        >
                                            <div className="font-mono-code text-xs text-white flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                                <span className="font-semibold">{item.title}</span>
                                            </div>
                                            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quick Actions Footer */}
                        <div className="border-t border-zinc-800/80 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono-code text-xs">
                            {deepDiveProject.terminalCommand && (
                                <div className="flex items-center gap-2 bg-black border border-zinc-800/80 px-3 py-2 rounded text-zinc-300 flex-1">
                                    <Terminal size={13} className="text-zinc-500 shrink-0" />
                                    <span className="text-emerald-400 text-xs truncate select-all">{deepDiveProject.terminalCommand}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleCopy(deepDiveProject.terminalCommand)}
                                        className="ml-auto text-zinc-500 hover:text-white p-1 transition-colors shrink-0 cursor-pointer"
                                        title="Copy command"
                                    >
                                        {copiedCmd === deepDiveProject.terminalCommand ? (
                                            <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                                                <Check size={11} /> copied
                                            </span>
                                        ) : (
                                            <Copy size={13} />
                                        )}
                                    </button>
                                </div>
                            )}

                            <div className="flex items-center gap-3 shrink-0">
                                {deepDiveProject.github && (
                                    <a
                                        href={deepDiveProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white rounded transition-colors"
                                    >
                                        <SiGithub size={13} />
                                        <span>GitHub</span>
                                        <ArrowUpRight size={13} />
                                    </a>
                                )}
                                {deepDiveProject.demo && (
                                    <a
                                        href={deepDiveProject.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-2 border border-zinc-800 hover:border-zinc-700 bg-white text-black font-medium rounded transition-colors"
                                    >
                                        <span>Live Demo</span>
                                        <ArrowUpRight size={13} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projecttemp;
