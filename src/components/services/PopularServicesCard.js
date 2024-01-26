import React from "react";
import service01 from "../../assets/popular-service-02.webp";
const PopularServicesCard = () => {
  return (
    <>
      <div className='border cursor-pointer hover:opacity-50 transition-all duration-700 ease-in-out'>
        <img src={service01} alt='s-one' />
      </div>
    </>
  );
};

export default PopularServicesCard;
