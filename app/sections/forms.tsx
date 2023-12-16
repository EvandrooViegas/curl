"use client"
import React, { useState } from 'react'
import Section from '../components/Section'
import Button from '../components/Button'
import { toast } from 'react-toastify';
import AnimateElement from '@/app/components/AnimateElement';

export default function Forms() {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const onSubmit = (e: any) => {
        e.preventDefault()
        if(!title ||!email ||!message) return toast.error("You must all fields")
        if(!email.includes("@")) return toast.error("Invalid email")
        toast.success("Message sent")
    }
    return (
        <Section className='  flex justify-center items-center ' title='Contact us' subtitle='We are waiting for you'>
            <AnimateElement element='form'  onSubmit={onSubmit}  className='w-full  grid md:grid-cols-2 gap-4 max-w-[1000px] '>
                <input onChange={(e) => setTitle(e.target.value)} name='title' className='outline-none w-full bg-transparent border border-foreground p-4 placeholder:text-neutral-500' placeholder='Title' />
                <input onChange={(e) => setEmail(e.target.value)} name='email' className='outline-none w-full bg-transparent border border-foreground p-4 placeholder:text-neutral-500' placeholder='Email' />
                <textarea onChange={(e) => setMessage(e.target.value)} name='message' className='outline-none w-full col-span-2 bg-transparent border border-foreground p-4 placeholder:text-neutral-500' placeholder='Message' />
                <Button  black className='w-fit font-semibold px-8'>
                    Send
                </Button>
            </AnimateElement>
        </Section>
    )
}
