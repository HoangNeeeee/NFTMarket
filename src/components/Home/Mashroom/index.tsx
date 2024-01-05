"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { NMButton } from "@/components"
import { useCountdown } from "usehooks-ts"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
const customParseFormat = require("dayjs/plugin/customParseFormat")
dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)

const destination = dayjs("20-11-2023 17:00:00", "DD/MM/YYYY HH:mm:ss")
export const Mashroom = () => {
    const [dateDiffToSecond, setDateDiffToSecond] = useState()

    // useEffect(() => {
    //     setInterval(() => {
    //         setDateDiffToSecond(destination.diff(dayjs(), "s"))
    //     }, 1000)
    // }, [])

    // const transformSecondToHours = (type: any) => {
    //     switch (type) {
    //         case "hour":
    //             return Math.floor(dateDiffToSecond / 3600)
    //         case "minute":
    //             return Math.floor((dateDiffToSecond % 3600) / 60)
    //         case "second":
    //             return (dateDiffToSecond % 3600) % 60
    //     }
    // }

    return (
        <div className="relative w-full h-[calc(0.5*100vw)]">
            <div className="relative flex md:flex-row xsm:flex-col bg-gradient-to-b from-white to-purple-600">
                <Image
                    className="absolute object-cover"
                    src="NFTHighlight.svg"
                    alt="anh"
                    fill
                />
            </div>
            <Image
                src="NFTHighlight.svg"
                alt="anh"
                fill
                className="object-cover h-auto z-0"
                style={
                    {
                        //   height: "calc(0.5*100vw)",
                    }
                }
            />
            <div className="bg-gradient-to-b from-[#00000000] to-[#A259FF] flex absolute w-full h-full z-10" />
            <div className="px-[115px] w-full absolute flex justify-between bottom-[60px] z-40">
                <div className="text-white flex self-end flex-col gap-[30px] font-sans font-semibold xsm:">
                    <h1 className="bg-[#3B3B3B] flex justify-center items-center gap-3 rounded-xl text-[16px] text-white w-[150px] h-[45px] px-[20px] py-[11px] ">
                        <Image
                            src="Avatar1.svg"
                            alt=""
                            width={20}
                            height={10}
                        />
                        Shroomie
                    </h1>
                    <h1 className="w-full lg:text-[51px] md:text-[38px]">
                        Magic Mushrooms
                    </h1>
                    <NMButton
                        title="See NFT"
                        iconSrc="Eye.svg"
                        type="whitebg"
                        className="px-0"
                    />
                </div>
                <div className="bg-[#3B3B3B] self-end p-8 rounded-2xl backdrop-blur-sm bg-opacity-50 text-white xsm:hidden">
                    <p className="font-mono text-[12px]">Auction end in:</p>
                    <div className="flex gap-[10px]">
                        <div className="flex flex-col">
                            <h1 className="font-mono text-[38px] font-bold">
                                {/* {transformSecondToHours("hour")} */}
                            </h1>
                            <h1>Hours</h1>
                        </div>
                        <div>
                            <h1 className="font-mono text-[28px] font-bold">
                                :
                            </h1>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-mono text-[38px] font-bold">
                                {/* {transformSecondToHours("minute")} */}
                            </h1>
                            <h1>Minutes</h1>
                        </div>
                        <div>
                            <h1 className="font-mono text-[28px] font-bold">
                                :
                            </h1>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-mono text-[38px] font-bold">
                                {/* {transformSecondToHours("second")} */}
                            </h1>
                            <h1>Seconds</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
