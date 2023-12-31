"use client"
import React from 'react'
import Section from '../components/Section'
import { Typewriter } from 'react-simple-typewriter'
export default function Phrase() {
    return (
        <Section backgroundClassName='bg-primary text-3xl text-black font-semibold'>
            <Typewriter typeSpeed={40} words={["Embrace a holistic transformation by nurturing your body and mind, sculpting a resilient physique, and fostering mental resilience through a journey of mindful self-discovery and positive habits."]} />

        </Section>
    )
}
