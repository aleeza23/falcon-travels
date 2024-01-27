import React from "react";
import Container from "../../constant/Container";
import {BiSolidQuoteAltLeft} from "react-icons/bi";
const FleetTestimonial = () => {
  return (
    <>
      <Container>
        <div className='my-10'>
          <h1 className='font-bold text-dark-blue text-2xl'>
            LUXURY RENTAL{" "}
            <span className='text-black font-normal'>FLEET CATEGORIES</span>
          </h1>
          <p className='text-xl text-gray-500 my-6'>
            Falcon Tour Travel has a team of professionals on board who are all
            set to provide you with high-quality services to fulfill your
            transportation needs. We are here to provide you with the most
            lavish, comfortable, and classy limos to make sure that you look
            classy everywhere you go.
          </p>

          <span>
            <BiSolidQuoteAltLeft className="inline text-6xl mt-5 me-5 text-icons-color"/>{" "}           
          </span>
          <p className=" text-gray-300 inline text-xl font-bold border-l-4 px-6 border-icons-color">
              Whether you need transport for the airport, business meetings, or
              personal purposes Falcon Tour Travel has it all covered for you!
            </p>
        </div>
      </Container>
    </>
  );
};

export default FleetTestimonial;
