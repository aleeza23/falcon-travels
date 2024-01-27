import React from "react";
import TextOutline from "../../constant/TextOutline";
import Container from "../../constant/Container";
import aboutImg from "../../assets/aboutImg01.webp";
import { IoIosArrowForward } from "react-icons/io";

const AboutTestimonial = () => {
  return (
    <>
      <section className='bg-black py-10'>
        <h1 className='text-center text-3xl text-dark-blue'>About</h1>
        <p className='text-center text-2xl mt-7 text-white'>
          Falcon Tour Travel Corp
        </p>
      </section>

      {/* testimonial two */}
      <Container>
        <p className='text-xl'>
          The perfect event needs the perfect ride. Falcon is ready when you
          are!
        </p>
        <TextOutline />
        <p className='text-xl mt-6'>
          We provide nationwide chauffeured services with the latest and
          greatest high tech, luxury vehicles. Falcon Tour and Travel are
          committed to bringing you the excellence you deserve. Our skillful
          staff is highly capable of dealing with the complexities and
          intricacies of luxury travel, you can trust us with your needs and
          know that we will deliver! We are adept in planning and executing
          state of the art travel experiences, providing transportation,
          lodging, and tours to incredible destinations nationwide. We are
          expert when it comes to event transportation.
        </p>

        <div className='grid lg:grid-cols-2'>
          <p className='text-xl mt-14'>
            Over the years we have understood the complications of different
            events such as wedding and birthday parties. VIP protocols are our
            priority. Our chauffeurs are trained to treat clients with a smile
            on face and meet all their needs on their important days. Our
            dispatch team works around the clock to make sure each ride is taken
            care of. With our latest party vehicles and tuxedoed Chauffeured
            service, we make sure that your day is memorable. Our safety
            standards are highest and all our chauffeurs and vehicles are
            properly insured and licensed. We have 24/7 chat support and
            dispatch number (800)579-6911. Looking to keenly know all the needs
            of your trip and deliver on the day of service. Looking to serve you
            and turn your mood on.
          </p>

          <img src={aboutImg} alt='about-img' />
        </div>

        {/* about cards */}
        <div className='grid lg:grid-cols-3 gap-8 mt-14 mb-20'>
          <div className='flex w-full '>
            <div className='bg-nav-bg px-7 text-white text-2xl flex items-center h-32 w-full'>Our Services</div>
            <span className="bg-primary-color flex justify-center items-center p-5 text-white h-32"><IoIosArrowForward className="text-3xl" /></span>
          </div>
          <div className='flex w-full '>
            <div className='bg-nav-bg px-7 text-white text-2xl flex items-center h-32 w-full'>Photo Gallary</div>
            <span className="bg-primary-color flex justify-center items-center p-5 text-white h-32"><IoIosArrowForward className="text-3xl" /></span>
          </div>
          <div className='flex w-full '>
            <div className='bg-nav-bg px-7 text-white text-2xl flex items-center h-32 w-full'>Order Now</div>
            <span className="bg-primary-color flex justify-center items-center p-5 text-white h-32"><IoIosArrowForward className="text-3xl" /></span>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutTestimonial;
