import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <div className="flex justify-between flex-col md:flex-row bg-[#2B2B2B]">
      <div className="md:w-[45%] flex flex-col w-full relative md:h-auto object-cover h-[300px]">
        <Image
          className="object-cover"
          src="WalletImage.svg"
          alt="WalletImage"
          fill
        />
      </div>
      <div className="flex flex-col md:w-1/2 h-full px-[30px] mb-[100px]">
        <div className="flex md:justify-start md:items-start justify-center items-center">
          <h1 className="flex justify-center items-center md:justify-start md:items-start text-white font-sans text-[51px] font-semibold w-[460px] mb-5">
            Connect Wallet
          </h1>
        </div>
        <div className="flex md:justify-start md:items-start justify-center items-center">
          <h1 className="text-white w-[320px] mb-10">
            Choose a wallet you want to connect. There are several wallet
            providers.
          </h1>
        </div>
        <div className="flex flex-col md:justify-start md:items-start justify-center items-center gap-y-5">
          <div className="flex items-center gap-5 bg-[#3B3B3B] w-[320px] h-[72px] rounded-[20px] px-10 border-2 border-[#A259FF]">
            <Image src="Metamask.svg" alt="" width={40} height={40} />
            <h1 className="text-white font-sans text-2xl font-semibold">
              Metamask
            </h1>
          </div>
          <div className="flex items-center gap-5 bg-[#3B3B3B] w-[320px] h-[72px] rounded-[20px] px-10 border-2 border-[#A259FF]">
            <Image src="WalletConnect.svg" alt="" width={40} height={40} />
            <h1 className="text-white font-sans text-2xl font-semibold">
              Wallet Connect
            </h1>
          </div>
          <div className="flex items-center gap-5 bg-[#3B3B3B] w-[320px] h-[72px] rounded-[20px] px-10 border-2 border-[#A259FF]">
            <Image src="Coinbase.svg" alt="" width={40} height={40} />
            <h1 className="text-white font-sans text-2xl font-semibold">
              Coinbase
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
