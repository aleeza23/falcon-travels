import React from "react";
import Container from "../../constant/Container";
import WorkCard from "../work/WorkCard";
import { HomeWorkData } from "../../data/HomeWorkData";
import Pagination from "../../constant/Pagination";
import Button from "../../constant/Button";
import { usePagination } from "../../context/paginationContext";
const WeddingBusCards = () => {
  const {data, totalButtons, handleClick,activePage} = usePagination(HomeWorkData, 9)
  return <>
    <section>
        <h1 className="text-dark-blue mt-8 font-bold text-3xl text-center mb-7">Party Bus Rental for Weddings</h1>
        <Container>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 lg:gap-y-16 '>
          {data.map((currElm,index) => (
            <WorkCard currElm={currElm} key={index} />
          ))}
        </div>

        <Pagination activePage={activePage} handleClick={handleClick} totalButtons={totalButtons} />
        <div className="flex justify-center my-8">
        <Button className={'bg-nav-bg w-fit px-7 rounded-lg text-white font-bold flex justify-center py-2'}>View Entire Fleet</Button>

        </div>
        </Container>
    </section>
  </>;
};

export default WeddingBusCards;
