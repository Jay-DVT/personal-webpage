import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='h-screen flex relative flex-col md:text-left text-center max-w-7xl px-10 md:justify-evenly justify-evenly mx-auto items-center'>
      <div className="relative flex flex-col py-5 items-center">
        <p className='md:text-[40px] text-[28px] font-bold'>About</p>
        <div className="flex-grow border-t border-white w-[80%]"></div>
      </div>
      <div id="about-content" className='flex md:flex-row flex-col md:items-center md:gap-[90px] gap-[30px]'>
        <div id="description" className='flex-1 md:text-[20px] text-[12px]'>
          <p>
            My name's Diego Villanueva Terrazas and I was born and raised in Chihuahua, 
            I like variety of things such as cooking, motoracing, relaxing, tech, finance, gaming and partying among other miscellaneous 
            interests that tend to get more outlandish by the second and they never seem to stop expanding.
          </p>
          <p className='md:pt-10 pt-3'>
            I look foward to experimenting with new and innovative concepts that can support my curiosity, 
            with the added benefit of implementing these knowledge into <span className='text-[#CCFF00]'>practical applications.</span> 
          </p>
          <p className='md:pt-10 pt-3'>My priority when looking into a project isn't how easy it can be but how much I can learn.</p>
        </div>
        <div id="technologies" className='flex flex-col md:flex-1 md:mx-0 sm:mx-20 mx-0'>
          <div className='flex flex-row justify-between grow'>
            <motion.img
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg' className='md:w-[70px] w-[35px]' />
            <motion.img
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg' className='md:w-[70px] w-[35px]' />
            <motion.img
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' className='md:w-[70px] w-[35px]' />
            <motion.img
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg' className='md:w-[70px] w-[35px]' />
          </div>
          <div className='relative flex flex-col md:py-7 py-3 items-center md:pb-[70px] pb-[30px]'>
            <div className="border-t-[3px] border-white w-[100%]"></div>        
          </div>
          <div className='flex flex-row justify-between'>
            <motion.img
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' className='md:w-[70px] w-[35px]' />
            <motion.img
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' className='md:w-[70px] w-[35px]' />
            <motion.img
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg' className='md:w-[70px] w-[35px]' />
            <motion.img
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' className='md:w-[70px] w-[35px]' />
          </div>
          <div className='relative flex flex-col md:py-7 py-3 items-center md:pb-[70px] pb-[30px]'>
            <div className="border-t-[3px] border-white w-[100%]"></div>        
          </div>
          <div className='flex flex-row justify-between'>
            <motion.img
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg' className='md:w-[70px] w-[35px]'/>
            <motion.img
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' className='md:w-[70px] w-[35px]' />
            <motion.img
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' className='md:w-[70px] w-[35px]' />
            <motion.img
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg' className='md:w-[70px] w-[35px]' />
          </div>
          <div className='relative flex flex-col md:py-7 py-3 items-center'>
            <div className="border-t-[3px] border-white w-[100%]"></div>        
          </div>
        </div>
      </div>
    </div>
  )
}