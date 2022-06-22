import React from "react";

function TextInput({ id, placeholder, type, value, handleChange }) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
}

export default React.memo(TextInput);
