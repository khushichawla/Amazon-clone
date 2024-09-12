import React from "react";

const CurrencyFormatter = ({ value }) => {
  // Divide the value by 100 to get the correct currency amount
  const formattedValue = (Number(value) / 100).toFixed(2);

  // Add thousand separators if needed (for large numbers)
  const parts = formattedValue.split(".");
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const decimalPart = parts[1] ? `.${parts[1]}` : ".00";

  return <span>${integerPart}{decimalPart}</span>;
};

export default CurrencyFormatter;