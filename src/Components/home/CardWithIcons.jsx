import React from 'react'
import DynamicIcon from './DynamicIcon';
import { FaSteam } from 'react-icons/fa';
import { MdOutlineBlurOn } from 'react-icons/md';
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
const CardWithIcons = () => {
  return (
    <div className='w-full sm:w-10/12 md:w-auto'>
      <div className='border-t border border-gray-600 w-full md:w-auto mb-12'></div>
    <div className='w-full flex flex-col md:flex-row gap-3 lg:gap-6 xl:gap-12'>
    <InventoryCashout
        mainText="Instant Cash for your Steam Inventory"
        description="How to get real money for CS2 skins? Or how to get real money for Rust skins? Don't worry, we offer an instant server where you can sell your skins and get real money instantly. You can cashout your inventory using PayPal, Litecoin (LTC), Bitcoin (BTC), or Ethereum (ETH). What are you waiting for? Go check it out."
        IconComponent={BsLightningCharge} // Passing the FaSteam icon as a prop
        ellipseOpacity={0.5}
        color={'#FFA143'}
      />
    <InventoryCashout
        mainText="Instant Cash for your Steam Inventory"
        description="How to get real money for CS2 skins? Or how to get real money for Rust skins? Don't worry, we offer an instant server where you can sell your skins and get real money instantly. You can cashout your inventory using PayPal, Litecoin (LTC), Bitcoin (BTC), or Ethereum (ETH). What are you waiting for? Go check it out."
        IconComponent={MdOutlineCompareArrows } // Passing the FaSteam icon as a prop
        ellipseOpacity={0.5}
        color={'rgb(285 75 75)'}
      />
    <InventoryCashout
        mainText="Instant Cash for your Steam Inventory"
        description="How to get real money for CS2 skins? Or how to get real money for Rust skins? Don't worry, we offer an instant server where you can sell your skins and get real money instantly. You can cashout your inventory using PayPal, Litecoin (LTC), Bitcoin (BTC), or Ethereum (ETH). What are you waiting for? Go check it out."
        IconComponent={FaPlusCircle  } // Passing the FaSteam icon as a prop
        ellipseOpacity={0.5}
        color={'#00c400'}
      />
    </div>
    <div class="border-t border border-gray-600 rounded-md w-full mt-4 sm:mt-8 xl:mt-12"></div>
    </div>
  )
}

export default CardWithIcons

const InventoryCashout = ({ mainText,color, description, IconComponent, ellipseOpacity }) => {
  return (
    <div className="w-full md:w-56  xl:w-64 inline-flex flex-col items-start gap-3 xl:gap-6">
      <div className="h-16 lg:h-20 xl:h-20 flex items-center">
        <div className="h-full relative">
          {/* Using a React Icon as the primary icon */}
          {IconComponent ? <IconComponent size={85} color={color} /> : <MdOutlineBlurOn size={93} color={color} />}
          {/* Dynamic SVG ellipse with variable opacity, replaced with an icon */}
          
        </div>
      </div>
      <div className="flex flex-col gap-1 lg:gap-3 mt-3">
        <p className="text-16 lg:text-20 xl:text-24 text-white text-main font-medium">{mainText}</p>
        <p className="text-10 lg:text-12 xl:text-14 text-gray-400 font-medium">{description}</p>
      </div>
    </div>
  );
};
