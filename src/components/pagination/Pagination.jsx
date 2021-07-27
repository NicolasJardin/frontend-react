import React from "react";
import Button from "../button/Button";
import "./Pagination.scss";

const Pagination = (props) => {
  const showPages = () => {
    const pages = [];
    for (
      let index = props.currentPage - 2;
      index < props.currentPage;
      index++
    ) {
      if (index > 0) pages.push(index);
    }
    for (
      let index = props.currentPage;
      index <= props.currentPage + 2 && index <= props.totalPages;
      index++
    ) {
      pages.push(index);
    }

    return pages.map((page) => (
      <Button
        selected={props.currentPage === page}
        onClick={() => props.onChangePage(page)}
        key={page}
      >
        <span>{page}</span>
      </Button>
    ));
  };

  return (
    <div className="pagination">
      <span className="pagination__count">
        Exibindo {props.quantity} postagens
      </span>
      <Button
        onClick={() =>
          props.currentPage > 1 && props.onChangePage(props.currentPage - 1)
        }
      >
        <i
          className={`fas fa-chevron-left ${
            props.currentPage <= 1 && "pagination__dark-icon"
          }`}
        ></i>
      </Button>
      {showPages()}
      <Button
        onClick={() =>
          props.currentPage < props.totalPages &&
          props.onChangePage(props.currentPage + 1)
        }
      >
        <i
          className={`fas fa-chevron-right ${
            props.currentPage >= props.totalPages && "pagination__dark-icon"
          }`}
        ></i>
      </Button>
    </div>
  );
};

export default Pagination;
