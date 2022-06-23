import React from "react";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navigation from "../../components/Navigation/Navigation";
import Results from '../Results/Results';
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#F4F6F8",
      }}
    >
      <CssBaseline />
        <Navigation />
        <Results />
        <Footer />
    </Box>
  );
};

export default HomePage;
