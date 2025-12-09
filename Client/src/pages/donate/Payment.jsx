import React, { useState, useEffect } from "react";
import {
  User,
  Phone,
  Mail,
  Calendar,
  MapPin,
  CreditCard,
  Hash,
  Heart,
  CheckCircle,
  AlertCircle,
  Loader,
  QrCode,
  Building2,
  Download,
  Gift,
  DollarSign
} from "lucide-react";
import Footer from "../../components/Footer";

function Payment() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: new Date().toISOString().split("T")[0],
    pincode: "",
    amount: "",
    coverFee: false,
    receivePrasadam: false,
    transactionId: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const quickAmounts = [500, 1000, 2500, 5000, 10000];

  useEffect(() => {
    fetch("http://localhost:5001/api/paymentInfo/getAll")
      .then((res) => res.json())
      .then((data) => {
        setPaymentInfo(data);
        setLoadingInfo(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingInfo(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (message) setMessage("");
  };

  const handleQuickAmount = (amount) => {
    setSelectedAmount(amount);
    setFormData((prev) => ({ ...prev, amount }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.amount ||
      !formData.transactionId.trim()
    ) {
      setMessage("Please fill all required fields before donating.");
      setMessageType("error");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5001/api/payment/insertPayment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        setMessage("Donation submitted successfully! Thank you for your generosity.");
        setMessageType("success");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          date: new Date().toISOString().split("T")[0],
          pincode: "",
          amount: "",
          coverFee: false,
          receivePrasadam: false,
          transactionId: "",
        });
        setSelectedAmount(null);
      } else {
        setMessage(result.message || "Failed to submit donation.");
        setMessageType("error");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error. Please try later.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Make a Donation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Support our mission to uplift society and preserve Vedic heritage. Every contribution makes a difference.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: Form Section */}
              <div className="p-8 lg:p-12 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Information</h2>

                {/* Success/Error Message */}
                {message && (
                  <div
                    className={`p-4 rounded-xl flex items-start gap-3 animate-slideIn ${
                      messageType === "success"
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    {messageType === "success" ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                    <p
                      className={`text-sm ${
                        messageType === "success" ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {message}
                    </p>
                  </div>
                )}

                {/* Full Name */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all"
                      disabled={loading}
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp Number *
                  </label>
                  <div className="flex">
                    <span className="flex items-center px-4 border-2 border-r-0 border-gray-200 rounded-l-xl bg-gray-50 text-gray-600 font-medium">
                      +91
                    </span>
                    <div className="relative flex-1">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="phone"
                        placeholder="98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-r-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all"
                        disabled={loading}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all"
                      disabled={loading}
                      required
                    />
                  </div>
                </div>

                {/* Date and Pincode Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City Pincode
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="pincode"
                        placeholder="302001"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all"
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Amount Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Amount *
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-3">
                    {quickAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => handleQuickAmount(amt)}
                        className={`py-3 px-2 rounded-xl font-semibold text-sm transition-all ${
                          selectedAmount === amt
                            ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        disabled={loading}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="amount"
                      placeholder="Enter custom amount"
                      value={formData.amount}
                      onChange={(e) => {
                        handleInputChange(e);
                        setSelectedAmount(null);
                      }}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all"
                      disabled={loading}
                      required
                    />
                  </div>
                </div>

                {/* Transaction ID */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Transaction ID *
                  </label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="transactionId"
                      placeholder="Enter transaction ID from payment"
                      value={formData.transactionId}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all"
                      disabled={loading}
                      required
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 p-4 bg-orange-50 rounded-xl">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="coverFee"
                      checked={formData.coverFee}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-orange-600 rounded focus:ring-2 focus:ring-orange-500 mt-0.5"
                      disabled={loading}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      <span className="font-semibold">Add ₹110</span> to cover transaction fees
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="receivePrasadam"
                      checked={formData.receivePrasadam}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-orange-600 rounded focus:ring-2 focus:ring-orange-500 mt-0.5"
                      disabled={loading}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 flex items-center gap-2">
                      <Gift className="w-4 h-4" />
                      <span>Receive <span className="font-semibold">Maha Prasadam</span> (India only)</span>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8"
                >
                  {loading ? (
                    <>
                      <Loader className="w-6 h-6 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Heart className="w-6 h-6" />
                      Complete Donation
                    </>
                  )}
                </button>
              </div>

              {/* Right: Payment Info Section */}
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 lg:p-12 border-l border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>
                
                {loadingInfo ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader className="w-8 h-8 animate-spin text-orange-600" />
                  </div>
                ) : paymentInfo.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p>No payment information available</p>
                  </div>
                ) : (
                  <div className="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                    {paymentInfo.map((info, i) => (
                      <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        {info.type === "UPI" && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-4">
                              <QrCode className="w-5 h-5 text-orange-600" />
                              <h3 className="font-bold text-lg text-gray-800">UPI Payment</h3>
                            </div>
                            {info.qrFile && (
                              <>
                                {info.qrFile.endsWith(".pdf") ? (
                                  <a
                                    href={`http://localhost:5001${info.qrFile}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 w-full bg-orange-600 text-white px-4 py-3 rounded-xl hover:bg-orange-700 transition-colors font-semibold"
                                  >
                                    <Download className="w-5 h-5" />
                                    View QR PDF
                                  </a>
                                ) : (
                                  <div className="bg-gray-50 rounded-xl p-4">
                                    <img
                                      src={`http://localhost:5001${info.qrFile}`}
                                      alt="UPI QR Code"
                                      className="w-64 h-64 mx-auto object-contain"
                                    />
                                  </div>
                                )}
                                {info.upiId && (
                                  <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-200">
                                    <p className="text-sm text-gray-600 mb-1">UPI ID</p>
                                    <p className="font-bold text-gray-800 break-all">{info.upiId}</p>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        )}
                        
                        {info.type === "BANK" && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 mb-4">
                              <Building2 className="w-5 h-5 text-orange-600" />
                              <h3 className="font-bold text-lg text-gray-800">Bank Transfer</h3>
                            </div>
                            {info.accountName && (
                              <div className="bg-orange-50 rounded-lg p-3">
                                <p className="text-xs text-gray-600 mb-1">Account Name</p>
                                <p className="font-semibold text-gray-800">{info.accountName}</p>
                              </div>
                            )}
                            {info.accountNumber && (
                              <div className="bg-orange-50 rounded-lg p-3">
                                <p className="text-xs text-gray-600 mb-1">Account Number</p>
                                <p className="font-semibold text-gray-800">{info.accountNumber}</p>
                              </div>
                            )}
                            {info.bankName && (
                              <div className="bg-orange-50 rounded-lg p-3">
                                <p className="text-xs text-gray-600 mb-1">Bank Name</p>
                                <p className="font-semibold text-gray-800">{info.bankName}</p>
                              </div>
                            )}
                            {info.ifsc && (
                              <div className="bg-orange-50 rounded-lg p-3">
                                <p className="text-xs text-gray-600 mb-1">IFSC Code</p>
                                <p className="font-semibold text-gray-800">{info.ifsc}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

    
      <Footer/>
    </div>
  );
}

export default Payment;