import React from "react";
import Container from "../../constant/Container";
import { Bounce } from "react-reveal";

const FleetHero = () => {
  return <>
    <section className="fleet-hero py-20">
      <Container>
      <Bounce>
        <h1 className="text-dark-blue text-3xl mb-2 mt-40 font-bold">We Offer</h1>
        <h1 className="text-8xl text-white">Best Fleet Range</h1>
      </Bounce>
        
      </Container>
    </section>
  </>;
};

export default FleetHero;
