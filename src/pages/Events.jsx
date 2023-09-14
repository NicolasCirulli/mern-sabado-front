import React, { useEffect, useRef, useState } from "react";
import CardEvent from "../components/CardEvent";
import { filterEvents, getAllEvents } from "../redux/actions/eventsActions.js";
import { useDispatch, useSelector } from "react-redux";
const Events = () => {
  const [debounce, setDebounce] = useState(null);
  const [search, setSearch] = useState("");
  const { filteredEvents: events } = useSelector((store) => store.events);
  const inputSearch = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebounce(search);
    }, 250);
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [search]);
  useEffect(() => {
    if (debounce) {
      dispatch(filterEvents(debounce));
    }
  }, [debounce]);

  const handleInput = () => {
    setSearch(`?name=${inputSearch.current.value}`);
  };

  return (
    <>
      <div className="col-12 d-flex flex-column gap-3 items-center self-start py-4 min-h-full">
        <div className="bg-white col-10 col-md-8 col-xl-6 rounded flex items-center">
          <div className="py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-rose-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <span className="border-e-2 border-red-400 h-7"></span>
          <input
            onInput={handleInput}
            ref={inputSearch}
            type="text"
            placeholder="Search events"
            className="w-11/12 h-full outline-none px-2 rounded text-pink-800"
          />
        </div>
        <div className="col-10 flex flex-wrap gap-5 justify-center grow-1">
          {events.length > 0 ? (
            events.map((item) => <CardEvent key={item._id} event={item} />)
          ) : (
            <h2 className="text-white pt-[100px]">
              We couldn't find any events matching your search.
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
