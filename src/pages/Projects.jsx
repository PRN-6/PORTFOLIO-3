import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import p1 from '../assets/p1.png'
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
      <div className="grid">
        <Projecttemp/>
      </div>    

    </div>
  )
}

export default Projects