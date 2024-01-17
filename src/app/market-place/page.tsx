"use client"
import React from "react"
import Image from "next/image"
import { Discover } from "@/components"
import { Tabs } from "antd"
import type { TabsProps } from "antd"
import "./index.css"

export default function Market() {
    const onChange = (key: string) => {
        console.log(key)
    }
    const NFTsView = () => {
        const markets = [
            {
                ImageSrc: "MarketImage1.svg",
                AvatarSrc: "MarketAvatar1.svg",
                Name: "Magic Mushroom 0325",
                UserName: "Shroomie",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage2.svg",
                AvatarSrc: "MarketAvatar2.svg",
                Name: "Happy Robot 032",
                UserName: "BeKind2Robots",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage3.svg",
                AvatarSrc: "MarketAvatar3.svg",
                Name: "Happy Robot 024",
                UserName: "BeKind2Robots",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage4.svg",
                AvatarSrc: "MarketAvatar4.svg",
                Name: "Designer Bear",
                UserName: "Mr Fox",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage5.svg",
                AvatarSrc: "MarketAvatar5.svg",
                Name: "Colorful Dog 0356",
                UserName: "Keepitreal",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage6.svg",
                AvatarSrc: "MarketAvatar6.svg",
                Name: "Dancing Robot 0312",
                UserName: "Robotica",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage7.svg",
                AvatarSrc: "MarketAvatar7.svg",
                Name: "Cherry Blossom Girl 035",
                UserName: "MoonDancer",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage8.svg",
                AvatarSrc: "MarketAvatar8.svg",
                Name: "Space Travel",
                UserName: "NebulaKid",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage9.svg",
                AvatarSrc: "MarketAvatar9.svg",
                Name: "Sunset Dimesion",
                UserName: "AnimaKid",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage10.svg",
                AvatarSrc: "MarketAvatar10.svg",
                Name: "Desert Walk",
                UserName: "Catch 22",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage11.svg",
                AvatarSrc: "MarketAvatar11.svg",
                Name: "IceCream Ape 0324",
                UserName: "Ice Ape Club",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage12.svg",
                AvatarSrc: "MarketAvatar12.svg",
                Name: "Colorful Dog 0344",
                UserName: "Puppy Power",
                Price: "1.63",
                Bid: "0.33",
            },
        ]
        return (
            <div className="dark:bg-[#3B3B3B] bg-[#eeeee4] flex flex-wrap gap-[30px] w-full justify-center xsm:px-[30px] xsm:py-[40px] md:py-[60px] md:px-[77px] lg:px-[115px] ">
                {markets.map((market) => (
                    <Discover
                        ImageSrc={market.ImageSrc}
                        AvatarSrc={market.AvatarSrc}
                        Name={market.Name}
                        UserName={market.UserName}
                        Price={market.Price}
                        Bid={market.Bid}
                        type="secondary"
                    />
                ))}
            </div>
        )
    }
    const CollectionsView = () => {
        const markets = [
            {
                ImageSrc: "MarketImage2.svg",
                AvatarSrc: "MarketAvatar2.svg",
                Name: "Happy Robot 032",
                UserName: "BeKind2Robots",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage3.svg",
                AvatarSrc: "MarketAvatar3.svg",
                Name: "Happy Robot 024",
                UserName: "BeKind2Robots",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage4.svg",
                AvatarSrc: "MarketAvatar4.svg",
                Name: "Designer Bear",
                UserName: "Mr Fox",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage5.svg",
                AvatarSrc: "MarketAvatar5.svg",
                Name: "Colorful Dog 0356",
                UserName: "Keepitreal",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage6.svg",
                AvatarSrc: "MarketAvatar6.svg",
                Name: "Dancing Robot 0312",
                UserName: "Robotica",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage7.svg",
                AvatarSrc: "MarketAvatar7.svg",
                Name: "Cherry Blossom Girl 035",
                UserName: "MoonDancer",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage8.svg",
                AvatarSrc: "MarketAvatar8.svg",
                Name: "Space Travel",
                UserName: "NebulaKid",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage9.svg",
                AvatarSrc: "MarketAvatar9.svg",
                Name: "Sunset Dimesion",
                UserName: "AnimaKid",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage10.svg",
                AvatarSrc: "MarketAvatar10.svg",
                Name: "Desert Walk",
                UserName: "Catch 22",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage11.svg",
                AvatarSrc: "MarketAvatar11.svg",
                Name: "IceCream Ape 0324",
                UserName: "Ice Ape Club",
                Price: "1.63",
                Bid: "0.33",
            },
            {
                ImageSrc: "MarketImage12.svg",
                AvatarSrc: "MarketAvatar12.svg",
                Name: "Colorful Dog 0344",
                UserName: "Puppy Power",
                Price: "1.63",
                Bid: "0.33",
            },
        ]
        return (
            <div className="dark:bg-[#3B3B3B] bg-[#eeeee4] flex flex-wrap gap-[30px] w-full justify-center xsm:px-[30px] xsm:py-[40px] md:py-[60px] md:px-[77px] lg:px-[115px] ">
                {markets.map((market) => (
                    <Discover
                        ImageSrc={market.ImageSrc}
                        AvatarSrc={market.AvatarSrc}
                        Name={market.Name}
                        UserName={market.UserName}
                        Price={market.Price}
                        Bid={market.Bid}
                        type="secondary"
                    />
                ))}
            </div>
        )
    }
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "NFTs",
            children: <NFTsView />,
        },
        {
            key: "2",
            label: "Collections",
            children: <CollectionsView />,
        },
    ]
    return (
        <main>
            <div>
                <div className="flex flex-col h-full gap-[30px] lg:px-[115px] lg:py-[80px] md:px-[77px] md:py-[60px] px-[30px] py-[40px]">
                    <div>
                        <h1 className="dark:text-white text-black lg:w-full font-sans text-[28px] md:text-[38px] lg:text-[51px] font-semibold mb-2">
                            Browse Marketplace
                        </h1>
                        <h1 className="dark:text-white text-black font-sans sm:text-[16px] lg:text-[22px] lg:w-full">
                            Browse through more than 50k NFTs on the NFT
                            Marketplace.
                        </h1>
                    </div>
                    <div className="w-full px-5 h-[60px] mt-[30px] flex justify-center items-center border-[1px] border-[#858584] rounded-[20px]">
                        <input
                            className="w-full dark:bg-[#2B2B2B] bg-white outline-none"
                            placeholder="Search your favourite NFTs"
                        ></input>
                        <Image
                            className=""
                            src="/magnifyingglass.svg"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
                <hr />
            </div>
            <div className="flex flex-wrap gap-[30px] w-full justify-centers dark:text-white text-black font-sans font-semibold text-[22px]">
                <Tabs
                    className=""
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                />
            </div>
            <hr />
        </main>
    )
}
