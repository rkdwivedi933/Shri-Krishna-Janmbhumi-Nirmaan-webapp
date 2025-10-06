import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Viewer",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Saved:", form);
    navigate("/users"); // redirect back
  };

  return (
    <div className="max-w-lg bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Add User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-blue-500"
          >
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UserForm;
