import React from 'react'
import Menu from './Menu'
import { AiOutlineHome } from "react-icons/ai"
import { IoIosPersonAdd } from "react-icons/io"
import LineChart1 from './LineChart1'

import Driver_statistics from './Driver_statistics'

const Driver = () => {
    return (
        <div>
            <Menu>
                <section className='pt-4'>
                    <div>
                        <div className='flex'>
                            <div className='bg-[#28C270] w-[50px] h-[50px] flex rounded-md justify-center items-center '>
                                <AiOutlineHome className='text-white text-2xl' />
                            </div>
                            <div className='ml-[20px]'>
                                <h1 className='text-xl font-semibold '>Taxi Ride</h1>
                                <p className='font-semibold'>Summary</p>
                            </div>

                        </div>
                        <div className='flex flex-wrap justify-between md:justify-around lg:justify-between mt-4'>
                            <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-4 border'>
                                <div className=''>
                                    <p>Approved drivers</p>
                                    <h1 className='text-lg font-bold'>256</h1>
                                </div>
                                <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                </div>
                            </div>
                            <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-4 border'>
                                <div className=''>
                                    <p>Active drivers</p>
                                    <h1 className='text-lg font-bold'>256</h1>
                                </div>
                                <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                </div>
                            </div>
                            <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-4 border'>
                                <div className=''>
                                    <p>Unapproved drivers</p>
                                    <h1 className='text-lg font-bold'>256</h1>
                                </div>
                                <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                </div>
                            </div>
                            <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-4 border'>
                                <div className=''>
                                    <p>Earnings</p>
                                    <h1 className='text-lg font-bold'>256</h1>
                                </div>
                                <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                </div>
                            </div>

                        </div>
                        <div className='mt-4 p-4'>
                            <div className='font-semibold'>Last 7-Days Taxi Ride Statics</div>
                        </div>
                        <div className='flex flex-wrap justify-between md:justify-around lg:justify-between mt-3'>
                            <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-3 border'>
                                <div className=''>
                                    <p>Total Rides</p>
                                    <h1 className='text-lg font-bold'>256</h1>
                                </div>
                                <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                </div>
                            </div>
                            <div className='flex  justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-3 border'>
                                <div className=''>
                                    <p>Completed Rides</p>
                                    <h1 className='text-lg font-bold'>256</h1>
                                </div>
                                <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                </div>
                            </div>
                            <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-3 border'>
                                <div className=''>
                                    <p>Running Rides</p>
                                    <h1 className='text-lg font-bold'>256</h1>
                                </div>
                                <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                </div>
                            </div>
                            <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-3 border'>
                                <div className=''>
                                    <p>Cancelled Rides</p>
                                    <h1 className='text-lg font-bold'>256</h1>
                                </div>
                                <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                </div>
                            </div>

                        </ div>
                        
                        <div className='flex flex-wrap justify-between mt-5'>
                            <div className='p-4 w-full md:w-[47%] border shadow-md'>
                                <div className='text-xl font-semibold border-b-2'>Ride status</div>
                                <div>
                                    <LineChart1 />

                                </div>
                            </div>
                            <div className='p-4 w-full md:w-[47%] border mt-4 md:mt-0 shadow-md'>
                                <div className='text-xl font-semibold border-b-2'>Driver statistics</div>
                                <div >
                                   <Driver_statistics /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Menu>
        </div>
    )
}

export default Driver