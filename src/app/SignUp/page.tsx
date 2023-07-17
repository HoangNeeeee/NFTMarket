import Image from "next/image";
import LogoIcon from "@/assets/icons/ic_logo.svg";
import UserIcon from "@/assets/icons/ic_user.svg";
import { SignUpForm } from "@/components";
export default function Home() {
  return (
    <main className="justify-evenly flex flex-col md:flex-row bg-[#2B2B2B]">
      <div className="w-full md:w-[45%] relative h-auto object-cover">
        <Image src="/ImagePlaceholder.png" alt="anhbentrai" fill />
      </div>
      <div className="flex flex-col w-1/2 h-full text-center items-center ">
        <p className="pt-10 font-sans not-italic font-semibold text-4xl leading-10 text-white">
          Create Account
        </p>
        <p className="w-96 h-16 pt-5 text-white">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <SignUpForm />
      </div>
    </main>
  );
}
