import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import {
    Terminal,
    Copy,
    Check,
    ArrowUpRight,
    Sparkles,
    ShieldCheck,
    Cpu,
    X,
    ExternalLink
} from 'lucide-react';
import { SiGithub, SiNodedotjs, SiPython } from 'react-icons/si';
import p5 from '../assets/p5.webp';
import p6 from '../assets/p6.webp';
import p7 from '../assets/p7.webp';

const products = [
    {
        id: 'web66',
        number: '01',
        title: 'Web66',
        category: 'Developer Tool & AST Visualizer',
        tagline: 'Architectural Intelligence & Cosmic Visualizer.',
        version: 'v1.0.0',
        status: 'Stable / CLI',
        statusColor: 'emerald',
        platform: 'Cross-Platform (Node.js >= 18)',
        platformIcon: SiNodedotjs,
        quickCommand: 'npx @leozodiac/web66',
        github: 'https://github.com/PRN-6/web66',
        demo: 'https://prn-6.github.io/web66/',
        image: p6,
        summary:
            'A developer tool that turns raw codebases into living, explorable systems. By combining a lightweight AST parsing engine with a custom celestial rendering system, developers can explore file hierarchies and symbol interactions organically.',
        challenge:
            'Understanding large-scale software architectures usually involves sifting through nested directories and tracking mental dependency trees. Traditional static architecture diagrams are either outdated, rigid, or heavy to generate.',
        solution:
            'I engineered Web66, a developer tool that turns raw codebases into living, explorable systems. By combining a lightweight AST parsing engine with a custom celestial rendering system, developers can explore file hierarchies and symbol interactions organically.',
        specs: [
            { label: 'Runtime', value: 'Pure Node.js (0 parse dependencies)' },
            { label: 'Protocol', value: 'Native RFC 6455 WebSockets' },
            { label: 'Renderer', value: '2D/3D Canvas with Glowing Shaders' },
            { label: 'Layout Algorithm', value: 'Radial Gravity & Concentric Orbits' }
        ],
        features: [
            {
                title: 'Zero-Dependency Core Parser',
                desc: 'Traverses project trees, identifies core entry points, and extracts functions and interfaces without heavy third-party runtimes.'
            },
            {
                title: 'Radial Orbit & Force Layout',
                desc: 'Stations core entry modules at (0, 0, 0) and projects helper functions in concentric orbital rings with collision resolution.'
            },
            {
                title: 'Native Real-Time Server',
                desc: 'Zero-dependency local HTTP server and native WebSocket layer for recursive file-system monitoring and live delta updates.'
            },
            {
                title: 'Fluid UI/UX & Plasma Shaders',
                desc: 'Custom celestial physics with glowing plasma shaders, particle flows along dependency filaments, and auto-centering kinematics.'
            }
        ]
    },
    {
        id: 'privacy68',
        number: '02',
        title: 'privacy68',
        category: 'Edge-Native AI Desktop Assistant',
        tagline: 'Privacy-preserving edge-native voice automation & AI desktop assistant.',
        version: 'v1.1.0',
        status: 'Active Dev',
        statusColor: 'amber',
        platform: 'Desktop / Local Edge (Linux, macOS, Win)',
        platformIcon: SiPython,
        quickCommand: 'git clone https://github.com/PRN-6/privacy68.git',
        github: 'https://github.com/PRN-6/privacy68',
        demo: 'https://prn-6.github.io/PRIVACY68/index.html',
        image: p5,
        summary:
            'An ultra-low latency, 100% private, on-device AI voice assistant and desktop automation framework engineered for local semantic routing and quantized speech recognition without cloud telemetry.',
        challenge:
            'Modern voice assistants and desktop Copilots continuously transmit ambient audio, keystrokes, and workspace telemetry to proprietary cloud servers, introducing latency, privacy hazards, and vendor lock-in.',
        solution:
            'Built an offline-first voice and automation pipeline running strictly on local silicon. Implements quantized speech-to-text, intent classification, and an extensible OS automation bus that operates completely disconnected from the internet.',
        specs: [
            { label: 'Privacy Model', value: '100% On-Device / Zero Cloud Telemetry' },
            { label: 'Latency', value: '< 120ms local intent dispatch' },
            { label: 'Audio Engine', value: 'Quantized neural ASR models' },
            { label: 'Automation', value: 'Native OS-level input & window hooks' }
        ],
        features: [
            {
                title: 'Zero Cloud Telemetry',
                desc: 'Every voice packet, phonetic token, and system execution is processed locally on-device with zero egress network requests.'
            },
            {
                title: 'Quantized Neural ASR',
                desc: 'Runs highly efficient, quantized acoustic models optimized for consumer CPUs and GPUs with minimal RAM overhead.'
            },
            {
                title: 'Semantic Intent Router',
                desc: 'Interprets conversational natural language into deterministic desktop commands, application launches, and script automations.'
            },
            {
                title: 'Extensible Command Bus',
                desc: 'Allows developers to write custom micro-actions in Python to automate daily workflows, media controls, and terminal tasks.'
            }
        ]
    },
    {
        id: 'code68',
        number: '03',
        title: 'Code68',
        category: 'Autonomous AI Coding Agent',
        tagline: 'Autonomous AI Coding Agent | Cloud Intelligence + Local Execution.',
        version: 'v1.0.0',
        status: 'Stable / CLI',
        statusColor: 'emerald',
        platform: 'Cross-Platform CLI (Python 3.11+ / Terminal)',
        platformIcon: SiPython,
        quickCommand: 'pip install git+https://github.com/PRN-6/code68.git',
        github: 'https://github.com/PRN-6/code68',
        demo: 'https://prn-6.github.io/code68/',
        image: p7,
        summary:
            'An independent open-source terminal AI coding agent inspired by Claude Code. Offloads heavy LLM inference to remote cloud GPUs while executing tool calls, surgical diffs, and sandboxed commands securely on the developer\'s local machine.',
        challenge:
            'Running modern 7B+ coding LLMs locally exhausts GPU memory and slows developer hardware, while fully cloud-based web assistants lack direct, secure access to local terminal tools, file systems, and Git repositories.',
        solution:
            'Engineered Code68 with a hybrid split-brain architecture: the heavy reasoning model runs remotely (via FastAPI on free remote GPUs or vLLM), while a lightweight local Python CLI securely executes tool calls, surgical unified diffs, and sandboxed terminal commands.',
        specs: [
            { label: 'Architecture', value: 'Cloud Intelligence + Local Tool Execution' },
            { label: 'Security Model', value: '5-Tier Permission Gate & Traversal Guard' },
            { label: 'Code Editor', value: 'Surgical unified diff patcher (0 rewrites)' },
            { label: 'Model Support', value: 'Qwen2.5-Coder, OpenAI, Ollama, OpenRouter' }
        ],
        features: [
            {
                title: 'Real Tool-Calling Agent Loop',
                desc: 'Autonomous multi-step problem solving, recursive loop detection, and structured tool failure recovery.'
            },
            {
                title: 'Surgical Code Editing',
                desc: 'Uses precise unified diffs and line replacements rather than blindly rewriting entire source files.'
            },
            {
                title: 'Strict Security & Sandboxing',
                desc: '5 granular permission levels (read-only to full-auto), directory traversal guards, secret redaction, and full audit logs.'
            },
            {
                title: 'Provider Agnostic Engine',
                desc: 'Seamlessly swap between remote Kaggle instances, vLLM, Ollama, OpenRouter, or OpenAI without changing client code.'
            }
        ]
    }
];

const Products = () => {
    const [copiedCmd, setCopiedCmd] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');

    const handleCopy = (cmd) => {
        if (!navigator?.clipboard) return;
        navigator.clipboard.writeText(cmd);
        setCopiedCmd(cmd);
        setTimeout(() => {
            setCopiedCmd((prev) => (prev === cmd ? null : prev));
        }, 2000);
    };

    // Close modal on Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && selectedProduct) {
                setSelectedProduct(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProduct]);

    // Lock body scroll when modal is active
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedProduct]);

    const filteredProducts =
        activeFilter === 'all'
            ? products
            : products.filter((p) => p.id === activeFilter);

    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col justify-between pt-3 pb-3 px-4 sm:pt-4 sm:pb-4 sm:px-10 md:pt-4 md:pb-5 md:px-12 overflow-x-hidden hide-scrollbar">
            {/* Top Navigation */}
            <Navbar />

            {/* Main Content Area */}
            <main className="w-full max-w-6xl mx-auto flex-1 flex flex-col py-6 sm:py-10">
                {/* Header Title Section */}
                <div className="space-y-3 mb-8 sm:mb-12">
                    <div className="flex items-center gap-2 font-mono-code text-xs text-zinc-500">
                        <Terminal size={14} className="text-zinc-400" />
                        <span>// PRODUCTS & APPLICATION SYSTEMS</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl sm:text-5xl font-pixel text-white tracking-wide">
                                Software Suite
                            </h1>
                            <p className="text-zinc-400 text-xs sm:text-sm font-mono-code mt-2 max-w-2xl leading-relaxed">
                                Production software, terminal utilities, and native system applications engineered for local-first execution, strict privacy, and raw developer throughput.
                            </p>
                        </div>

                        {/* Top Metric Pills */}
                        <div className="flex flex-wrap items-center gap-2 font-mono-code text-[11px] text-zinc-400 shrink-0">
                            <span className="border border-zinc-800 bg-zinc-950 px-2.5 py-1 rounded flex items-center gap-1.5">
                                <Cpu size={12} className="text-emerald-400" />
                                3 Native Softwares
                            </span>
                            <span className="border border-zinc-800 bg-zinc-950 px-2.5 py-1 rounded flex items-center gap-1.5">
                                <ShieldCheck size={12} className="text-cyan-400" />
                                0 Cloud Telemetry
                            </span>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="pt-4 flex items-center gap-2 font-mono-code text-xs overflow-x-auto hide-scrollbar">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`px-3 py-1.5 rounded transition-colors cursor-pointer whitespace-nowrap ${activeFilter === 'all'
                                ? 'bg-zinc-800 text-white font-medium border border-zinc-700'
                                : 'bg-black text-zinc-500 hover:text-zinc-300 border border-zinc-900'
                                }`}
                        >
                            All Products (3)
                        </button>
                        {products.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => setActiveFilter(p.id)}
                                className={`px-3 py-1.5 rounded transition-colors cursor-pointer whitespace-nowrap ${activeFilter === p.id
                                    ? 'bg-zinc-800 text-white font-medium border border-zinc-700'
                                    : 'bg-black text-zinc-500 hover:text-zinc-300 border border-zinc-900'
                                    }`}
                            >
                                {p.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid / Cards */}
                <div className="grid grid-cols-1 gap-8 w-full">
                    {filteredProducts.map((p) => {
                        const PlatformIcon = p.platformIcon;
                        return (
                            <div
                                key={p.id}
                                className="border border-zinc-900 bg-zinc-950/70 hover:border-zinc-800 transition-all p-5 sm:p-7 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch relative group shadow-xl"
                            >
                                {/* Left / Main Column: Details, Capabilities, and Specs */}
                                <div className="flex-1 flex flex-col justify-between space-y-6">
                                    <div className="space-y-4">
                                        {/* Status & Category Bar */}
                                        <div className="flex items-center justify-between gap-3 flex-wrap">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono-code text-xs text-zinc-500 font-semibold">
                                                    {p.number}
                                                </span>
                                                <span className="text-zinc-700">•</span>
                                                <span className="font-mono-code text-[11px] text-zinc-400 uppercase tracking-wider">
                                                    {p.category}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <span className="font-mono-code text-[10px] text-zinc-400 border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 rounded flex items-center gap-1.5">
                                                    <span
                                                        className={`w-1.5 h-1.5 rounded-full ${p.statusColor === 'emerald'
                                                            ? 'bg-emerald-400'
                                                            : p.statusColor === 'amber'
                                                                ? 'bg-amber-400 animate-pulse'
                                                                : 'bg-cyan-400'
                                                            }`}
                                                    ></span>
                                                    {p.status}
                                                </span>
                                                <span className="font-mono-code text-[10px] text-zinc-500 border border-zinc-800/80 px-2 py-0.5 rounded">
                                                    {p.version}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title & Tagline */}
                                        <div>
                                            <h2 className="text-3xl sm:text-4xl text-white font-pixel">
                                                {p.title}
                                            </h2>
                                            <p className="text-zinc-400 text-xs sm:text-sm font-mono-code mt-1">
                                                {p.tagline}
                                            </p>
                                        </div>

                                        {/* Summary */}
                                        <p className="text-zinc-300 text-sm font-sans leading-relaxed">
                                            {p.summary}
                                        </p>

                                        {/* Platform badge */}
                                        <div className="flex items-center gap-2 font-mono-code text-xs text-zinc-400 bg-black/60 border border-zinc-900 px-3 py-1.5 rounded w-fit">
                                            <PlatformIcon size={14} className="text-zinc-400" />
                                            <span>{p.platform}</span>
                                        </div>

                                        {/* Spec Grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pt-2">
                                            {p.specs.map((spec, sIdx) => (
                                                <div
                                                    key={sIdx}
                                                    className="bg-black/40 border border-zinc-900/90 p-2.5 rounded font-mono-code text-[11px]"
                                                >
                                                    <span className="text-zinc-500 block text-[10px] uppercase">
                                                        {spec.label}
                                                    </span>
                                                    <span className="text-zinc-300 font-medium">
                                                        {spec.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Command & Action Buttons */}
                                    <div className="space-y-3 pt-2">
                                        {/* Quick Run / Clone Box */}
                                        <div className="p-2.5 bg-black border border-zinc-900 rounded flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2 font-mono-code text-xs text-zinc-300 overflow-x-auto hide-scrollbar">
                                                <Terminal size={13} className="text-zinc-500 shrink-0" />
                                                <span className="text-emerald-400 whitespace-nowrap select-all font-mono-code">
                                                    {p.quickCommand}
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => handleCopy(p.quickCommand)}
                                                title="Copy command"
                                                aria-label="Copy command"
                                                className="text-zinc-500 hover:text-white p-1 rounded hover:bg-zinc-800 transition-colors shrink-0 cursor-pointer"
                                            >
                                                {copiedCmd === p.quickCommand ? (
                                                    <span className="text-[10px] font-mono-code text-emerald-400 flex items-center gap-1">
                                                        <Check size={12} /> copied
                                                    </span>
                                                ) : (
                                                    <Copy size={13} />
                                                )}
                                            </button>
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex flex-wrap items-center justify-between gap-3 font-mono-code text-xs pt-1">
                                            <div className="flex items-center gap-3">
                                                <a
                                                    href={p.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white rounded transition-colors group"
                                                >
                                                    <SiGithub size={13} className="text-zinc-400 group-hover:text-white" />
                                                    <span>Source Code</span>
                                                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                </a>

                                                {p.demo && (
                                                    <a
                                                        href={p.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white rounded transition-colors group"
                                                    >
                                                        <ExternalLink size={13} className="text-zinc-400 group-hover:text-white" />
                                                        <span>Docs / Site</span>
                                                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                    </a>
                                                )}
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => setSelectedProduct(p)}
                                                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                                            >
                                                <Sparkles size={12} className="text-amber-400" />
                                                <span>Architecture Specs</span>
                                                <ArrowUpRight size={13} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Preview Box / Visual Hardware Canvas */}
                                <div className="lg:w-[360px] xl:w-[420px] shrink-0 flex flex-col justify-center">
                                    <div className="w-full aspect-[4/3] bg-black border border-zinc-800/80 rounded relative overflow-hidden flex items-center justify-center p-3 group/preview shadow-2xl">
                                        {p.image ? (
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded transition-transform duration-500 group-hover/preview:scale-[1.03]"
                                            />
                                        ) : (
                                            /* Live Terminal agent aesthetic for Code68 */
                                            <div className="w-full h-full bg-zinc-950/90 border border-zinc-900 p-4 rounded flex flex-col justify-between font-mono-code text-xs">
                                                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                                                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                                                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                                                    </div>
                                                    <span className="text-[10px] text-zinc-500">code68 --agent</span>
                                                </div>

                                                <div className="space-y-1.5 text-[11px] text-zinc-400 my-auto">
                                                    <p className="text-zinc-500">// Autonomous Agent Loop</p>
                                                    <p className="text-cyan-400">&gt; Remote GPU: Qwen2.5-Coder-7B (4-bit)</p>
                                                    <p className="text-emerald-400">&gt; Tool: edit_file (surgical diff applied)</p>
                                                    <p className="text-zinc-300">&gt; Sandbox: Traversal guard active [PASS]</p>
                                                    <p className="text-amber-400/90">&gt; Tests: 32 passed, 0 failed [100%]</p>
                                                    <p className="text-zinc-500">&gt; Audit log: .code68/audit.log</p>
                                                </div>

                                                <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[10px] text-zinc-500">
                                                    <span>Security: Edit-Approved</span>
                                                    <span className="text-emerald-400 font-semibold">AGENT READY</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>

            {/* In-Depth Architecture Specs Modal */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setSelectedProduct(null)}
                >
                    <div
                        className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 rounded-none max-h-[88vh] overflow-y-auto hide-scrollbar flex flex-col gap-6 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-2xl sm:text-3xl text-white font-pixel">
                                        {selectedProduct.title}
                                    </h2>
                                    <span className="font-mono-code text-[11px] text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded">
                                        {selectedProduct.version}
                                    </span>
                                </div>
                                <p className="font-mono-code text-xs text-zinc-400 mt-1">
                                    {selectedProduct.category}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="p-1.5 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900 rounded transition-colors cursor-pointer"
                                aria-label="Close dialog"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Challenge */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 font-mono-code text-xs text-amber-400 uppercase tracking-wider">
                                <span>🎯 The Challenge</span>
                            </div>
                            <p className="text-zinc-300 text-sm leading-relaxed font-sans pl-1 border-l-2 border-amber-500/30">
                                {selectedProduct.challenge}
                            </p>
                        </div>

                        {/* Solution */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 font-mono-code text-xs text-emerald-400 uppercase tracking-wider">
                                <span>💡 The Solution</span>
                            </div>
                            <p className="text-zinc-300 text-sm leading-relaxed font-sans pl-1 border-l-2 border-emerald-500/30">
                                {selectedProduct.solution}
                            </p>
                        </div>

                        {/* Key Architectural Highlights */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 font-mono-code text-xs text-cyan-400 uppercase tracking-wider">
                                <span>⚙️ Architectural Pillars</span>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                {selectedProduct.features.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3.5 bg-black/60 border border-zinc-900 rounded space-y-1.5 hover:border-zinc-800 transition-colors"
                                    >
                                        <div className="font-mono-code text-xs text-white flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                            <span className="font-semibold">{item.title}</span>
                                        </div>
                                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer in modal */}
                        <div className="border-t border-zinc-800/80 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono-code text-xs">
                            <div className="flex items-center gap-2 bg-black border border-zinc-800/80 px-3 py-2 rounded text-zinc-300 flex-1">
                                <Terminal size={13} className="text-zinc-500 shrink-0" />
                                <span className="text-emerald-400 text-xs truncate select-all">{selectedProduct.quickCommand}</span>
                                <button
                                    type="button"
                                    onClick={() => handleCopy(selectedProduct.quickCommand)}
                                    className="ml-auto text-zinc-500 hover:text-white p-1 transition-colors shrink-0 cursor-pointer"
                                    title="Copy command"
                                >
                                    {copiedCmd === selectedProduct.quickCommand ? (
                                        <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                                            <Check size={11} /> copied
                                        </span>
                                    ) : (
                                        <Copy size={13} />
                                    )}
                                </button>
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href={selectedProduct.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white rounded transition-colors"
                                >
                                    <SiGithub size={13} />
                                    <span>Repository</span>
                                    <ArrowUpRight size={13} />
                                </a>

                                {selectedProduct.demo && (
                                    <a
                                        href={selectedProduct.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-white text-black font-medium rounded transition-colors"
                                    >
                                        <ExternalLink size={13} />
                                        <span>Docs</span>
                                        <ArrowUpRight size={13} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Footer */}
            <footer className="w-full flex justify-between items-center text-xs font-mono-code text-zinc-500 pt-6">
                <span>// products</span>
                <div className="flex items-center gap-2">
                    <span className="text-zinc-700">© {new Date().getFullYear()}</span>
                    <span className="text-zinc-800">•</span>
                    <span className="text-zinc-600">portfolio v2</span>
                </div>
            </footer>
        </div>
    );
};

export default Products;
