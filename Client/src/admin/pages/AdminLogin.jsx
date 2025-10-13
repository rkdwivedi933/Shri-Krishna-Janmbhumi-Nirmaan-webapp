import React, { useEffect, useState } from "react";

const AdminLogin = () => {
  const [logins, setLogins] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all login data from backend
  const fetchLogins = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/login/getAllLoginUsers`
      );

      const data = await res.json();
      console.log("Fetched logins:", data);

      // ✅ Backend returns { status: 1, users: [...] }
      if (Array.isArray(data.users)) {
        setLogins(data.users);
      } else {
        setLogins([]);
      }
    } catch (err) {
      console.error("Error fetching logins:", err);
      setLogins([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogins();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
          User Login Records
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading login data...</p>
        ) : logins.length === 0 ? (
          <p className="text-center text-gray-500">No login activity yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">Password</th>
                  <th className="py-2 px-4 border">Login Time</th>
                </tr>
              </thead>
              <tbody>
                {logins.map((login, index) => (
                  <tr
                    key={index}
                    className="text-center hover:bg-gray-50 transition"
                  >
                    <td className="py-2 px-4 border">{login.email}</td>
                    <td className="py-2 px-4 border">
                      {login.password ? "••••••" : "-"}
                    </td>
                    <td className="py-2 px-4 border">
                      {login.loginTime
                        ? new Date(login.loginTime).toLocaleString()
                        : login.time
                        ? new Date(login.time).toLocaleString()
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
