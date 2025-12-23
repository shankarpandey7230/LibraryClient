import BookListing from "@components/BookListing/BookListing";
import React, { useEffect } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const navigate = useNavigate();

  // console.log(query);

  useEffect(() => {
    !query && navigate("/");
  }, [query, navigate]);
  const { publicBooks } = useSelector((state) => state.bookInfo);
  const searchBookArg = publicBooks.filter((b) => {
    const text = `${b.title} ${b.description}`.toLowerCase();

    return text.includes(query.toLowerCase());
  });
  return (
    <Container className="mx-5">
      <Row className="my-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All Books
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <BookListing bookList={searchBookArg} />
    </Container>
  );
};

export default Search;
