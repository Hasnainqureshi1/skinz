import React from 'react'
import { FaDiscord, FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-11/12 xl:w-10/12 xxl:w-10/12 h-full flex flex-col gap-4 relative'>
      <div className='w-full h-60 lg:h-40 flex justify-center flex-col md:flex-row md:justify-between  relative'>
  <div className="flex flex-col gap-4 text-gray-400">
          {/* <img className="w-44" src="/assets/logo.webp" alt="SkinSwap Logo" /> */}
          <h1 className='text-lg text-white'>Logo</h1>
          <p className=" text-gray-400 text text-md  font-normal space-x-1  leading-5">
            Copyright 
            ©
            2024 Websitename.com All rights reserved.
            <br />
            
            Website name is....
            <br />
            Contact: contactinfo.com / 999999999
          </p>
        </div>
        <div className=" lg:relative top-28 lg:top-0 mt-4 md:mt-0  flex gap-8 sm:gap-16 text-gray-400">
          <div className="flex flex-col gap-2">
            <p className="text-14 sm:text-16 text-main font-medium text-white">Features</p>
            <div className="flex flex-col gap-0.5">
              <p className="p-hover text-12 sm:text-14 text-gray cursor-pointer hover:text-white transition-all duration-100">
                Trade Items
              </p>
              <p className="p-hover text-12 sm:text-14 text-gray cursor-pointer hover:text-white transition-all duration-100">
                Sell Items
              </p>
              <p className="p-hover text-12 sm:text-14 text-gray cursor-pointer hover:text-white transition-all duration-100">
                Buy Items
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-14 sm:text-16 text-main font-medium font-white">Additional</p>
            <div className="flex flex-col gap-0.5">
              <p className="p-hover text-12 sm:text-14 text-gray cursor-pointer hover:text-white transition-all duration-100">
                Blog
              </p>
              <p className="p-hover text-12 sm:text-14 text-gray cursor-pointer hover:text-white transition-all duration-100">
                Frequently Asked
              </p>
              <p className="p-hover text-12 sm:text-14 text-gray cursor-pointer hover:text-white transition-all duration-100">
                Privacy Policy
              </p>
              <p className="p-hover text-12 sm:text-14 text-gray cursor-pointer hover:text-white transition-all duration-100">
                Terms of Service
              </p>
              <p className="p-hover text-12 sm:text-14 text-gray cursor-pointer hover:text-white transition-all duration-100">
                Sitemap
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-14 sm:text-16 text-main text-white font-medium">Follow Us</p>
          <div className="center gap-2">
           <div className='p-1 bg-secondaryColor  '>
           <Link to='/'>
            <FaDiscord className = 'text-white' size={24} />
            </Link>
           </div>
           <div className='p-1 bg-secondaryColor  '>
            <Link to='/'>
            <FaTwitterSquare className = 'text-white' size={24} />
            </Link>
           </div>
           {/* add more links  */}
          </div>
        </div>
      </div>
      </div>

     
  )
}

export default Footer