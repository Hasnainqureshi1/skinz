 
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Header from '../Components/MarketPlace/Header'
import SideBar from '../Components/SideBar'
 
import Footer from '../Components/Footer';
import FilterSidebar from '../Components/Market/FilterSidebar';
import GridLayout from '../Components/Market/GridLayout';
import MobileFilterSidebar from '../Components/Market/MobileFilterSidebar';
const Market = () => {
 const [ActiveSideBar, setActiveSideBar] = useState(false)
 const [ActiveSideBarHide, setActiveSideBarHide] = useState(false)
 const [FilterActiveSideBar, setFilterActiveSideBar] = useState(false)
 const [FilterActiveSideBarHide, setFilterActiveSideBarHide] = useState(false)
 const [FiltersidebarToggled, setFilterSidebarToggled] = useState(false);
 const [sidebarToggled, setSidebarToggled] = useState(false);
 const [pageLoaded, setPageLoaded] = useState(false); // State to track initial page load
 useEffect(() => {
   // Set pageLoaded to true after the initial render
   setPageLoaded(true);
 }, []);

 useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setActiveSideBar(false);
      setActiveSideBarHide(false);
      setFilterActiveSideBar(false);
      setFilterActiveSideBarHide(false);
      setFilterSidebarToggled(false);
      setSidebarToggled(false);
    }
  };

  // Listen for window resize events
  window.addEventListener('resize', handleResize);

  // Cleanup the event listener
  return () => window.removeEventListener('resize', handleResize);
}, []);

//  sidebar functions and states 
const initialValues = [true, false, null, true, null];
  const [checkedValues, setCheckedValues] = useState(
    initialValues.map(() => null)
  );

//  extra check box  
const [ExtraCheckBoxData, setExtraCheckBoxData] = useState([
  { name: "checkbox1", label: "Minimal Wear", isChecked: true },
  { name: "checkbox2", label: "Field-Tested", isChecked: true },
  { name: "checkbox3", label: "Well Worn", isChecked: true },
  { name: "checkbox4", label: "Battle Scared", isChecked: true },
]);
useEffect(() => {
 console.log(sidebarToggled)
 console.log(sidebarToggled)
}, [sidebarToggled])
const [sidebarAnimation, setSidebarAnimation] = useState('');
const [filterSidebarAnimation, setFilterSidebarAnimation] = useState('');
const [TopSideBarTrack, setTopSideBarTrack] = useState(null)
const [FilterSideBarTrack, setFilterSideBarTrack] = useState(false)
 
//  1 ,2 ,3 ,4     
// 1 = top side bar open content-slide-enter
// 2 = bottom side bar open content-slide-exit
// 3 = top side bar closed content-slide-exit
// 4 = bottom side bar closed content-slide-exit
useLayoutEffect(() => {
  if (pageLoaded) {
    // Determine the animation class for the main content based on the state of the top and bottom sidebars
    if (sidebarToggled) {
      if (ActiveSideBar) {
        setSidebarAnimation('content-slide-enter');
      } else {
        setSidebarAnimation('content-slide-exit');
      }
    } else {
      setSidebarAnimation('');
    }

    // Determine the animation class for the filter sidebar based on its state
    if (FiltersidebarToggled) {
      console.log(FiltersidebarToggled)
      if (FilterActiveSideBar) {
        setFilterSidebarAnimation('content-slide-enter-filter');
        setSidebarAnimation('');
      } else {
        setFilterSidebarAnimation('content-slide-exit');
      }
    } else {
      setFilterSidebarAnimation('');
    }
  }
}, [pageLoaded, sidebarToggled, ActiveSideBar, FiltersidebarToggled, FilterActiveSideBar]);


  return (
<div className='center overflow-y-auto'>
  {sidebarToggled && ActiveSideBarHide &&
  <SideBar ActiveSideBar={ActiveSideBar} setActiveSideBarHide={setActiveSideBarHide} sidebarToggled={sidebarToggled} setSidebarToggled={setSidebarToggled} setActiveSideBar={setActiveSideBar} setTopSideBarTrack={setTopSideBarTrack}/>
  }
  {/* filter sidebar mbl  */}
  {FiltersidebarToggled && FilterActiveSideBarHide &&
  <MobileFilterSidebar FilterActiveSideBar={FilterActiveSideBar} setFilterActiveSideBarHide={setFilterActiveSideBarHide} FiltersidebarToggled={FiltersidebarToggled} setFilterActiveSideBar={setFilterActiveSideBar}
  initialValues={initialValues} ExtraCheckBoxData={ExtraCheckBoxData} setExtraCheckBoxData={setExtraCheckBoxData} checkedValues ={checkedValues} setCheckedValues={setCheckedValues}
  />
  }
  <div className={`h-screen common_layout relative ${sidebarAnimation || filterSidebarAnimation}`}>
 


    <Header setActiveSideBarHide={setActiveSideBarHide} setActiveSideBar={setActiveSideBar} setSidebarToggled={setSidebarToggled} sidebarToggled={sidebarToggled} ActiveSideBar={ActiveSideBar}/>
    <div className='common_layout_wrapper z-[-1]'>
      <div className='common_layout_content'>
  <div className='CatalogPage CatalogPage--filter'>
   <FilterSidebar initialValues={initialValues} ExtraCheckBoxData={ExtraCheckBoxData} setExtraCheckBoxData={setExtraCheckBoxData} checkedValues ={checkedValues} setCheckedValues={setCheckedValues}/>

   <GridLayout    
   setActiveSideBarHide={setFilterActiveSideBarHide} setActiveSideBar={setFilterActiveSideBar} setSidebarToggled={setFilterSidebarToggled} ActiveSideBar={FilterActiveSideBar}
   />
  </div>
    
    <Footer/>
      </div>

    </div>
 
    
    {ActiveSideBar &&
      <div className='presentation' onClick={() => {
        
        setActiveSideBar(!ActiveSideBar)}}
        ></div>
    }
    {FilterActiveSideBar &&
      <div className='presentation' onClick={() => {
         
        setFilterActiveSideBar(!FilterActiveSideBar)}}
        ></div>
    }
  </div>

</div>
  )
}

export default Market