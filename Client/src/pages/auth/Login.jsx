import React, { useState } from "react";
import { apiRequest } from "../../api/api";
import Logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Animation Variants (FINAL CLEAN VERSION)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await apiRequest("/login/insertLogin", "POST", {
        email,
        password,
      });

      if (res.status === 1) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("userId", res.user._id);
        localStorage.setItem(
          "user",
          JSON.stringify({
            fullName: res.user.name || res.user.fullName || "User",
            email: res.user.email,
          })
        );

        navigate("/userDashboard");
      } else {
        setError(res.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-full bg-[#cfc6ec] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative animation */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Login Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-linear-to-r from-blue-900 to-indigo-900 p-8 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "30px 30px",
              }}
            />

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg overflow-hidden"
            >
              <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
            </motion.div>

            <h1 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "serif" }}>
              श्रीकृष्ण जन्मभूमि संघर्ष न्यास
            </h1>
            <p className="text-blue-100 text-sm">Welcome back! Please login to continue</p>
          </div>

          {/* Form Section */}
          <div className="p-8 space-y-5">
            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 bg-red-50 text-red-600 p-3 rounded-lg border border-red-200"
                >
                  <AlertCircle size={18} />
                  <span className="text-sm">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none transition"
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </motion.div>

            {/* Forgot Password */}
            <motion.div variants={itemVariants} className="text-right">
              <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Forgot Password?
              </a>
            </motion.div>

            {/* Login Button */}
            <motion.button
              variants={itemVariants}
              disabled={isLoading}
              onClick={handleSubmit}
              className="w-full bg-linear-to-r from-blue-900 to-indigo-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <motion.div
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  Login
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                </>
              )}
            </motion.button>

            {/* Divider */}
            <motion.div variants={itemVariants} className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OR</span>
              </div>
            </motion.div>

            {/* Create Account */}
            <motion.a
              variants={itemVariants}
              href="/register"
              className="block w-full border-2 border-blue-900 text-blue-900 py-3 rounded-xl font-semibold text-center hover:bg-blue-50 transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create New Account
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="text-center mt-6 text-white/80 text-sm">
          <p>© 2025 श्रीकृष्ण जन्मभूमि संघर्ष न्यास</p>
          <p className="mt-1 text-white/60">All rights reserved</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
