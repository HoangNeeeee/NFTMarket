"use client"

import Image from "next/image"
import React from "react"
import { twMerge } from "tailwind-merge"

type NMButtonType = "primary" | "secondary" | "whitebg"

const theme = {
    primary: {
        bgColor: "bg-[#A259FF]",
        borderColor: "",
        textColor: "dark:text-white text-black",
        borderWidth: "border-0",
    },
    secondary: {
        bgColor: "bg-transparent",
        borderColor: "border-[#A259FF]",
        textColor: "dark:text-white text-black",
        borderWidth: "border-[1px]",
    },
    whitebg: {
        bgColor: "bg-white",
        borderColor: "",
        textColor: "text-black ",
        borderWidth: "border-0",
    },
}

interface NMButtonProps {
    title?: string
    iconSrc?: string
    type?: NMButtonType
    className?: string
}

export const NMButton = (props: NMButtonProps) => {
    const { title, iconSrc, type = "primary", className } = props
    return (
        <button
            className={twMerge(
                `lg:w-[180px] lg:h-[60px] xsm:w-full xsm:h-[46px] rounded-2xl transform duration-500 hover:scale-95 flex items-center justify-center px-12 ${theme[type].bgColor} ${theme[type].borderWidth} ${theme[type].borderColor}`,
                className
            )}
        >
            {iconSrc && (
                <Image
                    className="mr-3 text-white"
                    src={iconSrc}
                    alt="Mat"
                    width={20}
                    height={20}
                />
            )}
            <h1 className={`${theme[type].textColor}`}>{title}</h1>
        </button>
    )
}
