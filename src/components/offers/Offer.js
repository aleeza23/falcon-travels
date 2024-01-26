import React from "react";
import Container from "../../constant/Container";
import {FaCalendarCheck} from "react-icons/fa";
import TextOutline from "../../constant/TextOutline";

const Offer = () => {
  return (
    <>
      <Container>
        <div className='grid md:grid-cols-2 gap-14 my-8 lg:my-10'>

        {[1,2,3,4].map((index) => {
            return (
             <div key={index} className=' mx-auto'>
            <div className='grid grid-cols-12 '>
              <div className='text-icons-color flex justify-center items-center  border-icons-color h-20 w-20  border-4'>
                <FaCalendarCheck className='text-4xl' />
              </div>
              <div className=' col-start-4 col-end-13 lg:col-start-3 lg:col-end-13 ps-4 lg-ps-0  '>
                <h1 className="text-2xl">Seamless Online Booking</h1>
                <TextOutline />
                <p className="mt-6 text-xl">
                  We are a 24/7 convenient limo service provider where you can
                  book any of your favorite models from a wide range of cars in
                  New York City.
                </p>
              </div>
            </div>
          </div>   
            )
        })}
          
        </div>
      </Container>
    </>
  );
};

export default Offer;
