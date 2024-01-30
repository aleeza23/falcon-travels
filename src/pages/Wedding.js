import React from "react";
import WeddingHero from "../components/wedding/WeddingHero";
import Company from "../components/companies/Company";
import Reviews from "../components/reviews/Reviews";
import WeddingBusCards from "../components/wedding/WeddingBusCards";
import WeddingRemoCards from "../components/wedding/WeddingRemoCards";
import WeddingCarCards from "../components/wedding/WeddingCarCards";
import WeddingTestimonial from "../components/wedding/WeddingTestimonial";
import WeddingGallery from "../components/wedding/WeddingGallery";
import WeedingFleets from "../components/wedding/WeddingFleets";
import WeddingFirstChoice from "../components/wedding/WeddingFirstChoice";

const Wedding = () => {
  return <>
    <WeddingHero />
    <Company />
    <Reviews />
    <WeddingBusCards /> 
   <WeddingRemoCards />
   <WeddingCarCards />
   <WeddingTestimonial />
   <WeddingGallery />
   <WeedingFleets />
   <WeddingFirstChoice />
  </>;
};

export default Wedding;
