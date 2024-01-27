import React from "react";
import Container from "../../constant/Container";
import Button from "../../constant/Button";
import carImg from "../../assets/fleet-slider-img.webp";
import Reviews from "../reviews/Reviews";

const FleetSlider = () => {
  return (
    <>
      <Container>
        <div className='flex justify-center'>
          <Button
            className={
              "bg-dark-blue mx-auto w-fit text-white px-14 rounded-2xl font-bold text-3xl"
            }
          >
            TollFree :(800)597 6911
          </Button>
        </div>

        {/* slider */}
        <Reviews />



        {/* card */}
       <div className='border rounded-tr-3xl border-icons-color my-10 rounded-bl-3xl lg:col-span-2'>
          <img src={carImg} alt='fleet-one' className='mx-auto ' />
        </div>
      </Container>
    </>
  );
};

export default FleetSlider;
