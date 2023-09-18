import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cargarEventoAsync } from "../redux/actions/eventsActions";

const Event = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const event = useSelector((store) => store.events.event);

  useEffect(() => {
    dispatch(cargarEventoAsync(id));
  }, []);
  return (
    <div>
      {event ? (
        <div>
          {" "}
          <h1> {event.name} </h1> <img src={event.image} />
        </div>
      ) : (
        <h2> No hay evento </h2>
      )}
    </div>
  );
};

export default Event;
