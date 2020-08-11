import React from "react";

const Alert = ({ type = "is-danger", message, onCloseHandler }) => {
  return (
    <div className={`notification has-text-centered ${type}`}>
      <button className="delete" onClick={() => onCloseHandler()} />
      {message}
    </div>
  );
};

export default Alert;
