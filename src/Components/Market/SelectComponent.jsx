import React, { useState, useEffect } from 'react';

const SelectComponent = ({ selectItems,checkedValues, handleCheckboxChange,  }) => {
 

  


  const handleCheckboxRef = (input, index) => {
    if (input) {
      input.indeterminate = checkedValues[index] === null;
      if (checkedValues[index] === false) {
        input.classList.add('indeterminate');
      } else {
        input.classList.remove('indeterminate');
      }
    }
  };

  const getCheckboxStyle = (index) => {
    if (checkedValues[index] === true) {
      return 'bg-green-500';
    } else if (checkedValues[index] === false) {
      return 'bg-red-500';
    } else {
      return 'bg-gray-500';
    }
  };

  return (
    <div>
      {selectItems.map((data, index) => (
  <div key={index} className="flex items-center p-[5px] ">
    <label className="flex flex-row items-center cursor-pointer">
    <input
      type="checkbox"
      className={`triCheckbox w-6 h-6 rounded-full border border-gray-400 cursor-pointer transition-colors ${getCheckboxStyle(index)}`}
      onChange={() => handleCheckboxChange(index)}
      checked={checkedValues[index] === true}
      ref={(input) => handleCheckboxRef(input, index)}
      value={data[1]} // Set value to data[1]
    />
    <span className='ml-2 select-none text-[12px]'>

   {data[0]}
    </span>
   </label> {/* Display label from data[0] */}
  </div>
))}

    </div>
  );
};

export default SelectComponent;
