import React from "react";
import Container from "../../constant/Container";
import Button from "../../constant/Button";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <section className='hero-main'>
        <Container>
          <div className='lg:w-1/2 pt-20 lg:pt-52'>
            <h1 className=' text-white text-2xl lg:text-4xl'>
              Enjoy the luxury of a lifetime in our brand{" "}
              <span className='text-dark-blue font-bold'>
                New Range Of Limousines, Party Buses , Charter Coach Buses.
              </span>
            </h1>
            <p className='text-white lg:text-3xl mt-10'>
              With us, you don’t have to worry about safety at all! Our
              impeccable safety records ensure you enjoy the time of your life
              with the utmost protection.
            </p>
            <div className="mt-10">
              <Button className={"text-white bg-primary-color w-fit px-4"}>
                Call us today  <IoIosArrowForward className='inline-block ' />
              </Button>
              <Button
                className={"text-white bg-primary-color w-fit px-5  mt-2  block"}
              >
                Get a free qoute now <IoIosArrowForward className='inline-block -mt-1' />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
