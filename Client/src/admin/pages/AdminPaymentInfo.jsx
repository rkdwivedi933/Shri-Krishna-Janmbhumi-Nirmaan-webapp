import React, { useState } from "react";

export default function AdminPaymentInfo() {
  const [formData, setFormData] = useState({
    type: "UPI",
    qrFile: null, // file
    upiId: "",
    accountName: "",
    accountNumber: "",
    bankName: "",
    ifsc: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData((prev) => ({ ...prev, [name]: files[0] }));
    else setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (let key in formData) {
        if (formData[key]) data.append(key, formData[key]);
      }

      const res = await fetch("https://shri-krishna-janmbhumi-nirmaan-webapp-4.onrender.com/api/paymentInfo/createOrUpdate", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (res.ok) setMessage("✅ Payment info saved successfully!");
      else setMessage(result.message || "❌ Failed to save info");
    } catch (err) {
      console.error(err);
      setMessage("❌ Server error");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Payment Info</h2>

      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="border px-3 py-2 rounded w-full mb-4"
      >
        <option value="UPI">UPI</option>
        <option value="BANK">Bank</option>
      </select>

      {formData.type === "UPI" && (
        <>
          <input
            type="file"
            name="qrFile"
            accept="image/*,application/pdf"
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full mb-2"
          />
          <input
            type="text"
            name="upiId"
            placeholder="UPI ID"
            value={formData.upiId}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full mb-2"
          />
        </>
      )}

      {formData.type === "BANK" && (
        <>
          <input
            type="text"
            name="accountName"
            placeholder="Account Name"
            value={formData.accountName}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full mb-2"
          />
          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            value={formData.accountNumber}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full mb-2"
          />
          <input
            type="text"
            name="bankName"
            placeholder="Bank Name"
            value={formData.bankName}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full mb-2"
          />
          <input
            type="text"
            name="ifsc"
            placeholder="IFSC Code"
            value={formData.ifsc}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full mb-2"
          />
        </>
      )}

      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white px-4 py-2 rounded mt-4"
      >
        Save
      </button>

      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
