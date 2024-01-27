import React from "react";
import Container from "../../constant/Container";
import Carousel from "react-multi-carousel";

const Reviews = () => {
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
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
      <div className='container mt-10 mb-32 lg:w-[60%] lg:ms-[10%] '>
        {/* <div clasw-[sName='grid lg:grid-cols-3'>
          <div className='bg-yellow-500 p-10 lg:col-span-2'> */}
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} >
          <div className='border lg:me-4 p-5 hover:text-black'>
            <div className='flex items-center gap-3'>
              <img
                src='https://lh3.googleusercontent.com/a-/AOh14GgF37ehZa_TTkq9hOJm4Lcaozom63krAOwsFHwD=s120-c-c-rp-w64-h64-mo-br100'
                alt='img'
                className='w-12'
              />
              <div>
                <h1 className='font-bold'>Alice Beckett</h1>
                <p className='text-gray-400'>2022-04-01</p>
              </div>
            </div>

            <div className='mt-5'>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                I used FALCON Limo Service for my wedding day! We reserved 2
                different vehicles from them with different...
              </p>
            </div>
          </div>
          <div className='border p-5 lg:me-4 hover:text-black'>
            <div className='flex items-center gap-3'>
              <img
                src='https://lh3.googleusercontent.com/a-/AOh14GgF37ehZa_TTkq9hOJm4Lcaozom63krAOwsFHwD=s120-c-c-rp-w64-h64-mo-br100'
                alt='img'
                className='w-12'
              />
              <div>
                <h1 className='font-bold'>Alice Beckett</h1>
                <p className='text-gray-400'>2022-04-01</p>
              </div>
            </div>

            <div className='mt-5'>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                I used FALCON Limo Service for my wedding day! We reserved 2
                different vehicles from them with different...
              </p>
            </div>
          </div>
          <div className='border p-5 lg:me-4  hover:text-black'>
            <div className='flex items-center gap-3'>
              <img
                src='https://lh3.googleusercontent.com/a-/AOh14GgF37ehZa_TTkq9hOJm4Lcaozom63krAOwsFHwD=s120-c-c-rp-w64-h64-mo-br100'
                alt='img'
                className='w-12'
              />
              <div>
                <h1 className='font-bold'>Alice Beckett</h1>
                <p className='text-gray-400'>2022-04-01</p>
              </div>
            </div>

            <div className='mt-5'>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                I used FALCON Limo Service for my wedding day! We reserved 2
                different vehicles from them with different...
              </p>
            </div>
          </div>
          <div className='border p-5 lg:me-4 hover:text-black'>
            <div className='flex items-center gap-3'>
              <img
                src='https://lh3.googleusercontent.com/a-/AOh14GgF37ehZa_TTkq9hOJm4Lcaozom63krAOwsFHwD=s120-c-c-rp-w64-h64-mo-br100'
                alt='img'
                className='w-12'
              />
              <div>
                <h1 className='font-bold'>Alice Beckett</h1>
                <p className='text-gray-400'>2022-04-01</p>
              </div>
            </div>

            <div className='mt-5'>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                I used FALCON Limo Service for my wedding day! We reserved 2
                different vehicles from them with different...
              </p>
            </div>
          </div>
          <div className='border p-5 lg:me-4 hover:text-black'>
            <div className='flex items-center gap-3'>
              <img
                src='https://lh3.googleusercontent.com/a-/AOh14GgF37ehZa_TTkq9hOJm4Lcaozom63krAOwsFHwD=s120-c-c-rp-w64-h64-mo-br100'
                alt='img'
                className='w-12'
              />
              <div>
                <h1 className='font-bold'>Alice Beckett</h1>
                <p className='text-gray-400'>2022-04-01</p>
              </div>
            </div>

            <div className='mt-5'>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                I used FALCON Limo Service for my wedding day! We reserved 2
                different vehicles from them with different...
              </p>
            </div>
          </div>

          <div className='border p-5 lg:me-4 hover:text-black'>
            <div className='flex items-center gap-3'>
              <img
                src='https://lh3.googleusercontent.com/a-/AOh14GgF37ehZa_TTkq9hOJm4Lcaozom63krAOwsFHwD=s120-c-c-rp-w64-h64-mo-br100'
                alt='img'
                className='w-12'
              />
              <div>
                <h1 className='font-bold'>Alice Beckett</h1>
                <p className='text-gray-400'>2022-04-01</p>
              </div>
            </div>

            <div className='mt-5'>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                I used FALCON Limo Service for my wedding day! We reserved 2
                different vehicles from them with different...
              </p>
            </div>
          </div>
        </Carousel>

        {/* </div>
        </div> */}
      </div>
    </>
  );
};

export default Reviews;
