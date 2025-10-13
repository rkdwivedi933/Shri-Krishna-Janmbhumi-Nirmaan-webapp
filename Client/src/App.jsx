import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./components/Home";
import Payment from "./pages/Payment";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";


// Admin Layout + Pages
import AdminLayout from "./admin/layouts/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import AdminRegister from "./admin/pages/AdminRegister";
import AdminLogin from "./admin/pages/AdminLogin";
import UserDashboard from "./pages/UserDashboard";
import AdminUserProfile from "./admin/pages/AdminUserProfile";
import AdminUserPayment from "./admin/pages/AdminUserPayment";

import AdminPaymentInfo from "./admin/pages/AdminPaymentInfo";
import Donate from './pages/UserDonate'

function App() {
  return (
    <>
  
    
    <Routes>
      {/* 🌐 Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userDashboard" element={<UserDashboard/>} />
      <Route path="/userProfile" element={<UserProfile/>} />
      <Route path="/Donate" element={<Donate />} />

      {/* 🧭 Admin Layout (Navbar + Sidebar always visible) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register" element={<AdminRegister />} />
         <Route path="userProfile" element={<AdminUserProfile />} />
         <Route path="userPayment" element={<AdminUserPayment />} />
            <Route path="PaymentInfo" element={<AdminPaymentInfo />} />
        <Route path="login" element={<AdminLogin />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
