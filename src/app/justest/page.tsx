"use client"
import React, { useState } from "react"

function HelloWorldButton() {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
        console.log("Hello World")
    }

    return (
        <button onClick={handleClick}>
            {clicked ? "Hello World" : "Click Me"}
        </button>
    )
}

export default HelloWorldButton
