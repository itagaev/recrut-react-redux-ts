export type PaginatedProps = {
  itemsCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  currentPage: number;
};
