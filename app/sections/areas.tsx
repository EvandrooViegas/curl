"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Section from '../components/Section'
import { areas } from '../areas'
import { MdArrowForward } from "react-icons/md";

export default function Areas() {
  const [currAreaIdx, setCurrentAreaIdx] = useState(0)
  const currAreaRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const addAnimation = (callback: () => void) => {
    currAreaRef.current?.classList.remove(`translate-x-0`)
    currAreaRef.current?.classList.remove(`opacity-100`)


    currAreaRef.current?.classList.add(`opacity-0`)


    currAreaRef.current?.classList.add(`translate-x-[-999px]`)
    setTimeout(() => {
      callback()
      currAreaRef.current?.classList.remove(`translate-x-[999px]`)
      currAreaRef.current?.classList.add(`translate-x-[999px]`)
      setTimeout(() => {
        currAreaRef.current?.classList.remove(`translate-x-[999px]`)
        currAreaRef.current?.classList.add(`translate-x-0`)

        currAreaRef.current?.classList.remove(`opacity-0`)
        currAreaRef.current?.classList.add(`opacity-100`)

        imgRef.current?.classList.remove(`rotate-[6deg]`)
        imgRef.current?.classList.remove(`rotate-0`)
        imgRef.current?.classList.add(`rotate-[6deg]`)
        setTimeout(() => {
          imgRef.current?.classList.add(`rotate-0`)

        }, 150)
      }, 150);
    }, 150)


  }
  const next = () => {
    addAnimation(() => {
      currAreaIdx === areas.length - 1
        ? setCurrentAreaIdx(0)
        : setCurrentAreaIdx(currAreaIdx + 1)
    })
  }

  const currArea = areas[currAreaIdx]

  return (
    <Section title='Training areas' subtitle='Everything you need to get in shape' description='+5 complete areas to fit all of your needs'>
      <div className='relative transition-all max-w-[999px] mx-auto bg-foreground p-12 overflow-hidden' >
        <div className='flex  items-center '>
          <div ref={currAreaRef} className='bg-primary relative transition-all duration-150 '>
            <Image ref={imgRef} src={currArea.image} width={400} height={300} alt='Image' className='transition-all object-center object-cover scale-110 rota' />
          </div>
        </div>
        <div className='absolute right-10 top-1/2 -translate-y-1/2'>
          <ul className='flex flex-col gap-3 md:text-[80px] text-7xl'>
            {areas.map(area => area.name).map(name => (
              <li key={name}
                className={`transition-all font-extrabold leading-none ${name === currArea.name? 'opacity-100' : 'opacity-30'}`}
                style={name !== currArea.name ? {
                  "WebkitTextFillColor": "transparent",
                  "WebkitTextStroke": "0.5px var(--primary)"
                } : {
                  "WebkitTextFillColor": "white",
                  
                }}>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <button className='absolute right-10 bottom-10 text-6xl hover:text-primary' onClick={next}>
          <MdArrowForward />
        </button>
      </div>
      <div>
      </div>
    </Section>
  )
}
