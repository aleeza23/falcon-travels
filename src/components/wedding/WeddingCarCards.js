import React from "react";
import Pagination from "../../constant/Pagination";
import WorkCard from "../work/WorkCard";
import {HomeWorkData} from "../../data/HomeWorkData";
import Container from "../../constant/Container";
import Button from "../../constant/Button";
import {usePagination} from "../../context/paginationContext";

const WeddingCarCards = () => {
  const {data, totalButtons,activePage} = usePagination(HomeWorkData, 9);

  return (
    <>
      <section>
        <h1 className='text-dark-blue mt-8 font-bold text-3xl text-center mb-7'>
          Exotic Car | Rolls Royce Rental for Weddings
        </h1>
        <Container>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 lg:gap-y-16 '>
            {data.map((currElm, index) => (
              <WorkCard currElm={currElm} key={index} />
            ))}
          </div>

          <Pagination activePage={activePage} totalButtons={totalButtons} />
          <div className='flex justify-center my-8'>
            <Button
              className={
                "bg-black w-fit px-7 rounded-lg text-white flex justify-center py-2"
              }
            >
              Call Now :(800) 597 6911{" "}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WeddingCarCards;
