import Image from "next/image";
export function Creator(props: {
  src1: string;
  title1: string;
  title2: string;
  title3: string;
}) {
  return (
    <div>
      <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
        <Image src={props.src1} alt="anh1" height={120} width={120} />
        <div className="bg-[#2B2B2B] w-7 h-7 absolute top-5 left-5 rounded-2xl flex items-center justify-center">
          <h1 className="w-[10] h-[22] font-mono text-[#858584]">
            {props.title1}
          </h1>
        </div>
        <div className="mt-5 text-center">
          <h1 className="font-sans text-xl font-semibold">{props.title2}</h1>
          <div className="flex">
            <h1 className="font-sans text-base text-[#858584]">Total Sales:</h1>
            <h1 className="ml-2 font-mono text-base">{props.title3}</h1>
          </div>
        </div>
      </button>
    </div>
  );
}
