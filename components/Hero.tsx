import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Button from './Button';


type Props = {}

export default function Hero({}: Props) {
  const {text} = useTypewriter({
    words: [
      "great music taste",
      "less than optimal interests",
      "lacking energy",
      "too much time in my hands"
    ],
    loop: true,
    delaySpeed: 7000,
  });

  return (
    <div className='h-screen flex flex-col justify-center lg:ml-[310px] mx-[12%] font-bold'> {/* 124 extra from the left div */}
      <p className='text-[16px]'>Welcome to my dungeon,</p>
      {/* gradient has an inside clause where it is deleted on hover and a border is colored */}
      <p className='font-bold md:text-[50px] text-[40px]'>I&apos;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-[#00D1FF]'>Diego Villanueva</span></p>
      <p className='md:text-[20px] text-[18px] pt-5'>an aspiring computer scientist, with </p>
      <p className='md:text-[20px] text-[18px]'> <Cursor cursorStyle='>'/> {text} <Cursor cursorStyle='_'/> </p>
      <div className='flex justify-start'>
        <Button style={'px-[56px] inline-flex lg:hidden text-black mt-5'} content={'Resume'} />
      </div>
    </div>
  )
}