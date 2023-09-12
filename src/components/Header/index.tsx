import Image from "next/image";
// import LogoIcon from "@/assets/icons/ic_logo.svg";
// import UserIcon from "@/assets/icons/ic_user.svg";
import Link from "next/link";
export function Header() {
  const linkStyle = {
    marginRight: 15,
  };
  return (
    <header className="py-1 md:py-3 lg:py-5 px-7 flex flex-row bg-[#3B3B3B] justify-between">
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
          <a href="/">
            <p className="text-white text-xl lg:text-3xl font-mono">
              NFT Marketplace
            </p>
          </a>
        </button>
      </div>
      <div className="hidden lg:flex flex-col md:flex-row items-center ">
        <button>
          <a href="/MarketPlace">
            <p className="flex flex-row items-center text-white mr-12 font-mono font-extrabold hover:scale-90 transition-all ease-in-out duration-500">
              MarketPlace
            </p>
          </a>
        </button>
        <button>
          <a href="/Ranking">
            <p className="flex flex-row items-center text-white mr-12 font-mono font-extrabold hover:scale-90 transition-all ease-in-out duration-500">
              Ranking
            </p>
          </a>
        </button>
        <button>
          <a href="/Wallet">
            <p className="flex flex-row items-center text-white mr-12 font-mono font-extrabold hover:scale-90 transition-all ease-in-out duration-500">
              Collect A Wallet
            </p>
          </a>
        </button>
        <button className="bg-[#A259FF] gap-2 py-4 px-7 text-white font-sans font-semibold rounded-3xl flex flex-row items-center hover:scale-90 transition-all ease-in-out duration-500">
          <Image src="/user.svg" alt="" width={20} height={20} />
          <a href="/SignUp">
            <p className="">Sign Up</p>
          </a>
        </button>
      </div>
      <div className="flex lg:hidden">
        <button>
          <Image src="/menubar.svg" width={30} height={30} alt="" />
        </button>
      </div>
    </header>
  );
}
