import Image from "next/image"
import React from "react"

export const HomeHeading = () => {
    return (
        <div className="px-[30px] py-[40px] md:px-[72px] md:py-[80px] lg:px-[115px] w-full">
            <div className="justify-center">
                <div className="w-full h-auto flex flex-col md:flex-row justify-center gap-10">
                    <div className="md:w-1/2">
                        <h1 className="bg-white dark:bg-[#2B2B2B] dark:text-white xsm:text-[28px] md:text-[38px] lg:text-6xl h-auto lg:w-[510px] font-sans capitalize font-semibold">
                            Discover digital art & Collect NFTs
                        </h1>
                        <h2 className="bg-[#2B2B2B] text-white xsm:text-[16px] lg:text-[22px] lg:w-[510px] h-auto text-xl font-sans mt-[20px] mb-7 capitalize">
                            Nft marketplace UI created with Anima for Figma.
                            Collect, buy and sell art from more than 20k NFT
                            artists.
                        </h2>
                        <a className="w-[220px]" href="/sign-up">
                            <button className="bg-[#A259FF] md:w-[220px] h-[60px] xsm:w-full mt-[30px] flex items-center justify-center font-sans font-semibold text-white rounded-2xl bg-gradient-to-l from-[#9400FF] to-[#94FFFF] hover:bg-gradient-to-r hover:from-[#9400FF] hover:to-[#94FFFF] transition delay-500">
                                <Image
                                    className="mr-3"
                                    src="RocketLaunch2.svg"
                                    alt="RocketTrang"
                                    width={20}
                                    height={20}
                                />
                                Get Started
                            </button>
                        </a>
                        <div className="flex flex-row w-full h-auto xsm:justify-between lg:justify-start lg:gap-24 mt-[30px]">
                            <div className="w-full">
                                <h1 className="text-white w-full h-auto flex flex-col font-mono xsm:text-[22px] lg:text-[28px]">
                                    240k+
                                </h1>
                                <p className="text-white self-stretch w-full h-auto font-mono xsm:text-[16px] lg:text-[24px]">
                                    Total Sale
                                </p>
                            </div>
                            <div className="w-full">
                                <h1 className="text-white w-full h-auto flex flex-col font-mono xsm:text-[22px] lg:text-[28px]">
                                    100k+
                                </h1>
                                <p className="text-white self-stretch w-full h-auto font-mono xsm:text-[16px] lg:text-[24px]">
                                    Auctions
                                </p>
                            </div>
                            <div className="w-full">
                                <h1 className="text-white w-full h-auto flex flex-col font-mono xsm:text-[22px] lg:text-[28px]">
                                    240k+
                                </h1>
                                <p className="text-white self-stretch w-full h-auto font-mono xsm:text-[16px] lg:text-[24px]">
                                    Artists
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto md:w-[330px] md:h-[330px] lg:w-[624px] lg:h-[510px]">
                        <Image
                            className="object-cover"
                            src="/heroanimationtransparentbck-2.gif"
                            alt="anhphai"
                            width={510}
                            height={430}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
