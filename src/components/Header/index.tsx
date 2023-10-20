"use client"

import { useBreakpoint } from "@/hooks"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
export function Header() {
    const linkStyle = {
        marginRight: 15,
    }
    function MenuBar() {
        const [isOpen, setIsOpen] = useState(false)

        const toggleMenu = () => {
            setIsOpen((open) => !open)
        }
    }

    const breakpoint = useBreakpoint()

    return (
        <header className="py-1 md:py-3 lg:py-5 px-7 flex flex-row bg-[#3B3B3B] justify-between">
            <div className="flex flex-row items-center">
                <Image
                    className="mr-4"
                    priority
                    src="Storefront.svg"
                    alt="logoicon"
                    width={30}
                    height={30}
                />
                <button>
                    <a href="/">
                        <p className="text-white text-xl lg:text-3xl font-mono">
                            NFT Marketplace
                        </p>
                    </a>
                </button>
            </div>
            {breakpoint.xl && (
                <div className={"flex flex-col md:flex-row items-center"}>
                    <button>
                        <a href="/market-place">
                            <p className="flex flex-row items-center text-white mr-12 font-mono font-extrabold hover:scale-90 transition-all ease-in-out duration-500">
                                MarketPlace
                            </p>
                        </a>
                    </button>
                    <button>
                        <a href="/ranking">
                            <p className="flex flex-row items-center text-white mr-12 font-mono font-extrabold hover:scale-90 transition-all ease-in-out duration-500">
                                Ranking
                            </p>
                        </a>
                    </button>
                    <button>
                        <a href="/wallet">
                            <p className="flex flex-row items-center text-white mr-12 font-mono font-extrabold hover:scale-90 transition-all ease-in-out duration-500">
                                Collect A Wallet
                            </p>
                        </a>
                    </button>
                    <button className="bg-[#A259FF] gap-2 py-4 px-7 text-white font-sans font-semibold rounded-3xl flex flex-row items-center hover:scale-90 transition-all ease-in-out duration-500">
                        <a href="/sign-up">
                            <div className="flex">
                                <Image
                                    src="/user.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                <p className="">Sign Up</p>
                            </div>
                        </a>
                    </button>
                </div>
            )}
            {!breakpoint.xl && (
                <div className="flex">
                    <button>
                        <Image
                            src="/menubar.svg"
                            width={30}
                            height={30}
                            alt=""
                        />
                    </button>
                </div>
            )}
        </header>
    )
}
