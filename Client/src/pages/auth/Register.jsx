import React, { useState } from "react";
import { apiRequest } from "../../api/api";
import Navbar from "../../components/Navbar";
import Logo from "../../assets/logo.jpg"
import { useNavigate } from "react-router-dom";

import {
  X,
  User,
  Mail,
  Lock,
  Phone,
  Globe,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // ------------------- FORM HANDLERS -------------------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await apiRequest("/register/insertRegister", "POST", formData);

      if (res.status === 1) {
        setSuccess(true);

        setTimeout(() => {
          setShowPopup(false);
          navigate("/login");
        }, 1500);
      } else {
        setError(res.message || "Registration failed!");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    navigate("/");
  };

  // ------------------- ANIMATIONS -------------------
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, scale: 0.8, y: 50 },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.06, duration: 0.3 },
    }),
  };

  if (!showPopup) return null;

  // ------------------- JSX RETURN -------------------
  return (
    <>
      {/* <Navbar /> */}

      <AnimatePresence>
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-blue-900 to-indigo-900 p-6 relative text-center">
              <motion.button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>

           <motion.div
                         initial={{ scale: 0, rotate: -180 }}
                         animate={{ scale: 1, rotate: 0 }}
                         transition={{ duration: 0.6, type: "spring" }}
                         className="w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg overflow-hidden"
                       >
                         <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
                       </motion.div>


              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "serif" }}>
                श्रीकृष्ण जन्मभूमि संघर्ष न्यास
              </h2>
              <p className="text-blue-100 text-sm">Create your account</p>
            </div>

            {/* Body */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {/* Success Message */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-4 flex items-center gap-3 bg-green-50 text-green-700 p-4 rounded-xl border border-green-200"
                  >
                    <CheckCircle size={24} />
                    <div>
                      <p className="font-semibold">Registration Successful!</p>
                      <p className="text-sm">Redirecting to login…</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-4 flex items-center gap-2 bg-red-50 text-red-600 p-3 rounded-xl border border-red-200"
                  >
                    <AlertCircle size={20} />
                    <span className="text-sm">{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* FORM FIELDS */}
              {!success && (
                <div className="space-y-4">
                  {/* Name */}
                  <motion.div custom={0} initial="hidden" animate="visible" variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full pl-11 pr-4 py-3 border-2 rounded-xl border-gray-200 focus:border-blue-500"
                      />
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div custom={1} initial="hidden" animate="visible" variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full pl-11 pr-4 py-3 border-2 rounded-xl border-gray-200 focus:border-blue-500"
                      />
                    </div>
                  </motion.div>

                  {/* Password */}
                  <motion.div custom={2} initial="hidden" animate="visible" variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                        className="w-full pl-11 pr-4 py-3 border-2 rounded-xl border-gray-200 focus:border-blue-500"
                      />
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div custom={3} initial="hidden" animate="visible" variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full pl-11 pr-4 py-3 border-2 rounded-xl border-gray-200 focus:border-blue-500"
                      />
                    </div>
                  </motion.div>

                  {/* Role */}
                  <motion.div custom={4} initial="hidden" animate="visible" variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border-2 rounded-xl border-gray-200 focus:border-blue-500 cursor-pointer"
                      >
                        <option value="indian">Indian</option>
                        <option value="foreign">Foreign</option>
                      </select>
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div custom={5} initial="hidden" animate="visible" variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write a message…"
                        rows={3}
                        className="w-full pl-11 pr-4 py-3 border-2 rounded-xl border-gray-200 focus:border-blue-500 resize-none"
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    custom={6}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-linear-to-r from-blue-900 to-indigo-900 text-white py-3 rounded-xl mt-6 font-semibold flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      />
                    ) : (
                      <>
                        Create Account
                        <ArrowRight size={20} />
                      </>
                    )}
                  </motion.button>

                  {/* Login Link */}
                  <motion.p
                    custom={7}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    className="text-center text-sm text-gray-600 mt-3"
                  >
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 font-semibold">
                      Login here
                    </a>
                  </motion.p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Register;
