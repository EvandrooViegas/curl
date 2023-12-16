"use client"

import React, { useEffect, useState } from 'react'
import { IoIosMenu } from "react-icons/io"
import Button from './Button'
import Sidebar from './Sidebar'
import AnimateElement from './AnimateElement'
import { AnimatePresence } from 'framer-motion'
const links = ["Home", "About", "Workout Planks", "Testimonials", "Contact"]
let prevY = 0
export default function Navbar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [showTransparentBg, setShowTransparentBg] = useState(true)
  const scrollHandler = () => {
    if (window.scrollY <= window.innerHeight) {
      setShowTransparentBg(true)
    } else {
      setShowTransparentBg(false)
    }

    if (window.scrollY > prevY || window.scrollY <= 50) {
      setShow(true)
    } else {
      setShow(false)
    }
    prevY = window.scrollY
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])
  return (
    <AnimatePresence>

      {show && (
        <AnimateElement 
         animate={{ opacity: [0, 1], y: [-10, 0] }} 
         exit={{ opacity: 0, y: -10 }} 
         initial={{ opacity: 0, y: -10 }} 
         element="nav" 
         className={`fixed top-0 inset-x-0 
         ${showTransparentBg ? 'bg-transparent' : 'bg-background'} 
         ${showTransparentBg ? '' : 'shadow-lg'}  
         nav-z`}
        >
          <div className='max-app-width mx-auto  px-12 py-6 text-lg  flex items-center justify-between text-white'>
            <Logo />
            <ul className='md:flex hidden items-center gap-5'>
              <NavLinks />
            </ul>
            <div className='md:flex hidden gap-2 '>
              <NavButtons />
            </div>

            <button className='md:hidden flex text-3xl' onClick={() => setIsSideBarOpen(true)}>
              <IoIosMenu />
            </button>
          </div>
          <Sidebar close={() => setIsSideBarOpen(false)} isOpen={isSideBarOpen} className='flex flex-col justify-between  ' >
            <Logo />
            <div className='text-lg space-y-4'>
              <span className='font-semibold'>Links:</span>
              <ul className='flex flex-col '>
                <NavLinks />
              </ul>
            </div>
            <div className='flex gap-2 '>
              <NavButtons />
            </div>
          </Sidebar>
        </AnimateElement>
      )}
    </AnimatePresence>
  )
}

function Logo() {
  return (
    <span className='text-3xl font-semibold'>FITNESS</span>

  )
}


function NavLinks() {

  return (
    <>
      {links.map(link => (
        <li key={link} className='md:no-underline underline text-neutral-300 text-[15px]'>
          <span>{link}</span>
        </li>
      ))}
    </>

  )
}


function NavButtons() {

  return (
    <>
      <Button outline >Login</Button>
      <Button black >Register</Button>
    </>

  )
}