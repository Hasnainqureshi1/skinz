import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowDropUp  } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
const stickers = [
  {
    imageUrl:
      "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/stickers/stockh2021/liq_holo.593b5b13324c77b28b49f71342140105c28ab60a.png",
    alt: "Team Liquid (Holo) | Stockholm 2021",
  },
  {
    imageUrl:
      "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/stickers/broken_fang/battle_scarred_holo.655bc441df4fffe528bc8d47b397b581d4499606.png",
    alt: "Battle Scarred (Holo)",
  },
];
const GameCard = ({ data }) => {
  const [value, setValue] = useState(0.757); // Initial value
  const extras = data.extras; 
  const menuRef = useRef();
  console.log(data.extras)
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
   
  const [progressWidth, setProgressWidth] = useState(0);
  let textColorClass = '';
    
    if (data.tradeable) {
        textColorClass = 'text-green-600';
    } else if (data.time) {
        textColorClass = 'text-orange-600';
    }
  useEffect(() => {
   const bar = document.getElementById('bar');
   const barWidth = bar.offsetWidth;
   const newPosition = data.wearValue * barWidth;
   setProgressWidth(newPosition);
 }, [value]);
 useEffect(() => {
  // Function to handle click outside of menu
  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      // setIsMenuOpen(false);
    }
  }

  // Add event listener when menu is open
  if (isMenuOpen) {
    document.addEventListener('click', handleClickOutside);
  }

  // Remove event listener when menu is closed
  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, [isMenuOpen]);
  return (
 
    <div  className="item-list"> {/* Ensure every card has the same height */}
    <div draggable="false" className={`text-white  relative gameCard  `} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative  z-3 w-full flex flex-col h-full ">
        <div className="itempreview-link">
        {/* top */}
        <div className="item-preview-commoninfo    ">

        
        { (data.tradeable || data.time) && 
          <div className={` inline-flex text-[11px] items-center mb-1 ${textColorClass}`}>
            <AiOutlineFieldTime size={20} className="w-[15px] h-[18px] mr-[6px]" />
            {data.tradeable || data.time} 
          </div>
        }

        {/* image div  */}
        {data.hoverImage ?
          <div className="p-2 center">
            <ImageWithHover
              defaultImage={data.defaultImage}
              hoverImage={data.hoverImage}
            />
          </div> :
          <div className="relative ItemPreview-itemImage center">
            <img
              src={data.defaultImage}
              className="  transition duration-300 ease-in-out transform hover:scale-110"
              alt=""
            />
          </div>
        }
        
        {/* Render extras if available */}
        {extras && (
          <div className="absolute right-2 top-5">
            <div className="relative extras">
              <div className="hover:opacity-100">
                <img src={extras.image} className="w-8 h-8 transition-transform duration-300 hover:scale-[2] object-contain" alt="" />
              </div>
              <div className="absolute p-3 right-10 extra-tooltip bg-white top-[-12px] opacity-0 hover:opacity-100 pointer-events-none" style={{ width: 'max-content' }}>
                <div className="arrow-up"></div>
                <div className="flex flex-col">
                  <p className="text-black text-[13px] font-bold">{extras.title}</p>
                  <span className="text-gray-500 text-[11px]">{extras.description}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* price and discount  */}
        <div className="flex justify-start items-center mt-1">
          <h2 className="text-[1.5rem] font-semibold leading-tight mr-1">{data.price}</h2>
          {data.discount &&
            <div className="discount">
              <span className="text-[10px] font-semibold leading-tight">-{data.discount}%</span>
            </div>
          }
        </div>

        {/* suggested price, tag line, heading, caution */}
        <div>
          <span className="text-[12px] text-gray-400 font-semibold leading-tight">Suggested price <span>{data.suggestedPrice}</span></span>
          <p className="text-[13px] mt-2 text-gray-200 font-semibold leading-tight ">{data.tagLine}</p>
          <h3 className="text-[1.1rem]  font-semibold leading-tight ">{data.heading}</h3>
          <p className="text-[12px] text-gray-400  font-semibold leading-tight">{data.caution}</p>
        </div>
        </div>
        {/* level indicator  */}
        <div>
          {data.wearValue &&
            <div className="WearBar">
              <div className="WearBar-value tracking-wider">{data.wearValue}</div>
              <div className="WearBar-bar" id="bar">
                <div className="WearBar-barBg">
                  <span className="WearBar-bgColor WearBar-bgColor--worst"></span>
                  <span className="WearBar-bgColor WearBar-bgColor--bad"></span>
                  <span className="WearBar-bgColor WearBar-bgColor--normal"></span>
                  <span className="WearBar-bgColor WearBar-bgColor--good"></span>
                  <span className="WearBar-bgColor WearBar-bgColor--perfect"></span>
                </div>
                <div
                  className="WearBar-progress"
                  id="progress"
                  style={{ left: progressWidth, top: -2 }}
                >
                  <MdOutlineArrowDropUp size={30} className=" " />
                </div>
              </div>
            </div>
          }
        </div>
        </div>
      </div>

      {/* bottom buttons card */}
   

    
      <div className={`bottom-buttons-card  lg:hidden  `}>
        <Link to='/signin' className=" add-cart bg-cyan-500 hover:bg-cyan-600  ">
          Add to Cart
        </Link>
        <button className="px-4 border-l border-gray-700 bg-cyan-500 hover:bg-cyan-600  h-full  p-2 rounded-br-lg  pl-4" onClick={toggleMenu}>
          ...
        </button>
      </div>

      <div className={`text-[1.1rem] lg:hidden border-t border-gray-700  flex justify-between items-center font-bold rounded-b-xl w-full  `}>
        <Link to='/signin' className=" text-center  rounded-bl-lg p-2 px-3  w-full h-full">
          Add to Cart
        </Link>
        <button className="px-4 border-l border-gray-700 p-2     rounded-br-lg  pl-4" onClick={toggleMenu}>
          ...
        </button>
      </div>

      {/* more options  */}
      {isMenuOpen && (
        <div ref={menuRef} className={`w-full z-[44] absolute lg:bottom-0 bottom-[40px] ${isHovered?"":'hidden'}  p-3 more-options`}>
          <ul>
            <li className="flex flex-row my-1 hover:text-red-500">
              <Link to="#" className="center">
                <MdArrowOutward className="mr-2" />
                <span>Screenshot</span>
              </Link>
            </li>
            <li className="flex flex-row my-1 hover:text-red-500">
              <Link to="#" className="center">
                <MdArrowOutward className="mr-2" />
                <span>Inspect in game</span>
              </Link>
            </li>
            <li className="flex flex-row my-1 hover:text-red-500">
              <Link to="#" className="center">
                <MdArrowOutward className="mr-2" />
                <span>View At Stream</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
   
    </div>
  </div>
   
 
 

)};

export default GameCard;
function ImageWithHover({ defaultImage, hoverImage }) {
 const [isHovered, setIsHovered] = useState(false);

 return (
     <div className="relative ItemPreview-itemImage">
         <img
             src={isHovered ? hoverImage : defaultImage}
             className="  transition duration-300 ease-in-out transform hover:scale-110"
             alt=""
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
         />
     </div>
 );
}
