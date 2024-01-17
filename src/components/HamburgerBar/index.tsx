"use client"

import React, { useState, useEffect } from "react"

export interface HamburgerProps {
    /** Callback function, which should be executed on click */
    onClick?: () => void

    /** Initial state of our button */
    isInitiallyOpen?: boolean
}

export function Hamburger(props: HamburgerProps) {
    const { onClick, isInitiallyOpen } = props
    const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false)

    useEffect(() => {
        // Set the initial state of the button
        if (isInitiallyOpen !== undefined) {
            setIsOpen(isInitiallyOpen)
        }
    }, [])

    const handleClick = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <button
            onClick={handleClick}
            type="button"
            className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer`}
        >
            <div
                className={`bg-white block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
                    isOpen ? "rotate-[34deg]" : "rotate-0"
                }`}
            />
            <div
                className={`bg-white block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
                    isOpen ? "hidden bg-transparent" : "translate-x-0"
                }`}
            />
            <div
                className={`bg-white block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
                    isOpen ? "rotate-[-34deg]" : "rotate-0"
                }`}
            />
        </button>
    )
}
