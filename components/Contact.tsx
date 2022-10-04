import React from 'react'
import Button from './Button'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='flex relative flex-col max-w-7xl px-10 md:justify-center mx-auto items-center'>
      <div className="relative flex flex-col py-5 items-center">
        <p className='md:text-[40px] text-[28px] font-bold'>Contact</p>
        <div className="flex-grow border-t border-white w-[80%]"></div>
      </div>
      <div className='flex md:flex-row flex-col m-[50px] w-[90%] md:items-start items-center'>
        <div className='w-full md:w-[30%] sm:pt-0 py-[30px]'>
          <p className=''>
          Have a project in mind, or any collaborations that may fit my experience, don&apos;t mind reaching out
          </p>
        </div>
        <div className='flex flex-col flex-grow w-full md:w-[60%]'>
          <input type="text" placeholder='Name' className='bg-[#000000] mb-4 rounded-lg h-[60px]'></input>
          <input type="text" placeholder='Mail' className='bg-[#000000] mb-4 rounded-lg h-[60px]'></input>
          <input type="text" placeholder='Message' className='bg-[#000000] mb-4 rounded-lg h-[120px]'></input>
          <div className='flex justify-end'>
            <Button style='px-[70px] font-bold' content='Submit'/>
          </div>
        </div>
      </div>
    </div>
  )
}