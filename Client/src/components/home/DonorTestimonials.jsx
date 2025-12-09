import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Heart, Sparkles, X } from "lucide-react";

export default function DonorTestimonials() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  const openVideo = (url) => setVideoUrl(url);
  const closeVideo = () => setVideoUrl(null);

  return (
    <div className="min-h-full bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-4">

      {/* ------------------ YOUTUBE POPUP MODAL ------------------ */}
      <AnimatePresence>
        {videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-black rounded-xl shadow-2xl relative"
            >
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 text-white"
              >
                <X size={40} />
              </button>

              <iframe
                width="900"
                height="500"
                src={videoUrl}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ----------------------------------------------------------- */}

      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Donor Section */}
        <motion.div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* Video Card */}
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={() =>
                openVideo("https://www.youtube.com/embed/uwqwHciQDdA")
              }
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 opacity-90"></div>

                <div className="relative p-8 h-80 flex flex-col justify-between">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">
                      GUPT VRINDAVAN
                    </h3>
                    <h4 className="text-xl font-semibold text-yellow-200">
                      SPIRITUAL CENTRE
                    </h4>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl"
                    >
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                Hear What Our Donors Say..
              </h2>
              <p className="text-lg text-gray-600">
                Supporting this sacred project is a heartfelt expression of
                devotion — like offering a flower at the Lord’s lotus feet. In
                this video, our donors share how contributing to Gupt Vrindavan
                Dham has brought them spiritual joy, inner fulfillment, and a
                deeper connection with this divine mission.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Influencer Section */}
        <motion.div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* Text */}
            <motion.div
              className="space-y-4 order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                Voices That Inspire:
                <br />
                <span className="text-orange-600">Influencers Speak</span>
              </h2>
              <p className="text-lg text-gray-600">
                Authentic, heartfelt, and rooted in timeless spiritual values —
                this is the kind of initiative the world truly needs today.
                Watch as influencers share why supporting Gupt Vrindavan Dham
                touched their hearts and inspired them to spread the message.
              </p>
            </motion.div>

            {/* Video Card */}
            <motion.div
              className="relative group cursor-pointer order-1 lg:order-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={() =>
                openVideo(
                  "https://www.youtube.com/embed/RTZxdFdVdzE"
                )
              }
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 opacity-90"></div>

                <div className="relative h-80 flex items-center justify-center">
                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl"
                  >
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </motion.div>

                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <h3 className="text-2xl font-bold text-white">
                      GUPT VRINDAVAN DHAM
                    </h3>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
