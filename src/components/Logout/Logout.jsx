import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Logout = () => {
  return <Grid component={Link} to='/login' sx={{color: '#000' , textDecoration: 'none'}}>Log out</Grid>;
};

export default Logout;
