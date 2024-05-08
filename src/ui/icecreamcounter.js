import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import styles from "./styles/counter.module.css";

const IceCreamCounter = ({ pricePerUnit }) => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const totalPrice = pricePerUnit * count;

  return (
    <div>
      <Typography variant="h6">Quantity: {count}</Typography>
      <Typography variant="h6">Price per unit: {pricePerUnit} $</Typography>
      <Typography variant="h6">Total Price: {totalPrice} $</Typography>
      <Button
        variant="contained"
        onClick={incrementCount}
        className={styles.incrementButton}
      >
        +
      </Button>
      <Button
        variant="contained"
        onClick={decrementCount}
        className={styles.decrementButton}
      >
        -
      </Button>
    </div>
  );
};

export default IceCreamCounter;
