import React from "react";
import { Link } from "react-router-dom";

const CardCategory = ({ category }) => {
  return (
    <div className="card col-10 col-md-6 col-xl-3">
      {" "}
      <h2 className="card-title p-2"> {category.category} </h2>{" "}
      <h3 className="card-text p-2"> {category.description} </h3>
      <Link to={"/categories/" + category._id}> Details </Link>
    </div>
  );
};

export default CardCategory;
