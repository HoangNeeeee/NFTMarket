import React from "react"
import Image from "next/image"
import { Discover, NMButton } from "@/components"

export const DiscoverNFT = () => {
    return (
        <div className="lg:px-[115px] md:px-[72px] xsm:px-[30px] pt-20 pb-20 ">
            <div className="flex flex-row xsm:flex-col text-white justify-between mb-14">
                <div>
                    <h1 className="text-4xl w-full font-sans font-semibold capitalize ">
                        Discover More NFTs
                    </h1>
                    <p className="capitalize mt-2 font-sans text-xl">
                        Explore New Trending NFTs
                    </p>
                </div>
                <div className="flex">
                    <NMButton
                        title="See All"
                        iconSrc="Eye.svg"
                        type="secondary"
                    />
                </div>
            </div>
            <div className="flex justify-center gap-8 grid-cols-2">
                <button>
                    <Discover
                        ImageSrc="AnhAvatar1.svg"
                        AvatarSrc="Avatar1.svg"
                        Name="Distant Galaxy"
                        UserName="MoonDancer"
                        Price="1.63"
                        Bid="0.33"
                    />
                </button>
                <button>
                    <Discover
                        ImageSrc="AnhAvatar2.svg"
                        AvatarSrc="Avatar2.svg"
                        Name="Distant Galaxy"
                        UserName="MoonDancer"
                        Price="1.63"
                        Bid="0.33"
                    />
                </button>
                <button className="">
                    <Discover
                        ImageSrc="AnhAvatar3.svg"
                        AvatarSrc="Avatar3.svg"
                        Name="Distant Galaxy"
                        UserName="MoonDancer"
                        Price="1.63"
                        Bid="0.33"
                    />
                </button>
            </div>
        </div>
    )
}
