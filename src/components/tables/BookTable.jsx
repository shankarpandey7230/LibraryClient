import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookTable = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const [displayBook, setDisplayBook] = useState([]);
  // console.log(books);

  useEffect(() => {
    setDisplayBook(books);
  }, [books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    // console.log(value);
    const tempBook = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayBook(tempBook);
  };
  return (
    <div>
      <div className="d-flex justify-content-between mb-5">
        <div>{displayBook.length} Book(s) Found</div>
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
            <th>Available</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {displayBook.map(
            (
              { _id, status, title, imgUrl, expectedAvailable, available },
              i
            ) => (
              <tr key={_id}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={import.meta.env.VITE_BASE_API_URL + imgUrl.slice(6)}
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
                  {title}
                </td>
                <td
                  className={
                    status === "active" ? "text-success" : "text-danger"
                  }
                >
                  {status}
                </td>
                <td>
                  {available
                    ? "YES"
                    : !available && expectedAvailable
                    ? expectedAvailable.slice(0, 10)
                    : "N/A"}
                </td>
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

export default BookTable;
