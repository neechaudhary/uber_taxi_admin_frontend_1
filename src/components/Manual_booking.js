
import React from 'react'

//icons
import { AiOutlineHome, AiOutlineCar } from "react-icons/ai"
import Google_maps from './Google_maps'
import Menu from './Menu'

const Manual_booking = () => {
    return (
        <div>
            <Menu>
                <section className='pt-4 w-full'>
                    <div className='w-full'>
                        <div className='flex '>
                            <div className='bg-[#28C270] w-[50px] h-[50px] flex rounded-md justify-center items-center '>
                                <AiOutlineHome className='text-white text-2xl' />
                            </div>
                            <div className='ml-[20px]'>
                                <h1 className='text-xl font-semibold '>Manual ride booking</h1>
                                <p className='font-semibold'>Manual ride booking of taxi ride</p>
                            </div>
                        </div>
                        <div className=' shadow-md border mt-4 p-4'>
                            <div className='text-xl font-bold tracking-wider'>Customer details</div>
                            <div className='flex flex-wrap justify-between'>
                                <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full'>
                                    <label for="Contact number" className='text-xl font-semibold py-2'>Contact number</label>
                                    <input type="text" placeholder="Contact number" className="p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10" />
                                </div>
                                <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full'>
                                    <label for="customer name" className='text-xl font-semibold py-2'>customer name</label>
                                    <input type="text" placeholder="customer name" className="p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10" />
                                </div>
                                <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full'>
                                    <label for="customer email" className='text-xl font-semibold py-2'>customer email</label>
                                    <input type="text" placeholder="customer email" className="p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10" />
                                </div>
                            </div>
                        </div>

                        <div className='shadow-md border mt-4 p-4'>
                            <div className='text-xl font-bold tracking-wider'>Ride details of taxi ride</div>
                            <div className='flex flex-wrap justify-between'>
                                <div className='w-full sm:w-1/2 '>
                                    <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full'>
                                        <label for="Pickup Address" className='text-xl font-semibold py-2'>Pickup Address</label>
                                        <input type="text" placeholder=" Enter Pickup Address" className="p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10" />
                                    </div>
                                    <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full'>
                                        <label for="Destination Address" className='text-xl font-semibold py-2'>Destination Address</label>
                                        <input type="text" placeholder=" Enter Destination Address" className="p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10" />
                                    </div>
                                    <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full'>
                                        <label htmlFor="pickup date" className='text-xl font-semibold py-2'>Pickup date</label>
                                        <input type="date"   className='p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10'/>
                                    </div>
                                    <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full '>
                                        <label htmlFor="pickup date" className='text-xl font-semibold py-2'>Pickup date</label>
                                        <input type="time"  className='p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10'/>
                                    </div>

                                </div>
                                <div className='border w-full lg:w-1/2 '>
                                    <div className='google-map'>
                                        <Google_maps/>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </Menu>
        </div>
    )
}

export default Manual_booking