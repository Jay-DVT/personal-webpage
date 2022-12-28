import React from 'react'
import Button from './Button'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='flex relative flex-col max-w-7xl px-10 md:justify-center mx-auto items-center'>
      <div className="relative flex flex-col py-5 items-center md:inset-y-5 inset-y-10">
        <p className='md:text-[40px] text-[28px] font-bold'>Contact</p>
        <div className="flex-grow border-t border-white w-[80%]"></div>
      </div>
      <div className='flex md:flex-row flex-col m-[50px] w-[90%]'>
        <div className='md:w-[30%] sm:pt-0 py-[30px]'>
          <p>
          Have a project in mind, or any collaborations that may fit my experience, don&apos;t mind reaching out
          </p>
        </div>
        <div className='flex flex-col flex-grow md:w-[60%]'>
          <form className='sm:ml-3' name="contact" method="POST" data-netlify="true">
            <p className='mt-1'>
              <label>Your Name: <br /><input className='w-full' type="text" name="name" /></label>
            </p>
            <p className='mt-1'>
              <label>Your Email: <br /><input className='w-full' type="email" name="email" /></label>
            </p>
            <p className='mt-1'>
              <label>Message: <br /><textarea className='w-full' name="message"></textarea></label>
            </p>
            <button className={`py-2 text-black rounded-[10px] bg-gradient-to-r from-[#38FF34] to-[#CAFC01] hover:text-[#CAFC01] hover:from-transparent hover:border-[#CAFC01] border-2 border-transparent px-[70px] font-bold`} type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}