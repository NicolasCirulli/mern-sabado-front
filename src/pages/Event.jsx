import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cargarUnEvento, resetEvent } from "../redux/actions/eventsActions";
const Event = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cargarUnEvento(id));
    return () => dispatch(resetEvent());
  }, []);
  const eventStore = useSelector((store) => store.events.event);
  console.log(eventStore);
  return (
    <>
      {eventStore ? (
        <div>
          <h2> {eventStore.name} </h2>
          <img src={eventStore.image} alt="" />
        </div>
      ) : (
        <h2> No hay evento</h2>
      )}
    </>
  );
};

export default Event;
