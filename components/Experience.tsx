import React from 'react'
import { experiences } from '../constants'
import Button from './Button'
import { pin } from '../assests'

type Props = {}

export default function Experience({}: Props) {
  /* TODO Create a toggle looking between each experience option */
  const toggle = ({i}: {i: boolean}) => {
    return i
  }

  /* TODO disable or hidden the other divs that dont dont have the id selected  */

  return (
    <div className='h-screen flex relative flex-col md:text-left text-center max-w-7xl px-10 md:justify-evenly justify-evenly mx-auto items-center md:text-[15px] text-[12px]'>
      <div className="relative flex flex-col py-5 items-center">
        <p className='text-[40px] font-bold'>Experience</p>
        <div className="flex-grow border-t border-white w-[80%]"></div>
      </div>


      <div className=''>
        {experiences.map((experience, index) => (
          <div className='flex flex-row'>
            <ul>
              <li key={experience.id} className="py-3 text-left pl-1">
                {experience.title}
              </li>
            </ul>
            <div className='w-60'>
              <Button style='hover:text-[#131C1E] w-full text-black font-bold hover:bg-gradient-to-r from-[#38FF34] to-[#CAFC01] hover:border-transparent ' content={experience.title} />
              <div className='text-[#CAFC01] flex'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                {experience.location}
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </span>
                <a href={experience.link}>{experience.company}</a>
                
              </div>
              <p>
                {/* nested map loop to post the list of achievements on the experience  */}
                {experience.achievements.map((achievement, index) => (
                  <p>
                    <span className='text-[#CAFC01]'>{'> '}</span>
                    {achievement}
                  </p>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}