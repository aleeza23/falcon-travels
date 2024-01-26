import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Company from "../components/companies/Company";
import Offer from "../components/offers/Offer";
import Work from "../components/work/Work";
import Services from "../components/services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Company />
      <Offer />
      <Work />
      <Services />
    </>
  );
};

export default Home;
