import React from 'react'
import Menu from './Menu'
import { AiOutlineHome } from "react-icons/ai"
import {MdDeleteOutline} from "react-icons/md" 
import { BsKey } from 'react-icons/bs'
import Switch from './Switch'


const Riders = () => {
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
                                    <h1 className='text-xl font-semibold '>Customers List</h1>
                                    <p className='font-semibold'>All customers list</p>
                                </div>
                            </div>

                            <div>
                                    <button className=' py-1 px-3 md:py-2 md:px-4 bg-[#4099FF] text-white'>
                                        Add customer
                                    </button>
                            </div>
                        </div>
                        <div className="mt-4 p-4">
                            <input type="search" placeholder='search' className='outline-none border px-2 py-1' />
                        </div>
                        <div className=' mt-4 border w-full sm:w-full'>
                            <div className='  overflow-x-scroll z-20 '>
                               <table className='w-full min-w-[1000px]'>
                                <thead className='text-left border-b-2  '>
                                    <tr >
                                    <th className='px-3 py-2'>No.</th>
                                    <th className='px-3 py-2'>Customer's name</th>
                                    <th className='px-3 py-2'>Email</th>
                                    <th className='px-3 py-2'>Contact</th>
                                    <th className='px-3 py-2'>Wallet Balance</th>
                                    <th className='px-3 py-2'>App version</th>
                                    <th className='px-3 py-2'>Status</th>
                                    <th className='px-3 py-2'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>200</td>
                                        <td className='px-3 py-1'>0</td>
                                        <td className='px-3 py-1'><Switch /></td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline/> <BsKey/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>200</td>
                                        <td className='px-3 py-1'>0</td>
                                        <td className='px-3 py-1'><Switch /></td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline/> <BsKey/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>200</td>
                                        <td className='px-3 py-1'>0</td>
                                        <td className='px-3 py-1'><Switch /></td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline/> <BsKey/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>200</td>
                                        <td className='px-3 py-1'>0</td>
                                        <td className='px-3 py-1'><Switch /></td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline/> <BsKey/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>200</td>
                                        <td className='px-3 py-1'>0</td>
                                        <td className='px-3 py-1'><Switch /></td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline/> <BsKey/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>200</td>
                                        <td className='px-3 py-1'>0</td>
                                        <td className='px-3 py-1'><Switch /></td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline/> <BsKey/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>200</td>
                                        <td className='px-3 py-1'>0</td>
                                        <td className='px-3 py-1'><Switch /></td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline/> <BsKey/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>200</td>
                                        <td className='px-3 py-1'>0</td>
                                        <td className='px-3 py-1'><Switch /></td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline/> <BsKey/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>200</td>
                                        <td className='px-3 py-1'>0</td>
                                        <td className='px-3 py-1'><Switch /></td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline/> <BsKey/></span>
                                        
                                        </td>
                                    </tr>
                                    <tr className='border-b-2'>
                                        <td className='px-3 py-1'>210</td>
                                        <td className='px-3 py-1'>Neeraj</td>
                                        <td className='px-3 py-1'>neerajbhumihaar@gmail.com</td>
                                        <td className='px-3 py-1'>9758845788</td>
                                        <td className='px-3 py-1'>200</td>
                                        <td className='px-3 py-1'>0</td>
                                        <td className='px-3 py-1'><Switch /></td>
                                        <td className='px-3 py-1'>
                                            <span className='flex'><MdDeleteOutline/> <BsKey/></span>
                                        
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

export default Riders