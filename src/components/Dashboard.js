import React from 'react'
import LineChart from './LineChart';
import girlimg from "./../assets/images/girl_playing.png"
import shoesimg from "./../assets/images/shoes.jpg"
import inc_exp from "./../assets/images/income-expenses.png"

import BarChart from './BarChart';
//icons
import { AiOutlineDashboard } from 'react-icons/ai'
import Menu from './Menu';
import LineChart1 from './LineChart1';


const Dashboard = () => {
  return (
    <div>
      <Menu>


        <div className='py-4 sm:flex  '>
          <div className='sm:flex sm:w-[100%] justify-between items-stretch flex-wrap'>
            <div className='text-center md:flex flex-wrap md:justify-between rounded-lg sm:w-[100%] md:w-[60%]  bg-[#C8FACD] p-4'>
              <div className='sm:flex sm:flex-col sm:justify-center'>
                <div className='p-2'>
                  <h1 className='text-xl font-bold tracking-wide'>Congratulations</h1>
                  <h1 className='text-xl font-bold tracking-wide'>Gobigala company !</h1>
                </div>
                <div className='p-2'>
                  <p className='text-sm'>Best seller of the month</p>
                  <p className='text-sm'>You have done 57.6% more saled today.</p>
                </div>
                <button className='bg-[#01A44A] px-3 py-2 rounded-md text-white font-semibold  text-sm'>
                  Get now
                </button>
              </div>
              <div>
                <img src={girlimg} alt="girl image" className='m-auto' />
              </div>
            </div>
            <div className='flex justify-center bg-cover bg-center sm:w-[100%]  md:w-[30%]  rounded-lg  sm:mt-4 md:mt-0' style={{ backgroundImage: `url(${shoesimg})`, height: "200px" }}>
              <div className='bg-black/40 w-full h-full p-4 rounded-lg flex items-end'>
                <div className=''>
                  <p className='text-white font-semibold '>NEW</p>
                  <h1 className='text-white font-semibold py-2'>Peagus Running Shoes</h1>
                  <button className='bg-[#01A44A] px-3 py-2 rounded-md text-white font-semibold text-sm'>
                    Buy now
                  </button>
                </div>
              </div>

            </div>
            <div >
              {/* this div will be blank to manage the space  */}
            </div>
          </div>
        </div>

        <div className='sm:flex justify-between flex-wrap pt-2 w-[95%]'>
          <div className='  flex justify-between md:flex shadow-md sm:w-full grow shrink basis-0  p-5 md:py-2 md:px-3'>
            <div className='xl:w-[100%]'>
              <p className='text-md font-semibold'>Product sold</p>
              <h1 className='font-bold text-xl'>765</h1>
              <h1 className='flex'><span><AiOutlineDashboard size={20} /></span> <b>2.6%</b> than last week</h1>
            </div>
            <div className='lg:w-[30%]'><img src={inc_exp} alt="graph image" /></div>
          </div>

          <div className='flex justify-between md:flex shadow-md sm:w-full  grow shrink basis-0  p-5 md:py-2 md:px-3 mx-4'>
            <div className='xl:w-[100%]'>
              <p className='text-md font-semibold'>Product sold</p>
              <h1 className='font-bold text-xl'>765</h1>
              <h1 className='flex'><span><AiOutlineDashboard size={20} /></span> <b>2.6%</b> than last week</h1>
            </div>
            <div className='lg:w-[30%]'><img src={inc_exp} alt="graph image" /></div>
          </div>
          <div className='flex justify-between md:flex shadow-md sm:w-full  grow shrink basis-0  p-5 md:py-2 md:px-3'>
            <div className='xl:w-[100%]'>
              <p className='text-md font-semibold'>Product sold</p>
              <h1 className='font-bold text-xl'>765</h1>
              <h1 className='flex'><span><AiOutlineDashboard size={20} /></span> <b>2.6%</b> than last week</h1>
            </div>
            <div className='lg:w-[30%]'><img src={inc_exp} alt="graph image" /></div>
          </div>
          <div></div>
        </div>

        <div className='py-8'>
          <div className=' sm:flex md:flex md:justify-between items-stretch flex-wrap'>
            <div className='flex  flex-col justify-between bg-cover bg-center sm:w-[100%] md:w-[30%] rounded-lg shadow-md p-4'>
              <div className='p-2'>
                <h1 className='text-xl font-bold tracking-wide'>Sale by gender</h1>

              </div><hr />
              <div ><BarChart /></div>
              <div></div>
            </div>

            <div className='flex flex-col  rounded-lg sm:w-[100%] sm:h-auto md:w-[60%] shadow-md bg-[#ffffff] p-4'>
              <div className='p-2'>
                <h1 className='text-xl font-bold tracking-wide'>Sale by gender</h1>
              </div>
              <hr />
              <div ><LineChart /></div>
            </div>


            <div>
              {/* this div will be blank to manage the space  */}
            </div>
          </div>
        </div>

        <div className='py-8'>
          <div className='sm:flex md:flex md:justify-between items-stretch flex-wrap'>
            <div className='flex flex-col  rounded-lg sm:w-[100%] md:w-[60%] shadow-md bg-[#ffffff] p-4'>
              <div className='text-2xl font-bold tracking-wide'>Sales Overview</div>
              <div className='flex  justify-between py-4'>
                <div>Total profit</div>
                <div> <b>$37,404</b>(67%) </div>


              </div>
              <div className='w-full h-[2px] bg-green-400'></div>
              <div className='flex  justify-between py-4'>
                <div>Total profit</div>
                <div> <b>$37,404</b>(67%) </div>


              </div>
              <div className='w-full h-[2px] bg-green-400'></div>
              <div className='flex  justify-between py-4'>
                <div>Total profit</div>
                <div> <b>$37,404</b>(67%) </div>


              </div>
              <div className='w-full h-[2px] bg-green-400'></div>
            </div>

            <div className='flex  flex-col justify-center bg-cover bg-center sm:w-[100%] md:w-[30%] rounded-lg shadow-md p-4'>
              <div className='p-2'>
                <p className='font-semibold'>Your current balance</p>
              </div>
              <div className='p-2'>
                <h1 className='text-2xl font-bold'>$18,765</h1>
              </div>
              <div className='p-2'>
                <div className='flex justify-between'>
                  <div>Your current balance</div>
                  <div>+1,50,500</div>
                </div>
                <div className='flex justify-between'>
                  <div>Send amount</div>
                  <div>+1,50,500</div>
                </div>
                <div className='flex justify-between'>
                  <div>Total amount</div>
                  <div>+1,50,500</div>
                </div>
              </div>
              <div className='flex justify-around'>
                <button className='bg-[#f7a713] px-3 py-2 w-[100px] rounded-md text-black font-bold text-sm'>
                  Transfer
                </button>
                <button className='bg-[#01A44A] px-3 py-2 w-[100px] rounded-md text-white font-bold text-sm'>
                  Receive
                </button>
              </div>

            </div>
            <div>
              {/* this div will be blank to manage the space  */}
            </div>
          </div>
        </div>
      </Menu>

    </div>
  )
}

export default Dashboard