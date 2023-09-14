import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { LINKS_NAVBAR } from "../routes/links";
const asd = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  return (
    <nav className="flex gap-3 justify-end items-center py-3 px-5">
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
      <Link to="/events" className="btn btn-secondary">
        Event
      </Link>
      {user ? (
        <button className="btn btn-primary" onClick={() => dispatch(logout())}>
          {" "}
          Log out{" "}
        </button>
      ) : (
        <>
          <Link to="/signup" className="btn btn-primary">
            Sign UP
          </Link>
          <Link to="/signin" className="btn btn-primary">
            Sign In
          </Link>
        </>
      )}

      {/*  */}
    </nav>
  );
};

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarMain() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
      className="container"
    >
      <Container className="px-1">
        <Navbar.Brand>Amazing Events</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end w-100 pe-2">
            {LINKS_NAVBAR.map((link) => (
              <Nav.Link
                key={link.path}
                to={link.path}
                as={Link}
                className="sm:w-100 text-center"
              >
                {link.name}
              </Nav.Link>
            ))}
            <NavDropdown
              title="Account"
              id="basic-nav-dropdown"
              className="text-center"
            >
              <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign In</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
