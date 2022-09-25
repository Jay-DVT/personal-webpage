import React from 'react';
import { motion } from "framer-motion";
import Button from './Button';
type Props = {}

export default function Header({}: Props) {
  return (

    <header className='flex justify-center sticky top-0 font-bold max-w-7xl mx-auto text-[18px] items-center'>
      {/* Invisible button used to achieve the other button's right position */}
      <Button style={'hidden md:inline-flex text-black invisible'} content={'Resume'}/>
      <div id='header-anchor-container' className='py-[35px] flex space-x-4 justify-center mx-auto'>
        {/* Shortcuts */}
        <a href="#Home">// Home</a>
        <a href="#About">// About</a>
        <a href="#Projects">// Projects</a>
        <a href="#Contact">// Contact</a>
      </div>
        {/* Resume link button */}
      <div className=''>
        <Button style={'hidden md:inline-flex text-black'} content={'Resume'} />
      </div>
    </header>
  )
}