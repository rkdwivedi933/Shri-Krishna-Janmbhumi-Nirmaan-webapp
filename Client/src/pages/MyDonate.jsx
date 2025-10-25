import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import UserSidebar from "./UserSidebar";
import { Menu } from "lucide-react";

function MyDonate() {
  const [myDonations, setMyDonations] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Get user email from localStorage
  const userEmail = JSON.parse(localStorage.getItem("user"))?.email;

  useEffect(() => {
    if (!userEmail) return;

    axios
      .get(`https://shri-krishna-janmbhumi-nirmaan-webapp-4.onrender.com/api/payment/getAllPayments`)
      .then((res) => {
        // Filter donations by this user
        const filtered = res.data.filter((item) => item.email === userEmail);
        setMyDonations(filtered);
      })
      .catch(console.error);
  }, [userEmail]);

  return (
   <div className="min-h-screen flex flex-col bg-gray-50">
  <UserNavbar />
  <div className="flex flex-1">
    {/* Sidebar */}
    <UserSidebar />  {/* sidebar always visible on desktop, can add mobile toggle if needed */}

    {/* Main content */}
    <main className="flex-1 p-6 md:ml-64">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">
        My Donations
      </h2>

      {myDonations.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
            <thead className="bg-indigo-50 text-indigo-800">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Amount (₹)</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Pincode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {myDonations.map((d, i) => (
                <tr key={i} className="hover:bg-indigo-50 transition">
                  <td className="px-4 py-3">{d.fullName}</td>
                  <td className="px-4 py-3 font-semibold text-indigo-700">{d.amount}</td>
                  <td className="px-4 py-3">{new Date(d.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3">{d.pincode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 font-medium mt-6">No donations yet.</p>
      )}
    </main>
  </div>
</div>

  );
}

export default MyDonate;
