import React from "react"
import Image from "next/image"
export default function wallet() {
    return (
        <div className="flex justify-between flex-col md:flex-row dark:bg-[#2B2B2B] bg-white xsm:pt-[20px] md:pt-0">
            <div className="md:w-[45%] flex flex-col w-full relative md:h-auto object-cover h-[300px]">
                <Image
                    className="object-cover"
                    src="WalletImage.svg"
                    alt="WalletImage"
                    fill
                />
            </div>
            <div className="flex flex-col md:w-1/2 h-full px-[30px] mb-[100px]">
                <div className="flex md:justify-start md:items-start justify-center items-center">
                    <h1 className="flex justify-start items-start dark:text-white text-black font-sans xsm:text-[38px] lg:text-[51px] font-semibold w-[460px] mb-5">
                        Connect Wallet
                    </h1>
                </div>
                <div className="flex justify-start items-start">
                    <h1 className="dark:text-white xsm:text-[16px] lg:text-[22px] text-black w-[320px] mb-10">
                        Choose a wallet you want to connect. There are several
                        wallet providers.
                    </h1>
                </div>
                <div className="flex flex-col md:justify-start md:items-start justify-center items-center gap-y-5">
                    <button className="flex items-center gap-5 dark:bg-[#3B3B3B] bg-white w-[320px] h-[72px] rounded-[20px] px-10 border-2 border-[#A259FF] hover:scale-90 transition-all ease-in-out duration-500">
                        <Image
                            src="Metamask.svg"
                            alt=""
                            width={40}
                            height={40}
                        />
                        <a
                            href="https://portfolio.metamask.io/"
                            className="dark:text-white text-black font-sans text-2xl font-semibold"
                        >
                            Metamask
                        </a>
                    </button>
                    <button className="flex items-center gap-5 dark:bg-[#3B3B3B] bg-white w-[320px] h-[72px] rounded-[20px] px-10 border-2 border-[#A259FF] hover:scale-90 transition-all ease-in-out duration-500">
                        <Image
                            src="WalletConnect.svg"
                            alt=""
                            width={40}
                            height={40}
                        />
                        <a
                            href="https://walletconnect.com/"
                            className="dark:text-white text-black font-sans text-2xl font-semibold"
                        >
                            Wallet Connect
                        </a>
                    </button>
                    <button className="flex items-center gap-5 dark:bg-[#3B3B3B] bg-white w-[320px] h-[72px] rounded-[20px] px-10 border-2 border-[#A259FF] hover:scale-90 transition-all ease-in-out duration-500">
                        <Image
                            src="Coinbase.svg"
                            alt=""
                            width={40}
                            height={40}
                        />
                        <a
                            href="https://www.coinbase.com/"
                            className="dark:text-white text-black font-sans text-2xl font-semibold"
                        >
                            Coinbase
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
