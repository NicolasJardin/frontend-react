import React from "react";
import "./Row.scss";

const Row = (props) => {
  return (
    <tr className="row">
      {props.children}
    </tr>
  );
};

export default Row;
