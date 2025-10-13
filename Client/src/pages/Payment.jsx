import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Payment() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    pincode: "",
    amount: "",
    coverFee: false,
    receivePrasadam: false,
    transactionId: "",
  });

  const [message, setMessage] = useState("");
  const [paymentInfo, setPaymentInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/paymentInfo/getAll")
      .then((res) => res.json())
      .then((data) => setPaymentInfo(data))
      .catch((err) => console.error(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
      setMessage("❌ Please fill all required fields before donating.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/payment/insertPayment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        setMessage("✅ Donation submitted successfully!");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          date: "",
          pincode: "",
          amount: "",
          coverFee: false,
          receivePrasadam: false,
          transactionId: "",
        });
      } else {
        setMessage(result.message || "❌ Failed to submit donation.");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Server error. Please try later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-300 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left: Form */}
              <div className="space-y-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                />
                <div className="flex">
                  <span className="flex items-center px-3 border border-r-0 rounded-l-lg bg-gray-100 text-gray-600">
                    +91
                  </span>
                  <input
                    type="text"
                    name="phone"
                    placeholder="WhatsApp Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 border rounded-r-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="City Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount (₹)"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="text"
                  name="transactionId"
                  placeholder="Transaction ID"
                  value={formData.transactionId}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                />
                <div className="flex flex-col space-y-2 text-sm">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="coverFee"
                      checked={formData.coverFee}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span>Add ₹110 to cover transaction fees</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="receivePrasadam"
                      checked={formData.receivePrasadam}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span>Receive Maha Prasadam (India only)</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-2 rounded-lg mt-4"
                >
                  Donate Now
                </button>

                {message && (
                  <p className="text-sm font-semibold pt-2 text-center">{message}</p>
                )}
              </div>

              {/* Right: Admin Payment Info */}
              <div className="space-y-6 p-4 bg-indigo-50 rounded-2xl border border-indigo-200 overflow-auto max-h-[80vh]">
                {paymentInfo.map((info, i) => (
                  <div key={i} className="border p-4 rounded-lg bg-white">
                    {info.type === "UPI" && info.qrFile && (
                      <>
                        {info.qrFile.endsWith(".pdf") ? (
                          <a
                            href={`http://localhost:5001${info.qrFile}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-lg"
                          >
                            View QR PDF
                          </a>
                        ) : (
                          <img
                            src={`http://localhost:5001${info.qrFile}`}
                            alt="UPI QR"
                            className="w-60 h-60 mx-auto mb-2 object-contain"
                          />
                        )}
                        {info.upiId && (
                          <p className="text-sm text-black font-bold text-center">{info.upiId}</p>
                        )}
                      </>
                    )}
                    {info.type === "BANK" && (
                      <div className="space-y-1 text-sm text-gray-700">
                        {info.accountName && <p><strong>Account Name:</strong> {info.accountName}</p>}
                        {info.accountNumber && <p><strong>Account No:</strong> {info.accountNumber}</p>}
                        {info.bankName && <p><strong>Bank:</strong> {info.bankName}</p>}
                        {info.ifsc && <p><strong>IFSC:</strong> {info.ifsc}</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Payment;
