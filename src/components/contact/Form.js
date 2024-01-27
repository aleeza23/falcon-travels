import React, {useState} from "react";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = () => {
    //handle error
    if (!name) {
      seterror('This field is required.')
    }else{
      seterror('')
    }
    if (!email) {
      seterror('This field is required.')
    }
    if (!phoneNo) {
      seterror('This field is required.')
    }
    console.log("helo");
  };

  return (
    <>
      <div className='px-4'>
        <div className='my-5'>
          <label htmlFor=''>Name *</label>
          <input
            onChange={(e) => setname(e.target.value)}
            value={name}
            type='text'
            className={`w-full py-3 border ${error && 'border-red-500'}  focus:border-icons-color outline-none px-2 border-black bg-gray-200`}
          />
          <div className="bg-red-100 rounded ps-4 mt-2">
            <p className="text-red-600 ">{error}</p>
          </div>
        </div>
        <div className='my-5'>
          <label htmlFor=''>E-mail *</label>
          <input
            onChange={(e) => setemail(e.target.value)}
            value={email}
            type='text'
            className={`w-full py-3 border ${error && 'border-red-500'}  focus:border-icons-color outline-none px-2 border-black bg-gray-200`}
          />
          <div className="bg-red-100 rounded ps-4 mt-2">
            <p className="text-red-600 ">{error}</p>
          </div>
        </div>

        <div className='my-5'>
          <label htmlFor=''>Phone *</label>
          <input
            onChange={(e) => setphoneNo(e.target.value)}
            value={phoneNo}
            placeholder='E.g. +1 300 400 5000'
            type='text'
            className={`w-full py-3 border ${error && 'border-red-500'}  focus:border-icons-color outline-none px-2 border-black bg-gray-200`}
          />
          <div className="bg-red-100 rounded ps-4 mt-2">
            <p className="text-red-600 ">{error}</p>
          </div>
        </div>

        <div className='my-10'>
          <textarea
            onChange={(e) => setname(e.target.value)}
            rows={6}
            type='text'
            className='w-full  border border-black focus:border-icons-color outline-none px-2 bg-gray-200'
          />
        </div>

        <button
          onClick={handleSubmit}
          className='bg-primary-color px-7 rounded py-2 opacity-90 mt-20 mb-10 hover:opacity-100 hover:shadow-xl transition duration-1000 ease-in-out text-white'
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Form;
