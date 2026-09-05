import React from 'react';
import Navbar from '../components/Navbar';
import mainprofilepic from '../assets/mainprofilepic.jpg';
import { FaGithub, FaNode, FaReact } from 'react-icons/fa';
import {
    SiCss3,
    SiExpress,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiPostman,
    SiRust,
    SiTailwindcss
} from 'react-icons/si';
import { ArrowUpRight, Code, Terminal } from 'lucide-react';

const techStack = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNode },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Rust', icon: SiRust },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Postman', icon: SiPostman },
    { name: 'GitHub', icon: FaGithub }
];

const About = () => {
    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col justify-between pt-3 pb-3 px-6 sm:pt-4 sm:pb-4 sm:px-10 md:pt-4 md:pb-5 md:px-12 overflow-x-hidden select-none">
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
                                className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                            >
                                <span>github</span>
                                <ArrowUpRight size={13} />
                            </a>
                            <a
                                href="mailto:prinsonroyal1@gmail.com"
                                className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                            >
                                <span>email</span>
                                <ArrowUpRight size={13} />
                            </a>
                            <a
                                href="https://x.com/r_prinson66328"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                            >
                                <span>twitter</span>
                                <ArrowUpRight size={13} />
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

                            {/* Buy Me A Chai button */}
                            <div className="pt-2">
                                <a
                                    href="https://buymeachai.ezee.li/prinson"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 bg-[#121212] hover:border-zinc-700 hover:bg-zinc-900 text-zinc-300 hover:text-white font-mono-code text-xs transition-all duration-200"
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