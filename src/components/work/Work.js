import React from "react";
import Container from "../../constant/Container";
import WorkCard from "./WorkCard";
import {Link, NavLink} from "react-router-dom";
import {FaLink} from "react-icons/fa";
import Pagination from "../../constant/Pagination";
import { HomeWorkData } from "../../data/HomeWorkData";
import { usePagination } from "../../context/paginationContext";
const Work = () => {


const {data , totalButtons, handleClick, activePage } = usePagination(HomeWorkData, 12)
// console.log(activePage);
  return (
    <>
      <Container>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 lg:gap-y-16 mt-20 '>
          {data.map((currElm,index) => (
            <WorkCard currElm={currElm} key={index} />
          ))}
        </div>

        <Pagination activePage={activePage} handleClick={handleClick} totalButtons={totalButtons} />
      </Container>
    </>
  );
};

export default Work;
