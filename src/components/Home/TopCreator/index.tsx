"use client"
import React, { useState } from "react"
import { Creator } from "@/components"
import Image from "next/image"

const creators = [
    {
        src1: "Anh1.svg",
        title2: "Keepitreal",
        title3: `${(Math.random() * 51).toFixed(2)} ETH`,
    },
    {
        src1: "Anh2.svg",
        title2: "DigiLab",
        title3: `${(Math.random() * 51).toFixed(2)} ETH`,
    },
    {
        src1: "Anh3.svg",
        title2: "GravityOne ",
        title3: `${(Math.random() * 51).toFixed(2)} ETH`,
    },
    {
        src1: "Anh4.svg",
        title2: "DigiLab",
        title3: `${(Math.random() * 51).toFixed(2)} ETH`,
    },
    {
        src1: "Anh5.svg",
        title2: "DigiLab",
        title3: `${(Math.random() * 51).toFixed(2)} ETH`,
    },
    {
        src1: "Anh6.svg",
        title2: "DigiLab",
        title3: `${(Math.random() * 51).toFixed(2)} ETH`,
    },
    {
        src1: "Anh7.svg",
        title2: "DigiLab",
        title3: `${(Math.random() * 51).toFixed(2)} ETH`,
    },
    {
        src1: "Anh8.svg",
        title2: "DigiLab",
        title3: `${(Math.random() * 51).toFixed(2)} ETH`,
    },
    {
        src1: "Anh9.svg",
        title2: "DigiLab",
        title3: `${(Math.random() * 51).toFixed(2)} ETH`,
    },
    {
        src1: "Anh10.svg",
        title2: "DigiLab",
        title3: `${(Math.random() * 51).toFixed(2)} ETH`,
    },
    {
        src1: "Anh11.svg",
        title2: "DigiLab",
        title3: `${(Math.random() * 51).toFixed(2)} ETH`,
    },
    {
        src1: "Anh12.svg",
        title2: "DigiLab",
        title3: `${(Math.random() * 51).toFixed(2)} ETH`,
    },
]
export function TopCreator() {
    const [creator, setCreator] = useState(creators)

    const handleClick = (id: number) => {
        const newCreators = creator.filter((item, index) => index !== id)
        setCreator(newCreators)
    }

    const handleAddClick = () => {
        let newObject = {
            src1: `Anh${Math.floor(Math.random() * 12) + 1}.svg`,
            title2: creators[Math.floor(Math.random() * creator.length)]
                ?.title2,
            title3: `${Math.floor(Math.random() * 51)} ETH`,
        }
        console.log(newObject)
        setCreator((creators) => [newObject, ...creators])
    }

    return (
        <div>
            <div className="px-[30px] pt-[40px] md:px-[72px] md:pt-[40px] lg:pt-[80px] lg:px-[115px] dark:text-white text-black flex xsm:flex-col md:flex-row justify-between">
                <div className="">
                    <h1 className="text-4xl w-full font-sans font-semibold capitalize">
                        Top Creators
                    </h1>
                    <p className="capitalize mt-2 text-xl font-sans">
                        Checkout top rated creator on the NFT marketplace
                    </p>
                </div>
                <div className="flex items-end">
                    <button className="bg-[#4343] w-[220px] h-[60px] rounded-2xl border-2 border-violet-600 flex justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                        <a className="flex" href="/ranking">
                            <Image
                                className="mr-3"
                                src="RocketLaunch.svg"
                                alt="Rocket"
                                width={20}
                                height={20}
                            />
                            View Ranking
                        </a>
                    </button>
                </div>
            </div>
            <div className="px-[30px] pt-[40px] md:px-[72px] md:pt-[40px] lg:pt-[80px] lg:px-[115px] w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:grid-cols-4">
                    {creators.map((creator, index) => (
                        <Creator
                            imageSrc={creator.src1}
                            indexNumber={index + 1}
                            title={creator.title2}
                            price={creator.title3}
                            handleItemClick={handleClick}
                        />
                    ))}
                </div>
                {/* <div className="flex justify-center gap-60">
                    <button
                        className="text-white text-lg w-[100px] mt-10 bg-pink-600 rounded-2xl"
                        onClick={() => {
                            handleAddClick()
                        }}
                    >
                        Thêm
                    </button>
                </div> */}
            </div>
        </div>
    )
}
