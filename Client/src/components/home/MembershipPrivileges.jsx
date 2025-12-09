import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";
import testimonial1 from "../../assets/testimonial1.png";
import member2 from "../../assets/membership2.jpg";

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

    const interval = setInterval(scrollStep, 12);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-6 sm:px-10 lg:px-20 py-16 bg-gradient-to-b from-blue-50 via-purple-50/30 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12 relative z-10"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Crown className="text-yellow-600 w-10 h-10" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-800 via-purple-700 to-blue-900 bg-clip-text text-transparent">
            Membership Privileges
          </h2>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Sparkles className="text-yellow-500 w-8 h-8" />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 px-6 py-3 rounded-full border-2 border-yellow-400/50 shadow-lg"
        >
          <p className="text-gray-700 font-semibold text-sm sm:text-base flex items-center gap-2 flex-wrap justify-center">
            <span className="text-orange-600">₹1.5L+</span>
            <span>Square Feet Campaign donations qualify for exclusive benefits</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Cards Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto overflow-y-hidden scroll-smooth [&::-webkit-scrollbar]:hidden scrollbar-none pb-6"
        >
          {[...cards, ...cards].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[420px] flex-shrink-0 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-purple-100 relative group"
            >
              {/* Premium badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 z-10">
                <Crown size={12} />
                <span>Premium</span>
              </div>

              {/* Image with overlay effect */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={card.img}
                  alt={`membership-${idx}`}
                  className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Premium Member Benefits
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Experience exclusive spiritual privileges, priority darshan access, and special blessings reserved for our distinguished contributors.
                </p>
                
                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    VIP Access
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                    Exclusive Events
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                    Special Blessings
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fade edges effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-center mt-6 text-sm text-gray-500 flex items-center justify-center gap-2"
      >
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.div>
        <span>Scroll to explore more privileges</span>
      </motion.div>
    </section>
  );
}

export default MembershipPrivileges;