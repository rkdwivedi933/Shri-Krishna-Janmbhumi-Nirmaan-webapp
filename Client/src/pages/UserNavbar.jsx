import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.jpg';

export default function UserNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Logo"
          className="h-20 w-20 object-cover rounded-b-full shadow-lg"
        />
        <h1 className="text-xl font-semibold text-white text-center flex-1">
          श्रीकृष्ण जन्मभूमि संघर्ष न्यास
        </h1>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white px-6 py-3 shadow md:hidden">
          {/* Removed Shop & Orders */}
        </div>
      )}
    </header>
  );
}
