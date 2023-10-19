"use client"
import React, { useState } from "react"
function page() {
    const [lists, setLists] = useState(["1"])

    return (
        <div className="bg-white">
            {lists.map((item, index) => {
                return (
                    <div key={index}>
                        {item}
                        <button>X</button>
                    </div>
                )
            })}
        </div>
    )
}

export default page
