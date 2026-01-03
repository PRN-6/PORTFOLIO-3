import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Projecttemp from '../components/Projecttemp'

const Projects = () => {
  const projectRef = useRef(null)

  useGSAP(() => {
    gsap.from(projectRef.current , {
      x: 50, opacity: 0, duration:1, ease: 'power4.out'
    })
  }, [])

  return (
    <div>
      <Navbar/> 
      <div ref={projectRef} className="h-[calc(100vh-64px)] overflow-y-auto px-4 md:px-20 lg:px-40 xl:px-60 hide-scrollbar">
        <Projecttemp/>
      </div>    

    </div>
  )
}

export default Projects