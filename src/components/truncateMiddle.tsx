import React from 'react';

interface TruncateMiddleProps {
  str: string;
  startChars?: number;
  endChars?: number;
}

export const TruncateMiddle: React.FC<TruncateMiddleProps> = ({ str, startChars = 4, endChars = 4 }) => {
  // Ensure str is a string
  if (typeof str !== 'string') {
    console.error('TruncateMiddle: Expected a string, but got:', str);
    return <span>{str}</span>; // Return the original value or handle the error as needed
  }

  // If the string is too short, return it as is
  if (str.length <= startChars + endChars) return <span>{str}</span>;

  // Truncate the string
  return <span>{`${str.slice(0, startChars)}...${str.slice(-endChars)}`}</span>;
};