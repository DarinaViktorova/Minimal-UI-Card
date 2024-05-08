"use client"
import React from "react";
import { Box } from "@mui/material";

const IceCream = ({ scoopColors, coneColor }) => {


  return (
    <Box
      component="svg"
      width="60%"
      height="80%"
      viewBox="0 0 80 130"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Icecream balls */}
      {scoopColors.map((color, index) => (
        <circle
          key={index}
          cx={index === 0 ? 50 : index === 1 ? 40 : 60}
          cy={index === 0 ? 15 : 30}
          r="15"
          fill={color}
        />
      ))}
      {/* Horn */}
      <polygon points="50,110 30,40 70,40" fill={coneColor} />
    </Box>
  );
};

export default IceCream;







