import React from "react";
import FleetHero from "../components/our fleet/FleetHero";
import FleetTestimonial from "../components/our fleet/FleetTestimonial";
import FleetCards from "../components/our fleet/FleetCards";
import FleetSlider from "../components/our fleet/FleetSlider";
import { Fade } from "react-reveal";

const OurFleet = () => {
  return <>
    <FleetHero />
    <Fade right>
      <FleetTestimonial />
      <FleetCards />
    </Fade>

    <FleetSlider />
  </>;
};

export default OurFleet;
