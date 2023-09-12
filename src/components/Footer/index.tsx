"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import LogoIcon from "@/assets/icons/ic_logo.svg";
import UserIcon from "@/assets/icons/ic_user.svg";
import DiscordIcon from "@/assets/icons/ic_discord.svg";
import YoutubeIcon from "@/assets/icons/ic_youtube.svg";
import TwitterIcon from "@/assets/icons/ic_twitter.svg";
import InstagramIcon from "@/assets/icons/ic_instagram.svg";
export function Footer() {
  return (
    <footer className="py-10 flex flex-col bg-[#3B3B3B] justify-between lg:px-[115px] px-[30px] ">
      <div className="flex flex-col gap-[30px] lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:max-w-[250px]">
          <div className="flex flex-row items-center">
            <Image
              className="mr-4"
              priority
              src={LogoIcon}
              alt="logoicon"
              width={30}
              height={30}
            />
            <p className="text-white text-xl font-mono ">NFT Marketplace</p>
          </div>
          <p className=" text-[#CCCCCC] mt-[30px]">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="text-[#CCCCCC] mt-[20px]">Join our community</p>
          <div className="flex flex-row mt-[15px]">
            <a href="https://discord.com/users/585513543470940178/">
              <Image
                className="mr-4"
                priority
                src={DiscordIcon}
                alt="discordicon"
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.youtube.com/channel/UC4YdRDrGE2D5QsSX6QWGUJQ">
              <Image
                className="mr-4"
                priority
                src={YoutubeIcon}
                alt="youtubeicon"
                width={30}
                height={30}
              />
            </a>
            <a href="https://twitter.com/?lang=vi">
              <Image
                className="mr-4"
                priority
                src={TwitterIcon}
                alt="twittericon"
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.instagram.com/emhoangdangthooxy/">
              <Image
                className="mr-4"
                priority
                src={InstagramIcon}
                alt="instagramicon"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:max-w-[250px]">
          <div className="flex flex-col text-white text-xl font-mono">
            Explore
          </div>
          <p className=" text-[#CCCCCC] mt-[25px]">MarketPlace</p>
          <p className=" text-[#CCCCCC] mt-[20px]">Rankings</p>
          <p className=" text-[#CCCCCC] mt-[20px]">Connect a wallet</p>
        </div>
        <div className="flex flex-col flex-1 lg:max-w-[400px] relative">
          <div className="flex flex-row text-white text-xl font-mono">
            Join our weekly digest
          </div>
          <p className="text-[#CCCCCC] pr-20 mt-[25px]">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className=" flex flex-col mt-5 md:bg-[#ffffff] rounded-2xl gap-4 md:w-[390px] md:relative">
            <input
              className="rounded-2xl px-4 placeholder-[#2B2B2B] outline-none w-full h-[46px] md:w-[230px] md:h-[60px]"
              type="email"
              // required
              placeholder="Enter Your Email Address"
            />
            <button className="md:h-[60px] h-[46px] bg-[#A259FF] md:right-0 rounded-2xl md:absolute transform duration-500 hover:scale-95">
              <h1 className="px-12 text-white">Subscribe</h1>
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr className="mt-[30px]" />
      </div>
      {/* </div>  */}
      {/* <hr /> */}
      {/* <div className="grid grid-cols-1 divide-y bg-white mt-4"></div> */}
      <p className="text-white font-mono pt-5">
        Ⓒ NFT Market. Use this template freely.
      </p>
      <p className="text-white font-mono">Design By EmHoangDangThoOxy</p>
    </footer>
  );
}
