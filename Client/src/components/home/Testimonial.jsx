import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star, Heart, User } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Supporting Gupt Vrindavan  Dham has been the most spiritually fulfilling experience of my life. The peace and devotion I feel when contributing to this sacred mission is indescribable.",
    date: "November 2024",
  },
  {
    name: "Priya Sharma",
    location: "Delhi, India",
    rating: 5,
    text: "The Anna Daan Seva program touches my heart deeply. Knowing that my contribution helps feed devotees and the needy fills me with joy and gratitude.",
    date: "October 2024",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "The Gau Seva initiative is truly remarkable. Protecting and caring for cows while supporting this divine mission brings immense spiritual satisfaction.",
    date: "December 2024",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad, Telangana",
    rating: 5,
    text: "Every square foot I sponsor feels like an offering at the Lord's lotus feet. This project has deepened my connection with spirituality and devotion.",
    date: "September 2024",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    rating: 5,
    text: "Being part of this sacred temple construction fills my heart with divine bliss. The transparency and dedication of the team is truly commendable.",
    date: "November 2024",
  },
  {
    name: "Anjali Gupta",
    location: "Bangalore, Karnataka",
    rating: 5,
    text: "The spiritual energy and devotion in this project is palpable. Contributing here has brought positive changes in my life and family.",
    date: "October 2024",
  },
  {
    name: "Rahul Mehta",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "Supporting the temple construction through Square Feet Seva has been a blessing. I feel connected to something much greater than myself.",
    date: "December 2024",
  },
  {
    name: "Kavita Iyer",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    text: "The Cow Shed Seva program is wonderful. Knowing that my donation helps protect and care for these sacred animals brings me peace.",
    date: "November 2024",
  },
];

function Testimonial() {
  const scrollRef = useRef(null);

  // AUTO SCROLL FIXED
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const step = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;

        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth / 2
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(step, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 mb-10 w-full relative overflow-hidden">
      <div className="relative bg-gradient-to-br from-amber-100 via-amber-200 to-orange-200 p-6 sm:p-7 md:p-8 rounded-3xl shadow-2xl">

        {/* BG Effects */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-300/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-300/30 blur-3xl rounded-full"></div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 mb-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              className="bg-white p-2.5 rounded-full shadow-lg"
            >
              <Quote className="w-5 h-5 text-orange-600" />
            </motion.div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900">
              Testimonials
            </h2>

            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            </motion.div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base font-medium flex items-center gap-1.5">
            <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
            <span>Hear from our blessed devotees and contributors</span>
          </p>
        </motion.div>

        {/* SCROLL AREA */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden pb-3"
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="min-h-[260px] flex-shrink-0"
              >
                {/* CARD */}
                <div className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 border border-white group-hover:border-orange-300 h-full flex flex-col w-[260px] sm:w-[300px]">

                 

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="h-px bg-gray-200 my-3"></div>

                  {/* PERSON INFO ONLY ONCE (FIXED) */}
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center shadow-md">
                      <User className="w-5 h-5 text-white" />
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600">{testimonial.location}</p>
                      <p className="text-[10px] text-orange-600 font-medium">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>

                  {/* bottom glow line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 rounded-b-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Edges Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-amber-200 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-orange-200 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* SWIPE HINT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-5 text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg border border-orange-200">
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <span className="text-orange-600 text-base">→</span>
            </motion.div>
            <span className="text-gray-700 font-medium text-xs sm:text-sm">
              Swipe to see more inspiring stories
            </span>
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <span className="text-orange-600 text-base">→</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Testimonial;
