import React, { useEffect, useState } from "react";
import { apiRequest } from "../api/api";

const UserCertificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCertificates = async () => {
    const userId = localStorage.getItem("userId"); // ✅ from login
    if (!userId) {
      setError("User ID missing. Please login again.");
      setLoading(false);
      console.error("❌ User ID missing");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest(
        `/certificate/user-certificates/${userId}`,
        "GET"
      );
      if (Array.isArray(data)) {
        setCertificates(data);
      } else if (data.data && Array.isArray(data.data)) {
        setCertificates(data.data);
      } else {
        setCertificates([]);
      }
    } catch (err) {
      console.error("❌ Error fetching certificates:", err);
      setError("Failed to fetch certificates");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading certificates...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (certificates.length === 0)
    return <p className="text-center mt-10">No certificates found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Your Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert._id}
            className="border rounded-lg p-4 shadow-sm bg-gray-50 hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-2">{cert.type?.toUpperCase()}</h2>
            <p className="text-sm text-gray-600 mb-2">{cert.fullName}</p>
            <p className="text-sm text-gray-600 mb-2">{cert.address}</p>
            <p className="text-sm text-gray-600 mb-2">{cert.phone}</p>

            <img
              src={`http://localhost:5001${cert.imagePath}`}
              alt={`Certificate - ${cert.type}`}
              className="w-full h-auto border mt-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCertificate;
