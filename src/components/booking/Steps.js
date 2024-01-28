import React from "react";

const Steps = () => {
  return <>
  <div className=" container mx-auto  mb-10 mt-20 lg:w-[80%] ">        
 
<ol class="flex items-center w-full ">
    <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-[80%] after:mx-auto after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <span class="flex items-center justify-center w-10 h-10 text-xl bg-primary-color text-white rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
           1.
        </span>
    </li>
    <li class="flex w-full items-center after:content-['']  after:h-1 after:w-[80%] after:mx-auto after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <span class="flex items-center justify-center w-10 h-10 text-xl text-white bg-dark-blue rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            2.
        </span>
    </li>
    
    <li class="flex w-full items-center after:content-[''] after:w-[80%] after:mx-auto after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <span class="flex  items-center justify-center w-10 text-xl h-10 text-white bg-dark-blue rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            3.
        </span>
    </li>

    <li class="flex items-center ">
        <span class="flex items-center justify-center w-10 text-xl h-10 text-white bg-dark-blue rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            4.
        </span>
    </li>    

</ol>

<ul className="flex items-center  mt-3 justify-between">
    <li><p className=" text-center ">Trip Details</p></li>
    <li><p className="text-center ">Select Vehicle</p></li>
    <li><p className="text-center ">Review Details</p></li>
    <li><p className="text-center ">Confirmation</p></li>

</ul>



    </div>
  </>;
};

export default Steps;
