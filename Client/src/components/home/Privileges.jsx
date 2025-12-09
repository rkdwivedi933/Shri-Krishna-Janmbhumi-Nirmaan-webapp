import React from "react";
import { motion } from "framer-motion";
import { Gift, BookOpen, FileCheck, Award, Sparkles } from "lucide-react";

const privileges = [
  {
    icon: Gift,
    title: "Receive Maha Prasadam",
    description: "Sanctified Maha Prasadam sent from Gupt Vrindavan Dham to your home - a divine gift of the Lord's mercy.",
    color: "from-purple-400 to-pink-400",
    bgColor: "bg-black-50",
    iconBg: "bg-gradient-to-br from-black-400 to-black-400"
  },
  {
    icon: BookOpen,
    title: "Special Gift of Spiritual Books",
    description: "Enrich your spiritual life with selected books full of timeless wisdom and bhakti.",
    color: "from-red-400 to-pink-400",
    bgColor: "bg-red-50",
    iconBg: "bg-gradient-to-br from-red-400 to-pink-400"
  },
  {
    icon: FileCheck,
    title: "80G Tax Benefit Certificate",
    description: "Receive tax benefits under Section 80G of the Income Tax Act on your valuable contribution.",
    color: "from-green-400 to-teal-400",
    bgColor: "bg-green-50",
    iconBg: "bg-gradient-to-br from-green-400 to-teal-400"
  },
  {
    icon: Award,
    title: "Digital Certificate of Contribution",
    description: "A beautiful, personalized digital certificate recognizing your generous support.",
    color: "from-yellow-400 to-orange-400",
    bgColor: "bg-yellow-50",
    iconBg: "bg-gradient-to-br from-yellow-400 to-orange-400"
  }
];

function DonorPrivilegesCards() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-purple-50 via-pink-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/30 blur-3xl rounded-full"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          className="inline-block mb-4"
        >
          <Sparkles className="w-12 h-12 text-purple-600 mx-auto" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
          Donor Privileges
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience divine blessings and exclusive benefits as a valued contributor
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {privileges.map((privilege, index) => {
          const Icon = privilege.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden border border-gray-100">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 ${privilege.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 inline-block"
                  >
                    <div className={`w-20 h-20 rounded-full ${privilege.iconBg} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {privilege.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {privilege.description}
                  </p>

                  {/* Decorative element */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className={`mt-6 h-1 bg-gradient-to-r ${privilege.color} rounded-full`}
                  ></motion.div>
                </div>

                {/* Corner decoration */}
                
              </div>

              {/* Floating badge */}
            
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
        className="text-center mt-16 relative z-10"
      >
        
       
      </motion.div>
    </section>
  );
}

export default DonorPrivilegesCards;