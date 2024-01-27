import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Company from "../components/companies/Company";
import Offer from "../components/offers/Offer";
import Work from "../components/work/Work";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";
import CallToAction from "../constant/CallToAction";
import Parallax from "../components/parallex/Parallax";
import Reviews from "../components/reviews/Reviews";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Company />
      <Reviews />
      <Offer />
      <Work />
      <Services />
      <Parallax />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
