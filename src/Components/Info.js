import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse,  faTooth , faD } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        Wellness WayFinder is your partner in well-being, providing
            personalized on-demand healthcare services designed just for you.
            Connect with our skilled online doctors for expert advice, secure
            online prescriptions, and prompt refills whenever you need them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Gym And Excercise Recommendation"
          description="Our Personalized Diet Recommendation service crafts customized meal plans based on individual health data, ensuring tailored nutrition advice for optimal well-being.This service promotes informed dietary choices, contributing to holistic well-being and encouraging users to actively engage in their health journey. It's a transformative approach to nutrition that aligns with our commitment to proactive healthcare."
          icon={faD}
        />

        <InformationCard
          title="Nutrition And Diet Rececommendation"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Medicine Advisior"
          description="Our AI-Powered Virtual Wellness Navigators revolutionize personalized health guidance. These intelligent navigators leverage advanced artificial intelligence to provide precise and personalized medication recommendations.Integrating with user health profiles, these virtual guides empower individuals to navigate their wellness journey with tailored insights."
          icon={faTooth}
        />
        
      </div>
     
    </div>
  );
}

export default Info;
