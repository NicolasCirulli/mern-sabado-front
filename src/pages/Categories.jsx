import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cargarCategorias } from "../redux/actions/categoriesActions";
import CardCategory from "../components/CardCategory";
const Categories = () => {
  const dispatch = useDispatch();
  const categoriesStore = useSelector((store) => store.categories.categories);

  useEffect(() => {
    dispatch(cargarCategorias());
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap p-1 gap-5">
      {categoriesStore.map((category) => (
        <CardCategory key={category.category} category={category} />
      ))}
    </div>
  );
};

export default Categories;
