import { useEffect } from "react";
import CarouselMain from "../components/CarouselMain";
import { useSelector, useDispatch } from "react-redux";
import { getAllEvents } from "../redux/actions/eventsActions";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector((store) => store.events.allEvents);

  useEffect(() => {
    if (events.length == 0) {
      dispatch(getAllEvents());
    }
  }, []);

  return (
    <div className="container flex flex-column gap-5">
      <section className="h-[25%] w-[100%] relative">
        <div className="col-10 absolute top-50 start-50 translate-middle bg-slate-200 rounded p-2 flex flex-column items-center">
          <h2 className="text-zinc-950 text-2xl text-center truncate col-10">
            Discover a world of exciting experiences and engagements! Click
            below to explore our upcoming events
          </h2>
          <Link to={"/events"} className="btn btn-secondary my-3 col-xl-4">
            Explore our upcoming events now!
          </Link>
        </div>
        <img
          className="h-[250px] object-cover w-100"
          src="https://billetto.dk/blog/wp-content/uploads//2019/11/hanny-naibaho-aWXVxy8BSzc-unsplash-1024x683.jpg"
          alt="banner_hero"
        />
      </section>
      <section className="container carousel-container">
        <CarouselMain data={events} />
      </section>
    </div>
  );
};

export default Home;
