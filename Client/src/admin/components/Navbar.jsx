const Navbar = () => {
return (
<div className="h-16 bg-blue-900 shadow flex items-center justify-between px-6">
<h1 className="text-xl font-semibold">Welcome, Admin 👋</h1>
<div className="flex items-center gap-4">
<img
src="https://i.pravatar.cc/40"
alt="profile"
className="w-10 h-10 rounded-full border"
/>
</div>
</div>
);
};


export default Navbar;