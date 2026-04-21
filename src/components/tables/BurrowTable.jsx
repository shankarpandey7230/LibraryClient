import { getAllBorrowsAction } from "@features/borrow/borrowAction";
import React, { useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const BurrowTable = ({ isAdmin }) => {
  const location = useLocation();
  const pathname = location.pathname;
  // console.log(pathname);
  const dispatch = useDispatch();
  const { allborrows = [], myborrows = [] } = useSelector(
    (state) => state.borrowInfo
  );

  // console.log(allborrows);
  // const borrowtype = isAdmin ? allborrows : myborrows;
  const borrowtype = isAdmin ? allborrows : myborrows;
  useEffect(() => {
    dispatch(getAllBorrowsAction(isAdmin));
  }, [dispatch, isAdmin]);

  // console.log({
  //   isAdmin,
  //   allborrows,
  //   myborrows,
  //   borrowtype,
  // });

  const handleOnSearch = () => {};
  return (
    <div>
      <div className="d-flex justify-content-between mb-5">
        <h4 className="">{borrowtype.length} Books Found</h4>
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
            {!pathname.includes("user/my-borrow-history") && <th>Status</th>}
            <th>Due</th>
            <th>Returned Date</th>
            {!pathname.includes("user/borrow-history") && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {borrowtype.map(
            (
              {
                _id,
                thumbnail,
                dueDate,
                bookTitle,
                isReturned,
                returnedDate,
                reviewId,
                bookSlug,
              },
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
                          import { path } from 'path';
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
                  <a href={`/books/${bookSlug}`} target="_blank">
                    {bookTitle}
                  </a>
                </td>
                {!pathname.includes("user/my-borrow-history") && <td>Todo</td>}

                <td>{dueDate.slice(0, 10)}</td>
                <td>
                  {isReturned ? returnedDate.slice(0, 10) : "Borrowed"}
                  {reviewId && " & Left Review"}
                </td>
                {!pathname.includes("user/borrow-history") && (
                  <td>
                    {!isReturned && (
                      <Button variant="warning">Return Book</Button>
                    )}
                    {isReturned && !reviewId && (
                      <Button variant="success">Leave Review </Button>
                    )}
                    {reviewId && "Reviewed"}
                  </td>
                )}
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default BurrowTable;
