import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const About = () => {
  const aboutMe = useRef(null)
  
  useGSAP(() => {

    gsap.from(aboutMe.current , {
      x:100 , opacity:0 , duration:1, ease:'circ.inOut'
    })
  })

  return (
    <div>
      <div ref={aboutMe} className='flex flex-col min-h-screen w-full px-4 md:px-20 lg:px-40 xl:px-60 overflow-auto hide-scrollbar gap-5'> 
      <Navbar/>

        <div className='pt-10 px-4'>
          <h1 className='text-3xl md:text-4xl font-bold text-left'>
            About me
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
      </div>
    </div>
  )
}

export default About