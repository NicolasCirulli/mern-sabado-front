import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cargarCategoria,
  resetCategoria,
} from "../redux/actions/categoriesActions";
import CardEvent from "../components/CardEvent";
const Category = () => {
  const { idCategory } = useParams();
  const dispatch = useDispatch();
  const category = useSelector((store) => store.categories.category);
  console.log(category);
  useEffect(() => {
    dispatch(cargarCategoria(idCategory));
    return () => dispatch(resetCategoria());
  }, []);

  return (
    <div>
      {category.events ? (
        <div>
          <h2> Category : {category.category} </h2>
          <h2>Events : </h2>
          {category.events.map((event) => (
            <CardEvent key={event._id} event={event} />
          ))}
        </div>
      ) : (
        <h2> Sin resultados </h2>
      )}
    </div>
  );
};

export default Category;
