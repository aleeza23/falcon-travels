import React from "react";
import BreadCrumbs from "../../constant/BreadCrumbs";
import {useParams} from "react-router-dom";

const SingleFleetHero = () => {
  const id = useParams();
  // console.log(id);
  return (
    <>
      <section
        className='lg:pb-10 py-5 lg:pt-20 relative -z-20 lg:-mt-10'
        style={{backgroundColor: "#f0f0f0"}}
      >
        <h1 className='text-center text-3xl'>{id.fleetName}</h1>
        <div className='mx-auto'>
          <p className='bg-primary-color mx-auto h-1 max-w-14 mt-6'></p>
        </div>
        <BreadCrumbs from='Home' center={'Fleet'} to={id.fleetName} />
      </section>
    </>
  );
};

export default SingleFleetHero;
