import React from "react";
import Container from "../../constant/Container";
import TextOutline from "../../constant/TextOutline";
import Carousel from "react-multi-carousel";
import {WeddingFleetData} from "../../data/WeedingFleetData";
import WorkCard from "../work/WorkCard";

const WeedingFleets = () => {
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Container>
        <div>
          <h1 className='text-center text-3xl'>WEDDING FLEETS</h1>
        </div>
        <div className='mx-auto'>
          <p className='bg-primary-color mx-auto h-1 max-w-14 my-6'></p>
        </div>
        <p className='lg:w-[80%] text-gray-600 mb-8 mx-auto text-center text-xl'>
          At Falcon Tour Travel, there is not a single vintage and classic limo
          that you won’t be able to find here. We just have the most suitable
          wedding limos and a range of other flashy cars like limo-buses, SUVs,
          party busses, and Sedans.
        </p>

        {/* <div clasw-[sName='grid lg:grid-cols-3'>
              <div className='bg-yellow-500 p-10 lg:col-span-2'> */}
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          {WeddingFleetData.map((currElm, index) => (
            <WorkCard className={'text-xl p-0'} currElm={currElm} key={index} />
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default WeedingFleets;
