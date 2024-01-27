import React from "react";
import {IoIosArrowForward} from "react-icons/io";

const BreadCrumbs = ({from, to}) => {
  return (
    <div className='flex justify-center items-center gap-1 my-6 text-gray-600 '>
      <span>{from} </span>
      <IoIosArrowForward className='-mb-1' />
      <span>{to} </span>
    </div>
  );
};

export default BreadCrumbs;
