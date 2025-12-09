import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Send, Instagram, Facebook, Twitter, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'नाम आवश्यक है';
    if (!formData.phone.trim()) newErrors.phone = 'फ़ोन नंबर आवश्यक है';
    if (!formData.email.trim()) newErrors.email = 'ईमेल आवश्यक है';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'वैध ईमेल दर्ज करें';
    }
    if (!formData.message.trim()) newErrors.message = 'संदेश आवश्यक है';
    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full mb-4 shadow-lg">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">हमसे संपर्क करें</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">
            Contact Form
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Fill out the form below, and one of our friendly team members will get back to you shortly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            
            {/* Social Media Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-orange-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                Follow Us on Social Media
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: Instagram, color: 'from-pink-500 to-orange-500', label: 'Instagram' },
                  { icon: Facebook, color: 'from-blue-600 to-blue-700', label: 'Facebook' },
                  { icon: Twitter, color: 'from-sky-400 to-blue-500', label: 'Twitter' },
                  { icon: MessageCircle, color: 'from-green-500 to-green-600', label: 'WhatsApp' }
                ].map((social, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`aspect-square bg-gradient-to-br ${social.color} text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    <social.icon className="w-6 h-6 relative z-10" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-6 shadow-xl border-2 border-yellow-400/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="bg-yellow-400/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-yellow-300" />
                </div>
                <h3 className="text-white font-semibold mb-2">You can email us here</h3>
                <a href="mailto:info@guptvrindavandham.org" className="text-yellow-300 hover:text-yellow-200 transition-colors font-medium break-all">
                  info@guptvrindavandham.org
                </a>
              </div>
            </motion.div>

            {/* Chat Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 shadow-xl border-2 border-green-400/50 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
              <div className="relative z-10">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Chat with Us</h3>
                <a href="tel:+919799999811" className="text-white text-xl font-bold hover:text-green-100 transition-colors">
                  +91-97999 99811
                </a>
              </div>
            </motion.div>

            {/* Office Hours Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-xl border-2 border-orange-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Office Hours</h3>
              </div>
              <p className="text-gray-700 text-lg font-medium">9:00 am - 6:00 pm</p>
              <p className="text-gray-500 text-sm mt-1">Monday to Saturday</p>
            </motion.div>

          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-200 relative overflow-hidden">
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full -mr-32 -mt-32 opacity-50" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full -ml-24 -mb-24 opacity-50" />

              <div className="relative z-10 space-y-6">
                
                {/* Success Message */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl flex items-center gap-3 shadow-lg"
                    >
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <p className="font-bold">संदेश सफलतापूर्वक भेजा गया!</p>
                        <p className="text-sm">हम जल्द ही आपसे संपर्क करेंगे।</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Name"
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        errors.name ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone No."
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email and Subject Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter Subject"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here..."
                    rows="5"
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-orange-700 hover:to-red-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 border-2 border-yellow-400/50 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>भेजा जा रहा है...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Sparkles className="w-5 h-5" />
                      </motion.div>
                    </>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-200">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Gupt Vrindavan Dham</h2>
                <p className="text-gray-600">Hare Krishna Marg, Jagaipura, Jaipur-302017</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-4 border-2 border-orange-200">
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center p-4">
                  <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-3" />
                  <p className="text-gray-600 font-medium">Map Integration Area</p>
                  <p className="text-sm text-gray-500 mt-1">Embed Google Maps here</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 border-2 border-yellow-400/50"
              >
                <MapPin className="w-5 h-5" />
                <span>Get Directions</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default ContactForm;