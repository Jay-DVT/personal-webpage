import React from 'react';
import { motion } from "framer-motion";
import Button from './Button';
import { Typewriter } from 'react-simple-typewriter';

type Props = {}

export default function Header({}: Props) {
  return (

    <header className='flex justify-center sticky top-0 font-bold max-w-7xl mx-auto sm:text-[18px] text-[15px] items-center'>
      {/* Invisible button used to achieve the other button's right position */}
      <Button style={'hidden md:inline-flex text-black invisible'} content={'Resume'}/>
      <div id='header-anchor-container' className='py-[35px] flex space-x-[45px] justify-center mx-auto'>
        {/* Shortcuts */}
        <a href="#home">// 
          <span>
          <Typewriter 
            words={[' Home']}
            typeSpeed={30}
            />
          </span></a>
        <a href="#about">// 
        <span>
          <Typewriter 
            words={[' About']}
            typeSpeed={150}
            delaySpeed={2000}
            />
          </span></a>
        <a href="#projects">//         
        <span>
          <Typewriter 
            words={[' Projects']}
            typeSpeed={130}
            />
          </span></a>
        <a href="#contact">//         
        <span>
          <Typewriter 
            words={[' Contact']}
            typeSpeed={200}
            delaySpeed={1000}
            />
          </span></a>
      </div>
        {/* Resume link button */}
      <motion.div
      initial = {{
        x: 100,
        opacity: 0,
        scale: 1,
      }}
      animate = {{
        x: 0,
        opacity: 1,
        scale:1,
      }}
      transition = {{duration: 2, }}
      >
        <Button style={'hidden md:inline-flex text-black xl:mr-[0px] mr-[30px]'} content={'Resume'} />
      </motion.div>
    </header>
  )
}