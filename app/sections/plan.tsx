import React from 'react'
import Section from '../components/Section'
import { FaCheck } from "react-icons/fa6";
import Button from '../components/Button';
const plans = [
  { title: "Free", description: 'Access to basic workout plans', price: 0, isFree: true, features: [
    "Access to beginner-level workout plans", 
    "Limited access to client testimonials", 
    "No personalized coaching", 
    "No access to advanced workout plans"
  ]},
  { title: "Basic", description: 'Access to intermediate workout plans', price: 29, features: [
    "All features of FREE plan", 
    "Access to intermediate-level workout plans", 
    "Limited access to client testimonials", 
    "Email support for inquiries",
    "No access to advanced workout plans"
  ]},
  { title: "Pro", description: 'AAccess to advanced workout plans', price: 49, features: [
    "All features of BASIC plan", 
    "Access to advanced-level workout plans", 
    "Full access to client testimonials", 
    "Email and phone support for inquiries",
    "Personalized coaching and guidance"
  ]},
]
export default function Plans() {
  return (
    <Section
    title="PRICING"
    subtitle="Choose the plan that suits your needs"
    description="We offer a wide range of plans to suit your needs"
    >
        <div className='md:grid md:grid-cols-3 flex flex-col gap-4'>
        {plans.map(p=> <Plan key={p.title} {...p} />)}
        </div>
    </Section>
  )
}

function Plan({
  title,
  description,
  price,
  features,
  isFree = false,
}: {
  title: string,
  description: string,
  price: number,
  features: string[],
  isFree?: boolean
}) {

  return (

    <div className='bg-foreground p-12 flex flex-col gap-12'>
      <span className='uppercase font-bold text-lg'>{title}</span>
      <p className='text-neutral-200'>{description}</p>
      <div>
        <span>$</span>
        <span className='text-7xl font-bold'>{price}</span>
        <span>/month</span>
      </div>
      <ul className='space-y-4'>
        {features.map(feature => (
          <li key={feature} className='flex items-center gap-8 text-sm'>
            <span><FaCheck /></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button outline={isFree}>
          {isFree ? 'Continue with Free' : `Try the ${title.toUpperCase()} plan`}
      </Button>
    </div>
  )
}