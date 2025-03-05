import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaSignInAlt } from "react-icons/fa";
import { TbLogin } from "react-icons/tb";

const Header = () => {
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link to="/">
          <img src={logo} alt="logo" width="100px" className="p-" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link className="nav-link" to="/">
              <FiHome className="m-1" />
              Home
            </Link>
            <Link className="nav-link" to="/signin">
              <FaSignInAlt className="m-1" />
              SignIn
            </Link>
            <Link className="nav-link" to="/signup">
              <TbLogin className="m-1" />
              SignUp
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
