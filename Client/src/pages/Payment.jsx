import React from "react";
import DonateButton from './DonateButton';
function Payment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-200 to-indigo-400 p-6 flex items-center justify-center bg-blue-800">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-6 lg:p-10">
        
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button className="px-6 py-2 rounded-l-xl bg-indigo-800 text-white font-medium">
            Indian Currency
          </button>
          <button className="px-6 py-2 rounded-r-xl bg-gray-200 text-gray-700 hover:bg-gray-300">
            Non-Indian Currency
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Form Section */}
          <div className="space-y-6">
            {/* Amount Section */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Number of Square Feet
                </label>
                <input
                  type="number"
                  defaultValue="3"
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Amount
                </label>
                <input
                  type="text"
                  defaultValue="₹5,400.00"
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Quick Select Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-indigo-100">
                51
              </button>
              <button className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-indigo-100">
                21
              </button>
              <button className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-indigo-100">
                11
              </button>
              <button className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-indigo-100">
                5
              </button>
              <button className="px-4 py-2 rounded-lg border bg-indigo-600 text-white">
                3
              </button>
              <button className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-indigo-100">
                1
              </button>
            </div>

            {/* User Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
              />
              <div className="flex">
                <span className="flex items-center px-3 border border-r-0 rounded-l-lg bg-gray-100">
                  🇮🇳 +91
                </span>
                <input
                  type="text"
                  placeholder="WhatsApp Number"
                  className="flex-1 border rounded-r-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="date"
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="City Pincode"
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 sm:col-span-2"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 rounded"
                />
                <span>
                  I will generously add <strong>Rs. 110</strong> to cover
                  transaction fees.
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 rounded"
                />
                <span>
                  I would like to receive Maha Prasadam (Only within India).
                </span>
                
              </label>
              <DonateButton/>
            </div>
          </div>

          {/* Right Payment Section */}
          <div className="space-y-6 bg-indigo-50 rounded-xl p-6">
            {/* UPI */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                For UPI & QR
              </h3>
              <div className="flex flex-col items-center">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=seva.augp@aubank"
                  alt="QR Code"
                  className="w-40 h-40 mb-3"
                />
                <p className="text-sm text-gray-600">seva.augp@aubank</p>
              </div>
            </div>

            {/* Bank Details */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                For Bank Transfer
              </h3>
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <strong>Account Name:</strong> Hare Krishna Movement Jaipur
                </p>
                <p>
                  <strong>Account Number:</strong> 677501700696
                </p>
                <p>
                  <strong>Bank Name:</strong> ICICI Bank
                </p>
                <p>
                  <strong>IFSC Code:</strong> ICIC0007299
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                (Kindly send us a screenshot for your seva entry)
              </p>
            </div>

            {/* Notes */}
            <div className="text-xs text-gray-600 space-y-1">
              <p>
                *80G available as per Income Tax Act 1961 and rules made there
                under.
              </p>
              <p>
                *By proceeding, you agree to our{" "}
                <a href="#" className="text-indigo-600 underline">
                  Terms & Conditions
                </a>{" "}
                &{" "}
                <a href="#" className="text-indigo-600 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Support */}
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-700 mb-2">For more information:</p>
              <div className="flex items-center gap-4 text-sm">
                <span>📞 919660071666</span>
                <span>✉️ dmt@hkmjaipur.org</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  Tax Benefits
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                  Assured
                </span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Paytm_logo.png"
                  className="h-6"
                  alt="Paytm"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Visa.svg"
                  className="h-6"
                  alt="Visa"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
