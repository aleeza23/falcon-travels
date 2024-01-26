import React from "react";
import logo01 from "../../assets/logo01.webp";
import logo02 from "../../assets/logo02.webp";
import {Link} from "react-router-dom";
import {IoMdCheckboxOutline} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";
import Button from "../../constant/Button";

const Logo = ({settoggleNav, toggleNav}) => {
  return (
    <>
      <div className='grid lg:grid-cols-6 my-7 lg:my-10 '>
        <div className='logo bg-white col-span-2'>
          {/* logo */}
          <div className='flex justify-between items-center'>
            <Link href='/' className=' ms-2 md:me-24   '>
              <img src={logo02} className='inline-block' alt=' Logo' />
            </Link>
            <button
            onClick={() => settoggleNav(prev => !prev)}
              data-collapse-toggle='navbar-dropdown'
              type='button'
              className=' p-2 w-10 h-10  text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-dropdown'
              aria-expanded='false'
            >
              <svg
                class='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='logo hidden lg:block border-l px-3  '>
          <div className=' flex flex-col items-center justify-center h-full'>
            <h1 className='font-bold'>
              <IoMdCheckboxOutline className='inline-block text-icons-color font-bold text-xl -mt-1 me-2 ' />
              Airport Transfers
            </h1>
            <p>Offered At Short Notice</p>
          </div>
        </div>
        <div className='logo hidden lg:block  border-l px-3  '>
          <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='font-bold'>
              <IoMdCheckboxOutline className='inline-block text-icons-color font-bold text-xl -mt-1 me-2 ' />
              Airport Transfers
            </h1>
            <p>Offered At Short Notice</p>
          </div>
        </div>
        <div className='logo hidden lg:block  border-l px-3  '>
          <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='font-bold'>
              <IoMdCheckboxOutline className='inline-block text-icons-color font-bold text-xl -mt-1 me-2 ' />
              Airport Transfers
            </h1>
            <p>Offered At Short Notice</p>
          </div>
        </div>
        <div className='logo hidden lg:block  '>
          <div className='flex flex-col items-center justify-center h-full'>
            <Button className={"bg-primary-color text-white "}>
              CALL NOW
              <IoIosArrowForward className='inline-block ms-2 -mt-1' />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
