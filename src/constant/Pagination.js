import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Pagination = () => {
  return <>
    <nav className="flex justify-end mt-16" aria-label="Page navigation example">
  <ul class="inline-flex gap-1  -space-x-px text-sm">
    <li>
      <Link href="#" class="flex items-center justify-center px-3 h-10 ms-0 leading-tight  bg-white border border-e-0 border-gray-300 hover:text-white hover:bg-primary-color ">Page 1 of 2</Link>
    </li>
    <li>
      <Link href="#" class="flex items-center justify-center px-3 h-10 w-10 ms-0 leading-tight text-white border bg-primary-color border-e-0 border-gray-300 hover:text-white hover:bg-primary-color ">1</Link>
    </li>
    <li>
      <Link href="#" class="flex items-center justify-center px-3 h-10 w-10 ms-0 leading-tight  bg-white border border-e-0 border-gray-300 hover:text-white hover:bg-primary-color ">2</Link>
    </li>
    <li>
      <Link href="#" class="flex items-center justify-center px-3 h-10 w-10 ms-0 leading-tight  bg-white border border-e-0 border-gray-300 hover:text-white hover:bg-primary-color "><MdKeyboardDoubleArrowRight /></Link>
    </li>
    
  </ul>
</nav>
  </>;
};

export default Pagination;
