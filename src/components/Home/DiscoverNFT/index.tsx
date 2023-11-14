import React from "react"
import Image from "next/image"
import { Discover, NMButton } from "@/components"

export const DiscoverNFT = () => {
    return (
        <div className="lg:px-[115px] md:px-[72px] xsm:px-[30px] pt-20 pb-20">
            <div className="flex xsm:flex-col md:flex-row text-white justify-between mb-14">
                <div>
                    <h1 className="text-4xl w-full font-sans font-semibold capitalize ">
                        Discover More NFTs
                    </h1>
                    <p className="capitalize mt-2 font-sans text-xl">
                        Explore New Trending NFTs
                    </p>
                </div>
                <div className="flex">
                    <a className="flex" href="/market-place">
                        <NMButton
                            title="See All"
                            iconSrc="Eye.svg"
                            type="secondary"
                        />
                    </a>
                </div>
            </div>
            <div className="flex md:flex-row xsm:flex-col justify-center xsm:gap-20 ">
                <button>
                    <Discover
                        ImageSrc="AnhAvatar1.svg"
                        AvatarSrc="Avatar1.svg"
                        Name="Distant Galaxy"
                        UserName="MoonDancer"
                        Price={(Math.random() * 20).toFixed(2)}
                        Bid={(Math.random() * 5).toFixed(2)}
                    />
                </button>
                <button>
                    <Discover
                        ImageSrc="AnhAvatar2.svg"
                        AvatarSrc="Avatar2.svg"
                        Name="Distant Galaxy"
                        UserName="MoonDancer"
                        Price={(Math.random() * 20).toFixed(2)}
                        Bid={(Math.random() * 5).toFixed(2)}
                    />
                </button>
                <button className="md:hidden lg:flex">
                    <Discover
                        ImageSrc="AnhAvatar3.svg"
                        AvatarSrc="Avatar3.svg"
                        Name="Distant Galaxy"
                        UserName="MoonDancer"
                        Price={(Math.random() * 20).toFixed(2)}
                        Bid={(Math.random() * 5).toFixed(2)}
                    />
                </button>
            </div>
        </div>
    )
}
