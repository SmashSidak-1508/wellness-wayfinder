import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";
import { Link } from "react-router-dom";
import SignUp from "../Pages/SignUp";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Wellness WayFinder</span>
        </h3>
        <p className="ba-description">
        Embark on a transformative wellness journey with Wellness WayFinder—a realm where expert care meets personalized solutions, placing your well-being at the forefront. Choose us for an adventure toward better health, where convenience and tailored approaches redefine your path to a happier and more vibrant life.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Best Professional Experts
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Personalised Health Care
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> 24/7 Support Live Chat
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Enrollment Easy and Quick
        </p>

        <button className="text-appointment-btn" onClick={SignUp}>
  <Link to="/SignUp">
    <FontAwesomeIcon icon={faCalendarCheck} /> SignUp your profile
  </Link>
</button>
      </div>
    </div>
  );
}

export default BookAppointment;
