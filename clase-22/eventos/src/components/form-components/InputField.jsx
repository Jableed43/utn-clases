import React from 'react';

const InputField = ({ label, type, value, onChange }) => {
  return (
    <label>
      {label}:
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default InputField;

