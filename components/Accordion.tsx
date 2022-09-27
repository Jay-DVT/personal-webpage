import React, { useState } from 'react'
import { experiences } from '../constants' 
import Button from './Button'

type Props = {}

const Accordion = (props: Props) => {
    /* starts on state 0  to select the first experience on startup */
    const [selected, setSelected] = useState(0)
    
    const toggle = (i: number) => {
        setSelected(i)
    }

  return (
        <div className='flex flex-row items-start gap-5'>
            <ul>
                {experiences.map((experience, i) => (
                    <div className='flex' key={i}>
                        <div className={`border-l z-5 border-r border-[#495670] relative top-[18px] ${i === experiences.length - 1 ? "bg-transparent h-[5px]" : "" } flex items-center justify-center`}>
                            <div className={`border-l ${selected < i + 1 ? "border-[#CAFC01]" : "hidden" } z-8 ${i === experiences.length - 1 ? "border-dashed h-[30px]" : "" } ${i === experiences.length - 2 ? "h-[45px]" : "" } border-r h-[60px]  absolute top-2 flex items-center justify-center`}></div>
                            <div className={`absolute z-10 w-3 h-3 top-0 rounded-full ${selected < i + 1 ? "bg-[#CAFC01]" : "hidden" }`}></div>
                            <div className={`absolute z-5 w-2 h-2 top-0 rounded-full bg-gray-700`}></div>
                        </div>
                        <li  className={`w-full rounded-r-lg px-5 cursor-pointer hover:bg-gray-700/40 ${i === 1 ? "accordion_header" : "" }`} onClick={() => toggle(i)}>
                            <p className={`${selected === i ? "text-[#CAFC01]" : "" }`}>{experience.title}</p>
                            <p className='text-[12px] pb-2'>{experience.period}</p>
                        </li>
                    </div>
                ))}
            </ul>
            <div className='flex-col flex lg:w-[700px] w-[300px]'>
                {experiences.map((experience, i) => (
                    <div key={i} className={`flex selected i ${selected === i ? 'flex-col' : 'hidden'}`}>
                        <Button style='pl-2 font-bold flex hover:text-black hover:border-transparent cursor-default hover:from-[#38FF34] hover:to-[#CAFC01]' content={experience.title}/>
                        <div className='flex text-[#CAFC01] pt-2 items-center md:text-[18px] text-[16px]'>
                            <span className='px-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </span>
                            <span className='w-[200px]'>{experience.location}</span>
                            <span className='px-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </span>
                            <a href={experience.link}>{experience.company}</a>
                        </div>
                        <div className=' text-[16px]'>
                            {experience.achievements.map((achievement, index) => (
                            <p key={index}>
                              <span className='text-[#CAFC01]'>{">"}</span>
                              {achievement}
                            </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Accordion