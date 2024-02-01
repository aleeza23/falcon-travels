import React from "react";
import Container from "../../constant/Container";
import { FaCalendarCheck } from "react-icons/fa";
import TextOutline from "../../constant/TextOutline";
import { GiRoundStar } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

const Offer = () => {

  const offersData = [
    {
      icon: <FaCalendarCheck />, title: 'Seamless Online Booking', desc: 'We are a 24/7 convenient limo service provider where you can  book any of your favorite models from a wide range of cars in    New York City.'
    },
    {
      icon: <GiRoundStar />, title: ' Trained Professionals', desc: 'At Falcon Tour Travel, you will deal with a team that is highly professional, proficient and is trained well to make you the most comfortable and satisfied during all our dealings.'
    },
    {
      icon: <FaCarAlt /> , title: 'A Vast Fleet of Vehicles', desc: 'As we deal with an extensive range of vehicles, you can choose to drive your evening or night away in any high-end car you’ve been dreaming of - from Sedans to party vehicles, we can take care of all your demands!'
    },
    {
      icon: <FaCcVisa /> , title: ' Online Payment', desc: 'In order to secure your limo rental reservation with Falcon House Travel, a 50% deposit is required. For your convenience, our SSL secure payment getaway system accepts all major credit cards.'
    },
  ]
  return (
    <>
      <Container>
        <div className='grid md:grid-cols-2 gap-14 my-8 lg:my-10'>

          {offersData.map((elm,index) => {
            return (
              <div key={index} className=' mx-auto'>
                <div className='grid grid-cols-12 '>
                  <div className='text-icons-color text-4xl flex justify-center items-center  border-icons-color h-20 w-20  border-4'>
                    {elm.icon}
                  </div>
                  <div className=' col-start-4 col-end-13 lg:col-start-3 lg:col-end-13 ps-4 lg-ps-0  '>
                    <h1 className="text-2xl">{elm.title}</h1>
                    <TextOutline />
                    <p className="mt-6 text-[18px]">
                     {elm.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </Container>
    </>
  );
};

export default Offer;
