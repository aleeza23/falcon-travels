import React from "react";
import Container from "../../constant/Container";
import Button from "../../constant/Button";

const BirthdayTestimonial = () => {
  return (
    <>
      <Container>
        <div className='flex justify-center my-14 mb-10'>
          <Button
            className={
              "bg-nav-bg w-fit px-7 rounded-lg text-white flex justify-center py-2"
            }
          >
            View Entire Fleet
          </Button>
        </div>
        <h1 className='text-3xl mb-8'>
          Falcon Tour Travel Wishes You a Very Happy Birthday!
        </h1>
        <p className='text-xl'>
          The birthday limo service at Falcon Tour Travel offers the most
          inclusive range of rental limos for birthdays! The variety of vehicles
          that you can book from to experience the best ride of your life are
          super stretch limos, party buses, sedans, SUVs, and classic cars.
        </p>
        <p className='text-xl'>
          Apart from an impressive range of classic vehicles, we also offer
          trained and highly-skilled chauffeurs and drivers who will ensure that
          you’re having the best time of your life on your birthday!
        </p>
        <div className='flex justify-center my-8'>
          <Button
            className={
              "bg-black w-fit px-7 text-xl rounded-lg text-white flex justify-center py-2"
            }
          >
            Call Now :(800) 597 6911{" "}
          </Button>
        </div>
      </Container>
    </>
  );
};

export default BirthdayTestimonial;
