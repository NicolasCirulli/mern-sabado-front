import React from "react";
import { Link } from "react-router-dom";
const NavbarMain = () => {
  return (
    <nav className="flex gap-3 justify-end items-center py-3 px-5">
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
      <Link to="/events" className="btn btn-primary">
        Event
      </Link>
      {/*  */}
    </nav>
  );
};

export default NavbarMain;
