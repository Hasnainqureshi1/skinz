import React from "react";
import DynamicIcon from "./DynamicIcon";

const ShowTotal = ({icon,title,descStart,descEnd,number}) => {
  return (
    <div className="w-60 sm:w-40 md:w-52 lg:w-72 xl:w-88 flex flex-col text-white gap-1">
      <div className="flex items-center gap-2">
       
        <DynamicIcon iconName={icon} className='text-navColor'  />
        <p class="text-14 md:text-16 xl:text-20 text-main  font-semibold">
          {title}
        </p>
      </div>
      <div>
        
      <p class="text-gray-500 text-10 md:text-12 lg:text-14 xl:text-16 font-medium">
        {descStart} <span className="font-semibold text-navColor"> {number}</span>
        <br />
      {descEnd}
      </p>
      </div>
    </div>
  );
};

export default ShowTotal;
