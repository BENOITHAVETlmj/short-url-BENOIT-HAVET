import React from "react";

const Alert = ({ status }) => {
  return (
    <div>
      {status && status === 404 && alert("error")}
      {status && status === 401 && alert("This URL is not valid!")}{" "}
      {status && status === 406 && alert("This Url already exists in the list")}{" "}
    </div>
  );
};

export default Alert;
