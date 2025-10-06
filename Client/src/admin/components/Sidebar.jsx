import { Link, useLocation } from "react-router-dom";
import { Home, Users, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home size={18} /> },
    { name: "Users", path: "/users", icon: <Users size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-2 rounded-lg mb-2 transition ${
              pathname === item.path
                ? "bg-gray-700"
                : "hover:bg-gray-800"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center gap-2 p-2 w-full rounded-lg hover:bg-gray-800 transition">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
