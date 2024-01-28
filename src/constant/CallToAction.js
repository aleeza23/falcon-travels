import React from "react";
import { IoCall } from "react-icons/io5";

const CallToAction = () => {
  return <>
    <div className="flex items-center gap-3 fixed bottom-10 left-10">
        <span className="bg-primary-color rounded-full text-white animate-bounce delay-500 p-2"><IoCall className="text-4xl" /></span>
        <span className="speech-bubble px-6 py-1 ">Call Now!</span>
    </div>
  </>;
};

export default CallToAction;
