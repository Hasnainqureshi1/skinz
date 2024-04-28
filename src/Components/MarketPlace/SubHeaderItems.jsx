import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { GrNext, GrPrevious } from "react-icons/gr";

const NextArrow = ({ onClick }) => (
    <div className="slick-next h-full bg-red-200" onClick={onClick}>
        <GrNext size={50} color="white" className='text-white font-bold' />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="slick-prev" onClick={onClick}>
        <GrPrevious className='text-white font-bold' size={50} />
    </div>
);

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    className: "slider w-full",
    slidesToShow: 7,
    slidesToScroll: 6,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};


const SubHeaderItems = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
      console.log(category)
        setSelectedCategory(category); // Set the selected category
    };
    useEffect(() => {
      setSelectedCategory(categories.items)
      setSelectedCategory(categories.items[0]);
    }, [categories])
    const borderColorClasses = [
      'border-red-500',
      'border-blue-500',
      'border-green-500',
      'border-yellow-500',
      'border-purple-500',
      'border-pink-500',
      'border-indigo-500',
      'border-orange-500',
    ];
    const getRandomBorderColorClass = () =>
      borderColorClasses[Math.floor(Math.random() * borderColorClasses.length)];
  
    return (
        <div >
            <ul className='flex center w-full border-b border-gray-500 '>
            {categories.items.map((category, index) => (
    <li key={index}
        onClick={() => handleCategoryClick(category)}
        className={`px-3 cursor-pointer  whitespace-nowrap uppercase font-semibold text-sm leading-tight tracking-wider border-b-2 hover:border-red-600 py-5 ${
          selectedCategory && selectedCategory.name === category.name
          ? ' border-red-500' // Active tab color
          : ' border-transparent' // Non-active tab color
      }  `}>
        {category.name}
    </li>
))}
            </ul>
            <div className='flex justify-between p-2'>
                <p className='text-sm text-bold leading-tight tracking-wide'>{selectedCategory ? selectedCategory.name + " Items" : "Select a Category"}</p>
                <Link className='uppercase text-gray-400 text-sm'>see all 21k Offers</Link>
            </div>
            {selectedCategory && (
                <div className="flex overflow-visible no-scrollbar relative">
                    <Slider {...settings}>
                        {selectedCategory.subItems.map((item, index) => (
                            <div key={index} className={`item-container ${getRandomBorderColorClass()}  topItemBg flex flex-col m-1 mx-[2px] border-t-2 shadow-2xl items-center transition-all hover:shadow-2xl`}>
                                <div className={`overflow-visible p-1`}>
                                    <img src={require(`../../assets/${item.image}`)} alt={item.name} className="h-32 w-36" />
                                </div>
                                <div className="text-gray-100 mt-2">{item.name}</div>
                                <div className='center w-full pb-2'>
                                    <div className="text-gray-400">From</div>
                                    <div className="text-white ml-2">${item.price}</div>
                                </div>
                                <button className='info-button bg-sky-500 p-2 absolute bottom-0 w-full'>
                                    View more Info
                                </button>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    );
};

export default SubHeaderItems;
