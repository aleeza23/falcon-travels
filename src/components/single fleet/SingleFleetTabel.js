import React from "react";
import Container from "../../constant/Container";

const SingleFleetTabel = () => {
  return (
    <>
    <button className="border-l  hidden md:block border-r mt-10  border-t-4 border-t-icons-color px-6 py-2">Specifications</button>
    <div className="p-10 border hidden md:block">
       <table className='  w-full '>
        <tr>
          <th>Passengers: 30 – 40</th>
          <th>Iphone Charger: Yes</th>
          <th>Fully Insured: Yes</th>
        </tr>
        <tr>
          <td>Interior: Leather</td>
          <td>On Board Drinks: Yes</td>
          <td>Smoking: No</td>
        </tr>
        <tr>
          <td>DVD Player: Yes</td>
          <td>Bluetooth Connectivity: Yes</td>
          <td>Surround Sound: Yes</td>
        </tr>
        <tr>
          <td>On Board Wifi: Yes</td>
          <td>Bag Capacity: 6</td>
          <td>LCD Screens: Yes</td>
        </tr>
      </table> 
    </div>
      
    </>
  );
};

export default SingleFleetTabel;
