import { useState } from 'react';
import Navbar from '../components/Navbar';
import { ArrowUpRight, Send, Mail, MapPin, Clock } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        window.location.href = `mailto:prinsonroyal1@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col justify-between pt-3 pb-3 px-4 sm:pt-4 sm:pb-4 sm:px-10 md:pt-4 md:pb-5 md:px-12 overflow-x-hidden select-none hide-scrollbar">
            <Navbar />

            <main className="w-full max-w-4xl mx-auto my-auto py-6 sm:py-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
                    {/* Left: Contact Info */}
                    <div className="md:col-span-5 border border-zinc-900 bg-black p-6 sm:p-8 flex flex-col justify-between space-y-6">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 text-zinc-500 font-mono-code text-xs">
                                <Mail size={14} />
                                <span>// get in touch</span>
                            </div>

                            <div className="space-y-4">
                                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                                    Have a project in mind, want to collaborate, or just want to say hi? Feel free to reach out.
                                </p>

                                <div className="space-y-3 pt-2">
                                    <div className="flex items-center gap-3 text-zinc-400 font-mono-code text-xs">
                                        <Mail size={13} className="text-zinc-600 shrink-0" />
                                        <span>prinsonroyal1@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400 font-mono-code text-xs">
                                        <MapPin size={13} className="text-zinc-600 shrink-0" />
                                        <span>India</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400 font-mono-code text-xs">
                                        <Clock size={13} className="text-zinc-600 shrink-0" />
                                        <span>UTC +5:30 (IST)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-4 border-t border-zinc-900 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono-code text-xs">
                            <a
                                href="https://github.com/PRN-6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                            >
                                <SiGithub size={12} className="text-zinc-500 group-hover:text-white transition-colors" />
                                <span>github</span>
                                <ArrowUpRight size={13} className="opacity-60 group-hover:opacity-100 transition-all" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/prinson-nazareth/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                            >
                                <SiLinkedin size={11} className="text-zinc-500 group-hover:text-white transition-colors" />
                                <span>linkedin</span>
                                <ArrowUpRight size={13} className="opacity-60 group-hover:opacity-100 transition-all" />
                            </a>
                            <a
                                href="https://x.com/LeoZodiac66"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                            >
                                <SiX size={11} className="text-zinc-500 group-hover:text-white transition-colors" />
                                <span>x</span>
                                <ArrowUpRight size={13} className="opacity-60 group-hover:opacity-100 transition-all" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="md:col-span-7 border border-zinc-900 bg-black p-6 sm:p-8 flex flex-col justify-start space-y-5">
                        <div className="flex items-center gap-2 text-zinc-500 font-mono-code text-xs">
                            <Send size={14} />
                            <span>// send a message</span>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <div className="space-y-1">
                                <label className="font-mono-code text-xs text-zinc-500">name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="your name"
                                    className="w-full bg-[#0d0d0d] border border-zinc-900 hover:border-zinc-700 focus:border-zinc-600 focus:outline-none px-4 py-2.5 text-sm text-zinc-200 font-mono-code placeholder-zinc-700 transition-colors"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="font-mono-code text-xs text-zinc-500">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@example.com"
                                    className="w-full bg-[#0d0d0d] border border-zinc-900 hover:border-zinc-700 focus:border-zinc-600 focus:outline-none px-4 py-2.5 text-sm text-zinc-200 font-mono-code placeholder-zinc-700 transition-colors"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="font-mono-code text-xs text-zinc-500">message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="what's on your mind?"
                                    className="w-full bg-[#0d0d0d] border border-zinc-900 hover:border-zinc-700 focus:border-zinc-600 focus:outline-none px-4 py-2.5 text-sm text-zinc-200 font-mono-code placeholder-zinc-700 transition-colors resize-none hide-scrollbar"
                                />
                            </div>

                            <button
                                type="submit"
                                className="self-start inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 bg-zinc-900 hover:border-zinc-500 hover:bg-zinc-800 text-white font-mono-code text-xs transition-all duration-200 cursor-pointer group active:scale-95"
                            >
                                <Send size={12} className="text-zinc-400 group-hover:text-white transition-colors" />
                                <span>{submitted ? 'opening mail client...' : 'send message'}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="w-full flex justify-between items-center text-xs font-mono-code text-zinc-500 pt-6">
                <span>// contact</span>
                <div className="flex items-center gap-2">
                    <span className="text-zinc-700">© {new Date().getFullYear()}</span>
                    <span className="text-zinc-800">•</span>
                    <span className="text-zinc-600">portfolio v2</span>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
