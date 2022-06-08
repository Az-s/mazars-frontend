import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Results from "./containers/Results/Results";
import CalculateEcl from "./containers/CalculateEsl/CalculateEcl";
import CalculateReg from "./containers/CalculateReg/CalculateReg";
import Analytics from "./containers/Analytics/Analytics";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: '#F4F6F8',
      }}
    >
      <CssBaseline />
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Results />} />
            <Route path="/calculate-ecl" element={<CalculateEcl />} />
            <Route path="/calculate-reg" element={<CalculateReg />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
