import React, { useState, useCallback, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
 
import SelectComponent from "./SelectComponent";
import ExtraCheckBox from "./ExtraCheckBox";

const FilterSidebar = ({checkedValues, setCheckedValues,initialValues, setExtraCheckBoxData,ExtraCheckBoxData}) => {
   
  
  const [anyExteriorCheckboxFalse, setanyExteriorCheckboxFalse] =
    useState(false);
  const [showExtras, setShowExtras] = useState(true); // State to control visibility of extras div
  const [showExterior, setShowExterior] = useState(true); // State to control visibility of exterior div
 
  const toggleExtras = () => {
    setShowExtras(!showExtras); // Toggle the state
  };

  const toggleExterior = () => {
    setShowExterior(!showExterior); // Toggle the state
  };
 
  useEffect(() => {
    const result = CheckExteriorboxResest();
    console.log(result);
    setanyExteriorCheckboxFalse(result);
  }, [checkedValues]);

  const handleCheckboxChange = (index) => {
    const newCheckedValues = [...checkedValues];
    if (newCheckedValues[index] === null) {
      newCheckedValues[index] = true;
    } else if (newCheckedValues[index] === true) {
      newCheckedValues[index] = false;
    } else {
      newCheckedValues[index] = null;
    }
    console.log(newCheckedValues);
    setCheckedValues(newCheckedValues);
  };

  const selectItems = [
    ["StatTrak", "StatTrak"],
    ["Souvenir", "Souvenir"],
    ["Sticker", "Sticker"],
    ["NameTag", "NameTag"],
    ["Vanilla", "value4"],
  ];

  const resetCheckboxes = () => {
    setCheckedValues(initialValues.map(() => null)); // Reset checkboxes to initial values
    
  };
  const resetExtraCheckboxes = () => {
    // Set all isChecked values to true
    const updatedCheckboxes = ExtraCheckBoxData.map((checkbox) => ({
      ...checkbox,
      isChecked: true,
    }));
    setExtraCheckBoxData(updatedCheckboxes);
  };

   
 
 
  const anyExtraCheckboxFalse = ExtraCheckBoxData.some(
    (value) => value.isChecked === false
  );

  const CheckExteriorboxResest = () => {
    const isReset = checkedValues.some(
      (value) => value === true || value === false
    );
    return isReset;
  };

  return (
    <>
      <div className="CatalogPage-filter hidden lg:flex">
        <div className="CatalogFilter">
          <div className="filter-wrapper">
            <div
              className="w-full flex justify-between items-center cursor-pointer hover:text-red-500 "
              onClick={toggleExtras}
            >
              <p className="filter-heading">Extras </p>
              <div className="flex items-center">
                {anyExtraCheckboxFalse && (
                  <div
                    className="reset-button mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      resetExtraCheckboxes();
                    }}
                  >
                    Reset
                  </div>
                )}
                <IoIosArrowDown />
              </div>
            </div>
            {showExtras && (
              <div>
                <div className="mt-3">
                  <ExtraCheckBox
                    checkboxes={ExtraCheckBoxData}
                    setExtraCheckBoxData={setExtraCheckBoxData}
                     
                  />
                </div>
              </div>
            )}
          </div>
          <div className="filter-wrapper">
            <div
              className="w-full flex justify-between cursor-pointer hover:text-red-500 "
              onClick={toggleExterior}
            >
              <p className="filter-heading">Exterior </p>
              <div className="flex items-center">
                {anyExteriorCheckboxFalse && (
                  <div
                    className="  mr-2  "
                    onClick={(e) => {
                      e.stopPropagation();
                      resetCheckboxes();
                    }}
                  >
                    <h5>Reset</h5>
                  </div>
                )}
                <IoIosArrowDown />
              </div>
            </div>
            {showExterior && (
              <div>
                <div className="mt-3">
                  <SelectComponent
                    initialValues={initialValues}
                    selectItems={selectItems}
                    handleCheckboxChange={handleCheckboxChange}
                    checkedValues={checkedValues}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
