import Image from "next/image";
// import LogoIcon from "@/assets/icons/ic_logo.svg";
// import UserIcon from "@/assets/icons/ic_user.svg";
import Link from "next/link";
export function Header() {
  const linkStyle = {
    marginRight: 15,
  };
  return (
    <header className="py-5 px-12 flex flex-row bg-[#2B2B2B] justify-between">
      <div className="flex flex-row items-center">
        <Image
          className="mr-4"
          priority
          src="Storefront.svg"
          alt="logoicon"
          width={30}
          height={30}
        />
        <button>
          <a href="http://localhost:3000">
            <p className="text-white text-3xl font-mono">NFT Marketplace</p>
          </a>
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center ">
        <button>
          <p className="flex flex-row items-center text-white mr-12 font-mono font-extrabold hover:scale-90 transition-all ease-in-out duration-500">
            MarketPlace
          </p>
        </button>
        <button>
          <p className="flex flex-row items-center text-white mr-12 font-mono font-extrabold hover:scale-90 transition-all ease-in-out duration-500">
            Ranking
          </p>
        </button>
        <button>
          <p className="flex flex-row items-center text-white mr-12 font-mono font-extrabold hover:scale-90 transition-all ease-in-out duration-500">
            Collect A Wallet
          </p>
        </button>
        <button className="bg-violet-600 py-4 px-7 text-white font-sans font-semibold rounded-3xl flex flex-row items-center hover:scale-90 transition-all ease-in-out duration-500 bg-gradient-to-r from-[#00ECF5] to-[#FFD1E7]">
          {/* <Image
            style={{
              fill: "#fff",
            }}
            src={UserIcon}
            alt="usericon"
            width={20}
            height={20}
            className=" mr-4"
          /> */}
          <a href="http://localhost:3000/SignUp">
            <p className="">Sign Up</p>
          </a>
        </button>
      </div>
    </header>
  );
}
