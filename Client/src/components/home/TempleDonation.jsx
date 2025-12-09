import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Book, Sprout, Home, ChevronRight, Check } from 'lucide-react';

export default function TempleDonation() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState('general');
  const [showSuccess, setShowSuccess] = useState(false);

  const donationAmounts = [500, 1000, 2500, 5000, 10000];
  
  const causes = [
    { id: 'general', name: 'General Donation', icon: Heart, color: 'orange' },
    { id: 'feeding', name: 'Poor Feeding', icon: Users, color: 'blue' },
    { id: 'annadaan', name: 'Annadaan Seva', icon: Home, color: 'green' },
    { id: 'gauseva', name: 'Gau Seva', icon: Sprout, color: 'purple' },
    { id: 'education', name: 'Spiritual Education', icon: Book, color: 'pink' }
  ];

  const handleDonate = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white py-20 px-6"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto relative z-10 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Temple Donation Online</h1>
          <p className="text-xl opacity-90">Donate Online to ISKCON Temple</p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Gupt Vrindavan Dham</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Gupt Vrindavan Dham, the largest temple in Rajasthan, is not only a place of worship but a beacon of social service and cultural preservation. Located in the heart of Jaipur, Hare Krishna Movement Jaipur (HKM Jaipur) is dedicated to uplifting society through a wide range of spiritual and charitable initiatives. This magnificent 17-story temple, spanning 3.5 lakh square feet, is a symbol of our commitment to spreading the teachings of Lord Krishna, while promoting cultural values and serving humanity.
            </p>
            <p>
              With your generous support, we are able to continue the temple's construction and sustain multiple charitable programs such as Poor Feeding, Annadaan Seva, Khichadi Vitran, Gau Seva, and spiritual education. These initiatives help us provide food and care to the underprivileged, protect cows, and promote Vedic culture and values.
            </p>
            <p className="font-semibold text-orange-600">
              Join us in this divine mission to uplift society, preserve our Vedic heritage, and spread love and compassion. Every contribution is a step towards creating a better, more compassionate world.
            </p>
          </div>
        </motion.div>

       

        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3"
          >
            <Check className="w-6 h-6" />
            <span className="font-semibold">Thank you for your generous donation!</span>
          </motion.div>
        )}

        {/* Thank You Note */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-xl font-semibold text-gray-800">Thank you for your support!</p>
          <p className="text-gray-600 mt-2">Your contribution helps us serve humanity and preserve our sacred traditions.</p>
        </motion.div>
      </div>
    </div>
  );
}