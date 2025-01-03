"use client";

import provinces from '@/constants/proviences';
import React, { useState } from 'react';
import { MdManageSearch } from "react-icons/md";

const ProvincesList = ({top=false}) => {
  const [selectedProvince, setSelectedProvince] = useState(null);

  // Function to handle selection
  const handleSelectProvince = (event) => {
    const selected = provinces.find(province => province.eng === event.target.value);
    setSelectedProvince(selected);
    alert(`You selected: ${selected.eng} (${selected.pashto})`);
  };

  return (
    <div className="container mx-auto ">

      {/* Listbox (dropdown) */}
      <div className={`relative flex flex-row justify-center items-center  p-0 ${top?' bg-orange-600 rounded-2xl':''}`}>
      <div className='text-xl hover:text-blue-600 transition duration-300  w-[60px]  h-[100%] text-white px-2'>
      <MdManageSearch />
      </div>

        <select
          onChange={handleSelectProvince}
          className="block w-full px-4 py-2  bg-white md:border border-orange-600 rounded-md shadow-sm focus:ring-0 focus:orange-600 focus:outline-none text-sm"
        >
          {provinces.map((province, index) => (
            <option key={index} value={province.eng} className='text-sm '>
              {province.eng} 
            </option>
          ))}
        </select>
      </div>

      {/* Display Selected Province
      {selectedProvince && (
        <div className="mt-4">
          <p><strong>English:</strong> {selectedProvince.eng}</p>
          <p><strong>Pashto:</strong> {selectedProvince.pashto}</p>
        </div>
      )} */}
    </div>
  );
};

export default ProvincesList;
