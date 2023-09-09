import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";
const NavbarMain = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  return (
    <nav className="flex gap-3 justify-end items-center py-3 px-5">
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
      <Link to="/events" className="btn btn-primary">
        Event
      </Link>
      <Link to="/categories" className="btn btn-primary">
        Categories
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

export default NavbarMain;
