"use client"

import Sidebar from '@/compoents/sidebar'
import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io"
import Button from './Button'
const links = ["Home", "About", "Workout Planks", "Testimonials", "Contact"]
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  return (
    <nav className='fixed top-0 inset-x-0 bg-background shadow-lg nav-z'>

      <div className='max-app-width mx-auto  px-12 py-6 text-lg  flex items-center justify-between text-white'>
        <Logo />
        <ul className='md:flex hidden items-center gap-5'>
          <NavLinks />
        </ul>
        <div className='md:flex hidden gap-12 '>
          <NavButtons />
        </div>

        <button className='md:hidden flex text-3xl' onClick={open}>
          <IoIosMenu />
        </button>
      </div>
      <Sidebar close={close} isOpen={isOpen} className='flex flex-col justify-between ' >
        <Logo />
        <div className='text-lg space-y-4'>
          <span className='font-semibold'>Links:</span>
          <ul className='flex flex-col '>
            <NavLinks />
          </ul>
        </div>
        <div className='flex flex-col gap-2 text-2xl'>
          <NavButtons />
        </div>
      </Sidebar>
     </nav>
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
        <li key={link}>
          <span>{link}</span>
        </li>
      ))}
    </>

  )
}


function NavButtons() {

  return (
    <>
      <button className='underline'>Login</button>
      <Button black >Register</Button>
    </>

  )
}