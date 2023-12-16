import React from 'react'
import Section from '../components/Section'
import Button from '../components/Button'
import AnimateElement from '@/app/components/AnimateElement'

function getAnimation(i: number) {
  return { opacity: [0, 1], transition: { duration: 3, delay: i * 0.5 } }
}
export default function Hero() {
  return (
    <Section backgroundClassName='relative hero-bg'>
      <div className='  absolute inset-0 bg-gradient-to-b from-black/70 to-background' />
      <div className="relative h-screen flex flex-col justify-center items-center gap-5  ">
        <AnimateElement animate={getAnimation(1)} element='h1' className='text-6xl font-bold text-center'>
          Get Fit with a Professional Trainer
        </AnimateElement>

        <AnimateElement animate={getAnimation(2)} element="p" className="text-center text-gray-300">
          Achieve your fitness goals with personalized workout plans
        </AnimateElement>

        <div className='flex items-center md:flex-row flex-col md:gap-12 gap-1'>
          <AnimateElement animate={getAnimation(3)} className="text-center text-gray-300">
            <Button >
              Start Training Now
            </Button>
          </AnimateElement>
          <AnimateElement animate={getAnimation(4)} className="text-center text-gray-300">
            <button className="font-bold">Learn More {"->"}</button>
          </AnimateElement>
        </div>
      </div>

    </Section>
  )
}
