import React, { Children, useState } from 'react'
import profileimg from "./../assets/images/main.png"


// icons
import { GoLocation } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import Menu from './Menu';

const Profile = () => {
    return (
        <div >
            <Menu   >
                <section className='pt-4'>
                    <div className='sm:flex sm:flex-col md:flex md:flex-row md:justify-between '>
                        <div className='sm:w-full md:w-[30%] '>
                            <div className='border p-4 shadow-md rounded-md'>
                                <div className='flex justify-center'>
                                    <div className='w-[100px] h-[100px] rounded-full'>
                                        <img src={profileimg} alt="Profile image" className='w-full h-full rounded-full' />
                                    </div>
                                </div>
                                <div className='p-2 flex justify-center'>
                                    <div className='py-2 px-3 w-[200px] rounded-full bg-[#227471] text-white text-center font-semibold'>Connect to LinkedIn</div>
                                </div>
                                <div className='pt-1 flex justify-center'>
                                    <span className='text-sm md:text-md' >Speaks <b>English</b> and <b>German</b></span>
                                </div>
                                <div>
                                    <span className='text-sm md:text-md flex justify-center items-center font-bold text-gray-400 tracking-wide p-1'><GoLocation /> New york, India</span>
                                </div>
                                <div>
                                    <span className='text-md flex justify-center items-center md:text-lg font-bold'> 4.5 &nbsp;<span className='flex'><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span></span>
                                </div>
                            </div>
                        </div>

                        <div className='sm:mt-4 md:w-[60%] ' >
                            <div className=' border p-4 shadow-md  rounded-md'>
                                <div className='text-xl font-bold'>My Profile</div>
                                <div className=' sm:flex sm:flex-col md:flex md:flex-row md:justify-between'>
                                    <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col px-2 py-3 w-[310px]'>
                                        <label for="First name" className='text-xl font-semibold py-2'>First name</label>
                                        <input type="text" placeholder="Type here" className="p-2 input input-bordered rounded-none outline-none input-info w-full max-w-lg h-10" />
                                    </div>
                                    <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col px-2 py-3 w-[310px]'>
                                        <label htmlFor="Last name" className='text-xl font-semibold py-2'>Last name</label>
                                        <input type="text" placeholder="Type here" className=" p-2 input input-bordered rounded-none outline-none input-info w-full max-w-lg h-10" />
                                    </div>
                                </div>
                                <div className='sm:flex sm:flex-col md:flex md:flex-row md:justify-between'>
                                    <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col px-2 py-3 w-[310px]'>
                                        <label for="First name" className='text-xl font-semibold py-2'>Email</label>
                                        <input type="text" placeholder="Type here" className="p-2 input input-bordered rounded-none outline-none input-info w-full max-w-lg h-10" />
                                    </div>
                                    <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col px-2 py-3 w-[310px]'>
                                        <label htmlFor="Last name" className='text-xl font-semibold py-2'>Phone</label>
                                        <input type="text" placeholder="Type here" className=" p-2 input input-bordered rounded-none outline-none input-info w-full max-w-lg h-10" />
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='w-[310px] sm:w-full sm:flex sm:justify-between md:flex md:flex-col  px-2 py-3  md:w-full'>
                                        <label htmlFor="address" className='text-xl font-semibold py-2'>Address</label>
                                        <input type="text" placeholder="Type here" className=" p-2 input input-bordered rounded-none outline-none input-info w-full sm:max-w-lg  h-10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>

                    <div className='flex justify-between pt-3'>
                        <div className='hidden md:block w-[30%] '>

                        </div>
                        <div className='sm:w-full md:w-[60%]  shadow-md border p-3'>
                            <div className='text-xl font-bold tracking-wider'>Rider thank you notes</div>
                            <div className='flex h-15  p-2'>
                                <span className='text-4xl font-bold mr-2'>“</span><h1>Really nice driver with a lot of interesting stories. Thanks for advice.</h1>
                            </div>
                            <div className='flex h-15 p-2'>
                                <span className='text-4xl font-bold mr-2'>“</span><h1>Really nice driver with a lot of interesting stories. Thanks for advice.Really nice driver
                                    with a lot of interesting stories. Thanks for advice. Thanks for advice. Thanks for advice. Thanks for.</h1>
                            </div>
                            <div className='flex h-15  p-2'>
                                <span className='text-4xl font-bold mr-2'>“</span><h1>Really nice driver with a lot of interesting stories. Thanks for advice.</h1>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
            </Menu>
        </div>
    )
}

export default Profile