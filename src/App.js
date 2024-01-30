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
import Wedding from "./pages/Wedding";
import BirthDay from "./pages/BirthDay";
import NightOut from "./pages/NightOut";
import SingleVehicle from "./pages/SingleFleet";
import Blog from "./pages/Blog";

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
          <Route path='/blog' element={<Blog />} />
          <Route path='/wedding' element={<Wedding />} />
          <Route path='/birthday' element={<BirthDay />} />
          <Route path='/night-out' element={<NightOut />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/faq' element={<Faqs />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/single-fleet/:fleetName' element={<SingleVehicle />} />
        </Routes>
        <Footer />
        <CallToAction />
      </BrowserRouter>
    </>
  );
};

export default App;
