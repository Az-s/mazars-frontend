import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: '#fff'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          Данный инструмент создан для расчета ожидаемых кредитных убытков
          согласно МСФО9 “Финансовые инструменты”. Расчет производятся на основе
          исторических данных Банка. Расчет. Данный инструмент является
          собственностью Mazars. Все права защищены!
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
