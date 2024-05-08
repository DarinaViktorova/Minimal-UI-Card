import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import IceCream from "./icecream";
import styles from "./styles/customizer.module.css";

const IceCreamCustomizer = ({
  scoopColors,
  coneColor,
  onScoopColorChange,
  onConeColorChange,
}) => {
  const handleScoopColorChange = (index, color) => {
    onScoopColorChange(index, color);
  };

  const handleConeColorChange = (color) => {
    onConeColorChange(color);
  };

  return (
    <Box className={styles.customizerBox}>
      <Grid container spacing={2} className={styles.customizerGrid}>
        <Grid item xs={12} sm={6}>
          <IceCream scoopColors={scoopColors} coneColor={coneColor} />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* Menu for choosing colors of ice cream “balls”*/}
          {scoopColors.map((color, index) => (
            <FormControl key={index} fullWidth className={styles.formControl}>
              <InputLabel htmlFor={`scoop${index + 1}-color`}>
                {`Scoop ${index + 1} Color`}
              </InputLabel>

              <Select
                value={color}
                onChange={(e) => handleScoopColorChange(index, e.target.value)}
                label={`Scoop ${index + 1} Color`}
                id={`scoop${index + 1}-color`}
                sx={{ width: "100%", fontSize: "14px" }}
              >
                <MenuItem value="#E3CDA4">Vanilla</MenuItem>
                <MenuItem value="#8B5A2B">Chocolate</MenuItem>
                <MenuItem value="#F08080">Strawberry</MenuItem>
              </Select>
            </FormControl>
          ))}

          {/* Horn color selection menu */}
          <FormControl fullWidth className="styles.formControl">
            <InputLabel htmlFor="cone-color">Cone Color</InputLabel>
            <Select
              value={coneColor}
              onChange={(e) => handleConeColorChange(e.target.value)}
              label="Cone Color"
              id="cone-color"
              sx={styles.selectLabel}
            >
              <MenuItem value="#D2B48C">Waffle</MenuItem>
              <MenuItem value="#DEB887">Chocolate Waffle</MenuItem>
              <MenuItem value="#FFD700">Gold</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IceCreamCustomizer;
