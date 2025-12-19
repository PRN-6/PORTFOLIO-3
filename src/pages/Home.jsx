import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import profileImage from '../assets/profilephoto.jpg'
import p1 from '../assets/p1.png'
import { FaCode, FaGithub, FaLinkedin, FaNode, FaReact } from 'react-icons/fa'
import { SiBlender, SiC,
     SiCss3, SiExpress, SiGmail, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiPostman, SiPython, SiRust, SiTailwindcss, SiVscodium } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'
import { DotIcon } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Projecttemp from '../components/Projecttemp'

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
                <div className="w-full pt-18 lg:w-1/2 p-6 lg:p-12 lg:sticky top-0">

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
                        <div ref={linkRef} className="flex justify-center gap-6 lg:flex-col lg:gap-6 lg:ml-10 mt-10 text-gray-300">
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

                            <a href="mailto:prinsonroyal1@gmail.com" className="flex items-center gap-2 hover:text-blue-300">
                                <SiGmail className="w-6 h-6" />
                                <span className="hidden lg:inline">prinsonroyal1@gmail.com</span>
                            </a>
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
                       
                        <h2 ref={heroInfoRef} ><span className='text-gray-300'>I'm a self-taught developer with a strong passion for building clean, user-friendly applications.</span><strong> I love learning new technologies and constantly improving my skills.</strong>
                        </h2>
                    </div>

                    {/* STACK */}
                    <h2 className="pt-6 text-center lg:text-left ">
                        <span className=' text-gray-300'>Leveling up in:</span>
                        <div
                            ref={heroStackRef}
                            className="flex flex-wrap justify-center lg:justify-start items-center gap-5 pt-4"
                        >
                            <FaReact className="size-8" /> React <DotIcon />
                            <SiExpress className="size-8" /> Express <DotIcon />
                            <FaNode className="size-8" /> Node <DotIcon />
                            <SiMongodb className="size-8" /> Mongodb <DotIcon />
                            <SiRust className="size-8" /> Rust <DotIcon/>
                            <SiPython className="size-8" /> Python <DotIcon/>
                            <SiMysql className="size-8" /> MySQL <DotIcon/>
                            <SiC className="size-8 "/> C <DotIcon/>
                            <SiBlender className='size-8 lg:mr-10 '/><span>Blender</span><DotIcon/>
                        </div>
                    </h2>
                </div>

                {/* RIGHT SECTION — PROJECTS */}
                <div className="w-full lg:w-1/2 p-6 lg:p-12 h-auto lg:h-screen lg:overflow-y-auto hide-scrollbar">

                    {/* WORKING ON IT */}
                    {/* <div>
                        <h1 className="mb-6 text-2xl">Experience</h1>
                    </div> */}

                    {/* PROJECT DISPLAY SECTION */}
                    <h1 className="mb-6 text-2xl">Projects</h1>
                    <Projecttemp/>

                    {/* TECHONLOGY & TOOLS I USE */}
                        <h1 className="mt-6 text-2xl">Technologies & Tools</h1>
                    <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-5 mt-6 gap-12 p-5 text-gray-400">
                            <div><SiJavascript className="w-8 h-8"/>Javascript</div>
                            <div><SiExpress className="w-8 h-8"/>ExpressJS</div>
                            <div><SiTailwindcss className="w-8 h-8"/>Tailwind CSS</div>
                            <div><SiCss3 className="w-8 h-8"/>CSS</div>
                            <div><SiHtml5 className="w-8 h-8"/>Html</div>
                            <div><FaReact className="w-8 h-8" /> React </div>
                            <div><FaNode className="w-8 h-8" />Node</div>  
                            <div><SiMongodb className="w-8 h-8" />Mongodb </div> 
                            <div><SiRust className="w-8 h-8" />Rust </div>
                            <div><SiPostman className="w-8 h-8"/>Postman</div>
                            <div><FaGithub className="w-8 h-8"/>Github</div> 
                            
                    </div>
                   
                </div>

            </div>
        </div>
    )
}

export default Home
