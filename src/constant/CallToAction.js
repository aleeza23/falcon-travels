import React from "react";
import { IoCall } from "react-icons/io5";

const CallToAction = () => {
  return <>
    <div className="flex items-center gap-3 sticky bottom-10 left-10">
        <span className="bg-primary-color rounded-full text-white animate-bounce delay-500 p-2"><IoCall className="text-5xl" /></span>
        <span className="bg-primary-color shadow px-4 py-1 rounded text-white text-2xl ">Call Now!</span>
    </div>
  </>;
};

export default CallToAction;
