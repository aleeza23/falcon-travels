import React from "react";
import Container from "../../constant/Container";
import BookingForm from "../booking/BookingForm";
import img01 from "../../assets/singleFleetGallery01.jpg";
import img02 from "../../assets/singleFleetGallery02.jpg";
import img03 from "../../assets/singleFleetGallery03.jpg";
import img04 from "../../assets/singleFleetGallery04.jpg";
import img05 from "../../assets/singleFleetGallery05.jpg";
import TextOutline from "../../constant/TextOutline";
import SingleFleetTabel from "./SingleFleetTabel";

const SingleFleetTestimonial = () => {
  return (
    <>
      <Container>
        <div className='grid  lg:grid-cols-3 gap-10 mt-10 mb-20'>
          <div className=' lg:col-span-2 mx-auto'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 mx-auto'>
              <img src={img01} alt='' className='h-40 w-full' />
              <img src={img02} alt='' className='h-40 w-full' />
              <img src={img03} alt='' className='h-40 w-full' />
              <div className='lg:col-span-3 lg:mx-auto  '>
                <div className='lg:flex flex-row   gap-2'>
                  <img src={img04} alt='' className=' h-40 w-full ' />
                  <img src={img05} alt='' className='h-40 w-full me-auto ' />
                </div>
              </div>
            </div>

            <div>
              <h1 className='text-2xl mt-14'>Vehicle Overview</h1>
              <TextOutline />
              <p className="my-7">
                All our vehicles are supplied with bottled water, napkins, and
                glasses. All our Party Bus Rental have an experienced tuxedo
                driver equipped with GPS, detailed itinerary instructions
                prepared by our office staff, and know the area and its traffic
                patterns.
              </p>

              <h1 className='font-bold my-7'>
                International Pro Star Transformer Party Bus?
              </h1>
              <p className="my-7">
                You can get it all or nothing! This is the Transformer Beast and
                the world’s longest and largest limo.
              </p>

              <p className="my-8">
                You have to see it to believe it since even the most amazing
                pictures don’t translate the magnitude and extravagance of this
                limo bus.
              </p>

            </div>
            <SingleFleetTabel />
         
          </div>
          <div className=' '>
            <BookingForm />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleFleetTestimonial;
