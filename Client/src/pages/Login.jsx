import React, { useState } from "react";
import { apiRequest } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login({ inline = true, onClose }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiRequest("/login/insertLogin", "POST", form);

      if (res.status === 1) {
        // ✅ Save token
        localStorage.setItem("token", res.token);

        // ✅ Save user info
        localStorage.setItem(
          "user",
          JSON.stringify({
            fullName: res.user.name || res.user.fullName || "User",
            email: res.user.email,
          })
        );

        if (onClose) onClose();

        // ✅ Redirect to dashboard/profile
        navigate("/userDashboard");
      } else {
        setError(res.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Login failed due to server error");
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4 text-gray-700">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-blue-600 hover:underline"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
}
