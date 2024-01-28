import React from "react";
import Button from "../../constant/Button";
import { IoIosArrowForward } from "react-icons/io";

const BookingForm = () => {
  return <>
    <div className='bg-nav-bg text-gray-200'>
              <div className='bg-primary-color relative form-speech-bubble py-5'>
                <h1 className='text-center '>Get a Quote</h1>
              </div>

              {/* form inputs */}

              <div className='m-6 '>
                <input
                  type='text'
                  className='w-full py-3 mt-3 px-3 mb-5'
                  placeholder='Pick Up Address'
                />
                <div className='md:flex mb-5  items-center justify-between'>
                  <label for='countries' class='  text-sm font-medium '>
                    Trip Duration
                  </label>
                  <select
                    id='countries'
                    class=' border-gray-300 text-gray-300 font-bold text-sm md:w-[65%] mt-4 lg:mt-0 w-full focus:ring-blue-500 focus:border-blue-500 block py-3 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  >
                    <option selected>4 Hour(s)</option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='FR'>France</option>
                    <option value='DE'>Germany</option>
                  </select>
                </div>

                <input
                  type='text'
                  className='w-full py-3 px-3 mb-5'
                  placeholder='Drop of Address'
                />

                <input
                  type='date'
                  className='w-full py-3 px-3 mb-5'
                  placeholder='01/02/2023'
                />

                <select
                  id='countries'
                  class=' border-gray-300 mb-5 text-gray-300 font-bold text-sm w-full  focus:ring-blue-500 focus:border-blue-500 block py-3 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option selected>Select Vehicle</option>
                  <option value='US'>United States</option>
                  <option value='CA'>Canada</option>
                  <option value='FR'>France</option>
                  <option value='DE'>Germany</option>
                </select>

                <input
                  type='text'
                  className='w-full py-3 px-3 mb-5'
                  placeholder='Add Phone Number'
                />

                <div className='md:flex mb-5 items-center justify-between'>
                  <label for='countries' class='  text-sm  font-medium '>
                   Pick up Time
                  </label>
                  <div className="flex overflow-hidden mt-4 lg:mt-0 md:w-[65%]">
                  <select
                    id='countries'
                    class=' border-gray-300 text-gray-300 font-bold inline  text-sm  focus:ring-blue-500 focus:border-blue-500  py-3 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  >
                    <option selected>1 am</option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='FR'>France</option>
                    <option value='DE'>Germany</option>
                  </select>
                  <select
                    id='countries'
                    class=' border-gray-300 border-l w-full inline text-gray-300 font-bold text-sm focus:ring-blue-500 focus:border-blue-500  py-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  >
                    <option selected>00</option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='FR'>France</option>
                    <option value='DE'>Germany</option>
                  </select>
                  </div>
                 
                </div>
                <Button className={'bg-primary-color w-fit px-9 mt-3 mb-8'}>Reserve Now
              <IoIosArrowForward className='inline-block ms-2 ' />
                </Button>

              </div>
            </div>
  </>;
};

export default BookingForm;
