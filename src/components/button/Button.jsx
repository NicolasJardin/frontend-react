import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`button ${props.selected && "button--selected"}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
