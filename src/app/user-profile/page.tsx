"use client"
import { Discover } from "@/components"
import { useCopyToClipboard } from "@/hooks"
import Image from "next/image"
import { toast } from "react-toastify"
import { Tabs } from "antd"
import type { TabsProps } from "antd"
import "./index.css"
import { max } from "lodash"
import AntDesignNoti from "@/components/AntDesignNoti"

// Hàm thay đổi view theo key
const onChange = (key: string) => {
    console.log(key)
}
// View của Created
const CreatedView = () => {
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
// View của Owned
const OwnedView = () => {
    const markets = [
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
// View của Collection
const CollectionView = () => {
    const markets = [
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
// Hàm chứa các key của các view khác nhau và thay đổi view khi click chọn các tab
const items: TabsProps["items"] = [
    {
        key: "1",
        label: "Created",
        children: <CreatedView />,
    },
    {
        key: "2",
        label: "Owned",
        children: <OwnedView />,
    },
    {
        key: "3",
        label: "Collection",
        children: <CollectionView />,
    },
]
// Usercode: mỗi một user sẽ có riêng 1 code khác nhau usercode được render random bằng thuật toán SHA-512
// Hàm random usercode và click copy to clipboard
function userProfile() {
    const crypto = require("crypto")
    let timestamp = new Date().getTime()
    console.log(timestamp.toString())

    // const buf = crypto.randomBytes(60)
    const hash = crypto
        .createHash("sha512")
        .update(timestamp.toString())
        .digest("hex")
    const [value, copy] = useCopyToClipboard()

    const onCLick = () => {
        copy(hash)
        // copy(buf)
        toast("This has been copied")
    }
    return (
        <div className="relative w-full z-10 xsm:pt-[20px] md:pt-0">
            <div className="relative bg-gradient-to-b from-[#00000000] to-[#A259FF] flex mb-20">
                <Image
                    className="bg-gradient-to-b from-[#00000000] to-[#A259FF] w-full "
                    src="/BackgroundImageOfUserProfile.png"
                    width={1000}
                    height={500}
                    alt=""
                />
                {/* Ảnh đại diện của người dùng */}
                <div className="absolute flex xsm:justify-center sm:px-[127px] md:mt-32 md:px-[72px] lg:mt-80 lg:px-[115px]">
                    <Image
                        className=""
                        src="/BlackCat.svg"
                        width={120}
                        height={120}
                        alt=""
                    />
                </div>
            </div>
            <div className="w-full flex justify-between md:flex-col xsm:px-[30px] md:px-[72px] lg:px-[115px] py-[40px]">
                <div>
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex xsm:justify-center sm:justify-normal">
                            <h1 className="font-sans xsm:text-[28px] lg:text-[51px] font-semibold dark:text-white text-black">
                                AnimaKid
                            </h1>
                        </div>
                        <div className="flex xsm:justify-center xsm:items-center sm:items-start sm:justify-normal xsm:flex-col sm:flex-row gap-[20px]">
                            <button
                                onClick={onCLick}
                                className="flex w-[190px] h-[60px] gap-3 bg-[#A259FF] rounded-2xl items-center justify-center px-2"
                            >
                                <Image
                                    src="CopyImage.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                <h1 className="text-white  font-sans font-semibold truncate">
                                    {hash}
                                    {/* {buf} */}
                                </h1>
                            </button>
                            <button className="flex w-[190px] h-[60px] border-[2px] rounded-2xl gap-3 items-center justify-center">
                                <Image
                                    src="plus.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                <h1 className="dark:text-white text-black font-sans font-semibold">
                                    Follow
                                </h1>
                            </button>
                        </div>
                        <div className="flex xsm:justify-between sm:justify-normal gap-[20px]">
                            <div>
                                <h1 className="font-sans text-[28px] font-semibold dark:text-white text-black">
                                    250k+
                                </h1>
                                <h1 className="font-sans text-[22px] dark:text-white text-black">
                                    Volume
                                </h1>
                            </div>
                            <div>
                                <h1 className="font-sans text-[28px] font-semibold dark:text-white text-black">
                                    50+
                                </h1>
                                <h1 className="font-sans text-[22px] dark:text-white text-black">
                                    NFTs Sold
                                </h1>
                            </div>
                            <div>
                                <h1 className="font-sans text-[28px] font-semibold dark:text-white text-black">
                                    3000+
                                </h1>
                                <h1 className="font-sans text-[22px] dark:text-white text-black">
                                    Followers
                                </h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-mono text-[22px] font-bold text-[#858584]">
                                Bio
                            </h1>
                            <h1 className="font-sans text-[22px] dark:text-white text-black">
                                The internet's friendliest designer kid.
                            </h1>
                        </div>
                        <div>
                            <h1 className="font-mono text-[22px] font-bold text-[#858584]">
                                Links
                            </h1>
                            <div className="flex gap-[10px]">
                                <Image
                                    src="Globe.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                                <Image
                                    src="DiscordLogo.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                                <Image
                                    src="YoutubeLogo.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                                <Image
                                    src="TwitterLogo.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                                <Image
                                    src="InstagramLogo.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-[20px] xsm:hidden">
                    <button
                        onClick={onCLick}
                        className="flex w-[190px] h-[60px] gap-3 bg-[#A259FF] rounded-2xl items-center justify-center px-2"
                    >
                        <Image
                            src="CopyImage.svg"
                            alt=""
                            width={20}
                            height={20}
                        />
                        <h1 className="text-white  font-sans font-semibold truncate">
                            {hash}
                            {/* {buf} */}
                        </h1>
                    </button>
                    <button className="flex w-[190px] h-[60px] border-[2px] rounded-2xl gap-3 items-center justify-center">
                        <Image src="plus.svg" alt="" width={20} height={20} />
                        <h1 className="dark:text-white text-black font-sans font-semibold">
                            Follow
                        </h1>
                    </button>
                </div>
            </div>
            <hr className="h-[2px]" />
            <div className="flex flex-wrap gap-[30px] w-full justify-centers dark:text-white text-black font-sans font-semibold text-[22px]">
                <Tabs
                    className=""
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default userProfile
