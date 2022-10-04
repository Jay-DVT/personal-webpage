import React from 'react'
import { experiences } from '../constants'
import Button from './Button'
import Accordion from './Accordion'

type Props = {}

export default function Experience({}: Props) {
  return (
    <div className='h-screen flex relative flex-col max-w-7xl px-10 md:justify-center mx-auto items-center'>
      <div className="relative flex flex-col md:inset-y-20 py-5 items-center">
        <p className='md:text-[40px] text-[28px] font-bold'>Experience</p>
        <div className="flex-grow border-t border-white w-[80%]"></div>
      </div>
      <div className='sm:flex min-h-[400px] hidden mt-[180px]'>
        <Accordion />
      </div>
    </div>
  )
}