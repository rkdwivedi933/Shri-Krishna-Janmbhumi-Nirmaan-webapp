import React, { useEffect, useState } from "react";
import { Search, Loader2 } from "lucide-react";

export default function AdminUserPayment() {
  const [payments, setPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/payment/getAllPayments");
      const data = await res.json();
      setPayments(data);
      setFilteredPayments(data);
    } catch (error) {
      console.error("Error fetching payments:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Filter donations by name, phone, email, or transaction ID
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = payments.filter(
      (p) =>
        p.fullName?.toLowerCase().includes(value) ||
        p.phone?.toLowerCase().includes(value) ||
        p.email?.toLowerCase().includes(value) ||
        p.transactionId?.toLowerCase().includes(value)
    );
    setFilteredPayments(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-200 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl font-bold text-indigo-700">💰 User Donations</h1>

          <div className="relative mt-3 sm:mt-0">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, phone, email, or transaction ID..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border rounded-lg w-full sm:w-96 focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
              <p className="ml-3 text-indigo-600 font-medium">Loading donations...</p>
            </div>
          ) : filteredPayments.length > 0 ? (
            <table className="min-w-full text-sm text-gray-700">
              <thead className="bg-indigo-50 text-indigo-800 text-xs uppercase tracking-wide">
                <tr>
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Full Name</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Pincode</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Amount (₹)</th>
                  <th className="px-4 py-3 text-left">Transaction ID</th> {/* ✅ Added */}
                  <th className="px-4 py-3 text-left">Cover Fee</th>
                  <th className="px-4 py-3 text-left">Prasadam</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((p, index) => (
                  <tr
                    key={p._id || index}
                    className="border-t hover:bg-indigo-50 transition"
                  >
                    <td className="px-4 py-3 font-semibold text-gray-600">{index + 1}</td>
                    <td className="px-4 py-3">{p.fullName}</td>
                    <td className="px-4 py-3">{p.phone}</td>
                    <td className="px-4 py-3">{p.email}</td>
                    <td className="px-4 py-3">{p.pincode}</td>
                    <td className="px-4 py-3">{p.date ? new Date(p.date).toLocaleDateString() : "—"}</td>
                    <td className="px-4 py-3 font-semibold text-indigo-700">
                      {p.amount ? Number(p.amount).toLocaleString() : "—"}
                    </td>
                    <td className="px-4 py-3">{p.transactionId || "—"}</td> {/* ✅ Display Transaction ID */}
                    <td className="px-4 py-3">
                      {p.coverFee ? (
                        <span className="text-green-600 font-semibold">Yes</span>
                      ) : (
                        <span className="text-gray-400">No</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {p.receivePrasadam ? (
                        <span className="text-green-600 font-semibold">Yes</span>
                      ) : (
                        <span className="text-gray-400">No</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-16 text-gray-500 font-medium">
              No donations found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
