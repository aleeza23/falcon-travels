import React from "react";
import Container from "../../constant/Container";
import BookingForm from "./BookingForm";
import TextOutline from "../../constant/TextOutline";
import {FaCheck} from "react-icons/fa";

const BookingTestmonial = () => {
  return (
    <>
      <Container>
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 text-white my-10 gap-10'>
          <div className=''>
            <BookingForm />
          </div>
          <div className=' xl:col-span-2 0'>
            <div className='border text-black p-10'>
              <h1 className='text-2xl text-black'>Online Reservations</h1>
              <TextOutline />
              <p className='text-xl my-6'>
                Booking online is a few clicks away with our state of the art
                online reservation system we accept VENMO, CASHAPP, ZELLE and
                you may make a deposit to secure your reservation we also accept
                all major credit cards and bank transfers as a form of payment.
              </p>

              <hr />

              <div className='lg:flex justify-between mt-10 lg:mb-14'>
                <ul>
                  <li>
                    <FaCheck className="text-icons-color inline -mt-1 me-1" /> Pre-Booking
                  </li>
                  <li  className="mt-2">
                    <FaCheck className="text-icons-color inline -mt-1 me-1 " /> Best Prices
                  </li>
                  <li className="mt-2">
                    <FaCheck className="text-icons-color inline -mt-1 me-1" /> Latest Fleet
                  </li>
                  <li className="mt-2">
                    <FaCheck className="text-icons-color inline -mt-1 me-1" /> Special Request
                  </li>
                  <li className="mt-2">
                    <FaCheck className="text-icons-color inline -mt-1 me-1" /> Last Minute Rides
                  </li>
                </ul>

                <ul className="mx-auto mt-10 lg:mt-5 hover:text-black">
                  <li>
                    <FaCheck className="text-icons-color inline -mt-1 me-1" /> Always On Time
                  </li>
                  <li  className="mt-2">
                    <FaCheck className="text-icons-color inline -mt-1 me-1 " /> Military Discounts
                  </li>
                  <li className="mt-2">
                    <FaCheck className="text-icons-color inline -mt-1 me-1" /> Big | Small Groups
                  </li>
                  <li className="mt-2">
                    <FaCheck className="text-icons-color inline -mt-1 me-1" /> Professional Drivers
                  </li>
                  <li className="mt-2">
                    <FaCheck className="text-icons-color inline -mt-1 me-1" /> High Safety Standards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* booking contact-ifo */}

        <div className="py-10 bg-black">
<h1 className="text-white text-center text-3xl">Get Free Quote <span className="text-dark-blue">Toll Free :</span> (800) 579 6911</h1>
        </div>
      </Container>
    </>
  );
};

export default BookingTestmonial;
