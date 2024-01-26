import React from "react";
import {Link, NavLink} from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import Button from "../../constant/Button";

const DesktopHeader = () => {
  return (
    <>
      <nav class='bg-nav-bg '>
        <div class='hidden w-full  lg:flex  md:w-auto' id='navbar-dropdown'>
        
          <ul class=' w-[75%] flex flex-col gap-0 justify-between text-white  font-medium  md:flex-row   '>
            <NavLink
              to='/'
              className='block py-5 w-full  px-3 bg-primary-color text-white'
              aria-current='page'
            >
              Home
            </NavLink>

            <NavLink
              to='/'
              className='block py-5 w-full px-3 hover:bg-primary-color text-white'
              aria-current='page'
            >
              Home
            </NavLink>
            <NavLink
              to='/'
              className='block py-5 px-3 w-full hover:bg-primary-color text-white'
              aria-current='page'
            >
              Home
            </NavLink><NavLink
              to='/'
              className='block py-5 px-3 w-full hover:bg-primary-color text-white'
              aria-current='page'
            >
              Home
            </NavLink><NavLink
              to='/'
              className='block py-5 px-3 w-full hover:bg-primary-color text-white'
              aria-current='page'
            >
              Home
            </NavLink><NavLink
              to='/'
              className='block py-5 px-3 w-full hover:bg-primary-color text-white'
              aria-current='page'
            >
              Home
            </NavLink><NavLink
              to='/'
              className='block py-5 px-3 w-full hover:bg-primary-color text-white'
              aria-current='page'
            >
              Home
            </NavLink><NavLink
              to='/'
              className='block py-5 px-3 w-full hover:bg-primary-color text-white'
              aria-current='page'
            >
              Home
            </NavLink>

            <NavLink>
              <button
                id='dropdownNavbarLink'
                data-dropdown-toggle='dropdownNavbar'
                class='text-white flex items-center justify-between  py-5 px-3 w-full hover:bg-primary-color '
              >
                Dropdown
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
                class='z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
              >
                <ul
                  class='py-2 text-sm text-gray-700 dark:text-gray-400'
                  aria-labelledby='dropdownLargeButton'
                >
                  <li>
                    <NavLink href='#' className='block py-2 px-3 text-white'>
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href='#' className='block py-2 px-3 text-white'>
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href='#' className='block py-2 px-3 text-white'>
                      Dashboard
                    </NavLink>
                  </li>
                </ul>
                <div class='py-1'>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Sign out
                  </a>
                </div>
              </div>
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
