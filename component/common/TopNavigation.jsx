"use client";

import React, { useState } from 'react';
import Logo from './logo';
import CustomButton from './CustomButton';
import ToggleButton from './ToggleButton';
import NavigationMenu from './NavigationMenu';
import { FaUserCircle } from 'react-icons/fa'; // Example icon (you can use any icon)
import ProvincesList from './ProvincesList';

const TopNavigation = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Function to toggle the navigation visibility
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="flex justify-between sm:justify-evenly items-center p-4 sm:px-1 sm:py-4 border-b border-gray-300">
      {/* First Part: Logo and Title */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Second Part: Buttons */}
      <div className="flex items-center space-x-1">
        <div className="md:hidden">
          <ProvincesList />
        </div>
        <CustomButton icon={false} title={'Get Excitel Connection'} bgcolor={'#ff7d07'} link={'/connection'} color={'white'} />
        <CustomButton title={'Customer Login'} bgcolor={false} link={'/login'} color={'black'} Icon={<FaUserCircle />} />
        <ToggleButton isOpen={isNavVisible} onClick={toggleNav} />
      </div>

      {/* Navigation Menu: Hidden by default, shown when `isNavVisible` is true */}
      {isNavVisible && (
        <div className="bg-white shadow-lg rounded-lg p-4 z-10 fixed top-[60px] right-0 w-[300px] h-full overflow-auto">
          <NavigationMenu />
        </div>
      )}
    </div>
  );
};

export default TopNavigation;
