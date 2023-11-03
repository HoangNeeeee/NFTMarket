import { RankingCreator } from "@/components/RankingCreator"
export default function ranking() {
    const ranking = [
        {
            imageSrc: "Anh1.svg",
            artistName: "Jaydon Ekstrom",
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
            artistName: "Kianna Stanton",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh11.svg",
            artistName: "Kianna Stanton",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
        {
            imageSrc: "Anh12.svg",
            artistName: "Kianna Stanton",
            changePercent: "10",
            quantityInStock: "10",
            quantitySold: "10",
        },
    ]
    return (
        <main className="mb-[20px]">
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
            <div className="flex justify-between mt-[40px] mb-[20px] px-[115px]">
                <div className="flex">
                    <h1 className="font-mono text-[#858584]">Artist</h1>
                </div>
                <div className="flex items-stretch">
                    <h1 className="font-mono text-[#858584] mr-32">Change</h1>
                    <h1 className="font-mono text-[#858584] mr-32">
                        NFTs Sold
                    </h1>
                    <h1 className="font-mono text-[#858584] mr-32">Volume</h1>
                </div>
            </div>
            <div className="flex flex-col w-full py-[40px] gap-[20px]">
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
            </div>
        </main>
    )
}
