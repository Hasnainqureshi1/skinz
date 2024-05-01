import React from "react";

import bgBackground from "../assets/bg-background.webp";
import Header from "../Components/Header";
import HeroSection from "../Components/home/HeroSection";
import ShowTotal from "../Components/home/ShowTotal";
import LearningSection from "../Components/home/LearningSection";
import CardWithIcons from "../Components/home/CardWithIcons";
import footerBg from "../assets/bgFooter.8c0fe4eb.webp";
import FrequentlyAsked from "../Components/home/FAQ";
import FAQ from "../Components/home/FAQ";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
const TOtalAchievements = [
  {
    icon: "MdOutlineCompareArrows",
    title: "Total Trades",
    descStart: "There are currently",
    number: "50,523",
    descEnd: "successful trades.",
  },
  {
    icon: "RiMoneyDollarBoxFill", // The icon name is a placeholder.
    title: "Total Paid Out",
    descStart: "We have paid out over",
    number: "$1,746,404.93",
    descEnd: "in cryptocurrencies and PayPal funds!",
  },
  {
    icon: "ImUsers", // The icon name is a placeholder.
    title: "Total Users",
    descStart: "There are over",
    number: "30,848",
    descEnd: "people using our website as of today! ",
  },
];

const Home = () => {
  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-mainColor">
        <img className="w-full h-full opacity-60" src={bgBackground} alt="" />
      </div>

      <div className="h-full flex flex-col overflow-hidden relative">
        <div
          className="overflow-y-auto w-full h-full relative items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-full h-full bg-mainColor overflow-y-scroll">
            <div className="w-full center flex-col relative">
              <Header />
              <HeroSection />
            </div>
            {/* second section  */}
            <div className="w-full z-10">
              <div className="w-full h-full center pt-12 sm:pt-24">
                <div
                  className="w-11/12 xl:w-10/12 xxl:w-10/12 h-full center flex-col relative"
                  style={{ maxWidth: "95rem" }}
                >
                  <div>
                    <div className="flex gap-3 sm:gap-0 flex-col sm:flex-row justify-between">
                      {TOtalAchievements.map((total) => {
                        return (
                          <ShowTotal
                            title={total.title}
                            number={total.number}
                            descStart={total.descStart}
                            descEnd={total.descEnd}
                            icon={total.icon}
                          />
                        );
                      })}
                    </div>
                    <div class="border-t border-gray-600 w-full mt-4 sm:mt-8 xl:mt-12"></div>
                  </div>

                  {/* Learn more  */}
                  <LearningSection />
                  <CardWithIcons />
                </div>
              </div>
            </div>
            {/* 3rd section  */}
            <div className="w-full  center flex-col pt-12 relative mt-10">
              <img
                class="max-w-full min-w-full object-cover w-full absolute left-0 bottom-0 opacity-20"
                alt="Footer image showcasing the detailed map of Rust video game"
                src={footerBg}
              />
              {/* FrequentlyAsked head  */}
              <div
                className="w-11/12 xl:w-10/12 xxl:w-10/12 h-full flex flex-col gap-4 relative"
                style={{ maxWidth: "95rem" }}
              >
                {/* head line  */}
                <p class="text-main text-16 sm:text-20 llg:text-24 font-semibold text-white">
                  Frequently Asked
                </p>
                <FAQ />
              </div>
            </div>
            <div className="w-full center flex-col gap-8 py-20 relative">
              <div class="center flex-col gap-1">
                <p class="text-24 lg:text-32 text-main text-white font-medium">
                  Get Started
                </p>
                <p class="text-10 md:text-12 lg:text-14 text-gray-400 font-medium text-center">
                  Choose an option below and begin using the premier skin
                  marketplace to trade, sell, and buy items.
                </p>
              </div>

              <div className="center gap-1 sm:gap-2 md:gap-4 h-10 md:h-12 lg:h-14">
                <div className="w-28 sm:w-36 md:w-48 lg:w-60 h-full center gap-2 hover rounded-6">
                  {/* buttoon  */}
                  <Link>
                  <Link to='/marketplace' className='text-gray-300 hover:bg-gray-700  secondBg p-3 pl-4 pr-4   '>
                    Go to Market
                  </Link>
                  </Link>
                </div>
              </div>
            </div>
            {/* Footer          */}
            <div className="w-full  center flex-col pt-12 relative">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
