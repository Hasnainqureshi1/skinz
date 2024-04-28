 
import React, { useEffect, useState } from 'react'
import Header from '../Components/MarketPlace/Header'
import SideBar from '../Components/SideBar'
 
import Footer from '../Components/Footer';
import FilterSidebar from '../Components/Market/FilterSidebar';
import GridLayout from '../Components/Market/GridLayout';
const Market = () => {
 const [ActiveSideBar, setActiveSideBar] = useState(false)
 const [ActiveSideBarHide, setActiveSideBarHide] = useState(false)
 const [pageLoaded, setPageLoaded] = useState(false); // State to track initial page load
 const [sidebarToggled, setSidebarToggled] = useState(false);
 useEffect(() => {
   // Set pageLoaded to true after the initial render
   setPageLoaded(true);
 }, []);
 
  return (
<div className='center overflow-y-auto'>
  {sidebarToggled && ActiveSideBarHide &&
  <SideBar ActiveSideBar={ActiveSideBar} setActiveSideBarHide={setActiveSideBarHide} sidebarToggled={sidebarToggled} setActiveSideBar={setActiveSideBar}/>
  }
  <div className={`h-screen common_layout relative ${pageLoaded && sidebarToggled ? (ActiveSideBar ? 'content-slide-enter' : 'content-slide-exit') : ''}`}>

    <Header setActiveSideBarHide={setActiveSideBarHide} setActiveSideBar={setActiveSideBar} setSidebarToggled={setSidebarToggled} ActiveSideBar={ActiveSideBar}/>
    <div className='common_layout_wrapper z-[-1]'>
      <div className='common_layout_content'>
  <div className='CatalogPage CatalogPage--filter'>
   <FilterSidebar/>

   <GridLayout/>
  </div>
    
    <Footer/>
      </div>

    </div>
    {/* { 
      <div className='presentation' onClick={() => {
     
        setActiveSideBar(true)}}
        ></div>
    } */}
  </div>
</div>
  )
}

export default Market