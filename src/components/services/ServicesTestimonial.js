import React from "react";
import Container from "../../constant/Container";
import PopularServicesCard from "./PopularServicesCard";
import service01 from "../../assets/popular-services-01.webp";
import service02 from "../../assets/popular-service-02.webp";
import service03 from "../../assets/popular-services-03.webp";
import service04 from "../../assets/popular-services-04.webp";
import service05 from "../../assets/popular-services-05.webp";
import service06 from "../../assets/popular-services-06.webp";

const ServicesTestimonial = () => {

  const imgArray = [service01, service02, service03, service04, service05, service06]
  return (
    <>
      {/* testimonial one */}
      <section className='bg-black lg:mt-20 mt-8 py-8'>
        <div className='lg:w-[80%]  mx-auto'>
          <div className='grid lg:grid-cols-3 gap-10 lg:gap-5'>
            {[1, 2, 3].map((i) => {
              return (
                <div key={i}>
                  <h1 className='text-dark-blue text-4xl'>
                    Discover The Nearest Limousine Rental Service
                  </h1>
                  <p className='text-xl mt-4 text-white'>
                    Renting a limo is not a bothersome task anymore, as we offer
                    exotic transportation services all around the USA. Just type
                    in “limo service near me” and click on Falcon Tour Travel –
                    the expert limo service provider and we will come for you
                    right away!
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* tesimonial two */}

      <Container>
        <h1 className='text-center text-dark-blue text-3xl'>
          A PLETHORA OF EXOTIC AND LUXURY CARS
        </h1>
        <p className='h-1 w-[20%] my-3 mx-auto text-dark-blue bg-nav-bg'></p>
        <p className='text-center text-xl mb-7'>
          Our wide range of fleet comprises of all high-end and top-class
          vehicles! You can find the latest models of exotic and fanciful cars
          that are all about splendor! Choose any of the striking cars from the
          lot and enjoy an evening that you’ll never forget! From BMW’S to SUV
          and more of such classic cars – you can ride them all here!
        </p>
      </Container>

      {/* testimonial three */}
      <section className='bg-black py-8'>
      <div className="lg:w-[80%] mx-auto">
        <p className="text-white text-xl text-center">
          Falcon Tour Travel thrives on the comfort and satisfaction of its
          customers. We ensure that you have the trip of a lifetime through our
          impeccable Limousine rental service. Moreover, if you’re looking for
          something else other than a limo, we can take care of that as well.
          You can book any of the luxury cars from the vast range that we offer,
          and reach to a wedding, party, or your prom in celebrity style! You
          can contact us through a phone call, our email, or the live chat on
          our website.
        </p>
        <h1 className="font-bold text-4xl my-6 text-dark-blue text-center">POPULAR SERVICES</h1>

        <div className="grid grid-cols-3 gap-14 ">
            {imgArray.map((elm,index) => {
                return <PopularServicesCard elm={elm} key={index} />
            })}
        </div>
      </div>
        
      </section>
    </>
  );
};

export default ServicesTestimonial;
