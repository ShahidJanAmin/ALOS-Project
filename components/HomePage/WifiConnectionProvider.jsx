// "use client"; // Ensure client-side rendering

// import React, { useState, useEffect } from 'react'
import { PiSpeedometerLight } from "react-icons/pi"
import { FaPeopleRoof } from "react-icons/fa6";
import { VscCallOutgoing } from "react-icons/vsc";

function WifiConnectionProvider() {
  // const [data, setData] = useState(null); // Initialize state as null

  // useEffect(() => {
  //     setData([
  //         { title: 'Super high consistency in performance', icon: <PiSpeedometerLight /> },
  //         { title: 'European technology', icon: <PiSpeedometerLight /> },
  //         { title: 'Excellent partner network for support', icon: <FaPeopleRoof /> },
  //         { title: 'Efficient customer support', icon: <VscCallOutgoing /> },
  //     ]);
  // }, []); // Only set data on the client side

  const data = [
    { title: 'Super high consistency in performance', icon: <PiSpeedometerLight /> },
    { title: 'European technology', icon: <PiSpeedometerLight /> },
    { title: 'Excellent partner network for support', icon: <FaPeopleRoof /> },
    { title: 'Efficient customer support', icon: <VscCallOutgoing /> },
  ]
  if (!data) return <div>Loading...</div>; // Loading state for server-side rendering

  return (
    <div className='flex flex-col justify-center items-center w-full py-10 sm:py-5'>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className='md:text-5xl text-xl text-center font-bold'>
          INTERNET Wi-Fi CONNECTION PROVIDER
        </h1>
        <p className='px-4 md:w-[60%] w-[90%] text-center mx-auto'>
          We are obsessed with transforming the way young Indians experience entertainment over the internet at home.
          We are connected to over 1 Million Homes and we are growing fast, very fast!
        </p>
      </div>

      <div className='mt-5 bg-orange-500 w-screen flex flex-col justify-center items-center py-10'>
        <h1 className='font-bold text-white text-2xl md:text-5xl text-center'>
          Our Power Factors
        </h1>
        <div className='flex flex-wrap flex-row justify-center items-start'>
          {
            data.map((d, i) => {
              return (
                <div key={i} className='flex justify-start items-center flex-col md:w-[200px] mx-4 my-4 '>
                  <span className='text-3xl text-white '>
                    {d.icon}
                  </span>
                  <h5 className='text-white text-center text-lg'>{d.title}</h5>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default WifiConnectionProvider
