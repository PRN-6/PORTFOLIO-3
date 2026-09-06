import React from 'react';
import Navbar from '../components/Navbar';
import Projecttemp from '../components/Projecttemp';

const Projects = () => {
    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col justify-between pt-3 pb-3 px-4 sm:pt-4 sm:pb-4 sm:px-10 md:pt-4 md:pb-5 md:px-12 overflow-x-hidden">
            {/* Top Navigation */}
            <Navbar />

            {/* Main Projects Section */}
            <main className="w-full flex-1 flex flex-col justify-center items-center my-auto py-6 sm:py-10 md:py-12">
                <Projecttemp />
            </main>

            {/* Bottom spacer / minimal status */}
            <footer className="w-full flex justify-between items-center text-xs font-mono-code text-zinc-500 pt-6">
                <span>// projects</span>
                <span className="text-zinc-600">portfolio v2</span>
            </footer>
        </div>
    );
};

export default Projects;