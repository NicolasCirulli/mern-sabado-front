import { Link } from "react-router-dom";

const CardEvent = ({ event }) => {
  return (
    <div className="w-11/12 md:max-w-xs bg-white rounded-lg overflow-hidden shadow-lg pb-[70px] md:pb-[20px]">
      <img className="w-full h-[50%]" src={event.image} alt="Article Image" />
      <div className="p-4 flex flex-col h-[50%]">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-lg font-semibold mb-2"> {event.name}</h2>
          <p className="text-gray-600 mb-2">
            <i className="fa-regular fa-calendar text-red-400"></i>
            {event.date}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm ps-1">
              <i className="fa-solid fa-dollar-sign text-red-400"> </i>
              {event.price}
            </span>
          </div>
          <button title="favorite" className="text-red-200 hover:text-red-600">
            <i className="fa fa-heart"></i>
          </button>
        </div>
        <div className="flex flex-col ">
          <p className="text-gray-700 my-4 flex-grow">
            {event.description.slice(0, 50)}...
          </p>
        </div>
        <Link
          to={`/events/${event._id}`}
          className="text-center w-7/12 self-center hover:bg-pink-900 hover:text-white border-2 border-pink-700 rounded-[.5rem] font-bold underline px-4 py-2 text-pink-700"
        >
          Show info
        </Link>
      </div>
    </div>
  );
};

export default CardEvent;
