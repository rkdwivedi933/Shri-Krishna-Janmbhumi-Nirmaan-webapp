import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Payment from './pages/Payment';
import Register from './pages/Register';

// For Admin
import AdminLayout from "./admin/layouts/AdminLayout";
import Login from "./pages/Login";


function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/register" element={<Register />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Single Admin Route */}
      <Route path="/admin" element={<AdminLayout />} />
    </Routes>
  );
}

export default App;
