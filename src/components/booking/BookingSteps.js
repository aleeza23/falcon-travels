import React from "react";
import Steps from "./Steps";
import Container from "../../constant/Container";

const BookingSteps = () => {
  return (
    <>
    <Container>
        <h1 className="text-2xl font-bold text-center my-8">Book Your Ride <span className="font-normal"> Using Our</span>  <span className="text-dark-blue font-normal">Super Easy Reservation System</span></h1>
     
        <Steps />   
    </Container>
   
    
      
    </>
  );
};

export default BookingSteps;
