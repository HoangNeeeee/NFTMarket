"use client"
import Image from "next/image"
export function Creator(props: {
    imageSrc: string
    indexNumber: number
    title: string
    price: string
    handleItemClick: (a: number) => void
}) {
    return (
        <div>
            <button
                className="bg-[#3B3B3B] text-white w-full lg:h-[238px] px-5 py-5 rounded-2xl flex lg:flex-col xsm:flex-row justify-center items-center hover:scale-90 transition-all ease-in-out duration-500"
                onClick={() => props.handleItemClick(props.indexNumber)}
            >
                <div className="relative">
                    <img
                        className="flex xsm:h-[60px] xsm:w-[60px] lg:h-[120px] lg:w-[120px]"
                        src={props.imageSrc}
                        alt={props.imageSrc}
                    />
                    <div className="bg-[#2B2B2B] w-7 h-7 absolute xsm:-top-2 xsm:-left-2 md:-left-1 md:-top-1 lg:top-0 lg:left-0 rounded-2xl flex items-center justify-center">
                        <h1 className="w-[10] h-[22] font-mono text-[#858584]">
                            {props.indexNumber}
                        </h1>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <h1 className="font-sans text-xl font-semibold">
                        {props.title}
                    </h1>
                    <div className="flex">
                        <h1 className="font-sans text-base text-[#858584]">
                            Total Sales:
                        </h1>
                        <h1 className="ml-2 font-mono text-base">
                            {props.price}
                        </h1>
                    </div>
                </div>
            </button>
        </div>
    )
}
