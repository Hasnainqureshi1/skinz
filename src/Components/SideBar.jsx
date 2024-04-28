import React, { useState } from 'react';
import { GiCrossMark } from "react-icons/gi";
import { FaAngleDown, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import headerData from '../assets/headerItems/HeaderData';
import { IoIosArrowBack } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";

const SideBar = ({setActiveSideBar,ActiveSideBar,sidebarToggled,setActiveSideBarHide}) => {
  const [isSideBarTopVisible, setSideBarTopVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  // const toggleSideBarTopVisibility = () => {
  //   setCurrentCategory(null);
  // };

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };
  const handleBack = () => {
    setCurrentCategory(null);
  };

  const toggleSideBarTopVisibility = () => {
    setSideBarTopVisible(!isSideBarTopVisible);
  };

  return (
   // Sidebar component
<div className={`w-full left-0 z-50 absolute md:w-80 lg:hidden h-screen flex-col secondBg ${ sidebarToggled ? (ActiveSideBar ? 'sidebar-enter flex' : 'sidebar-exit') : ''}`}>

      {/* top  */}
      <div className='p-4 relative flex w-full border-b  border-gray-700 ' >
         {!currentCategory ?(
        <div onClick={toggleSideBarTopVisibility} className='flex hover:text-red-500 transition-colors duration-300 text-white  text-sm leading-tight  font-serif tracking-wider  whitespace-normal uppercase   center mt-1 p-1'>
         <p  className='cursor-pointer  '>Strike </p>
          <FaAngleDown  />
          
        </div>
               )        :(
                <div className='flex text-white  text-sm leading-tight  font-serif tracking-wider  whitespace-normal uppercase hover:text-red-500 transition-colors duration-300  cursor-pointer center mt-1 p-1' onClick={handleBack}>
                <IoIosArrowBack size={20} />  Go Back 
                </div>
               )
              }
        <div className=' absolute right-5 top-6'>
          <GiCrossMark   size={19} className=' hover:text-red-500 text-white transition-colors duration-300 cursor-pointer' onClick={() => {
            setTimeout(() => {
              setActiveSideBarHide(false)
            }, 900);
            setActiveSideBar(!ActiveSideBar)
            }} />
        </div>
      </div>
      <div className={`w-full h-full inline-table sideBarTopBg   transition-all duration-700  ${isSideBarTopVisible ? 'visible' : 'hidden'}`}>
        <div className='transition-all duration-700 '>
          <div className='center flex-wrap py-2 transition-all '>
            <button className='w-32 hover:scale-110 transition-all  p-2'>
              <img src={require('../assets/cs2.webp')} alt="" className='sidebarImgShadow'/>
            </button>
            <button className='w-32 hover:scale-110 transition-all  p-2'>
              <img src={require('../assets/dota2.webp')} alt=""  className='sidebarImgShadow'/>
            </button>
            <button className='w-32 hover:scale-110 transition-all  p-2'>
              <img src={require('../assets/cs2.webp')} alt=""  className='sidebarImgShadow' />
            </button>
            <button className='w-32 hover:scale-110 transition-all  p-2'>
              <img src={require('../assets/dota2.webp')} alt=""  className='sidebarImgShadow'/>
            </button>
          </div>
        </div>
      </div>
      {/* select items  */}
      <div className='w-full p-4 overflow-y-auto'>
      {currentCategory ? (
          <ul className='text-white text-sm font-semibold font transition-all  duration-1000 leading-tight tracking-wider'>
            {headerData.games.map((game) =>
              game.categories.map((category) =>
                category.name === currentCategory ? (
                  category.items.map((item) => (
                    <li key={item.name} className='p-2 mt-0 border-b transition-colors duration-300  border-gray-800 m-2 pl-3 hover:border-red-700 hover:border cursor-pointer   ' style={{boxShadow:"inset 0 0 9px #130f18"}}>
                      {item.name}
                    </li>
                  ))
                ) : null
              )
            )}
          </ul>
        ) : (
          <ul className='text-white text-sm font-semibold font leading-tight tracking-wider'>
            {headerData.games[0].categories.map((category) => (
              <li key={category.name} className='p-2 mt-0 border-b border-gray-800 m-2 pl-3 hover:border-red-700 hover:border cursor-pointer transition-colors duration-300   ' style={{boxShadow:"inset 0 0 9px #130f18"}} onClick={() => handleCategoryClick(category.name)}>
                {category.name}
              </li>
            ))}
          </ul>
        )}
        <div className='center  w-full mt-1 p-4'>
        <Link  to='signin' className=' w-full border-gray-400 shadow-lg  border  p-2 px-3 text-gray-400 text-center text-[12px]   rounded-md '>View More items</Link>

        </div>
         {/* social  */}
         <div className='p-2 mt-1'>
          <div className=' text-white flex '>
            <Link className='p-2 hover:text-orange-600 transition-all   duration-500'>
            <FaSquareFacebook size={24}/>

            </Link>
            <Link className='p-2 hover:text-orange-600 transition-all   duration-500'>
            <FaInstagram size={24} />


            </Link>
            <Link className='p-2 hover:text-orange-600 transition-all   duration-500'>
            <FaTwitter size={24}/>
            </Link>
            <Link className='p-2 hover:text-orange-600 transition-all   duration-500'>
            <FaTiktok size={24}/>

            </Link>
            <Link className='p-2 hover:text-orange-600 transition-all   duration-500'>
            <FaYoutube size={24} />
            </Link>
          {/* add more social links here  */}
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default SideBar;
