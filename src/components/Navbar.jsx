import React from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className="w-full flex justify-center items-center pt-2 pb-4 sm:pt-3 sm:pb-4 z-50 select-none">
            <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono-code text-zinc-400">
                <Link
                    to="/"
                    className={`transition-colors duration-200 ${currentPath === '/' ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
                        }`}
                >
                    home
                </Link>
                <span className="text-zinc-600 text-xs">•</span>
                <Link
                    to="/projects"
                    className={`transition-colors duration-200 ${currentPath === '/projects' ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
                        }`}
                >
                    projects
                </Link>
                <span className="text-zinc-600 text-xs">•</span>
                <Link
                    to="/about"
                    className={`transition-colors duration-200 ${currentPath === '/about' ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
                        }`}
                >
                    about me
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;