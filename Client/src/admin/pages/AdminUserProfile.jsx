// src/admin/pages/AdminUserProfile.jsx
import React, { useEffect, useState } from "react";
import { apiRequest } from "../../api/api"; // Fixed import path

const AdminUserProfile = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDistrict, setFilterDistrict] = useState("");
  const [filterState, setFilterState] = useState("");

  // Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await apiRequest("/userprofile/all", "GET");
      const usersArray = Array.isArray(data)
        ? data
        : Array.isArray(data.data)
        ? data.data
        : [];
      setUsers(usersArray);
      setFilteredUsers(usersArray);
    } catch (err) {
      console.error("Error fetching users:", err);
      setUsers([]);
      setFilteredUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filtering
  useEffect(() => {
    let temp = [...users];
    if (searchQuery) {
      temp = temp.filter(
        (u) =>
          (u.fullName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
          (u.email || "").toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (filterDistrict) temp = temp.filter((u) => u.district === filterDistrict);
    if (filterState) temp = temp.filter((u) => u.state === filterState);
    setFilteredUsers(temp);
  }, [searchQuery, filterDistrict, filterState, users]);

  const districts = [...new Set(users.map((u) => u.district).filter(Boolean))];
  const states = [...new Set(users.map((u) => u.state).filter(Boolean))];

  // ✅ Modified: Send certificate using full user object
  const handleCertificate = async (user, type) => {
    if (!confirm(`Send ${type} certificate to ${user.fullName}?`)) return;

    try {
      // Send full user object
      const response = await apiRequest("/certificate/send-certificate", "POST", {
        user,
        type,
      });

      if (response && response.success) {
        alert(`✅ ${type} certificate sent to ${user.fullName}`);
      } else {
        alert(`❌ Error: ${response.message || "Failed to send certificate"}`);
      }
    } catch (err) {
      console.error("Error sending certificate:", err);
      alert("❌ Something went wrong while sending certificate");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          User Profiles (Admin Panel)
        </h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            className="border rounded-lg p-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-500 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="border rounded-lg p-2 w-full md:w-1/4 focus:ring-2 focus:ring-blue-500 outline-none"
            value={filterDistrict}
            onChange={(e) => setFilterDistrict(e.target.value)}
          >
            <option value="">All Districts</option>
            {districts.map((d, idx) => (
              <option key={idx} value={d}>
                {d}
              </option>
            ))}
          </select>

          <select
            className="border rounded-lg p-2 w-full md:w-1/4 focus:ring-2 focus:ring-blue-500 outline-none"
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
          >
            <option value="">All States</option>
            {states.map((s, idx) => (
              <option key={idx} value={s}>
                {s}
              </option>
            ))}
          </select>

          <button
            onClick={fetchUsers}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Refresh
          </button>
        </div>

        {/* User Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading profiles...</p>
        ) : filteredUsers.length === 0 ? (
          <p className="text-center text-gray-500">No profiles found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredUsers.map((user, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 shadow-sm bg-gray-50 hover:shadow-md transition"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={
                      user.profilePic ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover mb-4 border"
                  />
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    {user.fullName || "-"}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{user.email || "-"}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-3">
                  <p><strong>Phone:</strong> {user.phone || "-"}</p>
                  <p><strong>Address:</strong> {user.address || "-"}</p>
                  <p><strong>District:</strong> {user.district || "-"}</p>
                  <p><strong>State:</strong> {user.state || "-"}</p>
                </div>

                {/* Certificate Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  <button
                    onClick={() => handleCertificate(user, "joining")}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Joining
                  </button>
                  <button
                    onClick={() => handleCertificate(user, "appreciation")}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Appreciation
                  </button>
                  <button
                    onClick={() => handleCertificate(user, "donation")}
                    className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
                  >
                    Donation
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUserProfile;
