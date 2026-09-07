import Navbar from '../components/Navbar';
import mainprofilepic from '../assets/mainprofilepic.jpg';
import { FaNode, FaReact, FaJava } from 'react-icons/fa';
import {
    SiCss3,
    SiExpress,
    SiFastapi,
    SiHtml5,
    SiJavascript,
    SiTypescript,
    SiMongodb,
    SiPostman,
    SiPython,
    SiRust,
    SiTailwindcss,
    SiGithub,
    SiLinkedin,
    SiX,
    SiLeetcode
} from 'react-icons/si';
import { ArrowUpRight, Code, Terminal, FileText, Download } from 'lucide-react';

const techStack = [
    { name: 'Python', icon: SiPython },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Java', icon: FaJava },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNode },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Rust', icon: SiRust },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Postman', icon: SiPostman },
    { name: 'GitHub', icon: SiGithub }
];

const About = () => {
    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col justify-between pt-3 pb-3 px-4 sm:pt-4 sm:pb-4 sm:px-10 md:pt-4 md:pb-5 md:px-12 overflow-x-hidden select-none">
            {/* Top Navigation */}
            <Navbar />

            {/* Main Content Area */}
            <main className="w-full max-w-5xl mx-auto my-auto py-6 sm:py-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
                    {/* Left Column: Square Photo & Quick Profile Card */}
                    <div className="md:col-span-5 border border-zinc-900 bg-black p-6 sm:p-8 flex flex-col justify-between space-y-6">
                        <div className="space-y-6">
                            {/* Square Profile Image with subtle framing */}
                            <div className="relative w-full aspect-square max-w-[280px] mx-auto overflow-hidden border border-zinc-800 bg-[#161616] p-2">
                                <img
                                    src={mainprofilepic}
                                    alt="Prinson Royal Nazareth"
                                    className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Name & Identity */}
                            <div className="text-center sm:text-left space-y-1">
                                <h1 className="font-pixel text-2xl sm:text-3xl text-white tracking-wide">
                                    prinson
                                </h1>
                                <p className="font-mono-code text-xs text-zinc-400">
                                    # Prinson Royal Nazareth
                                </p>
                                <p className="font-mono-code text-xs text-zinc-500 pt-1">
                                    Developer • Builder
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-y-2 font-mono-code text-xs">
                            <a
                                href="https://github.com/PRN-6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                            >
                                <SiGithub size={12} className="text-zinc-500 group-hover:text-white transition-colors" />
                                <span>github</span>
                                <ArrowUpRight size={13} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/prinson-nazareth/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                            >
                                <SiLinkedin size={11} className="text-zinc-500 group-hover:text-white transition-colors" />
                                <span>linkedin</span>
                                <ArrowUpRight size={13} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                            <a
                                href="mailto:prinsonroyal1@gmail.com"
                                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                            >
                                <span>email</span>
                                <ArrowUpRight size={13} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                            <a
                                href="https://leetcode.com/u/YFOPWWiMMB/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                            >
                                <SiLeetcode size={12} className="text-zinc-500 group-hover:text-[#FFA116] transition-colors" />
                                <span>leetcode</span>
                                <ArrowUpRight size={13} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                            <a
                                href="https://x.com/r_prinson66328"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                            >
                                <SiX size={11} className="text-zinc-500 group-hover:text-white transition-colors" />
                                <span>x</span>
                                <ArrowUpRight size={13} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Bio & Tech Stack */}
                    <div className="md:col-span-7 flex flex-col gap-4 sm:gap-6">
                        {/* Bio Card */}
                        <div className="border border-zinc-900 bg-black p-6 sm:p-8 flex flex-col justify-start space-y-4">
                            <div className="flex items-center gap-2 text-zinc-500 font-mono-code text-xs">
                                <Terminal size={14} />
                                <span>// whoami</span>
                            </div>

                            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                                I'm a developer with a deep passion for building clean, performant, and user-focused digital experiences.
                            </p>
                            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                                I love clean code, elegant typography, modern developer tooling, and self-hosted software where you own your data. Always learning and exploring new technologies.
                            </p>

                            {/* Actions: Download Resume & Buy Me A Chai */}
                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                <a
                                    href="/resume.pdf"
                                    download="Prinson_Nazareth_Resume.pdf"
                                    className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-700 bg-zinc-900 hover:border-zinc-500 hover:bg-zinc-800 text-white font-mono-code text-xs transition-all duration-200 group cursor-pointer"
                                >
                                    <FileText size={13} className="text-zinc-400 group-hover:text-white transition-colors" />
                                    <span>resume.pdf</span>
                                    <Download size={13} className="text-zinc-400 group-hover:text-white group-hover:translate-y-0.5 transition-all" />
                                </a>

                                <a
                                    href="https://buymeachai.ezee.li/prinson"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 bg-[#121212] hover:border-zinc-700 hover:bg-zinc-900 text-zinc-400 hover:text-white font-mono-code text-xs transition-all duration-200"
                                >
                                    <span>☕ buy me a chai</span>
                                    <ArrowUpRight size={13} />
                                </a>
                            </div>
                        </div>

                        {/* Tech Stack Card */}
                        <div className="border border-zinc-900 bg-black p-6 sm:p-8 flex flex-col justify-start space-y-4">
                            <div className="flex items-center gap-2 text-zinc-500 font-mono-code text-xs">
                                <Code size={14} />
                                <span>// stack & tools</span>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                                {techStack.map((tech) => {
                                    const IconComponent = tech.icon;
                                    return (
                                        <div
                                            key={tech.name}
                                            className="flex items-center gap-2.5 px-3 py-2 border border-zinc-900 bg-[#0d0d0d] hover:border-zinc-700 hover:bg-zinc-900/60 text-zinc-300 hover:text-white text-xs font-mono-code transition-colors"
                                        >
                                            <IconComponent className="text-zinc-400 text-sm flex-shrink-0" />
                                            <span className="truncate">{tech.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Footer spanning both corners */}
            <footer className="w-full flex justify-between items-center text-xs font-mono-code text-zinc-500 pt-6">
                <span>// about me</span>
                <span className="text-zinc-600">portfolio v2</span>
            </footer>
        </div>
    );
};

export default About;