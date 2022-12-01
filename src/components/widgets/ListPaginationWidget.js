/**
 * Developed By: Bharat Jograna
 * Created on: 22 July 2022
 * Class Componen: Table Pagination Widget Component
 */
import React from "react";
import Pagination from "react-bootstrap/Pagination";

function paginationBasic({
  DataItems = 10,
  ItemsPerPage = 5,
  pageIndex = 1,
  handleClick,
}) {
  // Logic for displaying page numbers
  const PageNumbers = [];
  for (let item = 1; item <= Math.ceil(DataItems / ItemsPerPage); item++) {
    PageNumbers.push(
      <Pagination.Item
        key={item}
        active={item === pageIndex}
        onClick={() => handleClick(item)}
      >
        {item}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>{PageNumbers}</Pagination>
      <br />
    </div>
  );
}

export default paginationBasic;
