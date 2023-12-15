"use client"
import { ToastContainer } from 'react-toastify';
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
export default function Providers({
    children
}: {
    children: React.ReactNode
}) {
  return (
    <>
    {children}
    <ToastContainer />
    </>
  )
}
