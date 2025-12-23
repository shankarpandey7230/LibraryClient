import { CustomCard, CustomCardList } from "@components/customCard/CustomCard";
import { useEffect } from "react";
import {
  Breadcrumb,
  Button,
  ButtonGroup,
  Col,
  Container,
  Pagination,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineViewCompact, MdOutlineList } from "react-icons/md";
import CustomPagination from "@components/customPagination/CustomPagination";
import BookListing from "@components/BookListing/BookListing";

const AllBooks = () => {
  const { publicBooks } = useSelector((state) => state.bookInfo);

  // const [searchParams] = useSearchParams();
  // // console.log(searchParams, setSearchParams);
  // const search = searchParams.get("query")?.toLowerCase() || "";
  // // console.log(search);

  // filtering the books
  // const filteredBooks = publicBooks.filter(
  //   (book) =>
  //     book.title.toLowerCase().includes(search) ||
  //     book.author.toLowerCase().includes(search)
  // );
  // // console.log(publicBooks);

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
      <BookListing bookList={publicBooks} />
    </Container>
  );
};

export default AllBooks;
