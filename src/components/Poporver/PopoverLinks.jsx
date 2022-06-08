import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const Links = [
  'Потребительский портфель',
  'Корпоротивный портфель',
  'Корреспондентские счета',
  'Депозиты',
  'Ценные бумаги',
  'Прочие активы',
  'Аккредетивы',
  'Гарантии',
  'Забалансовые обязательства',
];

export default function PopoverLinks() {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <LightTooltip
          title={
            <>
              <Typography color="inherit" disabled sx={{display: 'flex' , justifyContent: 'center', fontWeight: '500'}}>
                Входные данные:
              </Typography>
              <List>
                {Links.map((link) => (
                  <ListItem disablePadding key={link}>
                    <ListItemButton component={Link} to='/calculate-ecl'>
                      <ListItemText primary={link} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </>
          }
          TransitionComponent={Zoom}
        >
          <Grid item>Calculate ECL</Grid>
        </LightTooltip>
      </Grid>
    </Grid>
  );
}
