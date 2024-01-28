import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CallToAction from "./constant/CallToAction";
import OurFleet from "./pages/OurFleet";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import Faqs from "./pages/Faqs";
import Booking from "./pages/Booking";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/fleet' element={<OurFleet />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/faq' element={<Faqs />} />
          <Route path='/booking' element={<Booking />} />





        </Routes>
        <Footer />
      <CallToAction />

      </BrowserRouter>
    </>
  );
};

export default App;
