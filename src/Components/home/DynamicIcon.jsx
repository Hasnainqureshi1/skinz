import React from 'react';
// Import the icons you need
import { MdOutlineCompareArrows } from 'react-icons/md';
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { ImUsers } from "react-icons/im";

// Create a mapping from icon names to components
const icons = {
  'MdOutlineCompareArrows': MdOutlineCompareArrows,
  'RiMoneyDollarBoxFill':RiMoneyDollarBoxFill,
  'ImUsers':ImUsers,
};

const DynamicIcon = ({ iconName }) => {
  // Determine the icon component based on the iconName prop
  const IconComponent = icons[iconName];

  // Render the icon if it exists, otherwise render nothing or a fallback icon
  return IconComponent ? <IconComponent className='text-navColor' /> : null;
};

export default DynamicIcon;
