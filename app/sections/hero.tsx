import React from 'react'
import Section from '../components/Section'
import Button from '../components/Button'

export default function Hero() {
  return (
    <Section backgroundClassName='bg-gradient-to-b from-background to-foreground' className=" flex flex-col gap-5  items-center  ">
      <h1 className="text-6xl font-bold text-center">
        Get Fit with a Professional Trainer
      </h1>
      <p className="text-center text-gray-300">
        Achieve your fitness goals with personalized workout plans
      </p>
      <div className='flex md:flex-row flex-col md:gap-12 gap-1'>
       <Button>
       Start Training Now
       </Button>
        <button className="font-bold">Learn More {"->"}</button>
      </div>
    </Section>
  )
}
