import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/Home.jsx";
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
import UserProfile from "./pages/user/UserProfile.jsx";

// Admin Layout + Pages
import AdminLayout from "./admin/layouts/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import AdminRegister from "./admin/pages/AdminRegister";
import AdminLogin from "./admin/pages/AdminLogin";
import UserDashboard from "./pages/user/UserDashboard.jsx";
import AdminUserProfile from "./admin/pages/AdminUserProfile";
import AdminUserPayment from "./admin/pages/AdminUserPayment";

import AdminPaymentInfo from "./admin/pages/AdminPaymentInfo";

import PublicPayment from "./pages/donate/PublicPayment.jsx";
import UserPaymentPage from "./pages/user/UserPaymentpage.jsx";
import MyDonate from "./pages/donate/MyDonate.jsx";
import UserCertificate from "./pages/user/UserCertificate.jsx";

function App() {
  return (
    <>
      <Routes>
        {/*  Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PublicPayment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/*  Dashboard Payment Page */}
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/usercPayment" element={<UserPaymentPage />} />
        <Route path="/myDonate" element={<MyDonate />} />
        <Route path="/myCertificate" element={<UserCertificate/>} />

        {/*  Admin Layout (Navbar + Sidebar always visible) */}
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
