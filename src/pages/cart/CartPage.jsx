import React, { useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "./CartModal";
import {
  removeBookFromCart,
  setEmptycart,
  setRecentBurrow,
} from "../../features/cart/cartSlice";
import { postBurrowApi } from "@features/cart/cartAPI";
import { toast } from "react-toastify";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cartInfo);
  const { user } = useSelector((state) => state.userInfo);
  const [showModal, setShowModal] = useState(false);
  //   console.log(cart);

  const handleOnBookRemove = (_id) => {
    // console.log(_id);
    dispatch(removeBookFromCart(_id));
  };
  const handleProceedToBurrow = () => {
    // console.log("Clicked");
    setShowModal(true);
  };
  const handleConfirmProceed = async () => {
    console.log("proceeded");
    setShowModal(false);
    // API to send user and the cart list for burrowing in database
    const bookArr = cart.map(({ _id, title, imgUrl, slug }) => {
      return {
        bookId: _id,
        bookTitle: title,
        thumbnail: imgUrl,
        bookSlug: slug,
      };
    });
    console.log(bookArr);
    const pending = postBurrowApi(bookArr);
    toast.promise(pending, {
      pending: "Please wait ..",
    });
    const { status, message, payload } = await pending;
    // console.log(result);
    toast[status](message);
    dispatch(setRecentBurrow(payload));
    // store it for thank you page the books
    // clear the cart state
    dispatch(setEmptycart());
    // thank you page
    navigate("/user/thank-you");
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="mx-5 p-2">
      <Row>
        <Col>
          <h1 className="py-5">My Burrowing List</h1>
          <div>
            <Table>
              <tbody>
                {cart.map((book) => {
                  return (
                    <tr key={book._id}>
                      <td>
                        <img
                          src={
                            import.meta.env.VITE_BASE_API_URL +
                            book.imgUrl.slice(6)
                          }
                          // src={imgUrl}
                          alt="Book"
                          style={{
                            width: "60px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td>{book.title}</td>
                      <td>15-04-2025</td>
                      <td>
                        <Button
                          variant="link"
                          onClick={() => handleOnBookRemove(book._id)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            {cart.length > 0 ? (
              <div className="text-end">
                {user._id ? (
                  <Button variant="secondary" onClick={handleProceedToBurrow}>
                    Proceed to Burrow
                  </Button>
                ) : (
                  <Link to="/login" state={{ from: "/cart" }}>
                    <Button variant="secondary">Login To Burrow</Button>
                  </Link>
                )}
              </div>
            ) : (
              <Alert variant="info">Please add the books into the cart</Alert>
            )}
          </div>
        </Col>
      </Row>
      <CartModal
        show={showModal}
        title="Confirm Proceed to Burrow"
        message="Are you sure you want to proceed to borrow the books?"
        onConfirm={handleConfirmProceed}
        onCancel={handleCloseModal}
      />
    </Container>
  );
};

export default CartPage;
