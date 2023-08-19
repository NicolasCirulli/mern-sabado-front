import React, { useEffect, useState, useRef } from "react";
import CardEvent from "../components/CardEvent";
import { getAllEvents } from "../services/eventService.js";
import { getAllCategories } from "../services/categoryService.js";

const Events = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  const select = useRef(null);
  const inputBusqueda = useRef(null);

  useEffect(() => {
    /*     function aux( response ){
        setData(response)
      }
      getAllEvents().then( aux ) // -> aux( response.data ) */

    getAllEvents().then(setData);
    getAllCategories().then((res) =>
      setCategories(res.map((item) => item.category))
    );
  }, []);

  const handleInput = () => {
    const category = select.current.value;
    const search = inputBusqueda.current.value;
    let query = `?`;
    if (category !== "All") {
      query += "category=" + category + "&";
    }
    if (search) {
      query += "name=" + search;
    }
    getAllEvents(query).then(setData);
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
                defaultValue="all"
                className="form-select form-select-lg"
                name=""
                id=""
                onInput={handleInput}
                ref={select}
              >
                <option defaultValue="all" selected>
                  {" "}
                  All{" "}
                </option>
                {categories.map((category) => (
                  <option key={category} defaultValue={category}>
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
        {data.map((item) => (
          <CardEvent key={item._id} event={item} />
        ))}
      </div>
    </div>
  );
};

export default Events;
