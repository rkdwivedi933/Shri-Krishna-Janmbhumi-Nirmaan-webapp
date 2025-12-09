import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../assets/logo.jpg';

export default function UserNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-blue-900 shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50"
    >
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          src={logo}
          alt="Logo"
          className="h-20 w-20 object-cover rounded-full shadow-lg"
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-semibold text-white text-center flex-1"
        >
          श्रीकृष्ण जन्मभूमि संघर्ष न्यास
        </motion.h1>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-white px-6 py-3 shadow md:hidden"
          >
            {/* Removed Shop & Orders */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
