import React from 'react'
import profileimg from "./../assets/images/main.png"
import { IoIosNotifications } from "react-icons/io"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'
import {MdOutlinePeopleAlt} from "react-icons/md"

const Navbar = ({ onClick }) => {

  return (
    <div className='w-full'>
      <div className="navbar bg-base-100 sm:h-[36px] w-full flex justify-between">
        <button className="btn btn-square btn-ghost lg:hidden" onClick={onClick}>
          <GiHamburgerMenu size={30} />
        </button>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered hidden sm:block rounded-full shadow-md border-none" />
        </div>

        <div className="flex-none gap-4">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <button className="btn btn-ghost btn-circle">
            
            <MdOutlinePeopleAlt size={25}/>
            
          </button>

          <div className="dropdown dropdown-end" style={{ paddingRight: "10px" }}>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="sm:w-[40px] sm:h-[40px]  rounded-full">
                <img src={profileimg} style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
              </div>
            </label>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar