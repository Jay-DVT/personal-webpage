import React from 'react'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex flex-row items-center justify-center sticky top-0'>
      <div id='header-anchor-container' className='py-[35px] flex space-x-4 justify-center items-center '>
        {/* Shortcuts */}
        <a href="#Home">// Home</a>
        <a href="#About">// About</a>
        <a href="#Projects">// Projects</a>
        <a href="#Contact">// Contact</a>
      </div>
        {/* Resume link button */}
      <button className='absolute right-0 mr-[7%] hidden md:inline-flex'>
        Resume
      </button>
    </header>
  )
}