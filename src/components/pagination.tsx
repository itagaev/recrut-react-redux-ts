import React from "react";
import Pagination from "react-js-pagination";

export interface PaginatedProps {
  itemsCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

const Paginated: React.SFC<PaginatedProps> = ({
  itemsCount,
  currentPage,
  onPageChange,
  pageSize
}) => {
  return (
    <div className={itemsCount ? "results" : ""}>
      <div className="pagination-list">
        <Pagination
          activePage={currentPage}
          totalItemsCount={itemsCount}
          pageRangeDisplayed={pageSize}
          onChange={onPageChange}
          itemClass="page-item"
          innerClass="pagination pagination-md justify-content-center"
          linkClass="page-link"
        />
      </div>
    </div>
  );
};

export default Paginated;
