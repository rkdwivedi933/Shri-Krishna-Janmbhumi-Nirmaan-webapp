import React, { useEffect, useState } from "react";

const AdminUserProfile = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterDistrict, setFilterDistrict] = useState("");
  const [filterState, setFilterState] = useState("");

  // Fetch all users from backend
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/userprofile/all`);
      const json = await res.json();
      const usersArray = Array.isArray(json)
        ? json
        : Array.isArray(json.data)
        ? json.data
        : [];
      setUsers(usersArray);
      setFilteredUsers(usersArray);
    } catch (err) {
      console.error("Error fetching user profiles:", err);
      setUsers([]);
      setFilteredUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter & search logic
  useEffect(() => {
    let temp = [...users];

    if (searchQuery) {
      temp = temp.filter(
        (u) =>
          (u.fullName || "")
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          (u.email || "").toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterDistrict) {
      temp = temp.filter((u) => u.district === filterDistrict);
    }

    if (filterState) {
      temp = temp.filter((u) => u.state === filterState);
    }

    setFilteredUsers(temp);
  }, [searchQuery, filterDistrict, filterState, users]);

  // Unique districts & states for dropdowns
  const districts = [...new Set(users.map((u) => u.district).filter(Boolean))];
  const states = [...new Set(users.map((u) => u.state).filter(Boolean))];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          User Profiles
        </h1>

        {/* 🔹 Search & Filter Section */}
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

        {/* 🔹 User Grid */}
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

                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <p>
                    <strong>Phone:</strong> {user.phone || "-"}
                  </p>
                  <p>
                    <strong>Aadhaar:</strong> {user.adhar || "-"}
                  </p>
                  <p>
                    <strong>Address:</strong> {user.address || "-"}
                  </p>
                  <p>
                    <strong>Landmark:</strong> {user.landmark || "-"}
                  </p>
                  <p>
                    <strong>Pincode:</strong> {user.pincode || "-"}
                  </p>
                  <p>
                    <strong>District:</strong> {user.district || "-"}
                  </p>
                  <p>
                    <strong>State:</strong> {user.state || "-"}
                  </p>
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
