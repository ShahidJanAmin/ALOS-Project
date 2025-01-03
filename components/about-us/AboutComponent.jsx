import React from 'react';
import { IoIosPeople } from "react-icons/io";import { GiTowerFlag } from "react-icons/gi";
function AboutComponent() {
  return (
    <div className="relative bg-gray-100 py-12 px-6">
      {/* Orange Diagonal Lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 h-screen w-5 bg-orange-500 rotate-45 transform origin-top-left" style={{ left: '3%', top: '-10%' }}></div>
        <div className="absolute top-0 left-0 h-screen w-5 bg-orange-500 rotate-45 transform origin-top-left" style={{ left: '7%', top: '-10%' }}></div>
        <div className="absolute top-0 left-0 h-screen w-5 bg-orange-500 rotate-45 transform origin-top-left" style={{ left: '11%', top: '-10%' }}></div>
        <div className="absolute top-0 left-0 h-screen w-5 bg-orange-500 rotate-45 transform origin-top-left" style={{ left: '15%', top: '-10%' }}></div>
      </div>

      <div className="text-center">
        {/* Title and Subtitle */}
        <h1 className=" text-orange-600 text-2xl md:text-5xl font-bold">ABOUT US</h1>
        <h2 className=" text-gray-800 mt-2">We are Excitel!</h2>

        {/* Description */}
        <p className=" text-gray-700 mt-4 md:w-[400px] mx-auto">
          Your go-to streaming partner for the ultimate binging experience!
        </p>
      </div>


      <div className='flex md:flex-row flex-col justify-center items-center'>
        <div className='md:w-[35%] w-[90%] mx-auto flex justify-center items-center flex-col'>
            <span className='text-9xl text-orange-600'>
                <IoIosPeople/>
            </span>
            <p>
            Our uber cool network design team keeps the hustle going- all the way from Europe! They know all the ropes when it comes to giving you the best internet experience thanks to their knowledge of the Internet ecosystem!
            </p>
        </div>

        <div className='md:w-[35%] w-[90%] mx-auto flex justify-center items-center flex-col'>
            <span className='text-9xl text-orange-600'>
                <GiTowerFlag/>
            </span>
            <p>
            We are in it to win it! With the top ISP’s on our side, our operations team loves to aim high and has overseen the evolution of Broadband in India like never before. With LIT knowledge and resources at hand, our team has all it takes to roll out seamless networks all throughout the country.
            </p>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
