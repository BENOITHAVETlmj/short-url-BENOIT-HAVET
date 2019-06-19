import React from "react";

const InputAdress = ({ originalUrl, handleSubmit, handleChange }) => {
  return (
    <div className="container-header">
      <h1>Simplify your links</h1>
      <form type="onSubmit">
        <input
          placeholder="Your original URL here~"
          type="url"
          value={originalUrl}
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
