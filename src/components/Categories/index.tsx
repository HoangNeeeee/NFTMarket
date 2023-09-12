import Image from "next/image";
export function Categories(props: {
  src1: string;
  src2: string;
  title: string;
}) {
  return (
    <div>
      <button className="relative w-[240px] h-[308px] rounded-2xl overflow-hidden hover:scale-90 transition-all ease-in-out duration-500">
        <Image
          className="blur-sm"
          src={props.src1}
          alt="Anh1"
          width={240}
          height={240}
        />
        <Image
          className="absolute top-[70px] left-1/2 -translate-x-1/2"
          src={props.src2}
          alt="Anh1"
          width={100}
          height={100}
        />
        <h1 className="px-5 py-5 bg-[#3B3B3B] text-left font-semibold text-xl">
          {props.title}
        </h1>
      </button>
    </div>
  );
}
