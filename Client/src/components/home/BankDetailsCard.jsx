import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Phone, Mail } from 'lucide-react';

export default function BankDetailsCard() {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const bankDetails = [
    { label: 'Account Name:', value: 'SHRI KRISHNA JANM BHOOMI SANGHARSH NYAS', field: 'name' },
    { label: 'Account Number:', value: '42035420853', field: 'account' },
    { label: 'Bank Name:', value: 'State Bank Of India', field: 'bank' },
    { label: 'IFSC Code:', value: 'SBIN0012819', field: 'ifsc' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
      <motion.div
        className="w-full max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-start">
              {/* Left Section - Bank Details */}
              <motion.div className="space-y-5" variants={itemVariants}>
                <div>
                  <h2 className="text-2xl font-bold text-purple-600 mb-1">
                    Bank Account Details
                  </h2>
                  <p className="text-sm text-purple-500 font-medium">
                    For Bank Transfer
                  </p>
                </div>

                {/* Bank Details List */}
                <div className="space-y-4">
                  {bankDetails.map((detail, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="space-y-1"
                    >
                      <label className="text-xs text-gray-500 font-medium block">
                        {detail.label}
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium text-sm">{detail.value}</p>
                        </div>
                        <motion.button
                          onClick={() => copyToClipboard(detail.value, detail.field)}
                          className="p-1.5 text-gray-400 hover:text-purple-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Copy"
                        >
                          {copiedField === detail.field ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Center - QR Code */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
                <div className="space-y-3">
                  <motion.div
                    className="w-48 h-48 sm:w-56 sm:h-56 bg-white border-4 border-gray-200 rounded-lg p-3 shadow-lg"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* QR Code Pattern */}
                    <div className="w-full h-full bg-white relative overflow-hidden rounded">
                      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-[1px]">
                        {[...Array(144)].map((_, i) => {
                          const isCorner = (i < 36 && (i % 12 < 6)) || 
                                         (i < 36 && (i % 12 >= 6 && i < 6)) ||
                                         (i >= 108 && (i % 12 < 6));
                          const randomFill = Math.random() > 0.4;
                          return (
                            <motion.div
                              key={i}
                              className={`${(isCorner || randomFill) ? 'bg-black' : 'bg-white'}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: i * 0.003 }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* UPI ID */}
                  <div className="flex items-center gap-2 justify-center">
                    <p className="text-xs text-gray-600">UPI ID: donation.gupt@aubank</p>
                    <motion.button
                      onClick={() => copyToClipboard('donation.gupt@aubank', 'upi')}
                      className="p-1 text-gray-400 hover:text-purple-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {copiedField === 'upi' ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Right Section - Support */}
              <motion.div className="space-y-5" variants={itemVariants}>
                <div>
                  <h2 className="text-2xl font-bold text-purple-600 mb-3">
                    Support
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    For more information please contact:
                  </p>
                  
                  <div className="space-y-3">
                    {/* Phone */}
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-purple-600" />
                      </div>
                      <a 
                        href="tel:+919799990881"
                        className="text-sm text-gray-700 hover:text-purple-600 transition-colors font-medium"
                      >
                        +91-97999 90881
                      </a>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-purple-600" />
                      </div>
                      <a 
                        href="mailto:info@guptvrindavandham.org"
                        className="text-sm text-gray-700 hover:text-purple-600 transition-colors font-medium break-all"
                      >
                        info@guptvrindavandham.org
                      </a>
                    </motion.div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-start gap-3 flex-wrap">
                    <motion.div 
                      className="h-8 px-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-white font-bold text-xs">Paytm</span>
                    </motion.div>
                    <motion.div 
                      className="h-8 px-3 bg-white border border-gray-300 rounded flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-gray-700 font-bold text-xs">UPI</span>
                    </motion.div>
                    <motion.div 
                      className="h-8 px-3 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-white font-bold text-xs">MC</span>
                    </motion.div>
                    <motion.div 
                      className="h-8 px-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-white font-bold text-xs">VISA</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer Note */}
          <motion.div
            className="bg-black px-6 py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-white text-[10px] sm:text-xs text-center leading-relaxed">
              *80G available as per Income Tax Act 1961 and rules made there under. Tax Exemption Certificate Ref. No.: AAITH2325QF2028
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}