import React from 'react'
import ProjectCard from './ProjectCard'


type Props = {}

export default function Projects({}: Props) {
  return (
    <div className='h-screen flex relative flex-col max-w-7xl px-10 md:justify-center mx-auto items-center'>
      <div className="relative flex flex-col py-5 items-center">
        <p className='md:text-[40px] text-[28px] font-bold'>Projects</p>
        <div className="flex-grow border-t border-white w-[80%]"></div>
      </div>
      <ProjectCard />
    </div>
  )
}