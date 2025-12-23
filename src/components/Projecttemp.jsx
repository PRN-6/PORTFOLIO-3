import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import p1 from '../assets/p1.png'

const Projecttemp = () => {
  const projectRef = useRef(null)

  useGSAP(() => {
    gsap.from(projectRef.current , {
      x: 50, opacity: 0, duration:1, ease: 'power4.out'
    })
  }, [])

  return (
    <div>     
      <div ref={projectRef} className="flex flex-col sm:flex-row items-center gap-4 ">
          <div className="w-full sm:w-1/2 h-100 rounded-2xl flex items-center justify-center border border-gray-900">
              <div className="w-full h-full rounded-2xl bg-gray-900">
                  <a href='' >
                      <img 
                    src={p1}
                    alt="" 
                    className=" object-cover hover:blur-xs"
                    /></a>
                    <div>
                      <h1 className="font-bold p-3">
                          Portfolio Website
                      </h1>   
                      <p className='p-3 text-gray-400'>
                          A modern portfolio website built with React, Tailwind CSS, and Vite.
                      </p>
                    </div>

              </div>
          </div>
          <div className="w-full sm:w-1/2 h-100 rounded-2xl  flex items-center justify-center">
              <div className="w-full h-full rounded-2xl bg-gray-900">
                  <a href='' >
                      <img 
                    src=""
                    alt="" 
                    className=" object-cover hover:blur-xs"
                    /></a>
                    <div>
                      <h1 className="font-bold p-3">
                          Updating....
                      </h1>   
                      <p className='p-3 text-gray-400'>
                          Updating....
                      </p>
                    </div>

              </div>
          </div>
      </div>

    </div>
  )
}

export default Projecttemp