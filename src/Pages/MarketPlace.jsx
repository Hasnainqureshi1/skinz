import React, { useEffect, useState } from 'react'
import Header from '../Components/MarketPlace/Header'
import SideBar from '../Components/SideBar'
import HeroSlider from '../Components/MarketPlace/HeroSlider'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import MissionaryLayout from '../Components/MarketPlace/MissionaryLayout';
import GameCard from '../Components/MarketPlace/GameCard';
import MoreSections from '../Components/MarketPlace/MoreSections';
import Footer from '../Components/Footer';
const MarketPlace = () => {
  const [ActiveSideBar, setActiveSideBar] = useState(false)
  const [ActiveSideBarHide, setActiveSideBarHide] = useState(false)
  const [pageLoaded, setPageLoaded] = useState(false); // State to track initial page load
  const [sidebarToggled, setSidebarToggled] = useState(false);
  useEffect(() => {
    // Set pageLoaded to true after the initial render
    setPageLoaded(true);
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setActiveSideBar(false);
        setActiveSideBarHide(false);
        
        setSidebarToggled(false);
      }
    };
  
    // Listen for window resize events
    window.addEventListener('resize', handleResize);
  
    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  


  return (
  
<div className='center overflow-y-auto'>
  {sidebarToggled && ActiveSideBarHide &&
  <SideBar ActiveSideBar={ActiveSideBar} setActiveSideBarHide={setActiveSideBarHide} sidebarToggled={sidebarToggled} setSidebarToggled={setSidebarToggled} setActiveSideBar={setActiveSideBar}/>
  }
  <div className={`h-screen common_layout relative ${pageLoaded && sidebarToggled ? (ActiveSideBar ? 'content-slide-enter' : 'content-slide-exit') : ''}`}>

    <Header setActiveSideBarHide={setActiveSideBarHide} setActiveSideBar={setActiveSideBar} setSidebarToggled={setSidebarToggled} ActiveSideBar={ActiveSideBar}/>
    <div className={`common_layout_wrapper z-[-1] ${ActiveSideBar? 'overflow-hidden':''}`}>
      <div className='common_layout_content'>

    <HeroSlider/>
    <MoreSections/>
 
    <MissionaryLayout/>
    <Footer/>
      </div>

    </div>
    {ActiveSideBar &&
      <div className='presentation' onClick={() => {
     
        setActiveSideBar(!ActiveSideBar)}}
        ></div>
    }
  </div>
</div>


  
    
  )
}

export default MarketPlace