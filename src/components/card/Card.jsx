import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <h1 className="card__title">{props.title}</h1>
      <div className="card__body">{props.children}</div>
    </div>
  );
};

export default Card;
