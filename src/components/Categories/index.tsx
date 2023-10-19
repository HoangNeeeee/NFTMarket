import Image from "next/image";
export function Categories(props: {
  src1: string;
  src2: string;
  title: string;
}) {
  return (
    <div>
      <button className="relative group w-full h-auto rounded-2xl overflow-hidden hover:scale-90 transition-all ease-in-out duration-500">
        <Image
          className="blur-md group-hover:blur-none"
          src={props.src1}
          alt="Anh1"
          width={240}
          height={240}
        />
        <Image
          className="absolute xsm:top-[70px] xsm:left-[75px] md:w-[80px] md:h-[80px] md:top-[50px] md:left-[52px] lg:top-[70px] lg:left-1/2 lg:-translate-x-1/2 group-hover:blur-none"
          src={props.src2}
          alt="Anh1"
          width={100}
          height={100}
        />
        <h1 className="px-5 py-5 bg-[#3B3B3B] w-full text-left font-semibold text-xl group-hover:blur-none">
          {props.title}
        </h1>
      </button>
    </div>
  );
}
