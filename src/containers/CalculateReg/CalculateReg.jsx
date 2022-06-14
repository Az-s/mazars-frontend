import { Grid, Paper, Box, Typography, Stack, Button } from "@mui/material";
import RegressionSelects from "../../components/RegressionSelects/RegressionSelects";

const CalculateReg = () => {
  return (

    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Paper component={Box} p={2} sx={{ marginTop: "50px", width: "1024px" }}>
        <Grid item container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">Результаты:</Typography>
          </Grid>
          <Grid item>
            <RegressionSelects />
          </Grid>
        </Grid>
        <Grid item p={3} sx={{ backgroundColor: "#F4F6F8" }}>
          Some results from server
        </Grid>
        <Stack direction="row" spacing={2} pt={2} justifyContent="space-between" alignItems="center">
          <Button variant="contained" size="medium">
            Рассчитать
          </Button>
          <Button variant="contained" size="medium">
            Сохранить
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default CalculateReg;
