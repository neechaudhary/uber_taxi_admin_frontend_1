import React from 'react'

import Menu from './Menu'
import Switch from "./Switch"
//icons
import {BsKey} from "react-icons/bs"
import {AiOutlineHome, AiOutlineCar} from "react-icons/ai"
import {MdDeleteOutline} from "react-icons/md" 
import {IoDocumentSharp} from "react-icons/io5"



const Drivers_list = () => {
  return (
    <div>
        <Menu>
                <section className='pt-4 w-full'>
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <div className='bg-[#28C270] w-[50px] h-[50px] flex rounded-md justify-center items-center '>
                                    <AiOutlineHome className='text-white text-2xl' />
                                </div>
                                <div className='ml-[20px]'>
                                    <h1 className='text-xl font-semibold '>Drivers List</h1>
                                    <p className='font-semibold'>All driver list</p>
                                </div>
                            </div>

                            <div>
                                    <button className=' py-1 px-3 md:py-2 md:px-4 bg-[#4099FF] text-white'>
                                        Add Driver
                                    </button>
                            </div>
                        </div>
                        <div className="mt-4 p-4">
                            <input type="search" placeholder='search' className='outline-none border px-2 py-1' />
                        </div>
                        <div className=' mt-4 border w-full sm:w-full'>
                            <div className='  overflow-x-scroll '>
                               <table className='w-full min-w-[1200px]'>
                                <thead className='text-left border-b-2  '>
                                    <tr >
                                    <th className='px-3 py-2'>No.</th>
                                    <th className='px-3 py-2'>Vehicle type</th>
                                    <th className='px-3 py-2'>Service type</th>
                                    <th className='px-3 py-2'>Driver name</th>
                                    <th className='px-3 py-2'>Email</th>
                                    <th className='px-3 py-2'>Contact no.</th>
                                    <th className='px-3 py-2'>Rating</th>
                                    <th className='px-3 py-2'>Trip</th>
                                    <th className='px-3 py-2'>Documents</th>
                                    <th className='px-3 py-2'>App version</th>
                                    <th className='px-3 py-2'>Actions</th>



                                    </tr>
                                </thead>
                                <tbody>
                                <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>xuv</td>
                                        <td className='px-3 py-1'>Taxi ride </td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>4</td>
                                        <td className='px-3 py-1'><AiOutlineCar size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'><IoDocumentSharp size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'>1.2.5</td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline  size={25} className="text-[#28C270]"/> <BsKey  size={25} className="text-[#FE5F00]"/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>xuv</td>
                                        <td className='px-3 py-1'>Taxi ride </td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>4</td>
                                        <td className='px-3 py-1'><AiOutlineCar size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'><IoDocumentSharp size={25}className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'>1.2.5</td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline  size={25} className="text-[#28C270]"/> <BsKey  size={25} className="text-[#FE5F00]"/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>xuv</td>
                                        <td className='px-3 py-1'>Taxi ride </td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>4</td>
                                        <td className='px-3 py-1'><AiOutlineCar size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'><IoDocumentSharp size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'>1.2.5</td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline  size={25} className="text-[#28C270]"/> <BsKey  size={25} className="text-[#FE5F00]"/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>xuv</td>
                                        <td className='px-3 py-1'>Taxi ride </td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>4</td>
                                        <td className='px-3 py-1'><AiOutlineCar size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'><IoDocumentSharp size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'>1.2.5</td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline  size={25} className="text-[#28C270]"/> <BsKey  size={25} className="text-[#FE5F00]"/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>xuv</td>
                                        <td className='px-3 py-1'>Taxi ride </td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>4</td>
                                        <td className='px-3 py-1'><AiOutlineCar size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'><IoDocumentSharp size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'>1.2.5</td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline  size={25} className="text-[#28C270]"/> <BsKey  size={25} className="text-[#FE5F00]"/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>xuv</td>
                                        <td className='px-3 py-1'>Taxi ride </td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>4</td>
                                        <td className='px-3 py-1'><AiOutlineCar size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'><IoDocumentSharp size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'>1.2.5</td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline  size={25} className="text-[#28C270]"/> <BsKey  size={25} className="text-[#FE5F00]"/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>xuv</td>
                                        <td className='px-3 py-1'>Taxi ride </td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>4</td>
                                        <td className='px-3 py-1'><AiOutlineCar size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'><IoDocumentSharp size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'>1.2.5</td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline  size={25} className="text-[#28C270]"/> <BsKey  size={25} className="text-[#FE5F00]"/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>xuv</td>
                                        <td className='px-3 py-1'>Taxi ride </td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>4</td>
                                        <td className='px-3 py-1'><AiOutlineCar size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'><IoDocumentSharp size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'>1.2.5</td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline  size={25} className="text-[#28C270]"/> <BsKey  size={25} className="text-[#FE5F00]"/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>xuv</td>
                                        <td className='px-3 py-1'>Taxi ride </td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>4</td>
                                        <td className='px-3 py-1'><AiOutlineCar size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'><IoDocumentSharp size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'>1.2.5</td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline  size={25} className="text-[#28C270]"/> <BsKey  size={25} className="text-[#FE5F00]"/></span>
                                        
                                        </td>
                                    </tr> 
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>xuv</td>
                                        <td className='px-3 py-1'>Taxi ride </td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>4</td>
                                        <td className='px-3 py-1'><AiOutlineCar size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'><IoDocumentSharp size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'>1.2.5</td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline  size={25} className="text-[#28C270]"/> <BsKey  size={25} className="text-[#FE5F00]"/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>xuv</td>
                                        <td className='px-3 py-1'>Taxi ride </td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>4</td>
                                        <td className='px-3 py-1'><AiOutlineCar size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'><IoDocumentSharp size={25} className="text-[#28C270]"/></td>
                                        <td className='px-3 py-1'>1.2.5</td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline  size={25} className="text-[#28C270]"/> <BsKey  size={25} className="text-[#FE5F00]"/></span>
                                        
                                        </td>
                                    </tr>
                                   
                                </tbody>
                            </table> 
                            </div>
                            
                            
                        </div>
                    </div>

                </section>
            </Menu>
    </div>
  )
}

export default Drivers_list