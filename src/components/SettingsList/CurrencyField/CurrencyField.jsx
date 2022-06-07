import * as React from "react";
import { Box, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function CurrencyField() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
