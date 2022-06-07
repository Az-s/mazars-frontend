import * as React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";
import "./PopoverLinks.css";

const PopoverLinks = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const Links = [
    {
      text: "Потребительский портфель",
    },
    {
      text: "Корпоротивный портфель",
    },
    {
      text: "Корреспондентские счета",
    },
    {
      text: "Депозиты",
    },
    {
      text: "Ценные бумаги",
    },
    {
      text: "Прочие активы",
    },
    {
      text: "Аккредетивы",
    },
    {
      text: "Гарантии",
    },
    {
      text: "Забалансовые обязательства",
    },
  ];

  return (
    <div>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Calculate ECL
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Button disabled sx={{ p: 1 }}>
          Выбор актива для расчета
        </Button>
        {Links.map((link, i) => (
          <Typography sx={{ p: 1 }} key={i} className="popoverLinks">
            {link.text}
          </Typography>
        ))}
      </Popover>
    </div>
  );
};

export default PopoverLinks;
