import React from "react";

const Card = ({currElm}) => {
  return (
    <>
      <div className='bg-gray-100'>
        <div className="lg:h-[400px] ">
          <img src={currElm.image} className='h-full' alt='img' />
        </div>

        <div className='p-3'>
          <h1 className='text-3xl'>{currElm.title}</h1>
          <p className='my-12 text-xl'>{currElm.description}</p>

          <button className='bg-red-500 text-white mb-5 py-3 px-5 rounded-md'>
            Read more
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
