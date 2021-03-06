import React from "react";
import Page from "./page";

const Pagenation = ({ numberOfPages, pageClick, pageNumber }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-end">
        {renderPages(numberOfPages, pageClick, pageNumber)}
      </ul>
    </nav>
  );

  function renderPages(numberOfPages, pageClick, pageNumber) {
    let pages = [];
    for (let i = 0; i < numberOfPages; i++) {
      let isSelected = false;
      if (i + 1 === pageNumber) {
        isSelected = true;
      }
      pages.push(
        <Page
          key={"Page-" + (i + 1)}
          pageClick={pageClick}
          pageNumber={i + 1}
          pageText={i + +1}
          isSelected={isSelected}
        />
      );
    }
    return pages;
  }
};

export default Pagenation;
