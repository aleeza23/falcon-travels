import React from "react";
import Container from "../../constant/Container";
import WorkCard from "./WorkCard";
import {Link, NavLink} from "react-router-dom";
import {FaLink} from "react-icons/fa";
import Pagination from "../../constant/Pagination";
import { HomeWorkData } from "../../data/HomeWorkData";
const Work = () => {
  return (
    <>
      <Container>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 lg:gap-y-16 mt-20 '>
          {HomeWorkData.map((currElm,index) => (
            <WorkCard currElm={currElm} key={index} />
          ))}
        </div>

        <Pagination />
      </Container>
    </>
  );
};

export default Work;
