import Image from "next/image";
import { Trending } from "@/components";
export default function Page2() {
  return (
    <main>
      <div className="px-24 py-16">
        <div className="justify-center">
          <div className="w-full h-auto flex justify-center gap-10">
            <div className="">
              <h1 className="bg-[#2B2B2B] text-white text-6xl h-[180px] w-[400px] font-sans capitalize font-semibold">
                Discover digital art & Collect NFTs
              </h1>
              <h2 className="bg-[#2B2B2B] text-white w-[400px] h-[100px] text-xl font-sans mt-4 mb-7">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </h2>
              <a className="w-[220px]" href="http://localhost:3000/SignUp">
                <button className="bg-[#A259FF] w-[220px] h-[60px] flex items-center justify-center font-sans font-semibold text-white rounded-2xl hover:scale-90 transition-all ease-in-out duration-300 bg-gradient-to-r from-[#9400FF] to-[#94FFFF]">
                  <Image
                    className="mr-3"
                    src="RocketLaunch2.svg"
                    alt="RocketTrang"
                    width={20}
                    height={20}
                  />
                  Get Started
                </button>
              </a>
              <div className="flex flex-row w-[400px] justify-between mt-7">
                <h1 className="bg-[#2B2B2B] text-white w-100% h-auto flex flex-col font-mono text-xl">
                  240k+
                  <p>Total Sale</p>
                </h1>
                <h1 className="bg-[#2B2B2B] text-white w-100% h-auto flex flex-col font-mono text-xl">
                  100k+
                  <p>Auctions</p>
                </h1>
                <h1 className="bg-[#2B2B2B] text-white w-100% h-auto flex flex-col font-mono text-xl">
                  240k+
                  <p>Artists</p>
                </h1>
              </div>
            </div>
            <div className="w-[510px] h-[400px]">
              <Image
                className="object-cover"
                src="	https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
                alt="anhphai"
                width={510}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-24 py-16 text-white">
        <div className="text-center">
          <p className="text-4xl font-sans font-semibold">
            Trending Collections
          </p>
          <p className="mt-2 text-xl">
            Checkout our weekly updated trending collection.
          </p>
        </div>
        <div className="justify-center flex mt-16 gap-10 ">
          <div>
            <Trending
              src1="/AnhAA1.svg"
              src2="/AnhAA2.svg"
              src3="/AnhAA3.svg"
              src4="/AnhAA4.svg"
              title1="ABCDE"
              title2="ABCD"
            />
          </div>
          {/* <div className="text-white flex flex-col">ABC</div> */}
          <div>
            <button className="hover:scale-90 transition-all ease-in-out duration-300">
              <Image
                src="/PrimaryPhotoPlaceholder1.svg"
                alt="Anh"
                width={330}
                height={330}
              />
            </button>
            <div className="mt-4 flex flex-row justify-between w-full">
              <button className="h-[100px] w-[100px] rounded-2xl font-mono font-extrabold text-2xl">
                <Image
                  className="rounded-2xl hover:scale-90 transition-all ease-in-out duration-500"
                  src="/SecondaryPhotoPlaceholderNam1.svg"
                  alt="Anh"
                  width={100}
                  height={100}
                />
              </button>
              <button>
                <Image
                  className="rounded-2xl hover:scale-90 transition-all ease-in-out duration-500"
                  src="/SecondaryPhotoPlaceholderNam2.svg"
                  alt="Anh"
                  width={100}
                  height={100}
                />
              </button>
              <button className="bg-[#A259FF] h-[100px] w-[100px] rounded-2xl font-mono font-extrabold text-2xl hover:scale-90 transition-all ease-in-out duration-500">
                1025+
              </button>
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold font-sans">
                Magic Mushrooms
              </h1>
              <button className="mt-2 flex flex-row">
                <Image
                  src="/AssetNam.svg"
                  alt="AvatarAnimals"
                  width={24}
                  height={24}
                />
                <p className="ml-2">Shroomie</p>
              </button>
            </div>
          </div>
          <div>
            <button>
              <Image
                className="rounded-2xl hover:scale-90 transition-all ease-in-out duration-500"
                src="/PrimaryPhotoPlaceholder2.png"
                alt="Anh"
                width={330}
                height={330}
              />
            </button>
            <div className="mt-4 flex justify-between w-full">
              <button className="hover:scale-90 transition-all ease-in-out duration-500">
                <Image
                  className="rounded-2xl"
                  src="/SecondaryPhotoPlaceholderRobot1.svg"
                  alt="Anh"
                  width={100}
                  height={100}
                />
              </button>
              <button className="hover:scale-90 transition-all ease-in-out duration-500">
                <Image
                  className="rounded-2xl"
                  src="/SecondaryPhotoPlaceholderRobot2.svg"
                  alt="Anh"
                  width={100}
                  height={100}
                />
              </button>
              <button className="bg-[#A259FF] h-[100px] w-[100px] rounded-2xl font-mono font-extrabold text-2xl hover:scale-90 transition-all ease-in-out duration-500">
                1025+
              </button>
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold font-sans">
                Disco Machines
              </h1>
              <button className="mt-2 flex flex-row">
                <Image
                  src="/AvatarPlaceholderRobot.svg"
                  alt="AvatarAnimals"
                  width={24}
                  height={24}
                />
                <p className="ml-2">BeKind2Robots</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-24 pt-20 text-white flex flex-row justify-center gap-[450px]">
          <div className="">
            <h1 className="text-4xl font-sans font-semibold capitalize">
              Top Creators
            </h1>
            <p className="capitalize mt-2 font-sans">
              Checkout top rated creator on the NFT marketplace
            </p>
          </div>
          <div className="flex items-end">
            <button className="bg-[#4343] w-[220px] h-[60px] rounded-2xl border-2 border-violet-600 flex justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
              <Image
                className="mr-3"
                src="RocketLaunch.svg"
                alt="Rocket"
                width={20}
                height={20}
              />
              View Ranking
            </button>
          </div>
        </div>
        <div className="px-24 w-full">
          <div className="mt-14 mb-20 grid grid-rows-3 gap-8">
            <div className="flex justify-center gap-8">
              <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                <Image src="Anh1.svg" alt="anh1" height={120} width={120} />
                <div className="mt-5 text-center">
                  <h1 className="font-sans text-xl font-semibold">
                    Keepitrial
                  </h1>
                  <div className="flex">
                    <h1 className="font-sans text-base text-[#858584]">
                      Total Sales:
                    </h1>
                    <h1 className="ml-2 font-mono text-base">34.53 ETH</h1>
                  </div>
                </div>
                <div className="bg-[#2B2B2B] w-7 h-7 absolute top-5 left-5 rounded-2xl flex items-center justify-center">
                  <h1 className="w-[10] h-[22] font-mono text-[#858584]">1</h1>
                </div>
              </button>
              <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                <Image src="Anh2.svg" alt="anh2" height={120} width={120} />
                <div className="mt-5 text-center">
                  <h1 className="font-sans text-xl font-semibold">DigiLab</h1>
                  <div className="flex">
                    <h1 className="font-sans text-base text-[#858584]">
                      Total Sales:
                    </h1>
                    <h1 className="ml-2 font-mono text-base">34.53 ETH</h1>
                  </div>
                </div>
                <div className="bg-[#2B2B2B] w-7 h-7 absolute top-5 left-5 rounded-2xl flex items-center justify-center">
                  <h1 className="w-[10] h-[22] font-mono text-[#858584]">2</h1>
                </div>
              </button>
              <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                <Image src="Anh3.svg" alt="anh3" height={120} width={120} />
                <div className="mt-5 text-center">
                  <h1 className="font-sans text-xl font-semibold">
                    GravityOne
                  </h1>
                  <div className="flex">
                    <h1 className="font-sans text-base text-[#858584]">
                      Total Sales:
                    </h1>
                    <h1 className="ml-2 font-mono text-base">34.53 ETH</h1>
                  </div>
                </div>
                <div className="bg-[#2B2B2B] w-7 h-7 absolute top-5 left-5 rounded-2xl flex items-center justify-center">
                  <h1 className="w-[10] h-[22] font-mono text-[#858584]">3</h1>
                </div>
              </button>
              <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                <Image src="Anh4.svg" alt="anh4" height={120} width={120} />
                <div className="mt-5 text-center">
                  <h1 className="font-sans text-xl font-semibold">Juanie</h1>
                  <div className="flex">
                    <h1 className="font-sans text-base text-[#858584]">
                      Total Sales:
                    </h1>
                    <h1 className="ml-2 font-mono text-base">34.53 ETH</h1>
                  </div>
                </div>
                <div className="absolute bg-[#2B2B2B] w-7 h-7 top-5 left-5 rounded-2xl flex items-center justify-center">
                  <h1 className="w-[10] h-[22] font-mono text-[#858584]">4</h1>
                </div>
              </button>
            </div>
            <div className="flex justify-center gap-8">
              <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                <Image src="Anh5.svg" alt="anh5" height={120} width={120} />
                <div className="mt-5 text-center">
                  <h1 className="font-sans text-xl font-semibold">BlueWhale</h1>
                  <div className="flex">
                    <h1 className="font-sans text-base text-[#858584]">
                      Total Sales:
                    </h1>
                    <h1 className="ml-2 font-mono text-base">34.53 ETH</h1>
                  </div>
                </div>
                <div className="bg-[#2B2B2B] w-7 h-7 absolute top-5 left-5 rounded-2xl flex items-center justify-center">
                  <h1 className="w-[10] h-[22] font-mono text-[#858584]">5</h1>
                </div>
              </button>
              <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                <Image src="Anh6.svg" alt="anh6" height={120} width={120} />
                <div className="mt-5 text-center">
                  <h1 className="font-sans text-xl font-semibold">Mr Fox</h1>
                  <div className="flex">
                    <h1 className="font-sans text-base text-[#858584]">
                      Total Sales:
                    </h1>
                    <h1 className="ml-2 font-mono text-base">34.53 ETH</h1>
                  </div>
                </div>
                <div className="bg-[#2B2B2B] w-7 h-7 absolute top-5 left-5 rounded-2xl flex items-center justify-center">
                  <h1 className="w-[10] h-[22] font-mono text-[#858584]">6</h1>
                </div>
              </button>
              <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                <Image src="Anh7.svg" alt="anh7" height={120} width={120} />
                <div className="mt-5 text-center">
                  <h1 className="font-sans text-xl font-semibold">Shroomie</h1>
                  <div className="flex">
                    <h1 className="font-sans text-base text-[#858584]">
                      Total Sales:
                    </h1>
                    <h1 className="ml-2 font-mono text-base">34.53 ETH</h1>
                  </div>
                </div>
                <div className="bg-[#2B2B2B] w-7 h-7 absolute top-5 left-5 rounded-2xl flex items-center justify-center">
                  <h1 className="w-[10] h-[22] font-mono text-[#858584]">7</h1>
                </div>
              </button>
              <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                <Image src="Anh8.svg" alt="anh8" height={120} width={120} />
                <div className="mt-5 text-center">
                  <h1 className="font-sans text-xl font-semibold">Robotica</h1>
                  <div className="flex">
                    <h1 className="font-sans text-base text-[#858584]">
                      Total Sales:
                    </h1>
                    <h1 className="ml-2 font-mono text-base">34.53 ETH</h1>
                  </div>
                </div>
                <div className="bg-[#2B2B2B] w-7 h-7 absolute top-5 left-5 rounded-2xl flex items-center justify-center">
                  <h1 className="w-[10] h-[22] font-mono text-[#858584]">8</h1>
                </div>
              </button>
            </div>
            <div className="flex justify-center gap-8">
              <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                <Image src="Anh9.svg" alt="anh9" height={120} width={120} />
                <div className="mt-5 text-center">
                  <h1 className="font-sans text-xl font-semibold">
                    RustyRobot
                  </h1>
                  <div className="flex">
                    <h1 className="font-sans text-base text-[#858584]">
                      Total Sales:
                    </h1>
                    <h1 className="ml-2 font-mono text-base">34.53 ETH</h1>
                  </div>
                </div>
                <div className="bg-[#2B2B2B] w-7 h-7 absolute top-5 left-5 rounded-2xl flex items-center justify-center">
                  <h1 className="w-[10] h-[22] font-mono text-[#858584]">9</h1>
                </div>
              </button>
              <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                <Image src="Anh10.svg" alt="anh10" height={120} width={120} />
                <div className="mt-5 text-center">
                  <h1 className="font-sans text-xl font-semibold">Animakid</h1>
                  <div className="flex">
                    <h1 className="font-sans text-base text-[#858584]">
                      Total Sales:
                    </h1>
                    <h1 className="ml-2 font-mono text-base">34.53 ETH</h1>
                  </div>
                </div>
                <div className="bg-[#2B2B2B] w-7 h-7 absolute top-5 left-5 rounded-2xl flex items-center justify-center">
                  <h1 className="w-[10] h-[22] font-mono text-[#858584]">10</h1>
                </div>
              </button>
              <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                <Image src="Anh11.svg" alt="anh11" height={120} width={120} />
                <div className="mt-5 text-center">
                  <h1 className="font-sans text-xl font-semibold">Dotgu</h1>
                  <div className="flex">
                    <h1 className="font-sans text-base text-[#858584]">
                      Total Sales:
                    </h1>
                    <h1 className="ml-2 font-mono text-base">34.53 ETH</h1>
                  </div>
                </div>
                <div className="bg-[#2B2B2B] w-7 h-7 absolute top-5 left-5 rounded-2xl flex items-center justify-center">
                  <h1 className="w-[10] h-[22] font-mono text-[#858584]">11</h1>
                </div>
              </button>
              <button className="relative bg-[#3B3B3B] text-white w-[240px] h-[238px] px-5 py-5 rounded-2xl flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-500">
                <Image src="Anh12.svg" alt="anh12" height={120} width={120} />
                <div className="mt-5 text-center">
                  <h1 className="font-sans text-xl font-semibold">Ghiblier</h1>
                  <div className="flex">
                    <h1 className="font-sans text-base text-[#858584]">
                      Total Sales:
                    </h1>
                    <h1 className="ml-2 font-mono text-base">34.53 ETH</h1>
                  </div>
                </div>
                <div className="bg-[#2B2B2B] w-7 h-7 absolute top-5 left-5 rounded-2xl flex items-center justify-center">
                  <h1 className="w-[10] h-[22] font-mono text-[#858584]">12</h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-24 w-full text-center">
        <h1 className="text-white mb-14 text-4xl font-semibold font-sans">
          Browse Categories
        </h1>
        <div className="mb-20 text-white w-full grid grid-rows-2 gap-8">
          <div className="flex justify-center gap-8">
            <button className="w-[240px] h-[308px] rounded-2xl overflow-hidden relative hover:scale-90 transition-all ease-in-out duration-500">
              <Image
                className="blur-sm"
                src="AnhA1.svg"
                alt="Anh1"
                width={240}
                height={240}
              />
              <Image
                className="absolute top-[70px] left-1/2 -translate-x-1/2"
                src="AnhAA1.svg"
                alt="Anh1"
                width={100}
                height={100}
              />
              <h1 className="px-5 py-5 bg-[#3B3B3B] text-left font-semibold text-xl">
                Art
              </h1>
            </button>
            <button className="w-[240px] h-[308px] rounded-2xl overflow-hidden relative hover:scale-90 transition-all ease-in-out duration-500">
              <Image
                className="blur-sm"
                src="AnhA2.svg"
                alt="Anh1"
                width={240}
                height={240}
              />
              <Image
                className="absolute top-[70px] left-1/2 -translate-x-1/2"
                src="AnhAA2.svg"
                alt="Anh1"
                width={100}
                height={100}
              />
              <h1 className="px-5 py-5 bg-[#3B3B3B] text-left font-semibold text-xl">
                Collectibles
              </h1>
            </button>
            <button className="w-[240px] h-[308px] rounded-2xl overflow-hidden relative hover:scale-90 transition-all ease-in-out duration-500">
              <Image
                className="blur-sm"
                src="AnhA3.svg"
                alt="Anh1"
                width={240}
                height={240}
              />
              <Image
                className="absolute top-[70px] left-1/2 -translate-x-1/2"
                src="AnhAA3.svg"
                alt="Anh1"
                width={100}
                height={100}
              />
              <h1 className="px-5 py-5 bg-[#3B3B3B] text-left font-semibold text-xl">
                Music
              </h1>
            </button>
            <button className="w-[240px] h-[308px] rounded-2xl overflow-hidden relative hover:scale-90 transition-all ease-in-out duration-500">
              <Image
                className="blur-sm"
                src="AnhA4.svg"
                alt="Anh1"
                width={240}
                height={240}
              />
              <Image
                className="absolute top-[70px] left-1/2 -translate-x-1/2"
                src="AnhAA4.svg"
                alt="Anh1"
                width={100}
                height={100}
              />
              <h1 className="px-5 py-5 bg-[#3B3B3B] text-left font-semibold text-xl">
                Photography
              </h1>
            </button>
          </div>
          <div className="flex justify-center gap-8">
            <button className="w-[240px] h-[308px] rounded-2xl overflow-hidden relative hover:scale-90 transition-all ease-in-out duration-500">
              <Image
                className="blur-sm"
                src="AnhA5.svg"
                alt="Anh1"
                width={240}
                height={240}
              />
              <Image
                className="absolute top-[70px] left-1/2 -translate-x-1/2"
                src="AnhAA5.svg"
                alt="Anh1"
                width={100}
                height={100}
              />
              <h1 className="px-5 py-5 bg-[#3B3B3B] text-left font-semibold text-xl">
                Video
              </h1>
            </button>
            <button className="w-[240px] h-[308px] rounded-2xl overflow-hidden relative hover:scale-90 transition-all ease-in-out duration-500">
              <Image
                className="blur-sm"
                src="AnhA6.svg"
                alt="Anh1"
                width={240}
                height={240}
              />
              <Image
                className="absolute top-[70px] left-1/2 -translate-x-1/2"
                src="AnhAA6.svg"
                alt="Anh1"
                width={100}
                height={100}
              />
              <h1 className="px-5 py-5 bg-[#3B3B3B] text-left font-semibold text-xl">
                Utility
              </h1>
            </button>
            <button className="w-[240px] h-[308px] rounded-2xl overflow-hidden relative hover:scale-90 transition-all ease-in-out duration-500">
              <Image
                className="blur-sm"
                src="AnhA7.svg"
                alt="Anh1"
                width={240}
                height={240}
              />
              <Image
                className="absolute top-[70px] left-1/2 -translate-x-1/2"
                src="AnhAA7.svg"
                alt="Anh1"
                width={100}
                height={100}
              />
              <h1 className="px-5 py-5 bg-[#3B3B3B] text-left font-semibold text-xl">
                Sport
              </h1>
            </button>
            <button className="w-[240px] h-[308px] rounded-2xl overflow-hidden relative hover:scale-90 transition-all ease-in-out duration-500">
              <Image
                className="blur-sm"
                src="AnhA8.svg"
                alt="Anh1"
                width={240}
                height={240}
              />
              <Image
                className="absolute top-[70px] left-1/2 -translate-x-1/2"
                src="AnhAA8.svg"
                alt="Anh1"
                width={100}
                height={100}
              />
              <h1 className="px-5 py-5 bg-[#3B3B3B] text-left font-semibold text-xl">
                Virtual Worlds
              </h1>
            </button>
          </div>
        </div>
      </div>
      <div className="px-24 pt-20 pb-20">
        <div className="flex flex-row text-white justify-center mb-14 gap-[500px]">
          <div>
            <h1 className="text-4xl font-sans font-semibold capitalize ">
              Discover More NFTs
            </h1>
            <p className="capitalize mt-2 font-sans text-xl">
              Explore New Trending NFTs
            </p>
          </div>
          <div className="flex">
            <button className="bg-[#4343] w-[220px] h-[60px] rounded-2xl border-2 border-violet-600 flex justify-center items-center font-sans font-semibold text-base hover:scale-90 transition-all ease-in-out duration-500">
              <Image
                className="mr-3"
                src="Eye.svg"
                alt="Mat"
                width={20}
                height={20}
              />
              See All
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <button className="rounded-2xl overflow-hidden relative hover:scale-90 transition-all ease-in-out duration-500">
            <Image
              className=""
              src="AnhAvatar1.svg"
              alt="Anh1"
              width={330}
              height={296}
            />
            <div className="bg-[#3B3B3B]">
              <div className="px-5 py-5">
                <h1 className="w-[330] h-[173] flex flex-col text-left text-white font-sans font-semibold text-xl">
                  Distant Galaxy
                </h1>
                <p className="flex font-mono text-white">
                  <Image
                    className="rounded mr-3"
                    src="Avatar1.svg"
                    alt="ABC"
                    width={20}
                    height={20}
                  />
                  Moon Dancer
                </p>
              </div>
              <div className="px-5 pb-5 justify-between flex text-white">
                <div className="text-left">
                  <h1 className="font-mono text-[#858584] text-xs">Price</h1>
                  <p className="font-mono">1.63 ETH</p>
                </div>
                <div className="text-right">
                  <h1 className="font-mono text-[#858584] text-xs">
                    Highest Bid
                  </h1>
                  <p className="font-mono">0.33 ETH</p>
                </div>
              </div>
            </div>
          </button>
          <button className="rounded-2xl overflow-hidden relative hover:scale-90 transition-all ease-in-out duration-500">
            <Image
              className=""
              src="AnhAvatar2.svg"
              alt="Anh1"
              width={330}
              height={296}
            />
            <div className="bg-[#3B3B3B]">
              <div className="px-5 py-5">
                <h1 className="w-[330] h-[173] flex flex-col text-left text-white font-sans font-semibold text-xl">
                  Life On Edena
                </h1>
                <p className="flex font-mono text-white">
                  <Image
                    className="rounded mr-3"
                    src="Avatar2.svg"
                    alt="ABC"
                    width={20}
                    height={20}
                  />
                  NebulaKid
                </p>
              </div>
              <div className="px-5 pb-5 justify-between flex text-white">
                <div className="text-left">
                  <h1 className="font-mono text-[#858584] text-xs">Price</h1>
                  <p className="font-mono">1.63 ETH</p>
                </div>
                <div className="text-right">
                  <h1 className="font-mono text-[#858584] text-xs">
                    Highest Bid
                  </h1>
                  <p className="font-mono">0.33 ETH</p>
                </div>
              </div>
            </div>
          </button>
          <button className="rounded-2xl overflow-hidden relative hover:scale-90 transition-all ease-in-out duration-500  ">
            <Image
              className=""
              src="AnhAvatar3.svg"
              alt="Anh1"
              width={330}
              height={296}
            />
            <div className="bg-[#3B3B3B]">
              <div className="px-5 py-5">
                <h1 className="w-[330] h-[173] flex flex-col text-left text-white font-sans font-semibold text-xl">
                  AstroFiction
                </h1>
                <p className="flex font-mono text-white">
                  <Image
                    className="rounded mr-3"
                    src="Avatar3.svg"
                    alt="ABC"
                    width={20}
                    height={20}
                  />
                  Spaceone
                </p>
              </div>
              <div className="px-5 pb-5 justify-between flex text-white">
                <div className="text-left">
                  <h1 className="font-mono text-[#858584] text-xs">Price</h1>
                  <p className="font-mono">1.63 ETH</p>
                </div>
                <div className="text-right">
                  <h1 className="font-mono text-[#858584] text-xs">
                    Highest Bid
                  </h1>
                  <p className="font-mono">0.33 ETH</p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="relative w-full h-[783px]">
        <div className="relative bg-gradient-to-b from-white to-purple-600">
          <Image
            className="absolute object-cover"
            src="NFTHighlight.svg"
            alt="anh"
            fill
          />
        </div>
        <Image className="" src="NFTHighlight.svg" alt="anh" fill />
      </div>
    </main>
  );
}
