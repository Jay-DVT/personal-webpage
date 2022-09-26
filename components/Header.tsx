import React from 'react';
import { motion } from "framer-motion";
import Button from './Button';
import { Typewriter } from 'react-simple-typewriter';

type Props = {}

export default function Header({}: Props) {
  return (
    /* Sticky top, TODO add a shadow box effect on scroll */
    <header className='flex justify-center sticky top-0 font-bold max-w-7xl mx-auto sm:text-[18px] text-[10px] items-center'>
      {/* Invisible button used to achieve the other button's right position */}
      <Button style={'hidden md:inline-flex text-black invisible'} content={'Resume'}/>
      <div id='header-anchor-container' className='py-[35px] flex space-x-[45px] justify-center mx-auto'>
        {/* Shortcuts */}
        <a href="#home">// 
          <span>
            {/* Typewriter is used for 1 time per link, they have varying speeds to make it look different */}
          <Typewriter 
            words={[' Home']}
            typeSpeed={Math.random() * 700}
            />
          </span></a>
        <a href="#about">// 
        <span>
          <Typewriter 
            words={[' About']}
            typeSpeed={Math.random() * 700}
            delaySpeed={2000}
            />
          </span></a>
        <a href="#projects">//         
        <span>
          <Typewriter 
            words={[' Projects']}
            typeSpeed={Math.random() * 700}
            />
          </span></a>
        <a href="#contact">//         
        <span>
          <Typewriter 
            words={[' Contact']}
            typeSpeed={Math.random() * 700}
            delaySpeed={1000}
            />
          </span></a>
      </div>
        {/* Resume link button */}
      <motion.div
      /* Entrance animation for the button */
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
        {/* button takes extra parameters for reusability later down the line, content: inside Text */}
        <Button style={'hidden px-[56px] lg:inline-flex text-black xl:mr-[0px] mr-[30px]'} content={'Resume'} />
      </motion.div>
    </header>
  )
}