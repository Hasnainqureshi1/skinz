 
import React, { useEffect, useState } from 'react'
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
 const [pageLoaded, setPageLoaded] = useState(false); // State to track initial page load
 const [sidebarToggled, setSidebarToggled] = useState(false);
 useEffect(() => {
   // Set pageLoaded to true after the initial render
   setPageLoaded(true);
 }, []);
 console.log(FilterActiveSideBar)

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


  return (
<div className='center overflow-y-auto'>
  {sidebarToggled && ActiveSideBarHide &&
  <SideBar ActiveSideBar={ActiveSideBar} setActiveSideBarHide={setActiveSideBarHide} sidebarToggled={sidebarToggled} setSidebarToggled={setSidebarToggled} setActiveSideBar={setActiveSideBar}/>
  }
  {/* filter sidebar mbl  */}
  {FiltersidebarToggled && FilterActiveSideBarHide &&
  <MobileFilterSidebar FilterActiveSideBar={FilterActiveSideBar} setFilterActiveSideBarHide={setFilterActiveSideBarHide} FiltersidebarToggled={FiltersidebarToggled} setFilterActiveSideBar={setFilterActiveSideBar}
  initialValues={initialValues} ExtraCheckBoxData={ExtraCheckBoxData} setExtraCheckBoxData={setExtraCheckBoxData} checkedValues ={checkedValues} setCheckedValues={setCheckedValues}
  />
  }
 
 <div className={`h-screen common_layout relative ${
  pageLoaded && sidebarToggled
    ? (ActiveSideBar ? 'content-slide-enter' : 'content-slide-exit')
    : (pageLoaded && FiltersidebarToggled 
        ? (FilterActiveSideBar ? 'content-slide-enter-filter' : 'content-slide-exit-filter')
        : 'saa')
}`}>
 


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
        setSidebarToggled(false);
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