import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { LINKS_NAVBAR } from "../routes/links";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const defaultImage =
  "https://img2.freepng.es/20181118/uxu/kisspng-clip-art-image-generic-drug-social-media-photograp-male-svg-png-icon-free-download-5-6821-online-5bf22649c9d890.4957056815425961698268.jpg";

function NavbarMain() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  const events = useSelector((store) => store.events.AllEvents);
  const handleClick = () => {
    dispatch(logout());
  };

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
              title={
                <div className="flex gap-3 justify-center items-center">
                  <img
                    className="w-10 rounded"
                    src={user ? user.image : defaultImage}
                  />
                  {user ? <span> {user.name} </span> : <span> account </span>}
                </div>
              }
              id="basic-nav-dropdown"
              className="text-center"
            >
              {!user ? (
                <>
                  <NavDropdown.Item to="/signup" as={Link}>
                    Sign Up
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/signin" as={Link}>
                    Sign In
                  </NavDropdown.Item>{" "}
                </>
              ) : (
                <NavDropdown.Item to="#" as={Link} onClick={handleClick}>
                  Log out
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
