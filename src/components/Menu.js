import React, { useState } from 'react';
import profileimg from "./../assets/images/main.png"




import Navbar from './Navbar';
// import Orders_and_profit f

//icons
import { AiOutlineDashboard } from 'react-icons/ai'
import { BsPersonBoundingBox, BsBarChartLine } from 'react-icons/bs'
import { IoCarSportSharp } from 'react-icons/io5'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { HiOutlineDocumentCheck } from 'react-icons/hi2'
import { TbReport } from 'react-icons/tb'

import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
import Profile from './Profile';


const Menu = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const setOpen = () => {
    setIsOpen(!isOpen);
  };
  const openProfile = () => {
    setShowProfile(!showProfile)
  };
  const OpenDashboard = () => {
    setShowDashboard(!showDashboard)
  }


  return (
    <div className="w-full h-[100vh] ">

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
              <Link to="/">
                <li ><a><AiOutlineDashboard size={20} />Dashboard</a></li>
              </Link>
              <Link to="/driver"><li><a><BsPersonBoundingBox size={20} />Drivers</a></li></Link>
              <Link to="/profile"><li><a><IoCarSportSharp size={20} />Cars</a></li></Link>
              <Link to="/riders"><li><a><MdOutlineTravelExplore size={20} />Riders</a></li></Link>

              <li className="menu-title">
                <span>Reports</span>
              </li>
              <Link to="/driver-list"><li><a><HiOutlineDocumentCheck size={20} />Drivers</a></li></Link>
              <Link to="/manual-booking"><li><a><TbReport size={20} />Taxi reports</a></li></Link>
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

            <>{children}</>

            {/* =======body started======== */}
            {/* { showDashboard ? (
              <Dashboard /> 
            ):null } */}
            {/* =======body end======== */}

            {/* ========Profile started===== */}

            {/* <Profile  /> */}

            {/* ========Profile ended===== */}


          </div>

        </section>

        {/* =======new section started======== */}

      </div>


    </div>
  )
}

export default Menu