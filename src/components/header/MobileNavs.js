import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavs = () => {
  return <>
    <nav class='bg-nav-bg '>
        <div class=' w-full lg:hidden   md:w-auto' id='navbar-dropdown'>
        
        <ul class=' flex flex-col gap-0 justify-between text-white  font-medium  md:flex-row   '>
            <NavLink
              to='/'
              className='block py-7  px-3 bg-primary-color text-white'
              aria-current='page'
            >
              Home
            </NavLink>

            <hr  className="border-black"/>

            <NavLink
              to='/'
              className='block py-7  px-3 hover:bg-primary-color text-white'
              aria-current='page'
            >
              About
            </NavLink>

            <hr  className="border-black"/>

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
            <hr  className="border-black"/>

              {/* <!-- Dropdown menu --> */}
            <div
                id='dropdownNavbar'
                class=' shadow-lg  font-normal  divide-y divide-gray-100   '
              >
                <ul
                  class='py-2  text-sm text-white'
                  aria-labelledby='dropdownLargeButton'
                >
                  <li>
                    <NavLink href='#' className='block ms-6  py-2 px-3 hover:bg-primary-color text-xl  '>
                      Wedding
                    </NavLink>
                  </li>
            <hr  className="border-black w-full"/>

                  <li>
                    <NavLink href='#' className='block ms-6 py-2 px-3 hover:bg-primary-color text-xl '>
                      Prom
                    </NavLink>
                  </li>
            <hr  className="border-black"/>

                  <li>
                    <NavLink href='#' className='block ms-6 py-2 px-3 hover:bg-primary-color text-xl '>
                      Birthday
                    </NavLink>
                  </li>
            <hr  className="border-black"/>

                  <li>
                    <NavLink href='#' className='block ms-6 py-2 px-3 hover:bg-primary-color text-xl '>
                      Bachelorrate Party
                    </NavLink>
                  </li>
            <hr  className="border-black"/>

                  <li>
                    <NavLink href='#' className='block ms-6 py-2 px-3 hover:bg-primary-color text-xl '>
                      Nights Out
                    </NavLink>
                  </li>
            <hr  className="border-black"/>

                  <li>
                    <NavLink href='#' className='block ms-6 py-2 px-3 hover:bg-primary-color text-xl '>
                      Coperate Transportation
                    </NavLink>
                  </li>
                  
                </ul>
                
              </div>   
            </NavLink>
            <hr  className="border-black"/>

            <NavLink
              to='/'
              className='block py-7 px-3  hover:bg-primary-color text-white'
              aria-current='page'
            >
              Our Fleet
            </NavLink>
            <hr  className="border-black"/>
            
            <NavLink
              to='/'
              className='block py-7 px-3  hover:bg-primary-color text-white'
              aria-current='page'
            >
              Contact
            </NavLink>
            <hr  className="border-black"/>
            
            <NavLink
              to='/'
              className='block py-7 px-3  hover:bg-primary-color text-white'
              aria-current='page'
            >
              Blog
            </NavLink>
            <hr  className="border-black"/>
            
            <NavLink
              to='/'
              className='block py-7 px-3  hover:bg-primary-color text-white'
              aria-current='page'
            >
              Disclaimer
            </NavLink>
            <hr  className="border-black"/>
            
            <NavLink
              to='/'
              className='block py-7 px-3 hover:bg-primary-color text-white'
              aria-current='page'
            >
              FAQs
            </NavLink>

            <hr  className="border-black"/>

            <NavLink
              to='/'
              className='block py-7 px-3   hover:bg-primary-color text-white'
              aria-current='page'
            >
              Get Instant Qoute Now
            </NavLink>

          
            
          </ul>
         
          
        </div>
      </nav>
  </>;
};

export default MobileNavs;
