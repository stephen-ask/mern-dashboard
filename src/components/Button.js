import React from 'react';

export const Button = ({ value, type, extraClassName }) => {
  return (
    <button type={type} className="btn ${extraClassName}">
      {value}
    </button>
  );
};

