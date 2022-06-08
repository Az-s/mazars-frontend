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
        backgroundColor: '#fff',
        boxShadow: '0px 2px 3px 0px rgba(34, 60, 80, 0.2);'
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1"
          sx={{fontSize: '14px'}}
        >
          Данный инструмент создан для расчета ожидаемых кредитных убытков
          согласно МСФО9 “Финансовые инструменты”.<br/> Расчет производятся на основе
          исторических данных Банка. Расчет. Данный инструмент является
          собственностью Mazars. Все права защищены!
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
