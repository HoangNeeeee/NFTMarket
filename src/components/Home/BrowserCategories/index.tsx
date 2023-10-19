import React from "react";
import { Categories } from "@/components";
import Image from "next/image";

export const BrowserCategories = () => {
  return (
    <div className="px-[30px] pt-[40px] md:px-[72px] md:pt-[40px] lg:pt-[80px] lg:px-[115px] justify-between">
      <h1 className="text-white mb-14 xsm:text-[28px] lg:text-[38px] font-semibold font-sans">
        Browse Categories
      </h1>
      <div className="mb-20 text-white w-full">
        <div className="flex flex-wrap justify-center  gap-8">
          <div className="flex md:flex-row xsm:flex-col gap-8">
            <Categories src1="AnhA1.svg" src2="AnhAA1.svg" title="Art" />
            <Categories
              src1="AnhA2.svg"
              src2="AnhAA2.svg"
              title="Collectibles"
            />
            <Categories src1="AnhA3.svg" src2="AnhAA3.svg" title="Music" />
            <Categories
              src1="AnhA4.svg"
              src2="AnhAA4.svg"
              title="Photography"
            />
          </div>
          <div className="flex md:flex-row xsm:flex-col gap-8">
            <Categories src1="AnhA5.svg" src2="AnhAA5.svg" title="Video" />
            <Categories src1="AnhA6.svg" src2="AnhAA6.svg" title="Utility" />
            <Categories src1="AnhA7.svg" src2="AnhAA7.svg" title="Sport" />
            <Categories
              src1="AnhA8.svg"
              src2="AnhAA8.svg"
              title="Virtual Worlds"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
