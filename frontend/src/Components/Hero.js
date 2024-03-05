import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";
import { Link } from "react-router-dom";
import SignUp from "../Pages/SignUp";
function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Your Wellness, Your Way❤️ </p>
          <h2 className="text-title">
          Discover Personalized Well-being Journeys
          </h2>
          <p className="text-descritpion">
          Navigate your well-being with personalized recommendations. Connect
            with experts and explore a journey to holistic wellness.
          </p>
          <button className="text-appointment-btn" onClick={SignUp}>
  <Link to="/SignUp">
    <FontAwesomeIcon icon={faCalendarCheck} /> SignUp your profile
  </Link>
</button>

          <div className="text-stats">
            <div className="text-stats-container">
              <p>14k+</p>
              <p>Wellness Journeys</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Health Experts</p>
            </div>

            <div className="text-stats-container">
              <p>5k+</p>
              <p>Subscriptions Provided</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
