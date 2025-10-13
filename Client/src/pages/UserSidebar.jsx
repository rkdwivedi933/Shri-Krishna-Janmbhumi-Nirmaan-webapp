import React, { useState, useEffect } from "react";
import { Home, ShoppingCart, User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UserSidebar({ activePage, onMenuClick }) {
  const [userName, setUserName] = useState("");

  // Load user name from localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.fullName) {
      setUserName(savedUser.fullName);
    }
  }, []);

  

  const menuItems = [
    { name: "Update Profile", icon: <User size={20} />, link: "/UserProfile" },
     { name: "Donate", icon: <User size={20} />, link: "/user/Payment"  },
    { name: "Orders", icon: <ShoppingCart size={20} />, link: "/orders" },
    { name: "Shop", icon: <Home size={20} />, link: "/shop" },
    { name: "Settings", icon: <Settings size={20} />, link: "/settings" },
    { name: "Sign Out", icon: <LogOut size={20} />, link: "/" },
  ];

  return (
    <aside className="mt-30 fixed left-0 top-0 h-screen w-64 bg-blue-900 text-white flex flex-col justify-between p-6 shadow-2xl z-50">
      {/* Top Section */}
      <div>
        <h2 className="text-xl font-bold mb-6 border-b border-white/30 pb-3">
          {userName ? `Welcome, ${userName}` : "Welcome!"}
        </h2>

        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 transition ${
                  activePage === item.name ? "bg-blue-800 font-semibold" : ""
                }`}
                onClick={() => onMenuClick && onMenuClick(item.name)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="text-xs text-center text-white/70 mt-6 border-t border-white/20 pt-3">
        © 2025 श्रीकृष्ण जन्मभूमि संघर्ष न्यास
      </div>
    </aside>
  );
}
