import Image from "next/image";
import LogoIcon from "@/assets/icons/ic_logo.svg";
import UserIcon from "@/assets/icons/ic_user.svg";
import { SignUpForm } from "@/components";
export default function Home() {
  return (
    <main className="flex justify-between flex-col md:flex-row bg-[#2B2B2B]">
      <div className="md:w-[45%] flex flex-col w-full relative md:h-auto object-cover h-[300px]">
        <Image
          className="object-cover"
          src="/ImagePlaceholder.png"d
          alt="anhbentrai"
          fill
        />
      </div>
      <div className="flex flex-col md:w-1/2  h-full px-[30px]">
        <p className="md:w-full flex pt-10 font-sans not-italic font-semibold text-4xl leading-10 text-white">
          Create Account
        </p>
        <p className="md:w-full h-16 pt-5 text-white">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <div className="flex justify-center items-center md:justify-start md:items-start md:px-[0px] px-[30px]">
          <SignUpForm />
        </div>
      </div>
    </main>

  );
}
