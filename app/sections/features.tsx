import React from 'react'
import { FiBox } from "react-icons/fi";
export default function Features() {
    return (
        <div className='flex flex-col items-center py-6'>
            <span className='text-xs font-bold'>FEATURES</span>
            <div className='flex flex-col items-center gap-8'>

                <h3 className='text-3xl font-semibold'>Unlock Your Fitness Potencial</h3>
                <p>Experience the benefits of personalized training with a certified fitness trainer</p>
                <div className='grid grid-cols-2 gap-5'>
                    <Card title='Customized Workout Plans' description='Tailored workout plans designed specifically for your fitness goals and needs' />
                    <Card title='Customized Workout Plans' description='Tailored workout plans designed specifically for your fitness goals and needs' />
                    <Card title='Customized Workout Plans' description='Tailored workout plans designed specifically for your fitness goals and needs' />
                    <Card title='Customized Workout Plans' description='Tailored workout plans designed specifically for your fitness goals and needs' />
                </div>
            </div>
        </div>
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
        <div className='flex gap-8 p-8 text-lg bg-[#222222]'>
            <div className='text-3xl'>
                <FiBox />

            </div>
            <div className='space-y-4 '>
                <span className=' font-semibold'>{title}</span>
                <p className='text-sm '>{description}</p>
            </div>
        </div>
    )
}