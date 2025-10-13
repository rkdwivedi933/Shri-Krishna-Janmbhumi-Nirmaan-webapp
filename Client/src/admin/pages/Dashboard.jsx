const Dashboard = () => {
return (
<div>
<h2 className="text-2xl font-bold mb-6">Dashboard</h2>


{/* Stats Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
<div className="bg-white text-black p-6 rounded-xl shadow">
<h3 className="text-lg font-semibold">Total Users</h3>
<p className="text-3xl font-bold mt-2">1,245</p>
</div>
<div className="bg-white text-black p-6 rounded-xl shadow">
<h3 className="text-lg font-semibold">Active Sessions</h3>
<p className="text-3xl font-bold mt-2">312</p>
</div>
<div className="bg-white text-black p-6 rounded-xl shadow">
<h3 className="text-lg font-semibold">Revenue</h3>
<p className="text-3xl font-bold mt-2">$4,560</p>
</div>
</div>


{/* Placeholder for charts */}
<div className="bg-white p-6 rounded-xl shadow h-64 flex items-center justify-center text-gray-500">
[Chart Component Coming Soon]
</div>
</div>
);
};


export default Dashboard;