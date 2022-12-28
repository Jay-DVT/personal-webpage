import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { menu, xMark } from "../assests";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

//toggle mobile menu
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header
      id="navbar"
      className={`z-50 onTopHeader  
      ${ navbar ? "header duration-700" : "" } 
      ${ mobileMenu ? "backdrop-blur-sm z-10 fixed top-0 left-0 overflow-x-hidden pt-8 w-auto  " : ""}
      `}
    >
      <div className="hidden sm:flex justify-center sticky top-0 font-bold max-w-7xl z-50 mx-auto sm:text-[18px] text-[50px] items-center">
        {/* Invisible button used to achieve the other button's right position */}
        <Button
          style={"hidden md:inline-flex text-black invisible"}
          content={"Resume"}
        />
        <div
          id="header-anchor-container"
          className="py-[35px] sm:flex hidden space-x-[45px] justify-center mx-auto"
        >
          {/* Shortcuts */}
          <a className="hover:text-[#CAFC01]" href="#home">
            {" "}
            {"//"}{" "}
            <span>
              {/* Typewriter is used for 1 time per link, they have varying speeds to make it look different */}
              <Typewriter words={[" Home"]} typeSpeed={Math.random() * 700} />
            </span>
          </a>
          <a className="hover:text-[#CAFC01]" href="#about">
            {" "}
            {"//"}{" "}
            <span>
              <Typewriter
                words={[" About"]}
                typeSpeed={Math.random() * 700}
                delaySpeed={2000}
              />
            </span>
          </a>
          <a className="hover:text-[#CAFC01] hidden" href="#experience">
            {" "}
            {"//"}{" "}
            <span>
              {/* Typewriter is used for 1 time per link, they have varying speeds to make it look different */}
              <Typewriter
                words={[" Experience"]}
                typeSpeed={Math.random() * 700}
              />
            </span>
          </a>
          <a className="hover:text-[#CAFC01] " href="#projects">
            {" "}
            {"//"}{" "}
            <span>
              <Typewriter
                words={[" Projects"]}
                typeSpeed={Math.random() * 700}
              />
            </span>
          </a>

          <a className="hover:text-[#CAFC01]" href="#contact">
            {" "}
            {"//"}{" "}
            <span>
              <Typewriter
                words={[" Contact"]}
                typeSpeed={Math.random() * 700}
                delaySpeed={1000}
              />
            </span>
          </a>
        </div>
        {/* Resume link button */}
        <a href="https://drive.google.com/file/d/10fxvwxnmU2DTqoLRri4tQ_vL2Jro6uzX/view?usp=sharing">
          <motion.div
            /* Entrance animation for the button */
            initial={{
              x: 100,
              opacity: 0,
              scale: 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 2 }}
          >
            {/* button takes extra parameters for reusability later down the line, content: inside Text */}
            <Button
              style={"hidden px-[56px] lg:inline-flex  xl:mr-[0px] mr-[30px]"}
              content={"Resume"}
            />
          </motion.div>
        </a>
      </div>
      {/* Mobile menu */}
      <button className={`sm:hidden mt-4 ml-7 ${mobileMenu ? 'collapse hidden' : 'top-4 left-4'} `} onClick={toggleMobileMenu}>
        <Image src={menu} width={70} height={65} ></Image>
      </button>
      <div id="mobileNav" className={`flex flex-col pb-4 ${mobileMenu ? 'ml-8 h-auto w-16' : 'hidden w-0'} `}>
        <button className="text-lg closebtn" onClick={toggleMobileMenu}>
          <Image src={xMark} width={70} height={65} ></Image>
        </button>
        <a onClick={toggleMobileMenu} className={'text-[24px] pt-2, pr-2, pb-2, pl-5'} href="#home">Home</a>
        <a onClick={toggleMobileMenu} className={'text-[24px] pt-2, pr-2, pb-2, pl-5'} href="#about">About</a>
        <a onClick={toggleMobileMenu} className={'text-[24px] pt-2, pr-2, pb-2, pl-5 hidden'}  href="#experience">Experience</a>
        <a onClick={toggleMobileMenu} className={'text-[24px] pt-2, pr-2, pb-2, pl-5'} href="#projects">Projects</a>
        <a onClick={toggleMobileMenu} className={'text-[24px] pt-2, pr-2, pb-2, pl-5'} href="#contact">Contact</a>
      </div>
    </header>
  );
}
