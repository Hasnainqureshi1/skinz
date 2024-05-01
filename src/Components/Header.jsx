import React from 'react'
import { MdOutlineCompareArrows } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaSteam } from "react-icons/fa";


const Header = () => {
  return (
    <div className='w-full flex justify-between items-center h-16 px-4 md:px-8 lg:px-24 relative'>
     <div className='center'>
    {/* a  */}
    <Link className=' text text-white text-lg  '>
    Logo
    </Link>
    <div className='hidden  sm:flex justify-center items-center gap-8 ml-12'>
     {/* use this div for more pages link with react-icons  */}
<div className='center relative text-secColor widthIncrement gap-2 duration-200 cursor-pointer text-gray'>
<MdOutlineCompareArrows />

<p class="text-current text-12 md:text-14 font-semibold capitalize">trade</p>
</div>
    </div>
     </div>
     {/* right div  */}
     <div className='h-full flex flex-row gap-2 items-center py-3'>
      <div >
       <Link to='./sigin' className='h-10 rounded-md center bg-btnBg hover:bg-btnBgHover cursor-pointer shadow-sm px-3 center gap-2 hover'>
      <FaSteam className='text-white text-sm'/>

     <p class="text-main text-12 font-normal text-white">Sign in with Steam</p>
       </Link>

      </div>
     </div>
     
    </div>
  )
}

export default Header