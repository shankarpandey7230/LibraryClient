import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { TbLogin } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { logOutAPI } from "@services/authApi";
import { setUser } from "../../features/user/userSlice";
import { Button, Form, InputGroup } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { useState } from "react";
const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleOnLogOut = () => {
    logOutAPI();
    //Logout from frontend
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");

    dispatch(setUser({}));
    setTimeout(() => {
      navigate("/");
    }, 100);
  };
  const handleOnSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search?query=${encodeURIComponent(search)}`);
    setSearch("");
  };
  return (
    <Navbar expand="md" className="bg-dark text-white w-100" variant="dark">
      <Container className="p-2 mx-5">
        <Link to="/" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Logo"
            height="40"
            className="d-inline-block align-top rounded "
          />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex w-100 justify-content-between flex-column flex-md-row">
            <div></div>
            <Form
              className="my-2 my-md-0 w-50 w-md-40"
              onSubmit={handleOnSearch}
            >
              <InputGroup className="">
                <Form.Control
                  placeholder="Search your book"
                  aria-label="Search your book"
                  aria-describedby="basic-addon2"
                  name="search"
                  value={search}
                  onChange={(e) => {
                    // console.log("Input change:", e.target.value);
                    setSearch(e.target.value);
                  }}
                />
                <Button variant="secondary" type="submit">
                  <CiSearch />
                </Button>
              </InputGroup>
            </Form>
            <Nav className="">
              <Link className="nav-link" to="/">
                <FaHome />
                Home
              </Link>
              <Link className="nav-link" to="/all-books">
                <ImBooks />
                Books
              </Link>
              {user?._id ? (
                <>
                  <Link className="nav-link" to="/user">
                    <MdDashboard />
                    Dashboard
                  </Link>
                  <Nav.Link
                    as="span"
                    onClick={handleOnLogOut}
                    style={{ cursor: "pointer" }}
                  >
                    <FaSignOutAlt />
                    Sign Out
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/signup">
                    <FaSignInAlt />
                    SignUp
                  </Link>
                  <Link className="nav-link" to="/login">
                    <TbLogin />
                    SignIn
                  </Link>
                </>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
