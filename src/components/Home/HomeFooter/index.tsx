import React from "react";
import Image from "next/image";
import { NMButton } from "@/components/NMButton";
export const HomeFooter = () => {
  return (
    <div className="flex justify-center items-center pt- px-[30px] md:px-[72px] lg:px-[115px] ">
      <div className="flex justify-center md:bg-[#3B3B3B] gap-[80px] w-full mb-[80px] rounded-[20px] md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[60px] flex-col md:flex-row">
        <div className="flex object-cover justify-center">
          <Image
            className="md:w-[100%]  rounded-2xl flex flex-col w-[100%] relative md:h-auto object-cover h-[310px]"
            src="AstronautPhoto.svg"
            alt=""
            width={425}
            height={310}
          />
        </div>
        <div className="">
          <h1 className="text-[28px] lg:text-[38px] font-sans font-semibold text-[#FFFFFF]">
            Join Our Weekly Digest
          </h1>
          <h1 className="text-[22px] mb-[40px] font-sans text-[#FFFFFF]">
            Get exclusive promotions & updates straight to your inbox.
          </h1>
          <div className=" flex flex-col mt-5 md:bg-[#ffffff] rounded-2xl gap-4 md:w-[390px] md:relative">
            <input
              className="rounded-2xl px-4 placeholder-[#2B2B2B] outline-none w-full h-[46px] md:w-[230px] md:h-[60px]"
              type="email"
              // required
              placeholder="Enter Your Email Address"
            />
            {/* <button className="md:h-[60px] h-[46px] bg-[#A259FF] md:right-0 rounded-2xl md:absolute transform duration-500 hover:scale-95">
              <h1 className="px-12 text-white">Subscribe</h1>
            </button> */}
            <div className="md:right-0 md:absolute">
              <NMButton title="Subscribe" className="md:h-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
