import { Link } from 'react-router';
import Navbar from '../components/Navbar';

const NotFound = () => {
    return (
        <div className="relative w-screen h-screen h-[100dvh] bg-black text-white flex flex-col justify-between pt-3 pb-3 px-4 sm:pt-4 sm:pb-4 sm:px-10 md:pt-4 md:pb-5 md:px-12 overflow-hidden select-none">
            <Navbar />

            <main className="w-full flex flex-col items-center justify-center text-center my-auto z-10 space-y-6">
                <h1 className="font-pixel text-7xl sm:text-8xl md:text-9xl text-zinc-800 tracking-wide">
                    404
                </h1>
                <div className="space-y-2">
                    <p className="font-mono-code text-sm text-zinc-400">
                        // page not found
                    </p>
                    <p className="font-mono-code text-xs text-zinc-600">
                        the route you're looking for doesn't exist.
                    </p>
                </div>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 bg-zinc-900 hover:border-zinc-500 hover:bg-zinc-800 text-white font-mono-code text-xs transition-all duration-200 group"
                >
                    <span>←</span>
                    <span>go home</span>
                </Link>
            </main>

            <footer className="w-full flex justify-between items-center text-xs font-mono-code text-zinc-500 pt-6">
                <span>// 404</span>
                <div className="flex items-center gap-2">
                    <span className="text-zinc-700">© {new Date().getFullYear()}</span>
                    <span className="text-zinc-800">•</span>
                    <span className="text-zinc-600">portfolio v2</span>
                </div>
            </footer>
        </div>
    );
};

export default NotFound;
