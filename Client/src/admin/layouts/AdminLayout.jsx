import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

// import all pages
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import UserForm from "../pages/UserForm";
import Settings from "../pages/Settings";
import AboutForm from "../pages/AboutForm";


const AdminLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-gray-100 min-h-screen space-y-10">
          {/* Sab pages ek sath render kar rahe hai */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <Dashboard />
          </section>


          <section>
            <h2 className="text-2xl font-bold mb-4">Users</h2>
            <Users />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Add New User</h2>
            <UserForm />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <Settings />
          </section>
           <section>
            <h2 className="text-2xl font-bold mb-4">About Form</h2>
            <AboutForm />
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
