import { useEffect, useRef } from "react";
import testimonial1 from "../assets/testimonial1.png";


const cards = [
  { img: testimonial1 },
  { img: testimonial1 },
  { img: testimonial1 },
  { img: testimonial1 },
  { img: testimonial1 },
  { img: testimonial1 },
  { img: testimonial1 },
  { img: testimonial1 },
];

function Testimonial() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        scrollAmount += 1;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scrollStep, 10);
    return () => clearInterval(interval);
  }, []);

  return (

    
    <div className="mt-10 mb-10 w-full bg-amber-200 p-4 rounded-xl shadow-lg h-fit">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-6">
        Testimonials
      </h2>

      <div
        ref={scrollRef}
        className="flex space-x-4 sm:space-x-6 overflow-x-auto overflow-y-hidden scroll-smooth [&::-webkit-scrollbar]:hidden scrollbar-none"
      >
        {[...cards, ...cards].map((card, idx) => (
          <div
            key={idx}
            className=" flex-shrink-0 flex items-center justify-center bg-white rounded-2xl shadow-md p-2"
          >
            <img
              src={card.img}
              alt={`card-${idx}`}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
