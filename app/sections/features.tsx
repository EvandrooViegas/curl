import React from 'react'
import { FiBox } from "react-icons/fi";
import Section from '../components/Section';
export default function Features() {
    return (
        <Section 
        className='flex flex-col items-center ' 
        description='Experience the benefits of personalized training with a certified fitness trainer' 
        title='FEATURES' 
        subtitle='Unlock Your Fitness Potential'>

            <div className='md:grid md:grid-cols-2 flex flex-col gap-5'>
                <Card title='Customized Workout Plans' description='Tailored workout plans designed specifically for your fitness goals and needs' />
                <Card title='Customized Workout Plans' description='Tailored workout plans designed specifically for your fitness goals and needs' />
                <Card title='Customized Workout Plans' description='Tailored workout plans designed specifically for your fitness goals and needs' />
                <Card title='Customized Workout Plans' description='Tailored workout plans designed specifically for your fitness goals and needs' />
            </div>
        </Section>
    )
}

function Card({
    title,
    description
}: {
    title: string,
    description: string
}) {
    return (
        <div className='flex gap-8 p-8 text-lg bg-foreground'>
            <div className='text-3xl flex items-center md:items-start'>
                <FiBox />

            </div>
            <div className='space-y-4 '>
                <span className=' font-semibold'>{title}</span>
                <p className='text-sm '>{description}</p>
            </div>
        </div>
    )
}