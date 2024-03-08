import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import BookAppointment from "../Components/BookAppointment";

import Footer from "../Components/Footer";
import About from "./About";
import Reviews from "./Reviews";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <Footer />
    </div>
  );
}

export default Home;
