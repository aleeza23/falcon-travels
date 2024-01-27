import React from "react";
import {Link, NavLink} from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import Button from "../../constant/Button";

const DesktopHeader = ({dropDown,setdropDown}) => {
  return (
    <>
  
      <nav class='bg-nav-bg   '>
        <div class='hidden w-full  lg:flex  ' id='navbar-dropdown'>
        
          <ul class=' w-[75%] flex flex-col gap-0  text-white  font-medium  md:flex-row   '>
            <NavLink
              to='/'
              className='block py-7  px-5 bg-primary-color text-white'
              aria-current='page'
            >
              Home
            </NavLink>

            <NavLink
              to='/about'
              className='block py-7  px-5 hover:bg-primary-color text-white'
              aria-current='page'
            >
              About
            </NavLink>
            <NavLink className='relative group'>
              <button
                
                class='text-white flex items-center justify-between  py-7 px-3 group  hover:bg-primary-color '
              >
                Services
                <svg
                  class='w-2.5 h-2.5 ms-2.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
            <div
                id='dropdownNavbar'
                class='z-10 absolute hidden group-hover:block shadow-lg  font-normal bg-white divide-y divide-gray-100   w-72'
              >
                <ul
                  class='py-2 text-sm text-gray-700 dark:text-gray-400'
                  aria-labelledby='dropdownLargeButton'
                >
                  <li>
                    <NavLink href='#' className='block py-2 px-3 hover:bg-primary-color text-xl '>
                      Wedding
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href='#' className='block py-2 px-3 hover:bg-primary-color text-xl '>
                      Prom
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href='#' className='block py-2 px-3 hover:bg-primary-color text-xl '>
                      Birthday
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href='#' className='block py-2 px-3 hover:bg-primary-color text-xl '>
                      Bachelorrate Party
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href='#' className='block py-2 px-3 hover:bg-primary-color text-xl '>
                      Nights Out
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href='#' className='block py-2 px-3 hover:bg-primary-color text-xl '>
                      Coperate Transportation
                    </NavLink>
                  </li>
                </ul>
                
              </div>   
            </NavLink>
            <NavLink
              to='/'
              className='block py-7  px-5 hover:bg-primary-color text-white'
              aria-current='page'
            >
              Our Fleet
            </NavLink><NavLink
              to='/'
              className='block py-7  px-5 hover:bg-primary-color text-white'
              aria-current='page'
            >
              Contact
            </NavLink><NavLink
              to='/'
              className='block py-7  px-5 hover:bg-primary-color text-white'
              aria-current='page'
            >
              Blog
            </NavLink><NavLink
              to='/'
              className='block py-7  px-5 hover:bg-primary-color text-white'
              aria-current='page'
            >
              Disclaimer
            </NavLink><NavLink
              to='/'
              className='block py-7 px-3 hover:bg-primary-color text-white'
              aria-current='page'
            >
              FAQs
            </NavLink>
            <NavLink
              to='/'
              className='block py-7 px-3   hover:bg-primary-color text-white'
              aria-current='page'
            >
              Get Instant Qoute Now
            </NavLink>

          
            
          </ul>
          <div className=' w-[25%] text-white flex pe-4 justify-end items-center '>
                <button><IoSearchSharp /></button>
            </div>
          
        </div>
      </nav>
    
    </>
  );
};

export default DesktopHeader;
