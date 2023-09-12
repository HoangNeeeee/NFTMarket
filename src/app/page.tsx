import Image from "next/image";
import { TrendingImage } from "@/components";
import { Creator } from "@/components";
import { Categories } from "@/components";
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
              <a className="w-[220px]" href="/SignUp">
                <button className="bg-[#A259FF] w-[220px] h-[60px] flex items-center justify-center font-sans font-semibold text-white rounded-2xl bg-gradient-to-l from-[#9400FF] to-[#94FFFF] hover:bg-gradient-to-r hover:from-[#9400FF] hover:to-[#94FFFF] transition delay-500">
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
            <TrendingImage
              src1="/PrimaryPhotoPlaceholder.svg"
              src2="/SecondaryPhotoPlaceholderMeo.svg"
              src3="/SecondaryPhotoPlaceholderGau.svg"
              src4="/AvatarPlaceholderFox.svg"
              title1="DSGN Animals"
              title2="MrFox"
            />
          </div>
          <div>
            <div>
              <TrendingImage
                src1="/PrimaryPhotoPlaceholder1.svg"
                src2="/SecondaryPhotoPlaceholderNam1.svg"
                src3="/SecondaryPhotoPlaceholderNam2.svg"
                src4="/AssetNam.svg"
                title1="Magic Mushrooms"
                title2="Shroomie"
              />
            </div>
          </div>
          <div>
            <div>
              <TrendingImage
                src1="/PrimaryPhotoPlaceholderRobot.svg"
                src2="/SecondaryPhotoPlaceholderRobot1.svg"
                src3="/SecondaryPhotoPlaceholderRobot2.svg"
                src4="/AvatarPlaceholderRobot.svg"
                title1="Disco Machines"
                title2="BeKinds2Robots"
              />
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
          <div className="flex flex-wrap justify-center gap-8 mt-14 mb-20">
            <Creator
              src1="Anh1.svg"
              title1="1"
              title2="Keepitreal"
              title3="34.53 ETH"
            />
            <Creator
              src1="Anh2.svg"
              title1="2"
              title2="DigiLab"
              title3="34.53 ETH"
            />
            <Creator
              src1="Anh3.svg"
              title1="3"
              title2="GravityOne"
              title3="34.53 ETH"
            />
            <Creator
              src1="Anh4.svg"
              title1="4"
              title2="Juanie"
              title3="34.53 ETH"
            />
            <Creator
              src1="Anh5.svg"
              title1="5"
              title2="BlueWhale"
              title3="34.53 ETH"
            />
            <Creator
              src1="Anh6.svg"
              title1="6"
              title2="Mr Fox"
              title3="34.53 ETH"
            />
            <Creator
              src1="Anh7.svg"
              title1="7"
              title2="Shroomie"
              title3="34.53 ETH"
            />
            <Creator
              src1="Anh8.svg"
              title1="8"
              title2="Robotica"
              title3="34.53 ETH"
            />
            <Creator
              src1="Anh9.svg"
              title1="9"
              title2="RustyRobot"
              title3="34.53 ETH"
            />
            <Creator
              src1="Anh10.svg"
              title1="10"
              title2="Animakid"
              title3="34.53 ETH"
            />
            <Creator
              src1="Anh11.svg"
              title1="11"
              title2="Dotgu"
              title3="34.53 ETH"
            />
            <Creator
              src1="Anh12.svg"
              title1="12"
              title2="Ghiblier"
              title3="34.53 ETH"
            />
          </div>
        </div>
      </div>
      <div className="px-24 w-full text-center">
        <h1 className="text-white mb-14 text-4xl font-semibold font-sans">
          Browse Categories
        </h1>
        <div className="mb-20 text-white w-full">
          <div className="grid grid-cols-4 justify-center gap-8">
            <Categories src1="AnhA1.svg" src2="AnhAA1.svg" title="Art" />
            <Categories
              src1="AnhA2.svg"
              src2="AnhAA2.svg"
              title="Collectibles"
            />
            <Categories src1="AnhA3.svg" src2="AnhAA3.svg" title="Music" />
            <Categories
              src1="AnhA4.svg"
              src2="AnhAA4.svg"
              title="Photography"
            />
            <Categories src1="AnhA5.svg" src2="AnhAA5.svg" title="Video" />
            <Categories src1="AnhA6.svg" src2="AnhAA6.svg" title="Utility" />
            <Categories src1="AnhA7.svg" src2="AnhAA7.svg" title="Sport" />
            <Categories
              src1="AnhA8.svg"
              src2="AnhAA8.svg"
              title="Virtual Worlds"
            />
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
      <div className="px-[30px] md:px-[72px] lg:px-[115px] text-white">
        <h1 className="font-sans text-[28px] lg:text-[38px] font-semibold mt-[40px]">
          How It Works
        </h1>
        <h1 className="font-sans text-[22px] mb-[48px]">
          Find Out How To Get Started
        </h1>
        <div className="flex flex-col md:flex-row gap-[30px] mb-[80px]">
          <div className="flex flex-row md:flex-col items-center px-[20px] py-[20px] md:px-[20px] md:pb-[30px] md:pt-[10px] lg:px-[30px] bg-[#3B3B3B] h-auto md:h-[440px] w-full md:w-1/3 rounded-[20px]">
            <div className="mt-[10px]">
              <Image
                className="flex"
                src="Icon1.svg"
                alt=""
                width={250}
                height={250}
              />
            </div>
            <div>
              <h1 className="font-sans text-[22px] font-semibold ">
                Setup Your Wallet
              </h1>
              <h1 className="font-sans text-[16px]">
                Set up your wallet of choice. Connect it to the Animarket by
                clicking the wallet icon in the top right corner.
              </h1>
            </div>
          </div>
          <div className="flex flex-row md:flex-col items-center px-[20px] py-[20px] md:px-[20px] md:pb-[30px] md:pt-[10px] lg:px-[30px] bg-[#3B3B3B] h-auto md:h-[440px] w-full md:w-1/3 rounded-[20px]">
            <div className="mt-[10px]">
              <Image
                className="flex "
                src="Icon2.svg"
                alt=""
                width={250}
                height={250}
              />
            </div>
            <div>
              <h1 className="font-sans text-[22px] font-semibold ">
                Create Collection
              </h1>
              <h1 className="font-sans text-[16px]">
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </h1>
            </div>
          </div>
          <div className="flex flex-row md:flex-col items-center px-[20px] py-[20px] md:px-[20px] md:pb-[30px] md:pt-[10px] lg:px-[30px] bg-[#3B3B3B] h-auto md:h-[440px] w-full md:w-1/3 rounded-[20px]">
            <div className="mt-[10px]">
              <Image
                className="flex "
                src="Icon3.svg"
                alt=""
                width={250}
                height={250}
              />
            </div>
            <div>
              <h1 className="font-sans text-[22px] font-semibold ">
                Start Earning
              </h1>
              <h1 className="font-sans text-[16px]">
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-[30px] md:px-[72px] lg:px-[115px] ">
        <div className="flex justify-center md:bg-[#3B3B3B] gap-[80px] w-full mb-[80px] rounded-[20px] md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[60px] flex-col md:flex-row">
          <div className="flex object-cover justify-center">
            <Image
              className="md:w-[100%]  rounded-2xl flex flex-col w-[100%] relative md:h-auto object-cover h-[310px]"
              src="AstronautPhoto.svg"
              alt=""
              width={425}
              height={310}
            />
          </div>
          <div className="">
            <h1 className="text-[28px] lg:text-[38px] font-sans font-semibold text-[#FFFFFF]">
              Join Our Weekly Digest
            </h1>
            <h1 className="text-[22px] mb-[40px] font-sans text-[#FFFFFF]">
              Get exclusive promotions & updates straight to your inbox.
            </h1>
            <div className=" flex flex-col mt-5 md:bg-[#ffffff] rounded-2xl gap-4 md:w-[390px] md:relative">
              <input
                className="rounded-2xl px-4 placeholder-[#2B2B2B] outline-none w-full h-[46px] md:w-[230px] md:h-[60px]"
                type="email"
                // required
                placeholder="Enter Your Email Address"
              />
              <button className="md:h-[60px] h-[46px] bg-[#A259FF] md:right-0 rounded-2xl md:absolute transform duration-500 hover:scale-95">
                <h1 className="px-12 text-white">Subscribe</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
