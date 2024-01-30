import React from "react";
import Container from "../../constant/Container";
import Button from "../../constant/Button";

const NightoutTestimonial = () => {
  return (
    <>
      <Container>
        <h1 className='text-dark-blue font-bold text-3xl my-7 '>
          NIGHT OUT <span className='text-black font-normal'>LIMO SERVICE</span>
        </h1>
        <p className=' text-gray-600 '>
          Planning to head out for a night party? Make sure you make the best
          out of your outing by traveling in a grand limousine. Apart from
          commuting in extreme comfort and luxury, limousines are the best way
          to make a lasting impression.
        </p>
        <p className=' text-gray-600'>
          We have kept the most recent models of limousines, and our cars are
          always well-maintained to ensure your experience is nothing less than
          fantastic.
        </p>
        <div className='flex justify-center my-10'>
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

export default NightoutTestimonial;
