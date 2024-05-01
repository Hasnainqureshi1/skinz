import React from 'react'
import { StrikeData } from '../../assets/HomeData/cs2'
import GameCard from '../MarketPlace/GameCard'
import { Link } from 'react-router-dom'
import { LuSettings2 } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";

const GridLayout = ({setActiveSideBar,ActiveSideBar,setSidebarToggled,setActiveSideBarHide}) => {
  return (
   <>

    <div className='CatalogPage-content bg-red w-full'>
     {/* header  */}
     <div className='text-white flex flex-row py-3 justify-between mb-1 market-header px-4'>
      <div>
       {/* path  */}
       <Link className='text-sm  md:text-base '><span>Counter-Strik2 </span>   <span> Pistols</span></Link>
      </div>
      <div>
       {/* items count  */}
       <p className='text-white flex items-center text-sm  md:text-base h-full'>
       
        <span className=' '>2.34</span>
        <span className='pr-1'>M</span>
        <span className='pr-1'>Items</span>
        <FaRegCircleQuestion className='mt-1' />
       </p>
      </div>
      <div className='lg:hidden'>
       {/* grid or flex layout and select filter */}
       <LuSettings2 
 size={24} color={'white'} onClick={() => {
  setSidebarToggled(true);
  setActiveSideBarHide(true)
 setActiveSideBar(!ActiveSideBar)}} className='cursor-pointer' />

      </div>
     </div>
     <div className='CatalogPage-items CatalogPage-items--grid'>
      {/* dispalying items  */}
      {StrikeData.map((data, index) => (
            <GameCard key={index} data={data} className='clas' />
          ))}
     </div>
    </div>
    </>
  )
}

export default GridLayout