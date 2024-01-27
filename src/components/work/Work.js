import React from "react";
import Container from "../../constant/Container";
import WorkCard from "./WorkCard";
import {Link, NavLink} from "react-router-dom";
import {FaLink} from "react-icons/fa";
import Pagination from "../../constant/Pagination";

const Work = () => {
  return (
    <>
      <Container>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 lg:gap-y-16 mt-20 '>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
            <WorkCard key={index} />
          ))}
        </div>

        <Pagination />
      </Container>
    </>
  );
};

export default Work;
