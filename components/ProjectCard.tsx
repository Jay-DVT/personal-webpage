import React from 'react'
import { projects } from '../constants' 

type Props = {}

export default function ProjectCard({}: Props) {
  return (
    <div className='flex flex-wrap justify-center align-middle mt-5'>
        {projects.map((project, index) => (
            <div key="index" className={`flex justify-center align-middle w-[270px] flex-col m-[2rem] p-[1rem] rounded-[0.5rem] bg-[#101010] cursor-pointer hover:shadow-lg`} >
                <a href={project.link}>
                    <div>
                        <img src="https://pbs.twimg.com/media/EZAXVBoWoAoqx0r.jpg" className={`w-[100%] h-[230px] relative object-cover rounded-[0.5rem]`}/>
                    </div>
                    <div className=" overflow-y pl-2 z-5 py-2">
                        <p><span className='text-[#CAFC01]'>{">"} </span> {project.title}</p>
                        <p className='text-[#CAFC01] text-[14px] pl-8'>{project.tech}</p>
                    </div>
                </a>
            </div>
        ))}
    </div>
  )
}
