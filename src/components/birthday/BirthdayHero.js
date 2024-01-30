import React from "react";
import Container from "../../constant/Container";
import Reviews from "../reviews/Reviews";

const BirthdayHero = () => {
  return (
    <>
      <section className='birthday-hero mx-10 '>
        <Container>
          <div className='lg:w-1/2 pt-20 lg:py-40 '>
            <h1 className=' text-white text-4xl  lg:text-4xl'>
              Make a Grand Entry on Your <br /> Birthday with our Pristine{" "}
              <p className='text-dark-blue font-bold'>Birthday Limo Service</p>
            </h1>
            <p className='text-white text-3xl   mt-10'>
              Explore Luxurious Vehicles from Our Range of Exotic Birthday Limo
              Rentals
            </p>
          </div>

          
        </Container>
      </section>
      {/* slider */}
      <h1 className="text-4xl text-center  ">Exclusive <span className="font-bold text-dark-blue">Birthday Limo Service</span>  and Party Bus Rental in the USA</h1>
      
      <Reviews />
    </>
  );
};

export default BirthdayHero;
