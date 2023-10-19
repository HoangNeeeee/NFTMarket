import React from "react";
import { TrendingImage } from "@/components";

export const TredingCollection = () => {
  return (
    <div className="px-[30px] py-[40px] md:px-[72px] md:py-[40px] lg:px-[117px] lg:py-[80px] text-white">
      <div className="">
        <p className="text-4xl w-full h-auto font-sans font-semibold">
          Trending Collections
        </p>
        <p className="mt-2 text-xl">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="justify-center flex mt-16 gap-10 ">
        <div>
          <TrendingImage
            src1="/PrimaryPhotoPlaceholder.svg"
            src2="/SecondaryPhotoPlaceholderMeo.svg"
            src3="/SecondaryPhotoPlaceholderGau.svg"
            src4="/AvatarPlaceholderFox.svg"
            title1="DSGN Animals"
            title2="MrFox"
          />
        </div>
        <div className="xsm:hidden sm:flex">
          <div>
            <TrendingImage
              src1="/PrimaryPhotoPlaceholder1.svg"
              src2="/SecondaryPhotoPlaceholderNam1.svg"
              src3="/SecondaryPhotoPlaceholderNam2.svg"
              src4="/AssetNam.svg"
              title1="Magic Mushrooms"
              title2="Shroomie"
            />
          </div>
        </div>
        <div className="xsm:hidden md:flex">
          <div>
            <TrendingImage
              src1="/PrimaryPhotoPlaceholderRobot.svg"
              src2="/SecondaryPhotoPlaceholderRobot1.svg"
              src3="/SecondaryPhotoPlaceholderRobot2.svg"
              src4="/AvatarPlaceholderRobot.svg"
              title1="Disco Machines"
              title2="BeKinds2Robots"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
