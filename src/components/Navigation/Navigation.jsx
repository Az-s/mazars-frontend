import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/mazars-logo.png";
import Logout from "../Logout/Logout";
import PopoverLinks from "../Poporver/PopoverLinks";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <img src={Logo} alt="Mazars" className="navImg" />
        <ul className="navItems">
          <Link to="/">
            <li className="navLink">Home</li>
          </Link>
          <Link to="/calculate-ecl">
            <li className="navLink" to="/calculate-ecl">
              <PopoverLinks />
            </li>
          </Link>
          <Link to="/calculate-reg">
            <li className="navLink">Calculate Regression</li>
          </Link>
          <Link to="/analytics">
            <li className="navLink">Analytics</li>
          </Link>
        </ul>
        <Logout />
      </div>
    </div>
  );
};

export default Navigation;
