
import React from "react";



const PopularServicesCard = ({elm}) => {
  return (
    <>
      <div className='border cursor-pointer hover:opacity-50 transition-all duration-700 ease-in-out'>
        <img src={elm} alt='s-one' />
      </div>
    </>
  );
};

export default PopularServicesCard;
