import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/mazars-logo.png";
import Logout from "../Logout/Logout";
import PopoverLinks from "../Poporver/PopoverLinks";
import { Grid } from "@mui/material";
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
          <Grid item sx={{listStyleType: 'none', fontSize: '18px' , cursor: 'pointer'}}>
            <li className="navLink">
              <PopoverLinks />
            </li>
          </Grid>
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
