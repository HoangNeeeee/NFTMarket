import React from "react";
import Image from "next/image";
import { Discover, NMButton } from "@/components";

export const DiscoverNFT = () => {
  return (
    <div className="px-24 pt-20 pb-20 ">
      <div className="flex flex-row text-white justify-between mb-14">
        <div>
          <h1 className="text-4xl w-full font-sans font-semibold capitalize ">
            Discover More NFTs
          </h1>
          <p className="capitalize mt-2 font-sans text-xl">
            Explore New Trending NFTs
          </p>
        </div>
        <div className="flex ">
          <NMButton title="See All" iconSrc="Eye.svg" type="secondary" />
          {/* <button className="bg-[#4343] w-[220px] h-[60px] rounded-2xl border-2 border-violet-600 flex justify-center items-center font-sans font-semibold text-base hover:scale-90 transition-all ease-in-out duration-500">
            <Image
              className="mr-3"
              src="Eye.svg"
              alt="Mat"
              width={20}
              height={20}
            />
            See All
          </button> */}
        </div>
      </div>
      <div className="flex justify-center gap-8">
        <button>
          <Discover
            ImageSrc="AnhAvatar1.svg"
            AvatarSrc="Avatar1.svg"
            Name="Distant Galaxy"
            UserName="MoonDancer"
            Price="1.63"
            Bid="0.33"
          />
        </button>
        <button>
          <Discover
            ImageSrc="AnhAvatar2.svg"
            AvatarSrc="Avatar2.svg"
            Name="Distant Galaxy"
            UserName="MoonDancer"
            Price="1.63"
            Bid="0.33"
          />
        </button>
        <button>
          <Discover
            ImageSrc="AnhAvatar3.svg"
            AvatarSrc="Avatar3.svg"
            Name="Distant Galaxy"
            UserName="MoonDancer"
            Price="1.63"
            Bid="0.33"
          />
        </button>
      </div>
    </div>
  );
};
