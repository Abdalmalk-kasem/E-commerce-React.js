/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AnchorLink from "./AnchorLink";

import classes from "./Pagination.module.css";
import { Icon } from "@iconify/react";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const [activePage, setActivePage] = useState(1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    paginate(activePage);
  }, [activePage, paginate]);

  const handlePageClick = (number) => {
    setActivePage(number);
  };

  const nextPageHandler = () => {
    setActivePage((prevActivePage) => prevActivePage + 1);
  };

  return (
    <nav className="section-p1">
      <ul className={classes.pagination}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={activePage === number ? classes.active : ""}
          >
            <AnchorLink
              onClick={() => {
                handlePageClick(number);
              }}
              url=""
              arialabel={`move to page number ${number}`}
            >
              {number}
            </AnchorLink>
          </li>
        ))}
        <li
          className={`${classes.icon} ${
            pageNumbers[pageNumbers.length - 1] === activePage
              ? classes.active
              : ""
          }`}
        >
          <AnchorLink onClick={nextPageHandler} url="" arialabel="next page">
            <Icon icon="ph:arrow-right-bold" width="20" />
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
