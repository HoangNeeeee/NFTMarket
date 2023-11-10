import Image from "next/image"

type DiscoverCardType = "primary" | "secondary"

const bgColor = {
    primary: "bg-[#3b3b3b]",
    secondary: "bg-[#2b2b2b]",
}

interface DiscoverProps {
    ImageSrc: string
    AvatarSrc: string
    Name: string
    UserName: string
    Price: string
    Bid: string
    type?: DiscoverCardType
}

export function Discover(props: DiscoverProps) {
    const {
        ImageSrc,
        AvatarSrc,
        Name,
        UserName,
        Price,
        Bid,
        type = "primary",
    } = props

    return (
        <button className="rounded-2xl overflow-hidden relative hover:scale-90 transition-all ease-in-out duration-500">
            <img
                className=" md:h-[269px] md:w-[300px] h-[295px] w-[330px] "
                src={props.ImageSrc}
                alt="Anh1"
            />
            <div className={bgColor[type]}>
                <div className="px-5 py-5">
                    <h1 className="w-full h-[173] flex flex-col text-left text-white font-sans font-semibold text-xl">
                        {props.Name}
                    </h1>
                    <p className="flex font-mono text-white">
                        <Image
                            className="rounded mr-3"
                            src={props.AvatarSrc}
                            alt="ABC"
                            width={20}
                            height={20}
                        />
                        {props.UserName}
                    </p>
                </div>
                <div className="px-5 pb-5 justify-between flex text-white">
                    <div className="text-left">
                        <h1 className="font-mono text-[#858584] text-xs">
                            Price
                        </h1>
                        <p className="font-mono">{props.Price} ETH</p>
                    </div>
                    <div className="text-right">
                        <h1 className="font-mono text-[#858584] text-xs">
                            Highest Bid
                        </h1>
                        <p className="font-mono">{props.Bid} ETH</p>
                    </div>
                </div>
            </div>
        </button>
    )
}
