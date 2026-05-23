import React, { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const navLink = useRef(null)
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(() => {
        gsap.from(navLink.current, {
            y:50, opacity:0, duration:1, ease:'circ.in'
        })
    })

    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='relative w-full z-50'>
        <div className='mx-auto h-16 p-4 bg-black'>
            <div className='flex items-center justify-end'>
                {/* Hamburger Icon for Mobile */}
                <div className='sm:hidden flex w-full justify-end'>
                    <button onClick={toggleMenu} className='text-gray-400 hover:text-white focus:outline-none'>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Desktop Links */}
                <div ref={navLink} className='hidden sm:flex justify-end gap-6 px-6 text-sm text-gray-400'>
                    <Link to={"/"} className='hover:text-white transition-colors'>
                        <h3>Home</h3>
                    </Link>
                    <Link to={"/about"} className='hover:text-white transition-colors'>
                        <h3>About</h3>
                    </Link>
                    <Link to={"/projects"} className='hover:text-white transition-colors'>
                        <h3>Projects</h3>
                    </Link>
                </div>
            </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
            <div className='sm:hidden absolute top-16 left-0 w-full bg-gray-900 border-t border-gray-800 flex flex-col items-center py-6 gap-6 shadow-2xl z-50 text-gray-400'>
                <Link to={"/"} onClick={() => setIsOpen(false)} className='text-lg hover:text-white transition-colors'>
                    Home
                </Link>
                <Link to={"/about"} onClick={() => setIsOpen(false)} className='text-lg hover:text-white transition-colors'>
                    About
                </Link>
                <Link to={"/projects"} onClick={() => setIsOpen(false)} className='text-lg hover:text-white transition-colors'>
                    Projects
                </Link>
            </div>
        )}
    </header>
    )
}

export default Navbar