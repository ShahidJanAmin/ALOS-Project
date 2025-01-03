"use client";

import React from 'react';
import Link from 'next/link'; // Import Link component from Next.js
import ProvincesList from './ProvincesList';

const HorizontalMenu = () => {
  return (
    <div className="relative flex flex-row justify-center items-center">
      {/* Horizontal Menu Container  min-w-full*/}
      <div className="flex justify-start overflow-x-auto whitespace-nowrap py-2 px-4 space-x-8 scroll-smooth">
        <div className="flex-none">
          <Link href="#broadband-plans" className="text-lg text-center hover:text-orange-500 transition duration-300">
            Broadband Plans
          </Link>
        </div>
        <div className="flex-none">
          <Link href="#excitel-fiber" className="text-lg text-center hover:text-orange-500 transition duration-300">
            Excitel Fiber
          </Link>
        </div>
        <div className="flex-none">
          <Link href="#blogs" className="text-lg text-center hover:text-orange-500 transition duration-300">
            Blogs
          </Link>
        </div>
        <div className="flex-none">
          <Link href="#speed-test" className="text-lg text-center hover:text-orange-500 transition duration-300">
            Speed Test
          </Link>
        </div>
        <div className="flex-none">
          <Link href="#add-on-otts" className="text-lg text-center hover:text-orange-500 transition duration-300">
            Add on OTTs
          </Link>
        </div>
        <div className="flex-none">
          <Link href="#infographic" className="text-lg text-center hover:text-orange-500 transition duration-300">
            Infographic
          </Link>
        </div>
        <div className="flex-none">
          <Link href="#wifigram" className="text-lg text-center hover:text-orange-500 transition duration-300">
            Wifigram ™
          </Link>
        </div>
        <div className="flex-none">
          <Link href="#contact-us" className="text-lg text-center hover:text-orange-500 transition duration-300">
            Contact Us
          </Link>
        </div>
        <div className="flex-none">
          <Link href="#careers" className="text-lg text-center hover:text-orange-500 transition duration-300">
            Careers
          </Link>
        </div>
      </div>
      <div className='hidden md:block w-fit'>
  <ProvincesList top={true}/>
</div>


      {/* Hide scroll bar on small screens */}
      <style jsx>{`
        /* Hide scrollbar */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-x-auto {
          -ms-overflow-style: none; /* IE 10+ */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default HorizontalMenu;
