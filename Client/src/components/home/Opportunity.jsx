import React from "react";
import DonateButton from "../../pages/donate/DonateButton";
import { motion } from "framer-motion";

function Opportunity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-14 mb-16 px-4"
    >
      <div className="
        grid md:grid-cols-2 grid-cols-1 gap-12 
        bg-gradient-to-br 
        p-10 rounded-2xl 
        backdrop-blur-xl
      ">
        
        {/* LEFT — VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <div className="
            w-full relative rounded-xl overflow-hidden shadow-2xl
            hover:shadow-xl hover:scale-[1.015] transition-all duration-300
          " style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/L5OUDnsNjl4?si=ODxQKurY_F9qfSaY"
              title="Opportunity Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h1 className="
            text-3xl md:text-4xl font-extrabold 
            text-blue-900 leading-snug mb-4
          ">
            Once In A <span className="text-blue-600">Lifetime Opportunity</span>
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            This is not just a donation — this is your divine chance to leave a 
            spiritual footprint in the sacred land of <b>Gupt Vrindavan</b>.
            Being part of this service brings blessings, protection, and a 
            connection to something eternal.
          </p>

          <div className="
            bg-white p-6 rounded-xl border border-blue-200 
            shadow-md hover:shadow-lg transition-all duration-300
          ">
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              By supporting this mission, you contribute directly to the preservation 
              and beautification of a holy place visited by thousands of devotees.  
              Your seva today becomes a blessing for generations.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 flex justify-center md:justify-start"
          >
            <DonateButton />
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default Opportunity;
