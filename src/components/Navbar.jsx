import React, { useRef } from 'react'
import { Link } from 'react-router'
import { FaSun, FaMoon } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    const navLink = useRef(null)

    useGSAP(() => {
        gsap.from(navLink.current, {
            y:50, opacity:0, duration:1, ease:'circ.in'
        })
    })
  return (
    <header className='md' >
        <div className='mx-auto h-16 p-4 bg-black'>
            <div className='flex items-center justify-between'>
                <div ref={navLink} className='flex w-full justify-between text-gray-400 sm:justify-end gap-6 px-2 sm:px-6 text-sm '>
                    <Link to={"/about"}>
                        <h3>
                            About
                        </h3>
                    </Link>
                    <Link to={"/projects"}>
                        <h3>
                            Projects
                        </h3>
                    </Link>
                    <div className='btn btn-primary'>
                        <FaSun size={20} className="text-white-300" />
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Navbar