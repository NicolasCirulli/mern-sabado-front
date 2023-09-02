import React, { useEffect, useState, useRef } from "react";
import CardEvent from "../components/CardEvent";
import { getAllEvents } from "../services/eventService.js";
import { getAllCategories } from "../services/categoryService.js";
import {
  cargarEventos,
  filtrarEventos,
  cargarEventosAsync,
} from "../redux/actions/eventsActions.js";
import { useDispatch, useSelector } from "react-redux";
const Events = () => {
  const [categories, setCategories] = useState([]);

  const select = useRef(null);
  const inputBusqueda = useRef(null);

  const eventsStore = useSelector((store) => store.events);

  const dispatch = useDispatch();

  useEffect(() => {
    /* getAllEvents().then((eventos) => {
      dispatch(cargarEventos(eventos));
    });
    getAllCategories().then((res) =>
      setCategories(res.map((item) => item.category))
    ); */
    dispatch(cargarEventosAsync());
  }, []);

  const handleInput = () => {
    dispatch(filtrarEventos(select.current.value, inputBusqueda.current.value));
  };

  return (
    <div>
      <h2 className="text-center mb-2">Events</h2>
      <div className="d-flex flex-wrap gap-3 justify-center">
        <div className="col-10">
          <div className="mb-3">
            <div className="mb-3">
              <label className="form-label">Events</label>
              <select
                defaultValue="All"
                className="form-select form-select-lg"
                name=""
                id=""
                onInput={handleInput}
                ref={select}
              >
                <option value="All"> All </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="text"
              className="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder=""
              onInput={handleInput}
              ref={inputBusqueda}
            />
          </div>
        </div>
        {eventsStore.filteredEvents.map((item) => (
          <CardEvent key={item._id} event={item} />
        ))}
      </div>
    </div>
  );
};

export default Events;
