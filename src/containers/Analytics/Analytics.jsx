import { Grid } from "@mui/material";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const Analytics = () => {
  return (
    <>
      <Navigation />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        Analytics
      </Grid>
      <Footer />
    </>
  );
};

export default Analytics;
