import React, { useState, useEffect } from "react";
import UserNavbar from "./UserNavbar";
import UserSidebar from "./UserSidebar";
import UserPayment from "./UserPayment";
// import Payment from "./Payment";

export default function Donate() {
  const [active, setActive] = useState("Donate");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* ✅ Top Navbar */}
      <UserNavbar />

      {/* ✅ Sidebar + Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <UserSidebar activePage={active} onMenuClick={setActive} />

        {/* Main Content */}
        <main className="flex-1 p-6 flex flex-col items-center justify-center overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-5xl border border-gray-200">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-blue-900">
              🙏 Donate for Shri Krishna Janmbhumi
            </h2>

            {/* ✅ Payment Form */}
            {/* <UserPayment/> */}
          </div>
        </main>
      </div>
    </div>
  );
}
