import { Home, Users, Settings, LogOut, UserPlus, LogIn, User, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <Home size={18} /> },
    { name: "Register User", path: "/admin/register", icon: <UserPlus size={18} /> },
    { name: "Login User", path: "/admin/login", icon: <LogIn size={18} /> },
    { name: "Users Profile", path: "/admin/userprofile", icon: <User size={18} /> },
    { name: "Users Payment", path: "/admin/userPayment", icon: <CreditCard size={18} /> },
    { name: "Payment Info", path: "/admin/paymentInfo", icon: <CreditCard size={18} /> },
    { name: "Users", path: "/admin/users", icon: <Users size={18} /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings size={18} /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="w-64 h-screen bg-blue-900 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        {navItems.map((item) => (
          <div
            key={item.name}
            onClick={() => navigate(item.path)}
            className="flex items-center gap-3 p-2 rounded-lg mb-2 hover:bg-gray-800 transition cursor-pointer"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 p-2 w-full rounded-lg hover:bg-gray-800 transition"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
