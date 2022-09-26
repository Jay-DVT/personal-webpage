import React from 'react';
import {useTypewriter} from 'react-simple-typewriter';

type Props = {}

export default function Hero({}: Props) {
  const {text} = useTypewriter({
    words: [
      "less than optimal interests",
      "lacking energy",
      "too much time in my hands"
    ],
    loop: true,
    delaySpeed: 8000,
  });

  return (
    <div className='h-screen flex flex-col justify-center lg:ml-[310px] mx-[12%] font-bold'> {/* 124 extra from the left div */}
      <p className='text-[16px]'>Welcome to my dungeon,</p>
      <p className='font-bold md:text-[50px] text-[40px]'>I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-[#00D1FF]'>Diego Villanueva</span></p>
      <p className='md:text-[20px] text-[18px] pt-5'>an aspiring computer scientist, with <span>{text}</span></p>
    </div>
  )
}