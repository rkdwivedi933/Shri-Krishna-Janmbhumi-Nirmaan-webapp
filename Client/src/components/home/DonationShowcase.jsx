import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Bhojan from '../../assets/donateShowCase/bhojanSeva.avif';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';

export default function DonationShowcase() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const donations = [
    {
      id: 1,
      title: 'Square Feet Seva',
      image: "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww",
      size: 'large',
    },
    {
      id: 2,
      title: 'Anna Daan Seva',
      image: Bhojan,  // ✅ WORKING IMAGE
      size: 'small',
    },
    {
      id: 3,
      title: 'Cow Shed Seva',
      image: "https://images.unsplash.com/photo-1454179083322-198bb4daae41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNvd3xlbnwwfHwwfHx8MA%3D%3D",
      size: 'medium',
    },
    {
      id: 4,
      title: 'Gau Seva',
      image: "https://images.unsplash.com/photo-1636998980792-63f27ddea4e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvd3xlbnwwfHwwfHx8MA%3D%3D",
      size: 'small',
    },
    {
      id: 5,
      title: 'Temple Donation',
      image: "https://images.unsplash.com/photo-1724424982688-ad5f9dffd488?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFkaGElMjByYW5pfGVufDB8fDB8fHww",
      size: 'small',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const getCardSize = (size) => {
    switch(size) {
      case 'large': return 'lg:col-span-2 lg:row-span-2';
      case 'medium': return 'lg:row-span-2';
      default: return '';
    }
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >

        {/* Header */}
        <motion.div className="text-center mb-12" variants={cardVariants}>
          <motion.div
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            Popular Donations
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Transform lives with your contribution
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              towards Society.
            </span>
          </h1>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          variants={containerVariants}
        >
          {donations.map((donation) => (
            <motion.div
              key={donation.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${getCardSize(donation.size)}`}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(donation.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >

              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={donation.image}
                  alt={donation.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full min-h-[250px] flex flex-col justify-end p-6">
                <motion.div
                  animate={{ y: hoveredCard === donation.id ? -10 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 drop-shadow-lg">
                    {donation.title}
                  </h3>

                  <motion.div
                    className="flex items-center gap-2 text-white/90"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: hoveredCard === donation.id ? 1 : 0,
                      x: hoveredCard === donation.id ? 0 : -10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>

                {/* Floating Heart */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: hoveredCard === donation.id ? 1 : 0,
                    rotate: hoveredCard === donation.id ? 360 : 0
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </div>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
