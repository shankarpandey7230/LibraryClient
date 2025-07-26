import BookTable from "@components/tables/BookTable";
import { adminFetchBookAction } from "@features/books/bookAction";

import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MdAddComment } from "react-icons/md";
import { Link } from "react-router-dom";

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminFetchBookAction());
  }, [dispatch]);
  return (
    <div className="p-3 w-100" style={{ maxWidth: "100vw" }}>
      <h3>Books</h3>
      <hr />
      <div className="d-flex justify-content-end mb-3">
        <Link to="/user/new-book">
          <Button
            variant="primary"
            className="d-flex align-items-center gap-2 shadow-sm rounded-pill px-3 py-2"
          >
            <MdAddComment size={20} />
            <span>Add New Book</span>
          </Button>
        </Link>
      </div>
      <div className="mt-4">
        <BookTable />
      </div>
    </div>
  );
};

export default Books;
