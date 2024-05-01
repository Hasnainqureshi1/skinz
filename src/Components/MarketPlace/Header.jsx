import React, { useState,useRef,useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import headerData from '../../assets/headerItems/HeaderData';
import SubHeaderItems from './SubHeaderItems';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Header = ({setActiveSideBar,ActiveSideBar,setSidebarToggled,sidebarToggled,setActiveSideBarHide}) => {
 // fetch data from backend 
 const [searchTerm, setSearchTerm] = useState('');
 const [cs2Categories, setCs2Categories] = useState([]);
 const [overflowTabs, setOverflowTabs] = useState([]);
 const [showMoreTabs, setShowMoreTabs] = useState(false);
 const [TabsHeader, setTabsHeader] = useState([])
 const [isSearchVisible, setIsSearchVisible] = useState(false);
 const [numTabs, setnumTabs] = useState()
 const tabsRef = useRef(null);
 const [isSearchHide, setIsSearchHide] = useState(false);
 const tabRef = useRef(null);
 const subHeaderRef = useRef(null);
 const [activeTab, setActiveTab] = useState()
 const handleSearchButtonClick = () => {
   setIsSearchHide(true)
  setIsSearchVisible(true);
};

 const handleCrossButtonClick = () => {
  setIsSearchVisible(false);
  setTimeout(() => {
    setIsSearchHide(false)
  }, 900);
  setSearchTerm('');
};

 const calculateIndividualTabWidths = (tabs) => {
  const tabWidths = [];
  for (const tab of tabs) {
    // Measure the width of the tab element
    const tabWidth = tab.offsetWidth;
 
    tabWidths.push(tabWidth);
  }
  return tabWidths;
};
 useEffect(() => {
  const handleResize = () => {
    const containerWidth = tabsRef.current.offsetWidth;
    const tabsWidth = tabsRef.current.scrollWidth;
   const screenWidth = window.innerWidth;
   const tabs = tabsRef.current.children; 
    const numTab = cs2Categories.length;
    const numTabs = TabsHeader.length;
    
      console.log("container Width ",containerWidth)
    // Calculate the number of tabs that can fit into the container
    // Calculate individual tab widths
    const tabWidths = calculateIndividualTabWidths(tabs);
    let totalTabWidth = tabWidths.reduce((sum, width) => sum + width, 0);
console.log(tabWidths);

const total = tabWidths.length;
const avg = (totalTabWidth / total) ;
console.log(avg);

let newTabCount = total;
let newWidth = totalTabWidth +190;

for (let i = 0; i < numTabs; i++) {
 
 if(newWidth >= containerWidth){
  if(newWidth+avg >containerWidth && newWidth-avg <containerWidth){
   // 1283  > 1027
   // 1095  < 1027
    console.log(newWidth+avg >containerWidth)
    console.log(newWidth )
   break;
  }
  console.log('width :',newWidth)
  newWidth = newWidth - avg
  console.log('width :',newWidth)
  
  newTabCount = newTabCount -1 ;
  
 
 }
 else if(newWidth <= containerWidth){
  if(newWidth+avg >containerWidth && newWidth-avg <containerWidth){
    
   break;
  }
  newWidth = newWidth + avg;
  console.log('width 2:',newWidth)
  newTabCount = newTabCount +1 ;
 
 }

 
}
 

// console.log(newTabCount)
 
  
    // Determine if there are overflow tabs
    const hasOverflowTabs = numTab > newTabCount;
    
  
 
   setTabsHeader(cs2Categories.slice(0,newTabCount))
    if (hasOverflowTabs) {
     console.log('have over')
      // Set overflow tabs
      setOverflowTabs(cs2Categories.slice(newTabCount));
      // Hide overflow tabs if they are currently shown
      setShowMoreTabs(false);
    } else {
      // Clear overflow tabs if there are no overflow tabs
      setOverflowTabs([]);
    }
  };

  handleResize(); // Call handleResize initially

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [cs2Categories]);

useEffect(() => {
  // Set CS2 categories
  const cs2Categories = headerData.games.find(game => game.name === "CS2").categories;
  setCs2Categories(cs2Categories);
  setTabsHeader(cs2Categories)
}, []);


 const handleSearch = () => {
   // Implement your search logic here
   console.log('Searching for:', searchTerm);
 };

 const handleKeyPress = (event) => {
   if (event.key === 'Enter') {
     handleSearch();
   }
 };
 const useOutsideClick = (ref, callback) => {
  useEffect(() => {
      let timeoutId = null;
      const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
              // Delay hiding the component so it doesn't conflict with other click handlers
              timeoutId = setTimeout(() => {
                  callback();
              }, 180); // 100ms delay can be adjusted based on your needs
          }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          clearTimeout(timeoutId);
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref, callback]);
};
const [showItems, setShowItems] = useState(false);
useEffect(() => {
  if (activeTab) {
      setShowItems(true); // Trigger the appearance with delay for transition
  }
}, [activeTab]);
useOutsideClick(subHeaderRef, () => {
  setShowItems(false); // Start hiding transition
  setTimeout(() => setActiveTab(null), 500);
 
});
 const handleTabClick = (category) => {
   console.log(category);
   setTimeout(() => {
     console.log(activeTab);
    
   }, 500);
  if (activeTab && activeTab.name === category.name) {
      // setActiveTab(null);
  } else {
      setActiveTab(category);
  }
};
  return (
    <div className=' lg:px-10 z-22  fixed flex-col flex w-full center'>
      <div className='w-full flex lg:px-4  px-1 lg:py-2  flex-col headerBg '>

    
     <header className='border-none  lg:border-b pb-2 center w-full  border-gray-600 '>
    <div className='p-2  lg:hidden block'>
    <RxHamburgerMenu size={24} color={'white'} onClick={() => {
       setSidebarToggled(true);
       setActiveSideBarHide(true)
      setActiveSideBar(!ActiveSideBar)}} className='cursor-pointer'/>
    </div>

      <div className='flex w-full'>
       {/* logo  */}
       <img  alt="SKINPORT" className='text-white p-3 ' />
       {/* game changer button  */}
       <button className='text-white hidden lg:block  p-3 mx-2 hover:text-navColor'>
        cs2
       </button>
       <button className='text-white md:block hidden  p-3 mx-2 hover:text-navColor '>
        Market
       </button>
       {/* search box  */}
       <div className="w-full hidden md:block p-3 space-x-2 relative mx-2">
        <label htmlFor="search">

        <FaSearch className='absolute left-7 text-white top-[1.6rem] ' />
        </label>
      <input
        type="text"
        id="search"
        name='search'
        className="border border-gray-300 searchBg pl-8 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:searchBg w-full text-gray-300"
        placeholder="Search for team fortuner..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      
 
    </div>
      </div>
      <div className=' hidden md:flex justify-center items-center mx-2  '>
       <button className='text-white p-3 mx-2 hover:text-navColor'>
        SignIn
       </button>
       <button className='text-white lg:px-3 lg:py-1 mx-2 text-[15px] px-3  h-9 btnBg rounded-md shadow-md  '>
        SignUp
       </button>
      </div>
      {/* mobile layout  */}
      <div className='md:hidden block'>
        <div className='center  mr-4  text-white '>
        <button className='p-2 text-white' onClick={handleSearchButtonClick}>
          <IoSearch  size={24}/>

          </button>
          <Link to='/signin'  className='p-2 text-white '>
         <FiUser  size={24}/>



          </Link>
        </div>
    
 

     {isSearchHide &&
        <div className={`mblSearch  bg-black absolute top-0 left-0 z-200 md:hidden flex p-3 space-x-2   justify-center items-center  ${isSearchVisible? "animated-search-bar":"animated-search-hide"} `}>
          <label htmlFor="search">
            <FaSearch className='absolute left-7 text-white top-[1.6rem]' />
          </label>
          <input
            type="text"
            id="search"
            name='search'
            className="searchBg pl-8 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:searchBg w-full text-gray-300"
            placeholder="Search for team fortuner..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleCrossButtonClick}>
            <RxCross2 size={24} color={'white'} />
          </button>
        </div>
   }
    
      </div>
     </header>
     {/* second header  */}
     <div className='mt-2 w-full    transition-all  lg:flex justify-center items-center  hidden relative secondHeaderBg' >
        <div  className='w-full center' >
          <ul className='flex  flex-wrap w-full center' ref={tabsRef}>
         
            {TabsHeader.map((category,index) => {
            
          
             
              return(

                <li
            key={index}
            onClick={() => handleTabClick(category)}
            className={`px-3 hover:text-red-500 m-1 cursor-pointer whitespace-nowrap uppercase font-bold text-sm leading-tight tracking-wider ${
                activeTab && activeTab.name === category.name ? 'text-navColor' : 'text-white'
            }`}
        >
                {category.name}
              </li>
              )
          
              }
            )}
            {overflowTabs.length > 0 && (
              <li className="text-white px-3 py-2">
                <button
                  onClick={() => setShowMoreTabs(!showMoreTabs)}
                  className="hover:text-navColor"
                >
                  {showMoreTabs ? 'Less' : 'More'}
                </button>
              </li>
            )}
          </ul>
        </div>
        {showMoreTabs && (
          <ul className="absolute flex top-12 bg-slate-700 right-0">
            {overflowTabs.map(category => (
              <li key={category.name} className='text-white px-3 m-1 whitespace-nowrap uppercase font-bold text-sm leading-tight tracking-wider'>
                <h3>{category.name}</h3>
              </li>
            ))}
          </ul>
        )}
          {/* Conditionally render SubHeaderItems based on activeTab */}
          {activeTab && (
               <div className='absolute  z-30 top-10 pb-10 text-white tabsBg w-full'   style={{
                opacity: showItems ? 1 : 0,
                transform: showItems ? 'translateY(0)' : 'translateY(-80%)'
            }} ref={subHeaderRef}>
                    <SubHeaderItems categories={activeTab} />
                </div>
            )}
        
      </div>
      </div>
    </div>
  )
}

export default Header