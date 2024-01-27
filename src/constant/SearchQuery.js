import React from "react";

const SearchQuery = () => {
  return <>
    
<form>   
    <div class="relative px-5 border-l-2 py-7  ">
       
        <input type="search" class="block outline-none focus:border-black focus:border-2 rounded w-full p-4 text-sm border " placeholder="Search Mockups, Logos..." required />
        {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
        <div class="absolute inset-y-0 end-10 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 font-bold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
    </div>
</form>

  </>;
};

export default SearchQuery;
