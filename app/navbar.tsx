import React from 'react'

const links = ["Home", "About", "Workout Planks", "Testimonials", "Contact"]
export default function Navbar() {
  return (
    <div className='fixed top-0 inset-x-0 px-12 py-6 text-lg bg-[#161616] flex items-center justify-between text-white'>
        <span className='text-3xl font-semibold'>FITNESS</span>
        <ul className='flex items-center gap-5'>
        {links.map(link => (
            <li key={link}>
                <span>{link}</span>
            </li>
        ))}
        </ul>

        <div className='flex gap-12'>
            <button>Login</button>
            <button className='bg-primary px-4 py-1'>Register</button>
        </div>
    </div>
  )
}
