"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React, { HTMLAttributes, useEffect, useRef } from 'react'
type Props = {
    isOpen: boolean,
    close: () => void
    children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>
export default function Sidebar(props: Props) {
    const { close, isOpen, children, className, ...rest } = props

    const modalRef = useRef<HTMLDivElement | null>(null);
    const onClick = (e: any) => {
        const dimentions = modalRef.current?.getBoundingClientRect();
        if (!dimentions) return;

        if (
            e.clientX < dimentions?.left ||
            e.clientX > dimentions?.right ||
            e.clientY < dimentions?.top ||
            e.clientY > dimentions?.bottom
        ) {
            close()
        }
    }

    useEffect(() => {
        if(isOpen) {
            window.document.body.classList.add("overflow-y-hidden")
            window.document.body.classList.remove("overflow-y-auto")
        } else {
            window.document.body.classList.remove("overflow-y-hidden")
            window.document.body.classList.add("overflow-y-auto")
        }
    }, [isOpen])
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.aside
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`fixed inset-0 flex justify-end bg-black/40`}
                    onClick={onClick}
                >
                   <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        ref={modalRef}
                        className='bg-black/50 backdrop-blur-xl text-white h-full '
                    >
                        <div {...rest} className={`p-20  h-full ${className}`}  >
                            {children}
                        </div>
                    </motion.div>
                </motion.aside>
            )}
        </AnimatePresence>
    )
}