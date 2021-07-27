import React from "react";
import "./Table.scss";

const Table = (props) => {
  return (
    <table className="table">
      <thead className="table__header">
        <tr>
          {props.columns &&
            props.columns.map((column, index) => (
              <th key={index} className={`table__column ${column.small && "table__column--small"}`}>
                <span>{column.name}</span>
              </th>
            ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default Table;
