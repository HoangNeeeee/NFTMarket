"use client"
import { max } from "lodash"
import React from "react"
export function RankingCreator(props: {
    indexNumber: number
    imageSrc: string
    artistName: string
    changePercent: string
    quantitySold: string
    quantityInStock: string
}) {
    const {
        artistName,
        changePercent,
        imageSrc,
        indexNumber,
        quantityInStock,
        quantitySold,
    } = props
    return (
        <div className="px-[115px] w-full">
            <button className="bg-[#3B3B3B] flex items-center justify-between w-full text-white px-5 py-5 rounded-2xl hover:scale-90 transition-all ease-in-out duration-500">
                <div className="flex w-auto items-center justify-center gap-[20px]">
                    <div className="bg-[#2B2B2B] w-7 h-7 rounded-2xl flex items-center justify-center">
                        <h1 className="font-mono text-[#858584]">
                            {indexNumber}
                        </h1>
                    </div>
                    <div className="relative">
                        <img
                            className="flex w-[60px] h-[60px]"
                            src={imageSrc}
                            alt="Image"
                        />
                    </div>
                    <h1 className="font-sans text-xl font-semibold">
                        {artistName}
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    <div className="mr-40 text-[#00AC4F]">
                        <h1>+{Math.floor(Math.random() * 12) + 1}%</h1>
                    </div>
                    <div className="mr-48 ">
                        <h1>{Math.floor(Math.random() * 500) + 1}</h1>
                    </div>
                    <div className="mr-32">
                        <h1>{(Math.random() * 20).toFixed(2)}</h1>
                    </div>
                </div>
            </button>
        </div>
    )
}
