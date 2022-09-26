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
    <div className='relative min-h-screen flex flex-col md:text-left text-center max-w-7xl px-10 md:justify-evenly justify-evenly mx-auto items-center md:text-[15px] text-[12px]'>
      <div className="absolute flex flex-col py-5 items-center top-20">
        <p className='text-[40px] font-bold'>Experience</p>
        <div className="flex-grow border-t border-white w-[80%]"></div>
      </div>
      <div className='sm:inline-flex hidden '>  
        <ul>
          {experiences.map((experience, index) => (
            <li className='hover:bg-gray-700/40'>
              <p>{experience.title}</p>
              <p className='text-[12px]'>{experience.period}</p>
            </li>
          ))}
        </ul>
        <div className='w-[720px]'>
          {experiences.map((experience, index) => (
            /* search for a way to center in y inside the flex inside a flex-col */
            <div className='flex flex-col'>
              <Button style='pl-2 font-bold flex hover:text-black hover:border-transparent cursor-default hover:from-[#38FF34] hover:to-[#CAFC01]' content={experience.title}/>
              <div className='flex text-[#CAFC01] pt-2'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <span className='w-[150px]'>{experience.location}</span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </span>
                <a href={experience.link}>{experience.company}</a>
              </div>
              <div className=''>
                  {experience.achievements.map((achievement, index) => (
                  <p>
                    <span className='text-[#CAFC01]'>{">"}</span>
                    {achievement}
                  </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


{/* 
      <div className=''>
        {experiences.map((experience, index) => (
          <div className=''>
            <div className=''>
              <ul className=''>
                <li key={experience.id} className="py-3 text-left pl-1">
                  {experience.title}
                </li>
              </ul>
            </div>
            <div className='w-60'>
              <div>
                <Button style='hover:text-[#131C1E] cursor-default hover:from-[#38FF34] hover:to-[#CAFC01] w-full text-black font-bold hover:bg-gradient-to-r from-[#38FF34] to-[#CAFC01] hover:border-transparent ' content={experience.title} />
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
              </div>
              <div>
                {experience.achievements.map((achievement, index) => (
                  <p>
                    <span className='text-[#CAFC01]'>{'> '}</span>
                    {achievement}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
*/}