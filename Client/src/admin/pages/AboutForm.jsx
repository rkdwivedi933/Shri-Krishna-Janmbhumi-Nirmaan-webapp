import React, { useEffect, useState } from "react";

const AboutList = () => {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all About data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/about/getAbout");
        const data = await res.json();
        setAboutData(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching about data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2>About Data (Admin Panel)</h2>

      {aboutData.length === 0 ? (
        <p>No About data found.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {aboutData.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt="about"
                      width="80"
                      height="80"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AboutList;
