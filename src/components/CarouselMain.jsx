import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
const carousel = [
  { start: 0, end: 4 },
  { start: 4, end: 8 },
  { start: 8, end: 12 },
];
function CarouselMain({ data }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(carousel.map(({ start, end }) => data.slice(start, end)));
  }, [data]);
  return (
    <Carousel className="bg-slate-200" data-bs-theme="dark">
      {items.length > 0
        ? items?.map((item, index) => {
            return (
              <Carousel.Item className="" key={index}>
                <div className="row justify-center gap-3 py-5">
                  {item.map((event) => (
                    <img
                      key={event._id}
                      src={event.image}
                      className="col-5 h-[200px] object-cover"
                    />
                  ))}
                </div>
              </Carousel.Item>
            );
          })
        : null}
    </Carousel>
  );
}

export default CarouselMain;
