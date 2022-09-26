import React, { useState } from 'react'
import { experiences } from '../constants' 
import Button from './Button'

type Props = {}

const Accordion = (props: Props) => {
    const [selected, setSelected] = useState(0)
    
    const toggle = (i: number) => {
        setSelected(i)
    }

  return (
        <div className='flex flex-row items-start gap-5'>
            <ul>
                {experiences.map((experience, i) => (
                    <div className='flex'>
                        <div className='border-l border-r border-[#495670] relative flex items-center justify-center'>
                        <div className="absolute z-5 w-2 h-2 bg-[#495670] rounded-full"></div>
                        <div key={i} className={`absolute z-10 w-2 h-2  rounded-full ${selected === i ? "bg-[#CAFC01]" : "hidden" }`}></div>
                        </div>
                        <li key={i} className={`w-full rounded-r-lg px-5 cursor-pointer hover:bg-gray-700/40 ${i === 1 ? "accordion_header" : "" }`} onClick={() => toggle(i)}>
                            <p className={`${selected === i ? "text-[#CAFC01]" : "" }`}>{experience.title}</p>
                            <p className='text-[12px] pb-2'>{experience.period}</p>
                        </li>
                    </div>
                ))}
            </ul>
            <div className='flex-col'>
                {experiences.map((experience, i) => (
                    <div key={i} className={`flex selected i ${selected === i ? 'flex-col' : 'hidden'}`}>
                        <Button style='pl-2 font-bold flex hover:text-black hover:border-transparent cursor-default hover:from-[#38FF34] hover:to-[#CAFC01]' content={experience.title}/>
                        <div className='flex text-[#CAFC01] pt-2 items-center'>
                            <span className='px-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </span>
                            <span className='w-[150px]'>{experience.location}</span>
                            <span className='px-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </span>
                            <a href={experience.link}>{experience.company}</a>
                        </div>
                        <div className='w-[700px]'>
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