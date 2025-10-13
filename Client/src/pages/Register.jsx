import React, { useState } from "react";
import { apiRequest } from "../api/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "indian",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiRequest("/register/insertRegister", "POST", formData);
      alert(res.message || "Registration successful!");
      setShowPopup(false);
      navigate("/"); // Redirect after successful registration
    } catch (error) {
      console.error(error);
      alert("Registration failed!");
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    navigate("/"); // Redirect when X is clicked
  };

  if (!showPopup) return null;

  return (
    <>
      <Navbar />
      <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
        <div className="relative bg-white p-8 w-full max-w-md border border-gray-300 rounded-2xl">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-black"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-black"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-black"
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-black"
            >
              <option value="indian">Indian</option>
              <option value="foreign">Foreign</option>
            </select>
            <textarea
              name="message"
              placeholder="Message (optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-black"
              rows="3"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>

          {/* <p className="text-center text-sm mt-4 text-black">
            Already have an account?{" "}
            <a href="/login" className="text-blue-400 hover:underline">
              Login
            </a>
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Register;
