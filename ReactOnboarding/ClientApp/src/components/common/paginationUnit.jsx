import React from "react";
import { Pagination } from "semantic-ui-react";

const PaginationUnit = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  return (
    <Pagination
      boundaryRange={0}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={pagesCount}
      defaultActivePage={currentPage}
      onPageChange={(e, data) => onPageChange(data.activePage)}
    />
  );
};

export default PaginationUnit;
