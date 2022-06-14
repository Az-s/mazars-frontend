import {useState, useEffect} from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import TextField from "@mui/material/TextField";

export default function CurrencyField() {
  // const [value, setValue] = React.useState("Controlled");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  // const getCurrency = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let respone = await axios.get("https://www.nbkr.kg/XML/daily.xml");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const [currency, setCurrency] = useState([])

  useEffect(() => {
    const fetchCurrency = async () => {
      const response = await axios.get('https://www.nbkr.kg/XML/daily.xml');
      const currency = Object.keys(response.data).map(id => ({
          ...response.data[id],
          id,
      }))
      setCurrency(currency);
  };

  fetchCurrency().catch(console.error);
  }, []);

  console.log(currency)
  
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container>
        <Grid item xs={2}>
          <TextField
            disabled
            id="outlined-textarea"
            label="EUR"
            placeholder="EUR"
            multiline
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-textarea"
            label="Курс валют"
            placeholder="Курс валют"
            multiline
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <TextField
            disabled
            id="outlined-textarea"
            label="USD"
            placeholder="USD"
            multiline
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-textarea"
            label="Курс валют"
            placeholder="Курс валют"
            multiline
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <TextField
            disabled
            id="outlined-textarea"
            label="CNY"
            placeholder="CNY"
            multiline
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-textarea"
            label="Курс валют"
            placeholder="Курс валют"
            multiline
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <TextField
            disabled
            id="outlined-textarea"
            label="JPY"
            placeholder="JPY"
            multiline
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-textarea"
            label="Курс валют"
            placeholder="Курс валют"
            multiline
          />
        </Grid>
      </Grid>
    </Box>
  );
}
