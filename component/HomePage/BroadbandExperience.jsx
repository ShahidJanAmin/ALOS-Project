import React from 'react';
import ProvincesList from '../common/ProvincesList';
import { GiBoltCutter } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { MdOutlineConnectedTv } from "react-icons/md";
import CustomButton from '../common/CustomButton';
const BroadbandExperience = () => {
    const data = [
        {
            mb: 400,

        }
    ]
    return (
        <div className='bg-white/50 w-screen'>
            <div className='md:w-[80%] bg-white mx-auto py-10'>

                <h1 className='md:text-5xl text-xl text-center font-bold md:w-[70%] mx-auto '>
                    Your Binge-Worthy Broadband Experience Is Here
                </h1>
                <div className='flex justify-center  items-center mx-auto w-fit py-10 px-5'>
                    <p>Tell us where you live
                    </p>
                    <ProvincesList />
                </div>

                <h2 className='text-center text-xl md:text-2xl font-bold'>
                    Fast Fiber Fun
                </h2>

                <div className='md:my-5 my-2'>
                    <div className='flex justify-center md:text-5xl text-3xl items-center space-x-2'>
                        <GiBoltCutter />   <h1 className=' text-center font-bold'>
                            Cable Cutter
                        </h1>
                    </div>
                    <div className='flex justify-center items-center flex-wrap'>
                    {
                        Array(3).fill().map((_,index)=>{
                            return <CardRecord key={index}/>
                        })
                    }
                    </div>
                </div>

                <div className='my-5 md:py-10 '>
                <div className='flex justify-center md:text-5xl text-3xl items-center space-x-2'>
                        <GiBoltCutter />   <h1 className=' text-center font-bold'>
                            The Kickstarter
                        </h1>
                    </div>
                    <div className='flex justify-center items-center flex-wrap'>
                    {
                        Array(3).fill().map((_,index)=>{
                            return <CardRecord key={index}/>
                        })
                    }
                    </div>
                </div>

                    <div className='w-fit mx-auto'>
                <CustomButton title={'Read TNCS'} link={"/"} bgcolor={'orange'} bg={true} icon={false}/>

                    </div>
                </div>
        </div>
    );
}

export default BroadbandExperience;

const CardRecord = (props) => {
    const data = [
        { title: '12 months', data: '700afg/month' },
        { title: '12 months', data: '700afg/month' },
        { title: '12 months', data: '700afg/month' },
    ];

    return (
        <div className='w-[280px]  mx-auto my-5 relative'>
            <div className='ml-5'>
                {/* Top Section */}
                <div className='bg-orange-600 w-[60%] pt-2 rounded-xl rounded-bl-none rounded-br-none'>
                    <h5 className='text-white font-bold text-center'>Best Seller</h5>
                </div>

                {/* Middle Section (Upto 400MBPS) */}
                <div className='bg-blue-800 w-[80%] py-2 rounded-tr-lg h-[100px] flex justify-center items-center'>
                    <div>
                        <div className="flex items-center justify-center">
                            <span className="border-b-2 w-[50px]"></span>
                            <span className="mx-2 text-white font-bold">Upto </span>
                            <span className="border-b-2 w-[50px]"></span>
                        </div>
                        <h5 className='text-center font-bold text-2xl text-white'>
                            400 MBPS
                        </h5>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className='hover:shadow-lg transition-all duration-100  w-full rounded-lg  overflow-hidden border-2 border-orange-600'>
                <div className="bg-orange-600 relative">
                    <div className="flex justify-center items-center space-x-2 py-4 h-[80px]  font-bold">
                        <div className='flex flex-col justify-center items-center'>


                            <div className='flex flex-row justify-center items-center'>
                                <span className=' p-2 rounded-full bg-white '>  <FaWifi /> </span>
                                <span className='text-white font-bold ml-2'>
                                    +</span> </div>
                            <span>
                                Wifi +
                            </span>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex flex-row justify-center items-center'>
                                <span className=' p-2 rounded-full bg-white text-sm '>OTT </span>
                                <span className='text-white font-bold ml-2'>
                                    +</span> </div>
                            <span>OTT + </span>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <span className=' p-2 rounded-full bg-white '>
                                <MdOutlineConnectedTv />
                            </span>
                            <span>
                                IPTV
                            </span>
                        </div>
                    </div>
                    {/* V-shape at the bottom */}
                    {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-transparent border-t-orange-600"></div> */}
                </div>

                {/* Package List */}
                <div className='flex flex-col justify-center items-center py-5'>
                    {data && data.map((d, i) => <CardPackage title={d.title} data={d.data} key={i} />)}
                </div>

                <div className="flex justify-center items-center space-x-4 pb-5">
                    {/* TV Circles */}
                    <div className="flex space-x-[-12px]">
                        {Array(4).fill().map((_, index) => (
                            <div key={index} className="w-10 h-10 rounded-full bg-blue-600 shadow-lg"></div>
                        ))}
                    </div>

                    {/* OTT Circles */}
                    <div className="flex space-x-[-12px]">
                        {Array(3).fill().map((_, index) => (
                            <div key={index} className="w-10 h-10 rounded-full bg-red-600 shadow-lg"></div>
                        ))}
                    </div>
                </div>

                {/* Buy Button Section */}
                <div className='absolute -bottom-10 w-full  flex justify-center mt-4'>
                    <button className='bg-orange-600  w-[80%] mx-auto text-white py-2 px-6 rounded-full shadow-lg transform -translate-y-4 hover:bg-orange-500'>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};


const CardPackage = ({ title, data }) => {
    return (
        <div className='flex flex-row space-x-3 justify-center items-center border-b border-separate'>
            <span className='text-lg '>
                {title}
            </span>
            <span className='text-lg '>
                {data}
            </span>
        </div>
    )
}