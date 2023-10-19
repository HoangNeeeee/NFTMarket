import Image from "next/image";

export function TrendingImage(props: {
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  title1: string;
  title2: string;
}) {
  return (
    <div>
      <button className="hover:scale-90 transition-all ease-in-out duration-500">
        <Image
          className="rounded-2xl"
          src={props.src1}
          alt="Anh"
          width={330}
          height={330}
        />
      </button>
      <div className="mt-4 flex justify-between w-full gap-[15px]">
        <button className="hover:scale-90 transition-all ease-in-out duration-500">
          <Image
            className="rounded-2xl"
            src={props.src2}
            alt="Anh"
            width={100}
            height={100}
          />
        </button>
        <button className="hover:scale-90 transition-all ease-in-out duration-500">
          <Image
            className="rounded-2xl"
            src={props.src3}
            alt="Anh"
            width={100}
            height={100}
          />
        </button>
        <button className="bg-[#A259FF] h-auto w-[100px] rounded-2xl font-mono font-extrabold sm:text-[16px] md:text-[20px] hover:scale-90 transition-all ease-in-out duration-500">
          1025+
        </button>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-semibold font-sans">{props.title1}</h1>
        <button className="mt-2 flex flex-row">
          <Image src={props.src4} alt="AvatarAnimals" width={24} height={24} />
          <p className="ml-2">{props.title2}</p>
        </button>
      </div>
    </div>
  );
}
