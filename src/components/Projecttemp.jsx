import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import { FaGithub } from 'react-icons/fa'

const projectsData = [
  {
    title: "Astrix",
    desc: "A dynamic college fest website built to manage and showcase events.",
    img: p3,
    github: "https://github.com/PRN-6/Astrix",
    link: "https://astrix2k26.vercel.app/"
  },
  {
    title: "3D Scroll Website",
    desc: "A modern 3D scroll website built with React, Tailwind CSS, GSAP and Three.js.",
    img: p2,
    github: "https://github.com/PRN-6/college-fest-website",
    link: "https://3-d-website-blond.vercel.app/"
  },
  {
    title: "Portfolio Website",
    desc: "A modern portfolio website built with React, Tailwind CSS, and Vite.",
    img: p1,
    github: "https://github.com/PRN-6/PORTFOLIO-3",
    link: ""
  }
];

const Projecttemp = ({ limit }) => {
  const projectRef = useRef(null)

  useGSAP(() => {
    gsap.from(projectRef.current , {
      x: 50, opacity: 0, duration:1, ease: 'power4.out'
    })
  }, [])

  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <div>     
      <div ref={projectRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {displayedProjects.map((project, index) => (
          <div key={index} className="w-full h-100 rounded-2xl flex items-center justify-center border border-gray-900">
              <div className="w-full h-full rounded-2xl bg-gray-900 flex flex-col">
                  <a href={project.link || project.github} target="_blank" rel="noopener noreferrer">
                      <img 
                    src={project.img}
                    alt={project.title} 
                    className="w-full h-48 object-cover rounded-t-2xl hover:blur-xs"
                    /></a>
                    <div className="flex-1 flex flex-col">
                      <h1 className="font-bold p-3">
                          {project.title}
                      </h1>   
                      <p className='p-3 text-gray-400 flex-1'>
                          {project.desc}
                      </p>
                      <div className="p-3 w-11">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl hover:text-blue-400" />
                        </a> 
                      </div>
                    </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projecttemp