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
        <div className="xsm:px-[30px] lg:px-[115px] w-full">
            <button className="dark:bg-[#3B3B3B] bg-[#eeeee4] flex items-center justify-between w-full dark:text-white text-black px-5 py-5 rounded-2xl hover:scale-90 transition-all ease-in-out duration-500">
                <div className="flex w-auto items-center justify-center gap-[20px]">
                    <div className="dark:lg:bg-[#2B2B2B] bg-white w-7 h-7 rounded-2xl flex items-center justify-center font-mono">
                        <h1 className="w-full font-mono text-[#858584] mx-[10px]">
                            {indexNumber}
                        </h1>
                    </div>
                    <div className="contents ">
                        <img
                            // className="flex xsm:w-[24px] xsm:h-[24px] !lg:w-[60px] lg:h-[60px]"
                            className="flex object-contain w-[24px] h-[24px] lg:w-[60px] lg:h-[60px]"
                            src={imageSrc}
                            alt="Image"
                        />
                    </div>
                    <h1 className="font-sans w-full h-[24px] xsm:text-base md:text-xl flex items-center">
                        {artistName}
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    <div className="md:flex xsm:hidden md:w-36 text-[#00AC4F] font-mono">
                        <h1>+{(Math.random() * 12 + 1).toFixed(2)}%</h1>
                    </div>
                    <div className="lg:flex xsm:hidden md:w-44 font-mono">
                        <h1>{Math.floor(Math.random() * 500) + 1}</h1>
                    </div>
                    <div className="flex md:w-48 font-mono xsm:w-[80px]">
                        <h1>{(Math.random() * 20).toFixed(2)} ETH</h1>
                    </div>
                </div>
            </button>
        </div>
    )
}
