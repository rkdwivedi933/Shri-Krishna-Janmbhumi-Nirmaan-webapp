import { useState } from "react";

const Settings = () => {
  const [form, setForm] = useState({
    siteName: "My Admin Panel",
    email: "admin@example.com",
    theme: "light",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Settings Saved:", form);
    alert("Settings updated!");
  };

  return (
    <div className="max-w-xl bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Site Name</label>
          <input
            type="text"
            name="siteName"
            value={form.siteName}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Admin Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Theme</label>
          <select
            name="theme"
            value={form.theme}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-blue-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
