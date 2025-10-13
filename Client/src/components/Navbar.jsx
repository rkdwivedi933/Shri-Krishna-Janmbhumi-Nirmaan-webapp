import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { FiMenu, FiX, FiPhone, FiLogIn } from "react-icons/fi";
import DonateButton from "../pages/DonateButton";
import Login from "../pages/Login"; // ✅ import Login component

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = showLoginForm ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [showLoginForm]);

  const handleLoginClose = () => {
    setShowLoginForm(false);
    navigate("/"); // optional: go back to home after close
  };

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="Logo"
              className="h-20 w-20 object-cover rounded-b-full shadow-lg"
            />
            <span className="text-xl md:text-2xl font-bold tracking-wide">
              श्रीकृष्ण जन्मभूमि संघर्ष न्यास
            </span>
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <DonateButton />
            <button className="flex items-center bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500 transition duration-300 shadow-md">
              <FiPhone className="mr-2" /> +91-1234567890
            </button>
            <button
              onClick={() => setShowLoginForm(true)} // ✅ open login modal
              className="flex items-center bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 shadow-md"
              aria-label="Open login modal"
            >
              <FiLogIn className="mr-2" /> Login
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-amber-400">
          <DonateButton />
          <button className="flex items-center justify-center bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500 transition duration-300 shadow-md">
            <FiPhone className="mr-2" /> +91-1234567890
          </button>
          <button
            onClick={() => {
              setShowLoginForm(true);
              setIsOpen(false);
            }}
            className="flex items-center justify-center bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 shadow-md"
            aria-label="Open login modal"
          >
            <FiLogIn className="mr-2" /> Login
          </button>
        </div>
      )}

      {/* Popup Login Modal */}
      {showLoginForm && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-transparent"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleLoginClose();
          }}
        >
          <div className="shadow-2xl p-6 w-full max-w-md relative">
            <button
              onClick={handleLoginClose}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close login form"
            >
              ×
            </button>
            {/* ✅ Login Form Here */}
            <Login />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
