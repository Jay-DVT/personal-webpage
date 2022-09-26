import React from 'react'
import { motion } from 'framer-motion'
import { css3, c, cplusplus, flask, git, html5, javascript, nodejs, postgresql, python, react, tailwindcss,} from '../assests'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='h-screen flex relative flex-col md:text-left text-center max-w-7xl px-10 md:justify-evenly justify-evenly mx-auto items-center'>
      <div className="relative flex flex-col py-5 items-center">
        <p className='text-[40px] font-bold'>About</p>
        <div className="flex-grow border-t border-white w-[80%]"></div>
      </div>
      <div id="about-content" className='flex md:flex-row flex-col md:items-center gap-[90px]'>
        <div id="description" className='flex-1'>
          <p>
            I look foward to experimenting with new and innovative concepts that can support my curiosity, 
            with the added benefit of implementing these knowledge into <span className='text-[#CCFF00]'>practical applications.</span> 
          </p>
          <p className='pt-10'>My priority when looking into a project isn't how easy it can be but how much I can learn.</p>
        </div>
        <div id="technologies" className='flex flex-col md:flex-1 md:mx-0 sm:mx-20 mx-0'>
          <div className='flex flex-row justify-between grow'>
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg' className='w-[70px]' />
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg' className='w-[70px]' />
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' className='w-[70px]' />
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg' className='w-[70px]' />
          </div>
          <div className='relative flex flex-col py-7 items-center md:pb-[70px] pb-[30px]'>
            <div className="border-t border-white w-[100%]"></div>        
          </div>
          <div className='flex flex-row justify-between'>
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' className='w-[70px]' />
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' className='w-[70px]' />
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg' className='w-[70px]' />
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' className='w-[70px]' />
          </div>
          <div className='relative flex flex-col py-7 items-center md:pb-[70px] pb-[30px]'>
            <div className="border-t border-white w-[100%]"></div>        
          </div>
          <div className='flex flex-row justify-between'>
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg' className='w-[70px]'/>
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' className='w-[70px]' />
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' className='w-[70px]' />
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg' className='w-[70px]' />
          </div>
          <div className='relative flex flex-col py-7 items-center'>
            <div className="border-t border-white w-[100%]"></div>        
          </div>
        </div>
      </div>
    </div>
  )
}