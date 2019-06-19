import React from "react";

const InputAdress = ({ value, handleSubmit, handleChange }) => {
  return (
    <div className="container-header">
      <h1>Simplify your links</h1>
      <form type="onSubmit">
        <input
          placeholder="Your original URL here~"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          SHORTEN URL
        </button>
      </form>
    </div>
  );
};

export default InputAdress;
