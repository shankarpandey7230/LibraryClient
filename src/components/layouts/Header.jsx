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
import { Form, InputGroup } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
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
  return (
    <Navbar expand="md" className="bg-dark text-white w-100 nav" variant="dark">
      <Container>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            height="40"
            className="d-inline-block align-top rounded"
          />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex w-100 justify-content-between flex-column flex-md-row">
            <div></div>
            <Form className="my-2 my-md-0 w-50 w-md-40">
              <InputGroup className="">
                <Form.Control
                  placeholder="Search your book"
                  aria-label="Search your book"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  <CiSearch />
                </InputGroup.Text>
              </InputGroup>
            </Form>
            <Nav className="">
              <Link className="nav-link" to="/">
                <FaHome />
                Home
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
