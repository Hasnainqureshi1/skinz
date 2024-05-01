import React, { useState } from 'react';

const ExtraCheckBox = ({ checkboxes, setExtraCheckBoxData }) => {
  const initialState = checkboxes.map(() => true);
  const [checkboxValues, setCheckboxValues] = useState(initialState);

  const handleExtraCheckboxChange = (data,index) => {
   setExtraCheckBoxData((prevCheckboxes) =>
     prevCheckboxes.map((checkbox, i) =>
       i === index ? { ...checkbox, isChecked: !checkbox.isChecked } : checkbox
     )
   );
  
 };
 

  return (
    <div>
      {checkboxes.map((checkbox, index) => (
        <div key={index} className='flex items-center p-[5px]'>
          <label className='flex  flex-row items-center cursor-pointer'>
            <input
              type="checkbox"
              checked={checkbox.isChecked}
              onChange={() => handleExtraCheckboxChange(checkbox,index)}
              className=' '
            />
            <span className='ml-2 select-none text-[12px]'>
            {checkbox.label}

            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ExtraCheckBox;
