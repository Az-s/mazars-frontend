import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import SettingsList from "../../components/SettingsList/SettingsList";
import "./calculateEcl.css";

const CalculateEcl = () => {
  return (
    <>
      <Navigation />
      <div className="calculateEclContainer">
        <SettingsList />
      </div>
      <Footer />
    </>
  );
};

export default CalculateEcl;
