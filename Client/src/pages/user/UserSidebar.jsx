import React, { useState, useEffect } from "react";
import {
  Home,
  ShoppingCart,
  User,
  Settings,
  LogOut,
  Heart,
  CreditCard,
  Award,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function UserSidebar({ activePage }) {
  const [userName, setUserName] = useState("");
  const [open, setOpen] = useState(false);

  // Load user name
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser?.fullName) setUserName(savedUser.fullName);
  }, []);

  const menuItems = [
    { name: "Update Profile", icon: <User size={20} />, link: "/userProfile" },
    { name: "Donate", icon: <CreditCard size={20} />, link: "/userPayment" },
    { name: "My Donate", icon: <Heart size={20} />, link: "/myDonate" },
    { name: "My Certificate", icon: <Award size={20} />, link: "/myCertificate" },
    { name: "Orders", icon: <ShoppingCart size={20} />, link: "/orders" },
    { name: "Shop", icon: <Home size={20} />, link: "/shop" },
    { name: "Settings", icon: <Settings size={20} />, link: "/settings" },
    { name: "Sign Out", icon: <LogOut size={20} />, link: "/" },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden fixed top-4  left-4 z-[100] bg-blue-900 text-white p-2 rounded-lg shadow-lg"
        onClick={() => setOpen(true)}
      >
        <Menu size={26} />
      </button>

      {/* Background Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {(open || window.innerWidth >= 1024) && (
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: "spring", stiffness: 70 }}
            className="fixed left-0 top-0 h-screen w-64 bg-blue-900 text-white flex flex-col justify-between p-6 shadow-2xl z-[100]"
          >
            {/* Close Button (Mobile Only) */}
            <div className="lg:hidden flex justify-end mb-3">
              <button
                className="text-white"
                onClick={() => setOpen(false)}
              >
                <X size={26} />
              </button>
            </div>

            {/* Top Section */}
            <div>
              <h2 className="text-xl font-bold mb-6 border-b border-white/20 pb-3">
                {userName ? `Welcome, ${userName}` : "Welcome!"}
              </h2>

              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.link}
                      className={`flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 transition ${
                        activePage === item.name
                          ? "bg-blue-800 font-semibold"
                          : ""
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="text-xs text-center text-white/70 mt-6 border-t border-white/20 pt-3">
              © 2025 श्रीकृष्ण जन्मभूमि संघर्ष न्यास
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
