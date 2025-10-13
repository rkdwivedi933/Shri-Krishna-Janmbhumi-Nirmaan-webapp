import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import UserSidebar from "../pages/UserSidebar";

export default function UserProfile() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    adhar: "",
    address: "",
    landmark: "",
    pincode: "",
    district: "",
    state: "",
    profilePic: "",
  });

  const [active, setActive] = useState("Update Profile");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
      setUser((prev) => ({
        ...prev,
        fullName: savedUser.fullName || "",
        email: savedUser.email || "",
      }));

      if (savedUser.email) fetchUserProfile(savedUser.email);
    }
  }, []);

  const fetchUserProfile = async (email) => {
    try {
      setLoading(true);
      const encodedEmail = encodeURIComponent(email);
      const res = await axios.get(
        `http://localhost:5001/api/userprofile/${encodedEmail}`
      );

      if (res.data.success) setUser(res.data.data);
    } catch (err) {
      // Agar profile nahi milti (404), silently ignore karo
      if (err.response && err.response.status === 404) {
        console.warn("No existing profile found. User can create one.");
      } else {
        console.error("❌ Error fetching profile:", err.message);
        alert("Failed to fetch profile. Check console for details.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5001/api/userprofile/save",
        user
      );
      if (res.data.success) {
        alert("✅ Profile saved successfully!");
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setUser(res.data.data);
      } else {
        alert("⚠️ Something went wrong!");
      }
    } catch (err) {
      console.error("❌ Error saving profile:", err.message);
      alert("Server error! Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <UserNavbar />
      <div className="flex flex-1">
        <UserSidebar activePage={active} onMenuClick={setActive} />

        <main className="flex-1 p-6 flex flex-col items-center justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-5xl border border-gray-200">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-blue-900">
              ✨ Your Profile
            </h2>

            {loading ? (
              <div className="text-center text-blue-700 font-semibold">
                ⏳ Loading...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col items-center bg-blue-50 rounded-xl p-6 shadow-inner relative">
                  <img
                    src={
                      user.profilePic ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt="Profile"
                    className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-lg object-cover"
                  />
                  <label
                    htmlFor="profileUpload"
                    className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-2 px-4 rounded-full cursor-pointer shadow-md transition"
                  >
                    Upload Photo
                  </label>
                  <input
                    type="file"
                    id="profileUpload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-blue-900">
                    {user.fullName || "Your Name"}
                  </h3>
                  <p className="text-gray-500 mt-1">{user.email || "you@example.com"}</p>
                </div>

                <div className="space-y-4">
                  {[
                    "fullName",
                    "email",
                    "phone",
                    "adhar",
                    "address",
                    "landmark",
                    "pincode",
                    "district",
                    "state",
                  ].map((field) => (
                    <div key={field}>
                      <label className="block text-gray-700 font-medium mb-1 capitalize">
                        {field === "adhar" ? "Aadhaar Number" : field}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={user[field]}
                        onChange={handleChange}
                        readOnly={field === "fullName" || field === "email"}
                        className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none ${
                          field === "fullName" || field === "email"
                            ? "bg-gray-200 cursor-not-allowed"
                            : ""
                        }`}
                        placeholder={`Enter your ${field}`}
                      />
                    </div>
                  ))}
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                  >
                    💾 {loading ? "Saving..." : "Save Profile"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
