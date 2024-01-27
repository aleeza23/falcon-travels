import React from "react";
import { Parallax } from "react-parallax";
import bg from '../../assets/hero.png'

const Parallex = () => {
  return <>
    <Parallax  className="" bgImage={bg} bgImageAlt="the cat" >
       <h1 className="text-center text-white text-4xl mt-32">Falcon Tour & Travel – Limousine Company</h1>
       <h1 className="text-3xl text-white text-center mt-5 ">Limos, Party Buses & Charter Buses</h1>
       <h1 className="text-3xl text-white text-center mt-5 mb-10 ">Instant Quote in Less Than 30 Seconds</h1>

    </Parallax>
  </>;
};

export default Parallex;
