import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { css3, c, cplusplus, flask, git, html5, javascript, nodejs, postgresql, python, react, tailwindcss } from '../assests/index'
import css from 'styled-jsx/css'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='md:h-screen h-fit flex relative flex-col md:text-left text-center max-w-7xl px-10 md:justify-evenly justify-evenly mx-auto items-center'>
      <div className="relative flex flex-col py-5 items-center">
        <p className='md:text-[40px] text-[28px] font-bold'>About</p>
        <div className="flex-grow border-t border-white w-[80%]"></div>
      </div>
      <div id="about-content" className='flex md:flex-row flex-col md:items-center md:gap-[90px] gap-[30px]'>
        <div id="description" className='flex-1 md:text-[20px] text-[18px]'>
          <p>
            My name&apos;s Diego Villanueva Terrazas and I was born and raised in Chihuahua, 
            I like variety of things such as cooking, motoracing, relaxing, tech, finance, gaming and partying among other miscellaneous 
            interests that tend to get more outlandish by the second and they never seem to stop expanding.
          </p>
          <p className='md:pt-10 pt-3'>
            I look foward to experimenting with new and innovative concepts that can support my curiosity, 
            with the added benefit of implementing these knowledge into <span className='text-[#CCFF00]'>practical applications.</span> 
          </p>
          <p className='md:pt-10 pt-3'>My priority when looking into a project isn&apos;t how easy it can be but how much I can learn.</p>
        </div>
        <div id="technologies" className='flex flex-col md:flex-1 md:mx-0 sm:mx-20 mx-0'>
          <div className='flex flex-row justify-between grow'>
            <motion.div
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }} >
                <Image src={ python } width={70} height={35} ></Image>  
              </motion.div>
            <motion.div
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }} >
                <Image src={ c } width={70} height={35} ></Image>  
              </motion.div>
            <motion.div
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }} >
                <Image src={ javascript } width={70} height={35} ></Image>  
              </motion.div>
            <motion.div
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }} >
                <Image src={cplusplus} width={70} height={35} ></Image>  
              </motion.div>
          </div>
          <div className='relative flex flex-col md:py-7 py-3 items-center md:pb-[70px] pb-[30px]'>
            <div className="border-t-[3px] border-white w-[100%]"></div>        
          </div>
          <div className='flex flex-row justify-between'>
            <motion.div
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }} >
                <Image src={ html5 } width={70} height={35} ></Image>  
              </motion.div>
            <motion.div
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }} >
                <Image src={ css3 } width={70} height={35} ></Image>  
              </motion.div>
            <motion.div
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }} >
                <Image src={ nodejs } width={70} height={35} ></Image>  
              </motion.div>
            <motion.div
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }} >
                <Image src={ tailwindcss } width={70} height={35} ></Image>  
              </motion.div>
          </div>
          <div className='relative flex flex-col md:py-7 py-3 items-center md:pb-[70px] pb-[30px]'>
            <div className="border-t-[3px] border-white w-[100%]"></div>        
          </div>
          <div className='flex flex-row justify-between'>
            <motion.div
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }} >
                <Image src={ react } width={70} height={35} ></Image>  
              </motion.div>
            <motion.div
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }} >
                <Image src={ postgresql } width={70} height={35} ></Image>  
              </motion.div>
            <motion.div
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }} >
                <Image src={ flask } width={70} height={35} ></Image>  
              </motion.div>
            <motion.div
              initial = {{
                opacity: 0,
                y: 7,
              }}
              whileInView={{ y: 0, opacity: 1,}}
              transition={{ duration: 2 }}
              viewport={{ once: true }} >
                <Image src={ git } width={70} height={35} ></Image>  
              </motion.div>
          </div>
          <div className='relative flex flex-col md:py-7 py-3 items-center'>
            <div className="border-t-[3px] border-white w-[100%]"></div>        
          </div>
        </div>
      </div>
    </div>
  )
}