import React from 'react'
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
const HeroSlider = () => {
  const NextArrow = ({ onClick }) => (
    <div className="slick-next-hero h-full bg-red-200" onClick={onClick}>
        <GrNext size={50} color="white" className='text-white font-bold' />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="slick-prev-hero" onClick={onClick}>
        <GrPrevious className='text-white font-bold' size={50} />
    </div>
);
const CustomDots = ({ active, onClick }) => {
  return (
    <div className={`custom-dot ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="dot"></div>
    </div>
  );
}

const settings = {
 
   
    dots: true,
    infinite: true,
    speed: 500,
    className: "slider w-full",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i, onClick, active) => (
      <CustomDots key={i} active={active} onClick={() => onClick(i)} />
    ),
     
    
};
  return (
    <Slider {...settings}>

  
    <div className='w-full relative z-1 bg-gray-700 text-white h-[500px] overflow-hidden'>
    {/* bg image */}
    <div className='h-full'>
      <div className='HomeSlider-slideBg'>
        <div className='HomeSlider-imageWrapper'>
          <img src={require(`../../assets/heroBg2.webp`)} alt="" />
        </div>
      </div>

      {/* heading */}
      <div className='HomeSlider-slideContent px-2'>
        <h1 className='lg:text-[4.6rem] md:text-[4rem] text-[2.5rem] w-ful lg:w-3/4 font-serif font-bold '>Connect with us </h1>
        <p className='lg:text-[1rem] md:text-[1.2rem]  text-xl sm:w-2/3 w-full font-bold leading-tight tracking-wider'>Follow us for news, memes, giveaways, and much more.</p>
        <button className='md:text-[1.5rem] text-[1.2rem] px-4 py-2 font-bold leading-tight tracking-wider bg-sky-500 shadow-md rounded-md mt-5'>
          Get in Touch
        </button>
      </div>
    </div>
  </div>
    <div className='w-full relative z-1 bg-gray-700 text-white h-[500px] overflow-hidden'>
    {/* bg image */}
    <div className='h-full'>
      <div className='HomeSlider-slideBg'>
        <div className='HomeSlider-imageWrapper'>
          <img src={require(`../../assets/heroBg.webp`)} alt="" />
        </div>
      </div>

      {/* heading */}
      <div className='HomeSlider-slideContent px-2'>
        <h1 className='lg:text-[4.6rem] md:text-[4rem] text-[2.5rem] w-ful lg:w-3/4 font-serif font-bold '>Connect with us </h1>
        <p className='lg:text-[1rem] md:text-[1.2rem]  text-xl sm:w-2/3 w-full font-bold leading-tight tracking-wider'>Follow us for news, memes, giveaways, and much more.</p>
        <button className='md:text-[1.5rem] text-[1.2rem] px-4 py-2 font-bold leading-tight tracking-wider bg-sky-500 shadow-md rounded-md mt-5'>
          Get in Touch
        </button>
      </div>
    </div>
  </div>
  </Slider>
  )
}

export default HeroSlider