import React from 'react'
import { experiences } from '../constants'
import Button from './Button'
import Accordion from './Accordion'

type Props = {}

export default function Experience({}: Props) {
  return (
    <div className='h-screen flex relative flex-col md:text-left text-center max-w-7xl px-10 md:justify-evenly justify-evenly mx-auto items-center'>
      <div className="relative flex flex-col py-5 items-center">
        <p className='md:text-[40px] text-[28px] font-bold'>Experience</p>
        <div className="flex-grow border-t border-white w-[80%]"></div>
      </div>
      <div className='sm:flex grow hidden mt-[90px]'>
        <Accordion />
      </div>
    </div>
  )
}


