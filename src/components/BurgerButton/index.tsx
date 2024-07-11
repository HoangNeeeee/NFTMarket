import React from "react"

const BurgerButton: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <button className="relative inline-block m-12 h-28 w-28 rounded-full overflow-hidden border-none cursor-pointer bg-[#a474ff]">
                <span className="absolute block bottom-0 h-1/3 w-1/3 left-1/2 -translate-x-1/2 rounded-full border-none bg-[#FFAB70] transition-all scale-0 hover:scale-150 delay-75"></span>
                <span className="absolute block bottom-0 h-1/3 w-1/3 left-1/2 -translate-x-1/2 rounded-full border-none bg-[#17f1d1] transition-all scale-0 hover:scale-150 delay-100"></span>
                <span className="absolute block bottom-0 h-1/3 w-1/3 left-1/2 -translate-x-1/2 rounded-full border-none bg-[#a474ff] transition-all scale-0 hover:scale-150 delay-150"></span>
                <div className="relative">
                    <div className="my-1.5 mx-auto h-1 w-8 bg-white"></div>
                    <div className="my-1.5 mx-auto h-1 w-8 bg-white"></div>
                    <div className="my-1.5 mx-auto h-1 w-8 bg-white"></div>
                </div>
            </button>
        </div>
    )
}

export default BurgerButton
