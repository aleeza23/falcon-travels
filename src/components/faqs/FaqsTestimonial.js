import React, { useState } from "react";
import Container from "../../constant/Container";
import SearchQuery from "../../constant/SearchQuery";
import FaqAccordion from "./FaqAccordion";

const FaqsTestimonial = () => {
    const [openAcc, setopenAcc] = useState(0);
  return <>
    <Container>
        <div className="grid lg:grid-cols-3 gap-12 my-8">
        <div className='lg:col-span-2'>
        <FaqAccordion openAcc={openAcc} setopenAcc={setopenAcc} />
        </div>

        <div>
        <p className="ps-5 text-2xl border-l-2 border-icons-color  ">https://falcontourtravel.com/our-fleet/</p>
            <SearchQuery />
        </div>
        </div>
    </Container>
  </>;
};

export default FaqsTestimonial;
