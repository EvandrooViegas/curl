import React, { HTMLAttributes } from 'react'

type Props = {
  children: React.ReactNode
  black?: boolean
  outline?: boolean
} & HTMLAttributes<HTMLButtonElement>
export default function Button(props: Props) {
  const { children, black, outline = false, ...rest } = props
  return (
    <button className={`${outline ? 'border border-white' : 'bg-primary'} px-4 py-2 ${black ? 'text-black' : 'text-white'}`} {...rest}>
      {children}
    </button>
  )
}
