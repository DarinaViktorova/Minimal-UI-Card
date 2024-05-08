"use client"
import React from "react";
import { Box } from "@mui/material";
import IceCreamProductCard from "@/ui/icecreamproductcard";
import BackgroundShape from "@/assets/illustrations/background-shape";

export default function Home() {
  return (
    <Box maxWidth="50%" margin="auto">
      <h1>Create your ice cream!</h1>
      <BackgroundShape />
      <IceCreamProductCard/>
    </Box>
  );
}