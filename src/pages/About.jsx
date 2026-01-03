import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import mainprofilepic from '../assets/mainprofilepic.jpg'
import { FaCode, FaGithub, FaLinkedin, FaNode, FaReact } from 'react-icons/fa'
import { SiBlender, SiC,
     SiCss3, SiExpress, SiGmail, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiPostman, SiPython, SiRust, SiTailwindcss, SiVscodium } from 'react-icons/si'
const About = () => {
  const aboutMe = useRef(null)
  
  useGSAP(() => {

    gsap.from(aboutMe.current , {
      x:100 , opacity:0 , duration:1, ease:'circ.inOut'
    })
  })

  return (
    <div className='min-h-screen'>
      <Navbar/>
      <div ref={aboutMe} className='h-[calc(100vh-64px)] overflow-y-auto px-4 md:px-20 lg:px-40 xl:px-60 hide-scrollbar'>
        <div className='pt-10 px-4'>
          <h1 className='text-3xl md:text-4xl font-bold text-left py-5'>
            About me
          </h1>
        </div>

        {/* about me info*/}
          <div className='gap-5 flex flex-col '>
            <div>
              <img 
              src={mainprofilepic} 
              alt='profile pic'
              className='"w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover shadow-lg'
               />
            </div>
            <div className='px-3'>
              <h1 className="text-4xl md:text-5xl font-bold">
                Prinson Royal Nazareth
              </h1>
            </div>
            <div className='px-4 space-y-4'>
            <p className='text-lg md:text-xl text-left'>
              I am a developer with a passion for creating clean, user-friendly applications
            </p>
            <p className='text-lg md:text-xl text-left'>
              I love clean code, modern tools, and always learning new things
            </p>
          </div>

          
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

export default About