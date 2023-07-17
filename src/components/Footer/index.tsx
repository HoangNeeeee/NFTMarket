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
    <footer className="py-10 flex flex-col bg-[#2B2B2B] justify-between bg-slate-700 px-20">
      <div className="flex flex-col md:flex-row  justify-between">
        <div className="flex flex-col max-w-[250px]">
          <div className="flex flex-row items-center">
            <Image
              className="mr-4"
              priority
              src={LogoIcon}
              alt="logoicon"
              width={30}
              height={30}
            />
            <p className="text-[#CCCCCC] text-xl font-mono ">NFT Marketplace</p>
          </div>
          <p className="pt-6 text-[#CCCCCC]">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="pt-5 text-[#CCCCCC]">Join our community</p>
          <div className="flex flex-row">
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
            {/* <FontAwesomeIcon
            className="h-8 w-8 mt-2 text-gray-500"
            icon={faDiscord as IconProp}
          />
          <FontAwesomeIcon
            className="h-8 w-8 mt-2"
            icon={faTwitter as IconProp}
          /> */}
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
        <div className="flex flex-col max-w-[250px]">
          <div className="flex flex-col text-[#CCCCCC] text-xl font-mono">
            Explore
          </div>
          <p className="pt-6 text-[#CCCCCC]">MarketPlace</p>
          <p className="pt-5 text-[#CCCCCC]">Rankings</p>
          <p className="pt-5 text-[#CCCCCC]">Connect a wallet</p>
        </div>
        <div className="flex flex-col flex-1 max-w-[400px]">
          <div className="flex flex-row text-[#CCCCCC] text-xl font-mono">
            Join our weekly digest
          </div>
          <p className="pt-6 text-[#CCCCCC] pr-20">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex flex-row w-[390px] mt-5 bg-[#ffffff] rounded-2xl">
            <input
              className="rounded-2xl px-6 outline-none"
              placeholder="Email"
            />
            <button className="px-8 py-3 bg-[#A259FF] rounded-2xl left-[-20px] relative  transform duration-500 hover:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <hr className="mt-5" />
      </div>
      {/* </div>  */}
      {/* <hr /> */}
      {/* <div className="grid grid-cols-1 divide-y bg-white mt-4"></div> */}
      <p className="text-white font-mono">
        Ⓒ NFT Market. Use this template freely.
      </p>
      <p className="text-white font-mono">Design By EmHoangDangThoOxy</p>
    </footer>
  );
}
