import React, { useState } from "react";
import UserNavbar from "../pages/UserNavbar";
import UserSidebar from "../pages/UserSidebar";

export default function UserDashboard() {
  const [active, setActive] = useState("Orders");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <UserNavbar />

      <div className="flex flex-1 mt-1 mb-1">
        {/* Reusable Sidebar */}
        <UserSidebar activePage={active} onMenuClick={setActive} />

        {/* Main Content */}
        <main className="flex-1 p-6 flex flex-col items-center justify-center">
          <div className="bg-yellow-300 w-full max-w-3xl rounded-lg shadow-md p-10 text-center">
            <h2 className="text-2xl font-semibold text-black mb-2">Orders</h2>
            <p className="text-gray-600">No orders yet</p>
            <a
              href="/shop"
              className="text-orange-600 font-medium mt-2 inline-block hover:underline"
            >
              Go to store to place an order.
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
