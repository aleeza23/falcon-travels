import React from "react";
import NightoutHero from "../components/nightout/NightoutHero";
import Reviews from "../components/reviews/Reviews";
import NightoutTestimonial from "../components/nightout/NightoutTestimonial";

const NightOut = () => {
  return <>
    <NightoutHero />
    <Reviews />
    <NightoutTestimonial />
  </>;
};

export default NightOut;
