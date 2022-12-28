import React from 'react'
import ContactForm from './ContactForm'
import { media } from '../constants'
import Image from 'next/image'

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
          <br />
          <div className='text-right mr-10'>
            {media.map((item, index) => (
              <a className='pl-4' key={index} href={item.link}>
                <Image key={item.id} src={item.icon} alt={item.name}></Image>
              </a>
            ))}
          </div>
        </div>
        <div className='flex flex-col flex-grow md:w-[60%]'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}