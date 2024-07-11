import { RankingCreator } from "@/components/RankingCreator"
export default function ranking() {
    const ranking = [
        {
            imageSrc: "Anh1.svg",
            artistName: "Marcus Saris",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh2.svg",
            artistName: "Ruben Carder",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh3.svg",
            artistName: "Alfredo Septimus",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh4.svg",
            artistName: "Davis Franci",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh5.svg",
            artistName: "Livia Rosser",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh6.svg",
            artistName: "Kianna Donin",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh7.svg",
            artistName: "Phillip Lipshutz",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh8.svg",
            artistName: "Maria Rosser",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh9.svg",
            artistName: "Kianna Stanton",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh10.svg",
            artistName: "Angel Lubin",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh11.svg",
            artistName: "Allison Torff",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh12.svg",
            artistName: "Davis Workman",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
    ]
    return (
        <main className="mb-[20px] z-10 xsm:pt-[20px] md:pt-0">
            <div className="lg:px-[115px] lg:py-[80px] xsm:px-[30px] xsm:py-[30px]">
                <h1 className="dark:text-white text-black font-sans xsm:text-[28px] md:text-[38px] lg:text-[51px] font-semibold">
                    Top Creators
                </h1>
                <h1 className="font-sans xsm:text-[16px] lg:text-[22px] dark:text-white text-black">
                    Check out top ranking NFT artists on the NFT Marketplace.
                </h1>
            </div>
            <div className="md:flex justify-center items-center xsm:px-[30px] xsm:h-[60px] lg:px-[115px] lg:h-[70px] hidden">
                <div className="flex justify-center items-center font-sans font-semibold text-22px dark:bg-[#2B2B2B] bg-white dark:text-white text-black w-1/2">
                    Today
                </div>
                <div className="flex justify-center items-center font-sans font-semibold text-22px dark:bg-[#2B2B2B] bg-white dark:text-white text-black w-1/2">
                    This Week
                </div>
                <div className="flex justify-center items-center font-sans font-semibold text-22px dark:bg-[#2B2B2B] bg-white dark:text-white text-black w-1/2">
                    This Month
                </div>
                <div className="flex justify-center items-center font-sans font-semibold text-22px dark:bg-[#2B2B2B] bg-white dark:text-white text-black w-1/2">
                    All Time
                </div>
            </div>
            <div className="hidden xsm:flex md:hidden justify-center items-center">
                <div className="text-white font-sans font-semibold px-[30px]">
                    1d
                </div>
                <div className="text-white font-sans font-semibold px-[30px]">
                    7d
                </div>
                <div className="text-white font-sans font-semibold px-[30px]">
                    30d
                </div>
                <div className="text-white font-sans font-semibold px-[30px]">
                    All Time
                </div>
            </div>
            <div className="flex justify-center items-center xsm:px-[30px] xsm:h-[60px] lg:px-[115px] lg:h-[70px] mt-[40px] mb-[20px] px-[115px]">
                <div className="flex justify-between w-full px-[20px] border-[2px] dark:border-white border-black rounded-3xl">
                    <div className="flex gap-[35px]">
                        <h1 className="flex justify-center items-center ml-[10px] text-[#858584] font-mono">
                            #
                        </h1>
                        <h1 className="flex justify-center items-center font-mono text-[#858584] my-[12px]">
                            Artist
                        </h1>
                    </div>
                    <div className="flex items-stretch">
                        <h1 className="md:flex font-mono text-[#858584] md:w-36 xsm:hidden my-[12px]">
                            Change
                        </h1>
                        <h1 className="lg:flex font-mono text-[#858584] md:w-44 xsm:hidden my-[12px]">
                            NFTs Sold
                        </h1>
                        <h1 className="font-mono text-[#858584] xsm:w-20 md:w-48 my-[12px]">
                            Volume
                        </h1>
                    </div>
                </div>
            </div>
            <div>
                <a
                    href="/user-profile"
                    className="flex flex-col w-full py-[40px] gap-[20px]"
                >
                    {ranking.map((ranking, index) => (
                        <RankingCreator
                            key={index}
                            indexNumber={index + 1}
                            imageSrc={ranking.imageSrc}
                            artistName={ranking.artistName}
                            changePercent={ranking.changePercent}
                            quantityInStock={ranking.quantityInStock}
                            quantitySold={ranking.quantitySold}
                        />
                    ))}
                </a>
            </div>
        </main>
    )
}
