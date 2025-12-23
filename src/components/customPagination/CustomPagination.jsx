import React from "react";
import { Pagination } from "react-bootstrap";

const CustomPagination = ({ currentPage, setCurrentPage, pages }) => {
  return (
    <div className="mt-3 d-flex justify-content-center">
      <Pagination>
        {/* First */}
        <Pagination.First
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        />

        {/* Prev */}
        <Pagination.Prev
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {/* Page Numbers */}
        {Array.from({ length: pages }, (_, i) => i + 1)
          .filter((page) => {
            // Always show first and last
            if (page === 1 || page === pages) return true;

            // Show pages close to current page
            if (Math.abs(page - currentPage) <= 2) return true;

            return false;
          })
          .map((page, index, filteredPages) => {
            const prevPage = filteredPages[index - 1];

            // Insert ellipsis when gap occurs
            if (prevPage && page - prevPage > 1) {
              return (
                <React.Fragment key={`ellipsis-${page}`}>
                  <Pagination.Ellipsis disabled />
                  <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Pagination.Item>
                </React.Fragment>
              );
            }

            return (
              <Pagination.Item
                key={page}
                active={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Pagination.Item>
            );
          })}

        {/* Next */}
        <Pagination.Next
          onClick={() => currentPage < pages && setCurrentPage(currentPage + 1)}
          disabled={currentPage === pages}
        />

        {/* Last */}
        <Pagination.Last
          onClick={() => setCurrentPage(pages)}
          disabled={currentPage === pages}
        />
      </Pagination>
    </div>
  );
};

export default CustomPagination;
