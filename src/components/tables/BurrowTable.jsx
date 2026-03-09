import { getAllBorrowsAction } from "@features/borrow/borrowAction";
import React, { useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BurrowTable = () => {
  const dispatch = useDispatch();
  const { allborrows } = useSelector((state) => state.borrowInfo);
  console.log(allborrows);
  useEffect(() => {
    dispatch(getAllBorrowsAction());
  }, [dispatch]);

  const handleOnSearch = () => {};
  return (
    <div>
      <div className="d-flex justify-content-between mb-5">
        <h4 className="">{allborrows.length} Books Found</h4>
        <div>
          <Form.Control
            placeholder="Search your book"
            onChange={handleOnSearch}
          />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Status</th>
            <th>Due</th>
            <th>Returned Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allborrows.map(
            (
              { _id, thumbnail, dueDate, bookTitle, isReturned, returnedDate },
              i
            ) => (
              <tr key={_id}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={import.meta.env.VITE_BASE_API_URL + thumbnail.slice(6)}
                    // src={imgUrl}
                    alt="Book"
                    style={{
                      width: "60px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  {/* <img
                    src={
                      imgUrl.startsWith("http")
                        ? imgUrl
                        : import.meta.env.VITE_BASE_API_URL +
                          imgUrl.replace(/^public[\\/]/, "")
                    }
                    alt="Book"
                    style={{
                      width: "60px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  /> */}
                </td>

                <td
                  style={{
                    maxWidth: "200px",
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                  }}
                >
                  {bookTitle}
                </td>
                <td>Todo</td>
                <td>{dueDate.slice(0, 10)}</td>
                <td>{isReturned ? returnedDate.slice(0, 10) : "NO"}</td>

                <td>
                  <Link to={"/user/edit-book/" + _id}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default BurrowTable;
