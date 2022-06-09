import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <Grid
      component={Link}
      to="/login"
      sx={{
        color: "#000",
        textDecoration: "none",
        background:
          "linear-gradient(currentColor, currentColor) 50% 100% no-repeat",
        backgroundSize: "0 1px",
        transition: "background 250ms ease 0s",
        '&:hover': {
          backgroundSize: "100% 1px",
       },
      }}
    >
      Log out
    </Grid>
  );
};

export default Logout;
