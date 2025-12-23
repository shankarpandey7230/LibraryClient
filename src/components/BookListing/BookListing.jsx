import { CustomCard, CustomCardList } from "@components/customCard/CustomCard";
import CustomPagination from "@components/customPagination/CustomPagination";
import React, { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { MdOutlineList, MdOutlineViewCompact } from "react-icons/md";
const booksPerScreen = 5;
const BookListing = ({ bookList }) => {
  const [view, setView] = useState("card");

  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(bookList.length / booksPerScreen);
  const startIndex = (currentPage - 1) * booksPerScreen;
  const currentBooks = bookList.slice(startIndex, startIndex + booksPerScreen);
  return (
    <Row>
      <Col>
        <div className="d-flex justify-content-between">
          {bookList.length > 0 ? (
            <>
              <div className="">{bookList.length} Books found</div>
              <div>
                <ButtonGroup aria-label="Basic example">
                  <Button
                    onClick={() => setView("card")}
                    variant="secondary"
                    className=""
                  >
                    <MdOutlineViewCompact />
                    Card
                  </Button>

                  <Button onClick={() => setView("list")} variant="dark">
                    <MdOutlineList />
                    List
                  </Button>
                </ButtonGroup>
              </div>
            </>
          ) : (
            <h1>No Search Matched.. Please Try with another search</h1>
          )}
        </div>
        <hr />
        <div
          className={
            view === "card"
              ? "booklist-container d-flex gap-2 my-2  p-3 flex-wrap"
              : "booklist-container d-flex gap-2 my-2  p-3 flex-wrap justify-content-center"
          }
        >
          {currentBooks.length > 0 &&
            currentBooks.map((book) =>
              view === "card" ? (
                <CustomCard key={book._id} {...book} />
              ) : (
                <CustomCardList key={book._id} {...book} />
              )
            )}
        </div>
        {currentBooks.length > 0 && pages > 1 && (
          <CustomPagination
            currentPage={currentPage}
            pages={pages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Col>
    </Row>
  );
};

export default BookListing;
