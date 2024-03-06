import React from 'react';

export const InputField = ({ label, type, name, value, onChange, errorMessage }) => {
  return (
    <>
      <label className="form-label">{label}</label>
      <div className="form-group">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
          id={`validationCustom${name}`}
          aria-describedby="inputGroupPrepend"
          required
        />
        {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
      </div>
    </>
  );
};


