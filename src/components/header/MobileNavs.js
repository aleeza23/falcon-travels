import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavs = () => {
  return <>
    <nav class='bg-nav-bg '>
        <div class=' w-full lg:hidden   md:w-auto' id='navbar-dropdown'>
        
          <ul class=' flex flex-col transition duration-700 ease-in-out gap-0 justify-between  text-white  font-medium    '>
            <NavLink
              to='/'
              className='block py-5 w-full  px-3  text-white'
              aria-current='page'
            >
              Home
            </NavLink>
            <hr className="border-black" />

            <NavLink
              to='/'
              className='block py-5 w-full px-3  text-white'
              aria-current='page'
            >
              Home
            </NavLink>

            <hr className="border-black" />

            <NavLink
              to='/'
              className='block py-5 px-3 w-full  text-white'
              aria-current='page'
            >
              Home
            </NavLink>
            <hr className="border-black" />
            
            <NavLink
              to='/'
              className='block py-5 px-3 w-full  text-white'
              aria-current='page'
            >
              Home
            </NavLink>
            <hr className="border-black" />
            
            <NavLink
              to='/'
              className='block py-5 px-3 w-full  text-white'
              aria-current='page'
            >
              Home
            </NavLink>
            <hr className="border-black" />
            
            <NavLink
              to='/'
              className='block py-5 px-3 w-full  text-white'
              aria-current='page'
            >
              Home
            </NavLink>
            <hr className="border-black" />
            
            <NavLink
              to='/'
              className='block py-5 px-3 w-full  text-white'
              aria-current='page'
            >
              Home
            </NavLink>
            <hr className="border-black" />
            
            <NavLink
              to='/'
              className='block py-5 px-3 w-full  text-white'
              aria-current='page'
            >
              Home
            </NavLink>
            <hr className="border-black" />

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
         
          
        </div>
      </nav>
  </>;
};

export default MobileNavs;