import React from "react";

const Form = () => {
  return (
    <>
      <div className='px-4'>
        <div className='my-5'>
          <label htmlFor=''>Name *</label>
          <input
            type='text'
            className='w-full py-3 border focus:border-icons-color outline-none px-2 border-black bg-gray-200'
          />
        </div>
        <div className='my-5'>
          <label htmlFor=''>E-mail *</label>
          <input
            type='text'
            className='w-full py-3 border focus:border-icons-color outline-none px-2 border-black bg-gray-200'
          />
        </div>

        <div className='my-5'>
          <label htmlFor=''>Phone *</label>
          <input
          placeholder="E.g. +1 300 400 5000"
            type='text'
            className='w-full py-3 border focus:border-icons-color outline-none  border-black bg-gray-200 px-2'
          />
        </div>

        <div className='my-5'>
          <label htmlFor=''>Name *</label>
          <input
            type='text'
            className='w-full py-3 border border-black focus:border-icons-color outline-none px-2 bg-gray-200'
          />
        </div>

        <div className='my-10'>
          <textarea
          rows={6}
            type='text'
            className='w-full  border border-black focus:border-icons-color outline-none px-2 bg-gray-200'
          />
        </div>

        <button className="bg-primary-color px-7 rounded py-2 opacity-90 mt-20 mb-10 hover:opacity-100 hover:shadow-xl transition duration-1000 ease-in-out text-white">Submit</button>
      </div>
    </>
  );
};

export default Form;
