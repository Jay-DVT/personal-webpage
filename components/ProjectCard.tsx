import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '../constants' 

type Props = {}



export default function ProjectCard({}: Props) {
    const [hovered, Hovered] = useState(false);
    function mouseEnter() {
        Hovered(true);
    }
    function mouseLeave() {
        Hovered(false);
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
                <a href={project.link} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <div className='pt-0 mt-0 border-0 h-fill w-auto'>
                        <Image key={project.title} src={project.image} alt={project.title} layout={"responsive"}></Image>
                        {/* <Image src={project.image} layout='fill'/> */}
                        {/* <iframe className={`bg-transparent w-[100%] h-[230px] relative object-cover rounded-[0.5rem]`} src={project.image} width="100%" frameBorder="0" scrolling='no' ></iframe> */}
                    </div>
                    <motion.div 
                    variants={variants}
                    animate={hovered ? "hover" : "initial"}
                    key={index}
                    // whileHover={{y: 100}}
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
