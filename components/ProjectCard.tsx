import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '../constants' 

type Props = {}



export default function ProjectCard({}: Props) {
    const [selected, setSelected] = useState(-1)
    
    const toggle = (i: number) => {
        setSelected(i)
    }
    const variants = {
        hover: {
          y: -30,
        },
        initial: {
          x: 0,
          scale: 1
        }
    };

    return (
    <div className='md:flex overflow-x-auto md:flex-wrap justify-center align-middle mt-5'>
        {projects.map((project, index) => (
            <div key={index} className={`flex justify-center align-middle w-[270px] flex-col m-[2rem] border-[2px] hover:border-[#CAFC01] border-transparent p-[1rem] rounded-[0.5rem] bg-[#101010] cursor-pointer hover:shadow-lg`} >
                <a href={project.link} onMouseEnter={() => toggle(index)} onMouseLeave={() => toggle(-1)}>
                    <div className='pt-0 mt-0 border-0 h-fill w-auto'>
                        <Image key={project.title} src={project.image} alt={project.title} priority></Image>
                    </div>
                    <motion.div 
                    variants={variants}
                    animate={`${selected === index ? "hover" : "initial"}`}
                    key={index}
                    className="bg-[#101010] pl-2 z-5 py-2">
                        <p><span className='text-[#CAFC01]'>{">"} </span> {project.title}</p>
                        <p className='text-[#CAFC01] text-[14px] pl-8'>{project.tech}</p>
                    </motion.div>
                </a>
            </div>
        ))}
    </div>
  )
}
