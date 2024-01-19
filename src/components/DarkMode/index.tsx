"use client"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"

export function DarkMode() {
    const [theme, setTheme] = useState("dark" || "light")
    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.body.className = theme
    }, [theme])

    return (
        <div className="flex items-center ">
            {theme ? (
                <FontAwesomeIcon
                    className="dark:bg-[#3B3B3B] bg-white w-[30px] h-[30px]"
                    icon={faMoon as IconProp}
                    title="Dark Mode"
                    color="white"
                    onClick={toggleTheme}
                />
            ) : (
                <FontAwesomeIcon
                    className=" w-[40px] h-[40px]"
                    icon={faSun as IconProp}
                    title="Light Mode"
                    color="black"
                    onClick={toggleTheme}
                />
            )}
        </div>
    )
}
