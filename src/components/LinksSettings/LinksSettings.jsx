import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(title, setName, theme) {
  return {
    fontWeight:
    setName.indexOf(title) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const titles = [
  "Потребительский портфель",
  "Корпоротивный портфель",
  "Депозиты",
  "Ценные бумаги",
  "Прочие активы",
  "Аккредетивы",
  "Гарантии",
  "Забалансовые обязательства",
];

const LinksSettings = () => {
  const theme = useTheme();
  const [name, setName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="settingsContainer">
      <h3>Настройки</h3>
      <div className="settingsLinks">
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <Select
            multiple
            displayEmpty
            value={setName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Выбор актива для расчета</em>;
              }

              return selected.join(", ");
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              <em>Выбор актива для расчета</em>
            </MenuItem>
            {titles.map((title) => (
              <MenuItem
                key={title}
                value={title}
                style={getStyles(title, setName, theme)}
              >
                {title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default LinksSettings;
