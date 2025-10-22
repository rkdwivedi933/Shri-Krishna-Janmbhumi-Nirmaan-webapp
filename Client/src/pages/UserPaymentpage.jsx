import React from 'react';
import UserNavbar from './UserNavbar';
import UserSidebar from './UserSidebar';
import Payment from './Payment';

function UserPaymentpage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar at the top */}
      <UserNavbar />

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md hidden md:block">
          <UserSidebar />
        </div>

        {/* Main payment section */}
        <main className="flex-1 p-6">
          <Payment />
        </main>
      </div>
    </div>
  );
}

export default UserPaymentpage;
