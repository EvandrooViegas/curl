import React, { ComponentProps } from 'react'
import { FiBox } from "react-icons/fi";
import Section from '../components/Section';
import AnimateElement from '@/compoents/AnimateElement';
function getAnimationProps(i: number) {
    return {
        animateOnce: false,
        animateOnView: true,
        animate: {
            opacity: [0, 1],
            translateX:  i % 2 === 0 ? [70, 0] : [-70, 0] ,
            transition: { duration: 0.8, delay: 0.5 * i }
        },
    } as ComponentProps<typeof AnimateElement>
}

export default function Features() {
    return (
        <Section
            className='flex flex-col items-center '
            description='Experience the benefits of personalized training with a certified fitness trainer'
            title='FEATURES'
            subtitle='Unlock Your Fitness Potential'>

            <div className='md:grid md:grid-cols-2 flex flex-col gap-5'>
                <Card i={1} title='Customized Workout Plans' description='Tailored workout plans designed specifically for your fitness goals and needs' />
                <Card i={2} title='Customized Workout Plans' description='Tailored workout plans designed specifically for your fitness goals and needs' />
                <Card i={3} title='Customized Workout Plans' description='Tailored workout plans designed specifically for your fitness goals and needs' />
                <Card i={4} title='Customized Workout Plans' description='Tailored workout plans designed specifically for your fitness goals and needs' />
            </div>
        </Section>
    )
}

function Card({
    title,
    description,
    i
}: {
    title: string,
    description: string,
    i: number
}) {
    return (
        <AnimateElement {...getAnimationProps(i)}  className='flex gap-8 p-8 text-lg bg-foreground'>
            <div className='text-3xl flex items-center md:items-start'>
                <FiBox />

            </div>
            <div className='space-y-4 '>
                <span className=' font-semibold'>{title}</span>
                <p className='text-sm '>{description}</p>
            </div>
        </AnimateElement>
    )
}