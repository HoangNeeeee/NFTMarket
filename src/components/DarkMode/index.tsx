"use client"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"

export function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(true)
    useEffect(() => {
        const htmlClasses = document.querySelector("html")?.classList
        if (isDarkMode) {
            document.querySelector("html")?.classList.add("dark")
        } else {
            htmlClasses?.remove("dark")
        }
    }, [isDarkMode])
    return (
        <div className="flex items-center ">
            {isDarkMode ? (
                <FontAwesomeIcon
                    className="bg-[#3B3B3B] w-[30px] h-[30px]"
                    icon={faSun as IconProp}
                    title="Light Mode"
                    color="white"
                    onClick={() => setIsDarkMode((prevState) => !prevState)}
                />
            ) : (
                <FontAwesomeIcon
                    className="bg-white w-[30px] h-[30px]"
                    icon={faMoon as IconProp}
                    title="Dark Mode"
                    onClick={() => setIsDarkMode((prevState) => !prevState)}
                />
            )}
        </div>
    )
}
