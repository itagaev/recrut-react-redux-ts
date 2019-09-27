import * as React from "react";
import { PaginatedCtrl } from "./Paginated.ctrl";
import Pagination from "react-js-pagination";

export class Paginated extends PaginatedCtrl {
  render() {
    const { itemsCount, currentPage, onPageChange, pageSize } = this.props;
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
  }
}
