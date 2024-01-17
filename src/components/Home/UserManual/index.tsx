import React from "react"
import Image from "next/image"
export const Usermanual = () => {
    return (
        <div className="px-[30px] md:px-[72px] lg:px-[115px] dark:text-white text-black">
            <h1 className="font-sans text-[28px] lg:text-[38px] font-semibold mt-[40px]">
                How It Works
            </h1>
            <h1 className="font-sans text-[22px] mb-[48px]">
                Find Out How To Get Started
            </h1>
            <div className="flex flex-col md:flex-row gap-[30px] mb-[80px]">
                <div className="flex flex-row md:flex-col items-center px-[20px] py-[20px] md:px-[20px] md:pb-[30px] md:pt-[10px] lg:px-[30px] dark:text-white text-black h-auto md:h-[440px] w-full md:w-1/3 rounded-[20px]">
                    <div className="mt-[10px]">
                        <Image
                            className="flex"
                            src="Icon1.svg"
                            alt=""
                            width={250}
                            height={250}
                        />
                    </div>
                    <div>
                        <h1 className="font-sans text-[22px] font-semibold ">
                            Setup Your Wallet
                        </h1>
                        <h1 className="font-sans text-[16px]">
                            Set up your wallet of choice. Connect it to the
                            Animarket by clicking the wallet icon in the top
                            right corner.
                        </h1>
                    </div>
                </div>
                <div className="flex flex-row md:flex-col items-center px-[20px] py-[20px] md:px-[20px] md:pb-[30px] md:pt-[10px] lg:px-[30px] dark:text-white text-black h-auto md:h-[440px] w-full md:w-1/3 rounded-[20px]">
                    <div className="mt-[10px]">
                        <Image
                            className="flex "
                            src="Icon2.svg"
                            alt=""
                            width={250}
                            height={250}
                        />
                    </div>
                    <div>
                        <h1 className="font-sans text-[22px] font-semibold ">
                            Create Collection
                        </h1>
                        <h1 className="font-sans text-[16px]">
                            Upload your work and setup your collection. Add a
                            description, social links and floor price.
                        </h1>
                    </div>
                </div>
                <div className="flex flex-row md:flex-col items-center px-[20px] py-[20px] md:px-[20px] md:pb-[30px] md:pt-[10px] lg:px-[30px] dark:text-white text-black h-auto md:h-[440px] w-full md:w-1/3 rounded-[20px]">
                    <div className="mt-[10px]">
                        <Image
                            className="flex "
                            src="Icon3.svg"
                            alt=""
                            width={250}
                            height={250}
                        />
                    </div>
                    <div>
                        <h1 className="font-sans text-[22px] font-semibold ">
                            Start Earning
                        </h1>
                        <h1 className="font-sans text-[16px]">
                            Choose between auctions and fixed-price listings.
                            Start earning by selling your NFTs or trading
                            others.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
