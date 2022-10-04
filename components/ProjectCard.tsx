import React from 'react'
import { projects } from '../constants' 
import Image from 'next/image'


type Props = {}

export default function ProjectCard({}: Props) {
  return (
    <div className='md:flex md:flex-wrap justify-center align-middle mt-5'>
        {projects.map((project, index) => (
            <div key={index} className={`flex justify-center align-middle w-[270px] flex-col m-[2rem] border-[2px] hover:border-[#CAFC01] border-transparent p-[1rem] rounded-[0.5rem] bg-[#101010] cursor-pointer hover:shadow-lg`} >
                <a href={project.link}>
                    <div className='pt-0 mt-0 border-0 h-fill w-auto'>
                        {/* <Image src={project.image} layout='fill'/> */}
                        <iframe className={`bg-transparent w-[100%] h-[230px] relative object-cover rounded-[0.5rem]`} src={project.image} width="100%" frameBorder="0" scrolling='no' ></iframe>
                    </div>
                    <div className="pl-2 z-5 py-2">
                        <p><span className='text-[#CAFC01]'>{">"} </span> {project.title}</p>
                        <p className='text-[#CAFC01] text-[14px] pl-8'>{project.tech}</p>
                    </div>
                </a>
            </div>
        ))}
    </div>
  )
}
