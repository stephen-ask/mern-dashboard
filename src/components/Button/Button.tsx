import React from 'react';

interface BtnProps {
  value: string;
  type?: "button" | "submit" | "reset";
  extraClassName?: string;
}

export const Button: React.FC<BtnProps> = ({ value, type, extraClassName }) => {
  const btnType = type || "button";
  return (
    <button type={btnType} className={`btn ${extraClassName}`}>
      {value}
    </button>
  );
};
