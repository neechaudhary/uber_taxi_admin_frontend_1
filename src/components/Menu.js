import React from 'react';
import profileimg from "./../assets/images/main.png"
import girlimg from "./../assets/images/girl_playing.png"
import shoesimg from "./../assets/images/shoes.jpg"
import inc_exp from "./../assets/images/income-expenses.png"



import Navbar from './Navbar';
// import Orders_and_profit f

//icons
import { AiOutlineDashboard } from 'react-icons/ai'
import { BsPersonBoundingBox, BsBarChartLine } from 'react-icons/bs'
import { IoCarSportSharp } from 'react-icons/io5'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { HiOutlineDocumentCheck } from 'react-icons/hi2'
import { TbReport } from 'react-icons/tb'
import LineChart from './LineChart';

import BarChart from './BarChart';


const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const setOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-[100vh]">


      <div className='md:flex' >
        <div className={`${isOpen ? ' max-lg:fixed' : "max-lg:hidden "} pt-[75px] lg:pt-0 sticky top-0 w-[250px] h-[100vh] overflow-y-scroll sidebar py-4 px-2 bg-[#ffffff] border-r-2  grow-0 shrink-0 `}>
          <div className='logo p-2 text-[#07A64B] flex align-middle'>
            <span className='text-lg font-bold'>Zuber taxi</span>
          </div>
          <div className='profile_body bg-[#f2f2f2] flex py-4 px-2  '>
            <div className='flex justify-center '>
              <img src={profileimg} alt="profile image" className='w-[50px] h-[50px] rounded-full' />
            </div>
            <div className='name and details pl-3'>
              <span className='font-semibold'>Neeraj chaudhary</span> <br />
              <span>Admin</span>
            </div>
          </div>
          <div className='pt-6'>
            <ul className="menu bg-base-100 rounded-none " >
              <li className="menu-title">
                <span >Park info</span>
              </li>
              <li><a><AiOutlineDashboard size={20} />Dashboard</a></li>
              <li><a><BsPersonBoundingBox size={20} />Drivers</a></li>
              <li><a><IoCarSportSharp size={20} />Cars</a></li>
              <li><a><MdOutlineTravelExplore size={20} />Travels</a></li>

              <li className="menu-title">
                <span>Reports</span>
              </li>
              <li><a><HiOutlineDocumentCheck size={20} />Payroll</a></li>
              <li><a><TbReport size={20} />Taxi reports</a></li>
              <li><a><BsBarChartLine size={20} />productivity</a></li>

            </ul>
          </div>
        </div>
      
        {/* =======new section started======== */}
        <section className='w-full'>
          <div className='p-[15px]'>
            {/* ========navbar started =========*/}
            <div className='w-full sm:h-full  sticky top-0 flex justify-between '>
              <Navbar onClick={setOpen} />
            </div>
            {/* ========navbar end =========*/}

            {/* =======body started======== */}
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
                <div className='flex justify-center bg-cover bg-center sm:w-[100%]  md:w-[30%]  rounded-lg mt-4 sm:mt-4' style={{ backgroundImage: `url(${shoesimg})`, height:"200px" }}>
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

            <div className='sm:flex justify-between flex-wrap pt-2'>
              <div className='  flex justify-between md:flex shadow-md sm:w-full md:w-[28%]  p-5 md:py-2 md:px-3'>
                <div className='xl:w-[100%]'>
                  <p className='text-md font-semibold'>Product sold</p>
                  <h1 className='font-bold text-xl'>765</h1>
                  <h1 className='flex'><span><AiOutlineDashboard size={20} /></span> <b>2.6%</b> than last week</h1>
                </div>
                <div className='lg:w-[30%]'><img src={inc_exp} alt="graph image" /></div>
              </div>

              <div className='flex justify-between md:flex shadow-md sm:w-full md:w-[28%]  p-5 md:py-2 md:px-3'>
                <div className='xl:w-[100%]'>
                  <p className='text-md font-semibold'>Product sold</p>
                  <h1 className='font-bold text-xl'>765</h1>
                  <h1 className='flex'><span><AiOutlineDashboard size={20} /></span> <b>2.6%</b> than last week</h1>
                </div>
                <div className='lg:w-[30%]'><img src={inc_exp} alt="graph image" /></div>
              </div>
              <div className='flex justify-between md:flex shadow-md sm:w-full md:w-[28%]  p-5 md:py-2 md:px-3'>
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
                <div className='flex  flex-col justify-between bg-cover bg-center sm:w-[100%] md:w-[30%] rounded-lg shadow-lg p-4'>
                  <div className='p-2'>
                    <h1 className='text-xl font-bold tracking-wide'>Sale by gender</h1>

                  </div><hr />
                  <div ><BarChart /></div>
                  <div></div>
                </div>

                <div className='flex flex-col  rounded-lg sm:w-[100%] sm:h-auto md:w-[60%] shadow-lg bg-[#ffffff] p-4'>
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
                <div className='flex flex-col  rounded-lg sm:w-[100%] md:w-[60%] shadow-lg bg-[#ffffff] p-4'>
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

                <div className='flex  flex-col justify-center bg-cover bg-center sm:w-[100%] md:w-[30%] rounded-lg shadow-lg p-4'>
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




            {/* =======body end======== */}

          </div>

        </section>

        {/* =======new section started======== */}

      </div>


    </div>
  )
}

export default Menu