import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "../Components/SolutionStep"
import "../Styles/About.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
    <Navbar/>
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to Wellness WayFinder, where we're dedicated to your well-being journey. Our platform provides expert guidance, personalized healthcare, and online consultations to prioritize your health. Join us on the path to a healthier you.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Personalised Wellness Path"
          description="Discover your ideal wellness path with Wellness WayFinder. Easily connect with specialized experts who prioritize your health, providing personalized care tailored to your unique needs. Your journey to personalized well-being starts here"/>

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced experts and chat support are here to provide expert advice and personalized plans, helping you achieve your best possible health."
        />
        
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;
