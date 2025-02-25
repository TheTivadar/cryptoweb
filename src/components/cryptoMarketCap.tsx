import React from 'react';

// Utility function to format the number
const formatNumber = (number: number): string => {
  if (number >= 1_000_000_000) {
    return `${(number / 1_000_000_000).toFixed(1)}B`; // Billions
  } else if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(1)}M`; // Millions
  } else if (number >= 1_000) {
    return `${(number / 1_000).toFixed(1)}K`; // Thousands
  } else {
    return number.toString(); // Less than 1000
  }
};

// Component to display the formatted number
const CryptoMarketCap = ({ number }: { number: number | undefined | null }) => {
  // Handle undefined or null values
  if (number === undefined || number === null) {
    return <p>N/A</p>; // Return a fallback value
  }

  const formattedNumber = formatNumber(number);

  return <p>{formattedNumber}</p>;
};

export default CryptoMarketCap;