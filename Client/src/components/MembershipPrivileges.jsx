import { useEffect, useRef } from "react";
import testimonial1 from "../assets/testimonial1.png";
import member2 from "../assets/membership2.jpg";

const cards = [
  { img: testimonial1 },
  { img: member2 },
  { img: testimonial1 },
  { img: member2 },
  { img: testimonial1 },
  { img: member2 },
];

function MembershipPrivileges() {
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

    const interval = setInterval(scrollStep, 12); // slower + smoother
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 sm:px-10 lg:px-20 py-12 bg-gradient-to-b from-blue-50 to-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800">
          Membership Privileges
        </h2>
        <p className="mt-3 text-gray-600 text-base sm:text-lg">
         (Square Feet Campaign donations of ₹ 1.5L & above are eligible for Membership Privileges)
        </p>
      </div>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto overflow-y-hidden scroll-smooth [&::-webkit-scrollbar]:hidden scrollbar-none pb-4"
      >
        {[...cards, ...cards].map((card, idx) => (
          <div
            key={idx}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[420px] flex-shrink-0 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5"
          >
            <img
              src={card.img}
              alt={`testimonial-${idx}`}
              className="w-full h-[280px] object-cover rounded-2xl"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600 text-sm">
                "This service has been amazing for my career. Highly recommend
                it to everyone!"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MembershipPrivileges;
