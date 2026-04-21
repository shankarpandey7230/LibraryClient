import { setEmptyRecentBurrow } from "@features/cart/cartSlice";
import React, { useEffect } from "react";
import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ThankyouCartPage = () => {
  const dispatch = useDispatch();

  const { recentBurrow } = useSelector((state) => state.cartInfo);
  console.log("recentBurrow:", recentBurrow);
  useEffect(() => {
    return () => {
      dispatch(setEmptyRecentBurrow());
    };
  }, [dispatch]);
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="success" className="mt-5">
            <h1 className="text-center">Thank You </h1>
          </Alert>

          <div className="text-center">
            <Link to="/user/my-borrow-history">
              Go to your account to view your burrow history
            </Link>
          </div>
          <div>
            <Table className="border mt-5">
              <tbody>
                {recentBurrow?.map((burrow) => {
                  return (
                    <tr key={burrow._id}>
                      <td>
                        <img
                          src={
                            import.meta.env.VITE_BASE_API_URL +
                            burrow.thumbnail.slice(6)
                          }
                          alt=""
                          width="60px"
                        />
                      </td>
                      <td>{burrow.title}</td>
                      <td>ID: {burrow._id}</td>
                      <td>Returning Date:{burrow.dueDate.slice(0, 10)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankyouCartPage;
