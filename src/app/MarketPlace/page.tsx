import React from "react";
import Image from "next/image";

export default function Market() {
  return (
    <main>
      <div>
        <div className="flex flex-col h-full gap-[30px] lg:px-[115px] lg:py-[80px] md:px-[77px] md:py-[60px] px-[30px] py-[40px]">
          <div>
            <h1 className="text-white lg:w-full font-sans text-[28px] md:text-[38px] lg:text-[51px] font-semibold mb-2">
              Browse Marketplace
            </h1>
            <h1 className="text-white font-sans sm:text-[16px] lg:text-[22px] lg:w-full">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </h1>
          </div>
          <div className="w-full px-5 h-[60px] mt-[30px] flex justify-center items-center border-[1px] border-[#858584] rounded-[20px]">
            <input
              className="w-full bg-[#2B2B2B] outline-none"
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
        <div>
          <div className="flex justify-center items-center px-[115px] h-[70px]">
            <div className="flex justify-center items-center bg-[#2B2B2B] text-white w-1/2">
              ABCD
            </div>
            <div className="flex justify-center items-center bg-[#2B2B2B] text-white w-1/2">
              DCBA
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3B3B3B] pt-[60px] pb-[80px]">abcd</div>
      <hr />
    </main>
  );
}
