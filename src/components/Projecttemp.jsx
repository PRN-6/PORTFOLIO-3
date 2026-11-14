import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Terminal, Copy, Check, X, Sparkles, MousePointer2 } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';
import p4 from '../assets/p4.webp';
import p5 from '../assets/p5.webp';
import p6 from '../assets/p6.webp';
import p7 from '../assets/p7.webp';

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
        id: 'code68',
        title: 'Code68',
        tagline: 'Autonomous AI Coding Agent | Cloud Intelligence + Local Execution.',
        tags: ['Python', 'AI Agent', 'FastAPI', 'AST Parser', 'CLI', 'Sandbox'],
        version: 'v1.0.0',
        description:
            'An independent open-source terminal AI coding agent inspired by Claude Code. Offloads heavy LLM inference to remote cloud GPUs while executing tool calls, surgical unified diffs, and sandboxed commands securely on the developer\'s local machine.',
        github: 'https://github.com/PRN-6/code68',
        terminalCommand: 'pip install git+https://github.com/PRN-6/code68.git',
        demo: 'https://prn-6.github.io/code68/',
        image: p7,
        challenge:
            'Running modern 7B+ coding LLMs locally exhausts GPU memory and slows developer hardware, while fully cloud-based web assistants lack direct, secure access to local terminal tools, file systems, and Git repositories.',
        solution:
            'Engineered Code68 with a hybrid split-brain architecture: the heavy reasoning model runs remotely (via FastAPI on free remote GPUs or vLLM), while a lightweight local Python CLI securely executes tool calls, surgical unified diffs, and sandboxed terminal commands.',
        achievements: [
            {
                title: 'Real Tool-Calling Agent Loop',
                description:
                    'Autonomous multi-step problem solving, recursive loop detection, and structured tool failure recovery.'
            },
            {
                title: 'Surgical Code Editing',
                description:
                    'Uses precise unified diffs and line replacements rather than blindly rewriting entire source files.'
            },
            {
                title: 'Strict Security Sandbox',
                description:
                    '5 granular permission levels (read-only to full-auto), directory traversal guards, secret redaction, and full audit logs.'
            },
            {
                title: 'Provider Agnostic Engine',
                description:
                    'Seamlessly swap between remote Kaggle instances, vLLM, Ollama, OpenRouter, or OpenAI without changing client code.'
            }
        ]
    },
    {
        id: 'swarm66',
        title: 'swarm66',
        tagline: 'Universal Autonomous Cursor Swarm & Real-Time DOM Visual Engine.',
        tags: ['TypeScript', 'Boids Physics', 'DOM Engine', 'Zero-Dependency', 'npm'],
        version: 'v1.0.4',
        description:
            'A universal plug-and-play visual engine that reverse-engineers any webpage\'s DOM on the fly. Autonomous AI/Figma-style cursors swarm in using Reynolds Boids flocking physics to construct the webpage live before your eyes, then converge 360° into the user\'s pointer.',
        github: 'https://github.com/PRN-6/swarm66',
        terminalCommand: 'npm install @leozodiac/swarm66',
        demo: 'https://prn-6.github.io/swarm66/',
        image: null,
        challenge:
            'Standard webpage loading animations and transitions are static, pre-rendered, or require tedious element-by-element CSS rigging. Building an emergent, real-time live construction effect that works out of the box on any website with zero layout shift didn\'t exist.',
        solution:
            'Engineered @leozodiac/swarm66, a zero-dependency TypeScript library combining an on-the-fly DOM indexer with Reynolds Boids flocking physics. Dispatches 18–28 autonomous cursor agents organized into squads that draw Figma selection boxes, alignment wireframes, and typewriter reveals before merging seamlessly into the user\'s cursor.',
        achievements: [
            {
                title: 'Autonomous DOM Scanner & Reverse-Engineering',
                description:
                    'Dynamically indexes viewport elements, hierarchy, and bounding boxes without layout shift or manual selectors.'
            },
            {
                title: 'Multi-Agent Boids Flocking Simulation',
                description:
                    'Full separation, alignment, and cohesion physics with dynamic speed limits, wall repulsion, and cursor following.'
            },
            {
                title: 'Figma-Style Construction Tooling',
                description:
                    'Draws Figma blue selection boxes (#0d99ff) with live dimension badges (380 × 48), alignment wireframes, and typewriter reveals.'
            },
            {
                title: '360° Orbit Convergence & Pointer Merger',
                description:
                    'All cursors accelerate toward the user\'s pointer, execute a synchronized 360° circular orbit, and collapse with neon ripples.'
            }
        ]
    },
    {
        id: 'programmer66',
        title: 'programmer66',
        tagline: 'Autonomous 3D Drone Simulator, Python Automation Runtime & Real-Time Tournament Platform.',
        tags: ['Three.js', 'React 19', 'Monaco Editor', 'Python AST', 'Supabase Realtime', 'Zustand'],
        version: 'v1.0.0',
        description:
            'An autonomous 3D agricultural drone simulator and live multiplayer coding tournament platform. Write Python scripts in a floating Monaco code editor to command an aerial quadcopter across procedural farmlands, with real-time room code pairing, automated test grading, and live podiums powered by Supabase.',
        github: 'https://github.com/PRN-6/programmer66',
        terminalCommand: 'git clone https://github.com/PRN-6/programmer66.git',
        demo: 'https://programmer66.vercel.app/',
        image: null,
        challenge:
            'Teaching real programming concepts often suffers from a disconnect between abstract code and visual feedback, while competitive hackathon platforms rarely provide interactive, physics-driven 3D environments with live multiplayer evaluation.',
        solution:
            'Engineered programmer66, marrying React Three Fiber 3D drone kinematics with an in-browser Python AST lexer/interpreter and a real-time WebSocket tournament engine. Competitors write automation scripts in a multi-tab Monaco editor that physically pilot the drone while being graded live.',
        achievements: [
            {
                title: 'Autonomous 3D Drone Kinematics',
                description:
                    'Interactive Three.js terrain with 24-hour day/night cycles, volumetric floodlights, dynamic weather, and flight physics (pitch tilt, roll banking, particle sprays).'
            },
            {
                title: 'Floating In-Browser Python AST Runtime',
                description:
                    'Custom Lexer, AST Parser, and step-by-step asynchronous interpreter with infinite loop protection inside a floating, multi-tab Monaco IDE.'
            },
            {
                title: 'Real-Time Multiplayer Tournament Engine',
                description:
                    'Instant 4-digit room code pairing, automated test grading, dynamic field topographies, live code inspection, and instant podium scoreboards powered by Supabase Realtime.'
            },
            {
                title: '60 FPS High-Performance Architecture',
                description:
                    'Optimized for low-end hardware with dynamic DPR, scene isolation, throttled state subscriptions via Zustand, and React 19 architecture.'
            }
        ]
    },
    {
        id: 'portfolio66',
        title: 'PORTFOLIO66',
        tagline: 'Universal Creative Portfolio Template with Autonomous Swarm & Local Visual CMS Studio.',
        tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', '@leozodiac/swarm66', 'Visual CMS'],
        version: 'v1.0.0',
        description:
            'A modern creative portfolio template designed with zero infinite vertical scroll. Features autonomous AI cursor swarm construction powered by @leozodiac/swarm66, single-screen view routing, and an embedded Visual Studio CMS (npm run cms) with drag-and-drop media uploads.',
        github: 'https://github.com/PRN-6/portfolio66',
        terminalCommand: 'git clone https://github.com/PRN-6/portfolio66.git',
        demo: 'https://portfolio66-fawn.vercel.app/',
        image: null,
        challenge:
            'Setting up developer portfolios usually requires choosing between static un-editable templates or heavy third-party SaaS CMS platforms that lock content behind paid cloud tiers or complicated configurations.',
        solution:
            'Engineered PORTFOLIO66 with a zero-scroll single-screen architecture and a local Visual Studio CMS running on port 3333. Content and photos are edited visually with live preview hot-reloading into local TypeScript state and automatic timestamped backups.',
        achievements: [
            {
                title: 'Autonomous Swarm Construction',
                description:
                    'Integrated @leozodiac/swarm66 for live Figma-style AI cursor webpage assembly with a dedicated "REPLAY SWARM" controller.'
            },
            {
                title: 'Zero Infinite Vertical Scroll',
                description:
                    '8 screen-fitting views (Hero, Studio Overview, Identity, Color & Type System, Projects, Articles, FAQ, Contact) with fluid keyboard navigation.'
            },
            {
                title: 'Local Visual Studio CMS',
                description:
                    'Zero-code graphical editor (npm run cms) running on port 3333 with drag-and-drop file uploaders and automatic .backups/ snapshotting.'
            },
            {
                title: '1-Click Vercel Architecture',
                description:
                    'Pre-configured TypeScript build with zero-config Vite pipeline and instant global CDN edge deployment.'
            }
        ]
    },
    {
        id: 'omarchy-asanagi-theme',
        title: 'Asanagi Umi Theme',
        tagline: 'Dark Minimalist Anime Theme for Omarchy OS, Hyprland & Arch Linux.',
        tags: ['Linux', 'Hyprland', 'Waybar', 'Arch Linux', 'Omarchy OS', 'Kitty'],
        version: 'v1.0.0',
        description:
            'A dark minimalist anime theme custom-tailored for Omarchy OS, standalone Hyprland, and Arch Linux desktop environments. Features handcrafted palettes extracted from Umi Asanagi artwork, glassmorphism Waybar styling, custom Fastfetch cards, Btop themes, and multi-terminal configurations.',
        github: 'https://github.com/PRN-6/omarchy-asanagi-theme',
        terminalCommand: 'omarchy-theme-install https://github.com/PRN-6/omarchy-asanagi-theme',
        demo: '',
        image: null,
        challenge:
            'Linux desktop ricing across Wayland compositors often requires maintaining fragmented configurations across dozens of disparate dotfiles (Hyprland, Waybar, Rofi, Alacritty, Kitty, Btop, Mako) with clashing color coordinates and tedious manual reload scripts.',
        solution:
            'Architected a unified, cohesive aesthetic theme for Omarchy OS. Centralizes the palette in colors.toml with automated installation scripts and live HTML desktop previewers, delivering synchronized deep obsidian plum backgrounds, orchid purple accents, and ruby crimson highlights across all system apps.',
        achievements: [
            {
                title: 'Centralized Omarchy System Palette',
                description:
                    'Defined unified color mapping (#13091f Obsidian Plum, #a855f7 Orchid Purple, #f43f6e Ruby Crimson) across colors.toml for instant multi-app theme switching.'
            },
            {
                title: 'Full Wayland & Hyprland Ecosystem',
                description:
                    'Tailored configurations for Hyprland window decorations/blur, glassmorphic Waybar top-bar modules, Rofi/Walker launcher, and Mako notifications.'
            },
            {
                title: 'Multi-Terminal Shell Suite',
                description:
                    'Hand-tuned color schemes and font metrics crafted for Kitty, Ghostty, Alacritty, Foot, Btop system monitor, and Starship shell prompt.'
            },
            {
                title: 'Single-Command Distribution & Web Preview',
                description:
                    'Instant 1-click deployment via omarchy-theme-install and an interactive browser-based desktop simulation via preview.html.'
            }
        ]
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
                        ) : proj.id === 'swarm66' ? (
                            <div className="w-full h-full bg-[#08090d] border border-zinc-800/80 p-4 rounded flex flex-col justify-between font-mono-code relative overflow-hidden select-none">
                                <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:14px_14px] opacity-40 pointer-events-none" />

                                <div className="flex items-center justify-between border-b border-zinc-900 pb-2 z-10 text-[10px]">
                                    <span className="text-zinc-500 font-mono-code">// DOM REVERSE-ENGINEER</span>
                                    <span className="text-cyan-400 font-mono-code">18 SQUAD AGENTS</span>
                                </div>

                                <div className="my-auto relative h-28 flex items-center justify-center z-10">
                                    <div className="border border-[#0d99ff] bg-[#0d99ff]/10 px-5 py-2.5 rounded relative">
                                        <span className="absolute -top-3 right-1 bg-[#0d99ff] text-black text-[9px] font-bold px-1.5 py-0.2 rounded font-mono-code">
                                            380 × 48
                                        </span>
                                        <span className="text-xs text-white font-mono-code font-medium">&lt;SwarmCanvas /&gt;</span>
                                    </div>

                                    <div className="absolute top-1 left-3 flex items-center gap-1 animate-pulse">
                                        <MousePointer2 size={13} className="text-[#FF5722] fill-[#FF5722]" />
                                        <span className="bg-[#FF5722] text-white text-[8px] px-1 py-0.5 rounded font-mono-code">
                                            Figma AI
                                        </span>
                                    </div>

                                    <div className="absolute bottom-1 right-4 flex items-center gap-1">
                                        <MousePointer2 size={13} className="text-[#00BCD4] fill-[#00BCD4]" />
                                        <span className="bg-[#00BCD4] text-black text-[8px] font-bold px-1 py-0.5 rounded font-mono-code">
                                            Agent-α
                                        </span>
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[10px] text-zinc-500 z-10 font-mono-code">
                                    <span>Boids Physics</span>
                                    <span className="text-emerald-400 font-semibold">360° ORBIT MERGER</span>
                                </div>
                            </div>
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
