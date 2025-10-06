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

    const res = await apiRequest("/login/insertLogin", "POST", form);

    if (res.status === 1) {
      // ✅ Save token & user info
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      if (onClose) onClose();

      // ✅ Redirect user to home/dashboard after login
      navigate("/");
    } else {
      setError(res.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center">
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
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-center text-sm mt-3">
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
