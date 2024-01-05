import React from "react"
import Image from "next/image"

function userProfile() {
    return (
        <div className="relative w-full">
            <div className="relative bg-gradient-to-b from-[#00000000] to-[#A259FF] flex mb-20">
                <Image
                    className="bg-gradient-to-b from-[#00000000] to-[#A259FF] w-full "
                    src="/BackgroundImageOfUserProfile.png"
                    width={1000}
                    height={500}
                    alt=""
                />
                <div className="absolute mt-64 px-[115px]">
                    <Image
                        className=""
                        src="/AvatarUserProfile.svg"
                        width={120}
                        height={120}
                        alt=""
                    />
                </div>
            </div>
            <div className="w-full flex gap-[100px] px-[115px] py-[40px]">
                <div>
                    <div className="flex flex-col gap-[30px]">
                        <div>
                            <h1 className="font-sans text-[51px] font-semibold text-white">
                                AnimaKid
                            </h1>
                        </div>
                        <div className="flex gap-[20px]">
                            <div>
                                <h1 className="font-sans text-[28px] font-semibold text-white">
                                    250k+
                                </h1>
                                <h1 className="font-sans text-[22px] text-white">
                                    Volume
                                </h1>
                            </div>
                            <div>
                                <h1 className="font-sans text-[28px] font-semibold text-white">
                                    50+
                                </h1>
                                <h1 className="font-sans text-[22px] text-white">
                                    NFTs Sold
                                </h1>
                            </div>
                            <div>
                                <h1 className="font-sans text-[28px] font-semibold text-white">
                                    3000+
                                </h1>
                                <h1 className="font-sans text-[22px] text-white">
                                    Followers
                                </h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-mono text-[22px] font-bold text-[#858584]">
                                Bio
                            </h1>
                            <h1 className="font-sans text-[22px] text-white">
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
                <div className="flex flex-row gap-[20px]">
                    <h1 className="flex w-[190px] h-[60px] bg-[#A259FF] rounded-2xl items-center justify-center">
                        Button
                    </h1>
                    <h1 className="flex w-[145px] h-[60px] border-[2px] rounded-2xl items-center justify-center">
                        Button
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default userProfile
