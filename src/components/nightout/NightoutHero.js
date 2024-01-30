import React from "react";
import Container from "../../constant/Container";

const NightoutHero = () => {
  return (
    <>
      <section className='nightout-hero '>
        <Container>
          <div className='lg:w-1/2 pt-20 lg:pt-40 lg:pb-20 '>
            <h1 className='text-dark-blue mt-5 text-4xl font-bold'>
              Travel All Night In Style
            </h1>

            <p className='text-white text-3xl   mt-10'>
              Planning to head out for the night with your best mates? Our
              courteous, experienced and highly professional service will make
              sure your experience is nothing less than incredible!
            </p>
            <p className='text-white text-3xl mt-5  '>
            Get in touch to view all our high-end, amazing vehicles to make your journey an unforgettable one.
            </p>
           
          </div>
        </Container>

        <section className='bg-black py-10'>
          <h1 className='text-dark-blue font-bold text-center text-3xl'>
          NIGHT OUT <span className="text-white font-normal">LIMO SERVICE</span>
          </h1>
          <p className='text-2xl text-center text-white mt-7'>
          Best Night Out Limo Service and Party Bus Rental in USA
          </p>
        </section>
      </section>
    </>
  );
};

export default NightoutHero;
