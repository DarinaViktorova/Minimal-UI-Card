import React, { useState } from "react";
import {
  Card,
  CardContent,
  Paper,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import IceCreamCustomizer from "./icecreamcustomizer";
import IceCreamCounter from "./icecreamcounter";
import styles from "./styles/productcard.module.css";

const IceCreamProductCard = () => {
  const [scoopColors, setScoopColors] = useState([
    "#E3CDA4",
    "#8B5A2B",
    "#F08080",
  ]);
  const [coneColor, setConeColor] = useState("#D2B48C");

  const [alertOpen, setAlertOpen] = useState(false);

  const handleScoopColorChange = (index, color) => {
    const updatedColors = [...scoopColors];
    updatedColors[index] = color;
    setScoopColors(updatedColors);
  };

  const handleConeColorChange = (color) => {
    setConeColor(color);
  };

  const handleBuyNow = () => {
    //alert("Buy button clicked!");
    setAlertOpen(true);
  };

  return (
    <Card className={styles.iceCreamCard}>
      <CardContent className={styles.cardContent}>
        {alertOpen && (
          <Alert severity="success" onClose={() => setAlertOpen(false)}>
            The purchase is made!
          </Alert>
        )}
        <Paper elevation={3} className={styles.paper}>
          <Typography variant="caption" display="block" gutterBottom>
            Our ice cream is made from only the finest natural ingredients.
          </Typography>
        </Paper>
        <div className={styles.customizerWrapper}>
          <IceCreamCustomizer
            scoopColors={scoopColors}
            coneColor={coneColor}
            onScoopColorChange={handleScoopColorChange}
            onConeColorChange={handleConeColorChange}
          />
        </div>
      </CardContent>
      <IceCreamCounter pricePerUnit={0.52} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleBuyNow}
        className={styles.buyButton}
      >
        Buy Now
      </Button>
    </Card>
  );
};

export default IceCreamProductCard;
