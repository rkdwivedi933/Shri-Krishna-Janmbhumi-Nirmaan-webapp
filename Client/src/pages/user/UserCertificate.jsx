import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Certificate() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/certificate/get");
      setCertificates(res.data);
    } catch (err) {
      console.error("❌ Error fetching certificates:", err);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>🎓 Generated Certificates</h2>

      {certificates.length === 0 ? (
        <p>No certificates found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <h4>{cert.name}</h4>

              {/* 👇 IMPORTANT: Correct image path */}
              <img
                src={`http://localhost:5001${cert.imagePath}`}
                alt="certificate"
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x200?text=Not+Found";
                }}
              />

              <p>{cert.course}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
