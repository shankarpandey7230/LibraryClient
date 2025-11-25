import { fetchSinglePublicBookAction } from "@features/books/bookAction";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Row,
  Spinner,
  Tab,
  Tabs,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Star from "@components/star/Star";
import Reviews from "@components/reviews/Reviews";

const BookLandingPage = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  // const { publicBooks } = useSelector((state) => state.bookInfo);
  // const [book, setBook] = useState([]);

  const { selectedBook } = useSelector((state) => state.bookInfo);
  // const [book, setBook] = useState([]);
  // console.log(selectedBook);

  const dispatch = useDispatch();

  useEffect(() => {
    // first approach, locally
    // const selectedBook = publicBooks?.find((book) => book.slug === slug);
    // setBook(selectedBook);
    //second approach , fetch live from server
    const fetchBook = async () => {
      setLoading(true);
      await dispatch(fetchSinglePublicBookAction(slug));
      setLoading(false);
    };
    fetchBook();
  }, [dispatch, slug]);

  return (
    <Container className="page-container p-2 mx-5 mb-5">
      <Row className="my-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All Books
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{selectedBook?.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      {loading && (
        <Row className="text-center my -5 ">
          <Col>
            <Spinner animation="border" role="status" />
            <div className="mt-3 text-capitalize">
              Loading book details.. Please wait
            </div>
          </Col>
        </Row>
      )}
      {!loading && !selectedBook?._id && (
        <Row>
          <Col>
            <Alert variant="danger">
              Not available at the moment, please contact admin
            </Alert>
          </Col>
        </Row>
      )}
      {!loading && selectedBook?._id && (
        <>
          <Row>
            <Col md={4}>
              <div className="mb-4">
                <img
                  src={
                    import.meta.env.VITE_BASE_API_URL +
                    selectedBook?.imgUrl?.slice(6)
                  }
                  alt="Book"
                  style={{ width: "100%" }}
                />
              </div>
              {/* scrollable thumbails */}
              <div className="d-flex overflow-auto gap-2 py-2">
                {selectedBook?.imageList?.map((url) => {
                  return (
                    <img
                      key={url}
                      src={import.meta.env.VITE_BASE_API_URL + url.slice(6)}
                      width={"80px"}
                      className="img-thumbail"
                    />
                  );
                })}
              </div>
            </Col>
            <Col>
              <div className="h-100 d-flex flex-column justify-content-between">
                <div className="top">
                  <h1>{selectedBook?.title}</h1>
                  <div className="fw-bolder">
                    {selectedBook?.author}- {selectedBook?.year}
                  </div>
                  <div className="my-3 d-flex gap-2">
                    <span>{selectedBook?.genre}</span> |
                    <Star avgRating={2.5} totalReviews={24} />|
                  </div>
                  <div className="">
                    {selectedBook?.description.slice(0, 300)}...
                  </div>
                </div>
                <div className="bottom">
                  <hr />
                  <div className="d-grid">
                    <Button variant="dark">Add To The List</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="border py-3 mt-5 mb-5 rounded">
              <h3 className="margin-auto text-center ">More details</h3>
              <Tabs
                defaultActiveKey="details"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="details" title="Details">
                  {selectedBook.description}
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  <Reviews />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default BookLandingPage;
