import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building, Users, Flower2, Utensils, Milk, Soup, BookOpen, Heart, ArrowRight, Sparkles } from "lucide-react";

const categories = [
  { name: "Charitable Donations", active: true },
  { name: "Festival Donations", active: false },
  { name: "Bhandara Donations", active: false },
  { name: "Cultural Construction", active: false },
  { name: "Other Donations", active: false }
];

const donations = [
  {
    title: "Temple Construction",
    image: "https://media.istockphoto.com/id/493107912/photo/dubai-construction.webp?a=1&b=1&s=612x612&w=0&k=20&c=u7yIrxjEzozjt-ULCVvjIWX7c-eR5d1ghQubLBxccYk=",
    icon: Building,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Anna Daan Seva",
    image: "https://images.unsplash.com/photo-1677128912094-36d988ce198b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjBkb25hdGUlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    icon: Users,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Sudama Seva",
    image: "https://media.istockphoto.com/id/2030372982/photo/lovable-meeting-of-krishna-and-sudama-figurine.webp?a=1&b=1&s=612x612&w=0&k=20&c=aN2dpXc1WJ_cSjoagyNtG_MusQxxbPkNMIa-PGle8is=",
    icon: Flower2,

  },
  {
    title: "Poor Feeding",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop",
    icon: Utensils,
   
  },
  {
    title: "Gau Seva",
    image: "https://images.unsplash.com/photo-1454179083322-198bb4daae41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm18ZW58MHx8MHx8fDA%3D",
    icon: Milk,
    
  },
  {
    title: "Khichad Vitran",
    image: "data:image/jpeg;base64,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",
    icon: Soup,

  },
  {
    title: "Gita Daan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7gYP0wcyZP_MBc-j4hW05eEWyJuLgwHZ9g&s",
    icon: BookOpen,
   
  },
  {
    title: "General Donation",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format&fit=crop",
    icon: Heart,
   
  }
];

function OtherDonations() {
  const [activeCategory, setActiveCategory] = useState("Charitable Donations");

  return (
    <section className="py-16 px-6 bg-gradient-to-b  relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-10 h-10 text-purple-600 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Other Donations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Popular Donation delightfully celebrate the divine appearance
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
              className={`
                px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg
                ${activeCategory === category.name
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }
              `}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Donations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {donations.map((donation, index) => {
            const Icon = donation.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative cursor-pointer"
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${donation.image})` }}
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${donation.gradient} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                    
                    {/* Icon overlay */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg"
                    >
                      <Icon className="w-6 h-6 text-purple-600" />
                    </motion.div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="bg-white rounded-full p-4"
                      >
                        <ArrowRight className="w-6 h-6 text-purple-600" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 bg-white">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center justify-between">
                      {donation.title}
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ArrowRight className="w-5 h-5 text-purple-600" />
                      </motion.div>
                    </h3>
                    
                    {/* Progress indicator */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      className={`h-1 bg-gradient-to-r ${donation.gradient} rounded-full mt-3`}
                    ></motion.div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-white/20 rounded-br-full"></div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-10  left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1.5  rounded-full shadow-lg"
                >
                  Donate Now
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Choose a cause that resonates with your heart
          </p>
          
        </motion.div>
      </div>
    </section>
  );
}

export default OtherDonations;