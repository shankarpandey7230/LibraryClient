import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { TbLogin } from "react-icons/tb";
const Header = () => {
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
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
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <FaHome />
              Home
            </Link>
            <Link className="nav-link" to="/signup">
              <FaSignInAlt />
              SignUp
            </Link>
            <Link className="nav-link" to="/signin">
              <TbLogin />
              SignIn
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
