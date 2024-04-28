import React from "react";
import gunBg from "../../assets/bg.svg";
import smGun from "../../assets/gun.webp";
import ak47 from "../../assets/csitem.31982d18.webp";

const HeroSection = () => {
  return (
    <div className="w-11/12 md:w-10/12 h-full flex flex-col relative mt-4">
      <div className="w-full flex justify-between items-center gap-2 sm:gap-0">
        <div className="flex flex-col gap-1 xl:gap-2 text-white">
          <p className="text-main text-24 md:text-32 lg:text-40 xl:text-48 font-semibold leading-tight">
            Sell, trade, or buy <br /> CS2 &amp; Rust skins
          </p>
          <p className="text-gray-500 text-10 lg:text-12 xl:text-14 font-normal">
            Buy, sell, and trade skins easier and faster. All deals are secured
            with
            <br />
            the highest level protection methods.
          </p>
          <div className="w-20 lg:w-24 h-9 lg:h-10 rounded-4 center hover mt-2 lg:mt-4 xl:mt-6 rounded-md center bg-btnBg hover:bg-btnBgHover cursor-pointer shadow-sm px-3 center gap-2 hover">
            <p className="text-main text-12 lg:text-10 font-semibold">
              Try it out
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-start justify-center gap-0 lg:gap-2 flex-1">
          <div className="mt-4 sm:mt-20 lg:mt-32 xl:mt-36 w-16 sm:w-24 lg:w-40 llg:w-52 xl:w-60 h-16 sm:h-24 lg:h-40 llg:h-52 xl:h-60 xll:w-64 xll:h-64 center relative">
            <img className="w-full h-full" src={gunBg} alt="Background Gun" />
            <div className="absolute w-30 h-30 opacity-40 rounded-full bg-gray"></div>
            <img
              className="absolute item-hover item-rust animate-move-up"
              src={smGun}
              style={{ minWidth: "140%" }}
              alt="Small Gun"
            />
          </div>

          <div className="w-12 sm:w-24 md:w-36 lg:w-40 llg:w-64 xl:w-72 h-12 sm:h-24 md:h-36 lg:h-40 llg:h-64 xl:h-72 xll:w-80 xll:h-80 center relative">
            <img className="w-full h-full" src={gunBg} />
            <div
              className="absolute w-30 h-30 opacity-40 rounded-full bg-red"
              style={{ filter: "blur(3rem)" }}
            ></div>
            <img
              className="absolute top-0 item-hover item-csgo  animate-move-down "
              alt="Image displaying item from the game Counter-Strike: Global Offensive"
              src={ak47}
              style={{ minWidth: "220%" }}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
