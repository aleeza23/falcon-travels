import React from "react";
import Container from "../../constant/Container";
import Carousel from "react-multi-carousel";
import {IoStar} from "react-icons/io5";

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
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          <div className='border lg:me-4 p-5 hover:text-black'>
            <div className='flex items-center gap-3'>
              <img
                src='https://lh3.googleusercontent.com/a-/AOh14GgF37ehZa_TTkq9hOJm4Lcaozom63krAOwsFHwD=s120-c-c-rp-w64-h64-mo-br100'
                alt='img'
                className='w-12'
              />
              <div>
                <h1 className='font-bold inline'>Alice Beckett</h1>
                <img
                  src='https://cdn.trustindex.io/assets/platform/Google/icon.svg'
                  className='inline w-5 ms-2'
                  alt=''
                />
                <p className='text-gray-400'>2022-04-01</p>
              </div>
            </div>

            <div className='mt-5'>
              <p>
                {[1, 2, 3, 4, 5].map((i) => (
                  <IoStar key={i} className='text-yellow-500 mb-2 inline' />
                ))}
              </p>
              <small>
                I used FALCON Limo Service for my wedding day! We reserved 2
                different vehicles from them with different...
              </small>
            </div>
          </div>
          <div className='border lg:me-4 p-5 hover:text-black'>
            <div className='flex items-center gap-3'>
              <img
                src='https://lh3.googleusercontent.com/a-/AOh14Gi5UJbte-2nq-RspxZNDC3ta2fLtoqSRwF3I7mi=s120-c-c-rp-w64-h64-mo-br100'
                alt='img'
                className='w-12'
              />
              <div>
                <h1 className='font-bold inline'>Alice Liddell</h1>
                <img
                  src='https://cdn.trustindex.io/assets/platform/Google/icon.svg'
                  className='inline w-5 ms-2'
                  alt=''
                />
                <p className='text-gray-400'>2022-04-01</p>
              </div>
            </div>

            <div className='mt-5'>
              <p>
                {[1, 2, 3, 4, 5].map((i) => (
                  <IoStar key={i} className='text-yellow-500 mb-2 inline' />
                ))}
              </p>
              <small>
                We had a great experience and the driver was kind and helpful.
                We're thinking of doing the same trip in...
              </small>
            </div>
          </div>

          <div className='border lg:me-4 p-5 hover:text-black'>
            <div className='flex items-center gap-3'>
              <img
                src='https://lh3.googleusercontent.com/a-/AOh14Gg4JWJbsMK1kGTkE7zlxW2Ham1Z6yzRdnGnXiva=s120-c-c-rp-w64-h64-mo-br100'
                alt='img'
                className='w-12'
              />
              <div>
                <h1 className='font-bold inline'>Edward Anderson</h1>
                <img
                  src='https://cdn.trustindex.io/assets/platform/Google/icon.svg'
                  className='inline w-5 ms-2'
                  alt=''
                />
                <p className='text-gray-400'>2022-04-01</p>
              </div>
            </div>

            <div className='mt-5'>
              <p>
                {[1, 2, 3, 4, 5].map((i) => (
                  <IoStar key={i} className='text-yellow-500 mb-2 inline' />
                ))}
              </p>
              <small>
              Great service. Very easy to schedule, right on time and nice driver and car. Recommended....
              </small>
            </div>
          </div>

          <div className='border lg:me-4 p-5 hover:text-black h-[100%]'>
            <div className='flex items-center gap-3'>
              <img
                src='https://lh3.googleusercontent.com/a-/AOh14GhxQ5oKllvrr9J9D7wPcaABANabKe_mDHp3a1gH=s120-c-c-rp-w64-h64-mo-br100'
                alt='img'
                className='w-12'
              />
              <div>
                <h1 className='font-bold inline'>Makayla Lowrie</h1>
                <img
                  src='https://cdn.trustindex.io/assets/platform/Google/icon.svg'
                  className='inline w-5 ms-2'
                  alt=''
                />
                <p className='text-gray-400'>2022-04-01</p>
              </div>
            </div>

            <div className='mt-5'>
              <p>
                {[1, 2, 3, 4, 5].map((i) => (
                  <IoStar key={i} className='text-yellow-500 mb-2 inline' />
                ))}
              </p>
              <small>
              Thanks for your lovely service Falcon team.
              </small>
            </div>
          </div>

          <div className='border lg:me-4 p-5 hover:text-black h-[100%]'>
            <div className='flex items-center gap-3'>
              <img
                src='https://lh3.googleusercontent.com/a-/AOh14GihTAgCfBUjyznsJoAdlpuWy8orul5n9TebK0-H=s120-c-c-rp-w64-h64-mo-ba2-br100'
                alt='img'
                className='w-12'
              />
              <div>
                <h1 className='font-bold inline'>Alice Beckett</h1>
                <img
                  src='https://cdn.trustindex.io/assets/platform/Google/icon.svg'
                  className='inline w-5 ms-2'
                  alt=''
                />
                <p className='text-gray-400'>2022-04-01</p>
              </div>
            </div>

            <div className='mt-5'>
              <p>
                {[1, 2, 3, 4, 5].map((i) => (
                  <IoStar key={i} className='text-yellow-500 mb-2 inline' />
                ))}
              </p>
              <small>
              Last day i used for my sister wedding. Service was too good.
              </small>
            </div>
          </div>

          <div className='border lg:me-4 p-5 hover:text-black'>
            <div className='flex items-center gap-3'>
              <img
                src='https://lh3.googleusercontent.com/a-/AOh14GhorGDAtAThm2MwdMAZJFYThgQNGEVzB81yQkqD=s120-c-c-rp-w64-h64-mo-br100'
                alt='img'
                className='w-12'
              />
              <div>
                <h1 className='font-bold inline'>Alice Beckett</h1>
                <img
                  src='https://cdn.trustindex.io/assets/platform/Google/icon.svg'
                  className='inline w-5 ms-2'
                  alt=''
                />
                <p className='text-gray-400'>2022-04-01</p>
              </div>
            </div>

            <div className='mt-5'>
              <p>
                {[1, 2, 3, 4, 5].map((i) => (
                  <IoStar key={i} className='text-yellow-500 mb-2 inline' />
                ))}
              </p>
              <small>
              i used their Limo Party Bus for my birthday party. it was great experience. Car was super clean and driver was very cool...
              </small>
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
