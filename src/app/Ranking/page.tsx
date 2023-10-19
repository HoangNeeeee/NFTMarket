export default function Ranking() {
  return (
    <main>
      <div className="px-[115px] py-[80px]">
        <h1 className="text-[#FFF] font-sans text-[51px] font-semibold">
          Top Creators
        </h1>
        <h1 className="font-sans text-[22px] text-[#FFF]">
          Check out top ranking NFT artists on the NFT Marketplace.
        </h1>
      </div>
      <hr />
      <div className="flex justify-center items-center px-[115px] h-[70px]">
        <div className="flex justify-center items-center font-sans font-semibold text-22px bg-[#2B2B2B] text-white w-1/2">
          Today
        </div>
        <div className="flex justify-center items-center font-sans font-semibold text-22px bg-[#2B2B2B] text-white w-1/2">
          This Week
        </div>
        <div className="flex justify-center items-center font-sans font-semibold text-22px bg-[#2B2B2B] text-white w-1/2">
          This Month
        </div>
        <div className="flex justify-center items-center font-sans font-semibold text-22px bg-[#2B2B2B] text-white w-1/2">
          All Time
        </div>
      </div>
    </main>
  );
}
