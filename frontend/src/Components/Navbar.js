import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isLogin,setLogin]=useState(<Login/>)
  const handleLoginClick = () => {
    setLogin(isLogin === <Login /> ? <Logout /> : <Login />);
  };
  
  const openNav = () => {
    setNav(!nav);
  };



  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Wellness WayFinder <span className="navbar-sign">+</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Gym" className="navbar-links">
            Gym&Exer
          </Link>
        </li>

        <li>
          <Link to="/Medicine" className="navbar-links">
            Medicine
          </Link>
        </li>
        <li>
          <Link to="/About" className="navbar-links">
            About
          </Link>
        </li>
        <li>
          <Link to="/Reviews" className="navbar-links">
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="navbar-links">
            Profile
          </Link>
        </li>

      </ul>

      <button
        className="navbar-btn"
        type="button"
      >
         <Link to="/login"  onClick={handleLoginClick} className="navbar-links">
            Login 
          </Link>
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link onClick={openNav} to="/Gym">
              Gym&Exer
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/Medicine">
              Medicine
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/About">
              About
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/Reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
