import React from "react";
import Container from "../../constant/Container";

const WeddingHero = () => {
  return (
    <>
      <section className='wedding-hero '>
        <Container>
          <div className='lg:w-1/2 pt-20 lg:pt-40 lg:pb-20 ms-auto'>
            <h1 className=' text-white text-3xl  lg:text-4xl'>
              The Leading{" "}
              <span className='text-dark-blue font-bold'>
                Limousine Rental for Weddings.
              </span>
              In the USA
            </h1>
            <p className='text-white text-3xl   mt-10'>
              Make your big day unforgettable with our luxury wedding limos!
            </p>
            <p className='text-white text-3xl  '>
              Celebrate your life-changing day with us.
            </p>
            <p className='text-white text-3xl  '>
            Book the most elegant
              exotic vehicle from our wedding limo service!
            </p>
            
          </div>
        </Container>

        <section className='bg-black py-10'>
          <h1 className='text-dark-blue font-bold text-center text-3xl'>
            Let Us Make Your Special Day Memorable With a Pinch of Style
          </h1>
          <p className='text-xl text-center text-white mt-8'>
            Falcon Tour Travel offers expert limousine rental services for
            weddings. Through our modern and vintage style range of limos, you
            can relish your special day by choosing the most contemporary
            wedding party bus.
          </p>
        </section>
      </section>
    </>
  );
};

export default WeddingHero;
