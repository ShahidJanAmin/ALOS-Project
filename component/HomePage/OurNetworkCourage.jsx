import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoIosAppstore } from "react-icons/io";
const OurNetworkCoverage = () => {
  return (
    <div className="bg-orange-500 py-12 px-4 text-white my-5">
      <h2 className=" mb-8 text-center text-5xl font-bold">
        Our network coverage
      </h2>
      <div className="md:w-[80%] w-full mx-auto flex justify-evenly items-center">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Your one stop App for everything Excitel!</h3>
          <ul className="list-disc pl-6">
            <li className="mb-2">Browse plans | Pay online</li>
            <li className="mb-2">Manage your account | Troubleshoot</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start space-y-4">
          <button className="flex items-center justify-center bg-white text-black py-2 px-4 rounded-lg shadow-md w-full md:w-60">
          <BiLogoPlayStore />

            Download from App Store
          </button>
          <button className="flex items-center justify-center bg-white text-black py-2 px-4 rounded-lg shadow-md w-full md:w-60">
          <IoIosAppstore />

            Download from Play Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurNetworkCoverage;
