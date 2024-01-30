import React from "react";
import Container from "../../constant/Container";
import {IoChevronForward} from "react-icons/io5";
import Button from "../../constant/Button";

const WeddingTestimonial = () => {
  return (
    <>
      <Container>
        <h1 className='text-dark-blue text-4xl font-bold text-justify w-full'>
          Affordable, Professional, and One of a Kind Wedding Limo Rental
          Service
        </h1>
        <p className=' text-xl text-justify mt-7  '>
          Falcon Tour Travel is one of the prevailing names in the wedding limo
          service industry. Our laser focus is always on capturing the hearts of
          our customers through our expert, satisfactory, and professional
          limousine service for weddings. Whether you like the classic limos or
          you are a fan of the vintage limousine cars, we will make sure you
          ride in the car of your dreams on your big day! As weddings are days
          that one relives and cherishes forever, we ensure that you enjoy it to
          the fullest without worrying about the finances. To offer our support
          and as a token of love, we have devised affordable packages for
          wedding rental limos.
        </p>
      </Container>

      {/* lists */}
      <section className=' text-white bg-black py-5 lg:p-10'>
        <h1 className='text-center text-2xl'>WHY CHOOSE US</h1>

        <div className='lg:w-[75%] container my-10 mx-auto p-6'>
          <div className='grid lg:grid-cols-2 gap-6'>
            <div>
              <p className=''>
                Due to our expertise in the wedding limo service industry, we
                just know what a couple is looking for in their wedding vehicle.
                Our customers can choose the car of their choice, as we offer a
                wide range of exotic limos and party busses. Moreover, the team
                of drivers at Falcon Tour Travel is trained to deliver maximum
                comfort and safety, so that you can enjoy your big in full
                vigor!
              </p>

              <p className=' mt-6'>
                We want you to enjoy your memorable day with maximum convenience
                and for that, we give our customers the liberty to choose their
                own dream wedding limo. We offer a wide variety of exotic,
                large, and flashy vehicles like limousines, limo buses, party
                buses, SUVs, sedans, classic cars, vans, and more. Ride these
                fancy cars to your wedding and make it one of the most memorable
                experiences of your life!
              </p>
            </div>
            <div>
              <p className=' mb-5'>
                Our primary goal is to take all your worries and troubles away
                regarding transportation and commute to your wedding. The focus
                is to make sure that our customer’s wedding day is as luxurious
                as they want through our professional wedding limo services.
              </p>

              <ul className="">
                <li className="mt-2"><span><IoChevronForward className="inline text-icons-color font-bold"/> </span> Expert wedding planners and organizers will look after all your arrangements.</li>
                <li className="mt-2"><span><IoChevronForward className="inline text-icons-color font-bold"/> </span> Professionals that are trained to take care of the bride’s dress and other such tasks.</li>
                <li className="mt-2"><span><IoChevronForward className="inline text-icons-color font-bold"/> </span> Adept drivers and chauffeurs to make your trip comfortable and safe.</li>
                <li className="mt-2"><span><IoChevronForward className="inline text-icons-color font-bold"/> </span> An extravagant post-wedding celebration with red-wine.</li>
                <li className="mt-2"><span><IoChevronForward className="inline text-icons-color font-bold"/> </span> The wedding limos and other cars decorated in trendy themes.</li>

              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
        <Button className={'bg-nav-bg w-fit px-7 rounded-lg text-white font-bold flex justify-center py-2'}>View Entire Fleet</Button>

        </div>
      </section>
    </>
  );
};

export default WeddingTestimonial;
