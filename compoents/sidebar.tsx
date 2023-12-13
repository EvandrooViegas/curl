"use client"
import React, { HTMLAttributes, useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"
type Props = {
    isOpen: boolean,
    close: () => void
    children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>
export default function Sidebar(props: Props) {
    const { close, isOpen, children, className, ...rest } = props
    console.log(className)
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
    return (
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`transition-all fixed inset-0 flex justify-end bg-black/30 backdrop-blur`}
                        onClick={onClick}
                    >
                        <motion.div initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }} ref={modalRef} className='bg-foreground text-white '
                        >
                            <div className={`p-24 h-full ${className}`} {...rest} >
                            {children}
                            </div>
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
    )
}
