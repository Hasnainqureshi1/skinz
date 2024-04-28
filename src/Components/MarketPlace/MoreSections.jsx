import React, { useEffect, useRef, useState } from 'react';
import GameCard from './GameCard';
import { SiCounterstrike } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Dota2Data, FortressData, RustData, StrikeData } from '../../assets/HomeData/data';
import Slider from 'react-slick';
import { GrNext, GrPrevious } from "react-icons/gr";
import { ReactComponent as Dota2Icon } from '../../assets/Dota2.svg';
import { ReactComponent as RustIcon } from '../../assets/RustIcon.svg';
import { ReactComponent as FortressIcon } from '../../assets/FortressIcon.svg';
const NextArrow = ({ onClick }) => (
    <div className="slick-next slick-bottom slick-bottom-right px-2 h-full bg-red-200" onClick={onClick}>
        <GrNext size={20} color="white" className='text-white  font-bold' />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="slick-prev slick-bottom px-2  slick-bottom-left" onClick={onClick}>
        <GrPrevious className='text-white  font-bold' size={20} />
    </div>
);



const MoreSections = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scrolling speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

 const commonSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  className: "bottom  w-full",
  slidesToShow: 6,
  draggable:false,
  slidesToScroll: 6,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  
  responsive: [
   {
     breakpoint: 3000,
     settings: {
       slidesToShow: 10,
       slidesToScroll: 10,
       infinite: false,
     }
   },
   {
     breakpoint: 2000,
     settings: {
       slidesToShow: 8,
       infinite: false,
       slidesToScroll: 8,
     }
   },
   {
     breakpoint: 1600,
     settings: {
       slidesToShow: 6,
       slidesToScroll: 6,
     }
   },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        
      
      }
    },
    {
      breakpoint: 1024,
      settings: {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
          swipeToSlide: false,
    touchMove: false,
    swipe: false,
      }
    },
    {
      breakpoint: 900,
      settings: {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
          swipeToSlide: false,
    touchMove: false,
    swipe: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
          swipeToSlide: false,
    touchMove: false,
    swipe: false,
      }
    },
    {
      breakpoint: 368,
      settings: {
        speed: 500,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        infinite: false,
          swipeToSlide: false,
    touchMove: false,
    swipe: false,
      
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 'auto',
        draggable:true,
        initialSlide:0,
        centerMode:false,
      }
    },
  ]
 };
 
 return (
  <div className=' mt-[40px] '>
    <div className='mt-3 text-white px-3 my-4'>
     <div className= 'flex lg:mb-[-34px] md:px-3 justify-between items-center flex-row'>
      <div className='flex flex-row justify-start flex-1 items-center cursor-pointer mr-1 xs:mr-0'>
        <SiCounterstrike className='text-[30px] hidden md:block lg:text-[36px]' />
        <h3 className='lg:text-[1.7rem] md:text-[1.4rem] font-semibold ml-1 font-sans  text-[1.2rem] '>Counter-Strike 2 market</h3>
      </div>
      <div className='flex-1'>
       <Link className='hover:text-red-500 transition-all flex-1 duration-300  uppercase leading-tight text-sm justify-end flex-1 items-center flex flex-row tracking-wider  text-white'>
      <span className=' w-[auto] '> SEE ALL 1.64M CS2 SKINS

        </span>          <MdKeyboardArrowRight  className=' md:text-16 w-[auto] text-xl' /></Link>
      </div>
     </div>
     <div className=' cardMainContainer '>
     <div className='grid-container lg:p-[40px]   flex flex-row mt-4 pb-6 pt-3 h-full' 
         ref={sliderRef}
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onMouseLeave={handleMouseUp}>
        <Slider {...commonSettings} ref={sliderRef}>
          {StrikeData.map((data, index) => (
            <GameCard key={index} data={data} className='clas' />
          ))}
        </Slider>
      </div>
     </div>
    </div>
    <div className='mt-3 text-white px-3 my-4'>
     <div className= 'flex lg:mb-[-34px] px-3 justify-between items-center flex-row'>
      <div className='flex flex-row cursor-pointer justify-start flex-1 items-center  mr-1 xs:mr-0'>
        
      <FortressIcon className='text-[30px] hidden md:block lg:text-[36px]' />
      <h3 className='lg:text-[1.7rem] md:text-[1.4rem] font-semibold ml-1 font-sans  text-[1.2rem] '>Team Fortress 2 market</h3>
      </div>
      <div className='flex-1'>
      <Link className='hover:text-red-500 transition-all flex-1 duration-300  uppercase leading-tight text-sm justify-end items-center flex flex-row tracking-wider  text-white'>
      <span className='  w-[auto] '> SEE ALL 1.64M CS2 SKINS

        </span>          <MdKeyboardArrowRight  className=' md:text-16 w-[auto] text-xl' /></Link>
      </div>
     </div>
     <div className=' cardMainContainer '>
      <div className='grid-container lg:p-[40px]   flex flex-row mt-4 pb-6 pt-3 h-full'>
        <Slider {...commonSettings} autoplay={false}  >
          {FortressData.map((data, index) => (
            <GameCard key={index} data={data} className='clas' />
          ))}
        </Slider>
      </div>
     </div>
    </div>
   
    <div className='mt-3 text-white px-3 my-4'>
     <div className= 'flex lg:mb-[-34px] px-3 justify-between items-center flex-row'>
      <div className='flex flex-row justify-start flex-1 items-center cursor-pointer  mr-1 xs:mr-0'>
      <Dota2Icon className='text-[30px] hidden md:block lg:text-[36px]' />
      <h3 className='lg:text-[1.7rem] md:text-[1.4rem] font-semibold ml-1 font-sans  text-[1.2rem] '>Dota 2 market</h3>
      </div> 
      <div className='flex-1'>
      <Link className='hover:text-red-500 transition-all flex-1 duration-300  uppercase leading-tight text-sm justify-end items-center flex flex-row tracking-wider  text-white'>
      <span className='  w-[auto] '> SEE ALL 1.64M CS2 SKINS

        </span>          <MdKeyboardArrowRight  className=' md:text-16  w-[auto] text-xl' /></Link>
      </div>
     </div>
     <div className=' cardMainContainer'>
     <div className='grid-container  lg:p-[40px]   flex flex-row mt-4 pb-6 pt-3 h-full'>
        <Slider {...commonSettings} autoplay={false}  >
          {Dota2Data.map((data, index) => (
            <GameCard key={index} data={data} className='clas' />
          ))}
        </Slider>
      </div>
     </div>
    </div>
   
    <div className='mt-3 text-white px-3 my-4'>
     <div className= 'flex lg:mb-[-34px] px-3 justify-between items-center flex-row'>
      <div className='flex flex-row cursor-pointer justify-start flex-1 items-center  mr-1 xs:mr-1 '>
        <RustIcon className='text-[30px] hidden md:block lg:text-[36px]' />
        <h3 className='lg:text-[1.7rem] md:text-[1.4rem] font-semibold ml-1 font-sans  text-[1.2rem] '>Rust market</h3>
      </div>
      <div className='flex-1'>
      <Link className='hover:text-red-500 transition-all flex-1 duration-300  uppercase leading-tight text-sm justify-end items-center flex flex-row tracking-wider  text-white'>
      <span className='  w-[auto] '> SEE ALL 1.64M CS2 SKINS

        </span>          <MdKeyboardArrowRight  className=' md:text-16  w-[auto] text-xl' /></Link>
      </div>
     </div>
     <div className=' cardMainContainer '>
     <div className='grid-container lg:p-[40px]   flex flex-row mt-4 pb-6 pt-3 h-full'>
        <Slider {...commonSettings} autoplay={false}  >
          {RustData.map((data, index) => (
            <GameCard key={index} data={data} className='clas' />
          ))}
        </Slider>
      </div>
     </div>
    </div>
   
  </div>
 );
}

export default MoreSections;
