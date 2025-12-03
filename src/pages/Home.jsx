import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import profileImage from '../assets/profilephoto.jpg'
import { FaGithub, FaLinkedin, FaNode, FaReact } from 'react-icons/fa'
import { SiExpress, SiGmail, SiMongodb, SiRust } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'
import { DotIcon } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
    const imageRef = useRef(null)
    const heroTitleRef = useRef(null)
    const heroInfoRef = useRef(null)
    const heroStackRef = useRef(null)
    const linkRef = useRef(null)
    const projectRef = useRef(null)

    useGSAP(() => {
        gsap.to(imageRef.current, { rotate: 360 })

        gsap.from(heroTitleRef.current, {
            y: 50, opacity: 0, duration: 1, ease: 'power2.out'
        })

        gsap.from(heroInfoRef.current, {
            y: 50, opacity: 0, duration: 1, ease: 'back.in'
        })

        gsap.from(heroStackRef.current, {
            z: 50, opacity: 0, duration: 1, ease: 'sine.inOut'
        })

        gsap.from(linkRef.current, {
            x: 100, opacity: 0, duration: 1, ease: 'circ.inOut'
        })

        gsap.from(projectRef.current, {
            x: 50, opacity: 0, duration: 1, ease: 'power4.out'
        })
    }, [])

    return (
        <div>
            <Navbar />

            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* LEFT SECTION */}
                <div className="w-full lg:w-1/2 p-6 lg:p-12 lg:sticky top-0">

                    {/* Image + Icons */}
                    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-6">

                        {/* Profile Image */}
                        <img
                            ref={imageRef}
                            src={profileImage}
                            alt="profile"
                            className="w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover shadow-lg"
                        />

                        {/* Social Links */}
                        <div ref={linkRef} className="flex gap-6 lg:flex-col lg:gap-6 pt-4">
                            <a href="https://github.com/PRN-6" className="flex items-center gap-2 hover:text-blue-300">
                                <FaGithub className="w-6 h-6" />
                                <span className="hidden lg:inline">Github</span>
                            </a>

                            <a href="https://www.linkedin.com/in/prinson-nazareth/" className="flex items-center gap-2 hover:text-blue-300">
                                <FaLinkedin className="w-6 h-6" />
                                <span className="hidden lg:inline">LinkedIn</span>
                            </a>

                            <a href="https://x.com/r_prinson66328" className="flex items-center gap-2 hover:text-blue-300">
                                <FaXTwitter className="w-6 h-6" />
                                <span className="hidden lg:inline">Twitter</span>
                            </a>

                            <div className="flex items-center gap-2">
                                <SiGmail className="w-6 h-6" />
                                <span className="hidden lg:inline">prinsonroyal1@gmail.com</span>
                            </div>
                        </div>

                    </div>

                    {/* NAME */}
                    <h1
                        ref={heroTitleRef}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold pt-6 pb-4 text-center lg:text-left"
                    >
                        Prinson Royal Nazareth
                    </h1>

                    {/* INFO */}
                    <div
                        ref={heroInfoRef}
                        className= "p-4 rounded-md text-center lg:text-left"
                    >
                       
                        <h2 ref={heroInfoRef} >I'm a self-taught developer with a strong passion for building clean, user-friendly applications.<strong> I love learning new technologies and constantly improving my skills.</strong>
                        </h2>
                    </div>

                    {/* STACK */}
                    <h2 className="pt-6 text-center lg:text-left">
                        Leveling up in:
                        <div
                            ref={heroStackRef}
                            className="flex flex-wrap justify-center lg:justify-start items-center gap-3 pt-3"
                        >
                            <FaReact className="w-8 h-8" /> React <DotIcon />
                            <SiExpress className="w-8 h-8" /> Express <DotIcon />
                            <FaNode className="w-8 h-8" /> Node <DotIcon />
                            <SiMongodb className="w-8 h-8" /> Mongodb <DotIcon />
                            <SiRust className="w-8 h-8" /> Rust
                        </div>
                    </h2>
                </div>

                {/* RIGHT SECTION — PROJECTS */}
                <div className="w-full lg:w-1/2 p-6 lg:p-12 h-auto lg:h-screen lg:overflow-y-auto">
                    <h1 className="mb-6 text-2xl">Projects</h1>

                    <div ref={projectRef} className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="w-full sm:w-1/2 h-40 rounded-2xl bg-amber-900 flex items-center justify-center">
                            left
                        </div>
                        <div className="w-full sm:w-1/2 h-40 rounded-2xl bg-fuchsia-700 flex items-center justify-center">
                            right
                        </div>
                    </div>

                    <div className="mt-6">
                        <h1 className="text-2xl">Technologies & Tools</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
