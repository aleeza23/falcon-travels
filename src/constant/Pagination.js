import React from "react";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {Link} from "react-router-dom";
import {usePagination} from "../context/paginationContext";

const Pagination = ({totalButtons,handleClick,activePage}) => {

  // const {activePage} = usePagination();

  return (
    <>
      <nav
        className='flex justify-end mt-16'
        aria-label='Page navigation example'
      >
        <ul class='inline-flex gap-1  -space-x-px text-sm'>
          <li>
            <Link
              href='#'
              class='flex items-center justify-center px-3 h-10 ms-0 leading-tight  bg-white border border-e-0 border-gray-300 hover:text-white hover:bg-primary-color '
            >
              Page 1 of {totalButtons?.length}
            </Link>
          </li>
          {totalButtons?.map((currElm) => {
            return (
              <li key={currElm} >
                <button
                onClick={() => handleClick(currElm)}
                  className={`flex items-center justify-center px-3 h-10 w-10 ms-0 leading-tight border ${activePage === currElm ? 'text-white  bg-primary-color' : "" } border-e-0 border-gray-300 hover:text-white hover:bg-primary-color`}
                >
                  {currElm}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
