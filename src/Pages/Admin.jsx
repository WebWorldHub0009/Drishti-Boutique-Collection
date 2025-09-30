import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Admin() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        navigate("/login");
    };

    // Menu items ek array me rakhenge (easier to map)
    const menuItems = [
        { path: "/admin", label: "Dashboard" },
        { path: "/admin/collections", label: "Collections" },
        { path: "/admin/beauty", label: "Beauty Care" },
        { path: "/admin/orders", label: "Orders" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Top Navbar */}
            <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
                <div className="flex items-center gap-4">
                    {/* Mobile Sidebar Toggle */}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="md:hidden text-2xl"
                    >
                        {isSidebarOpen ? <FiX /> : <FiMenu />}
                    </button>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="flex flex-1 relative">
                {/* Sidebar */}
                <aside
                    className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-lg p-6 transform 
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0 transition-transform duration-300 z-50`}
                >
                    <h2 className="text-lg font-semibold mb-4">Menu</h2>
                    <ul className="space-y-3">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <button
                                    onClick={() => {
                                        navigate(item.path);
                                        setIsSidebarOpen(false); // mobile auto-close
                                    }}
                                    className={`w-full text-left px-3 py-2 rounded-md transition 
                                        ${location.pathname === item.path
                                            ? "bg-blue-600 text-white font-semibold"
                                            : "hover:bg-blue-100"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Overlay for mobile */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Dashboard Content */}
                <main className="flex-1 p-6">
                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h2 className="text-2xl font-bold mb-4">Welcome, Admin ✅</h2>
                        <p className="text-gray-600">
                            Use the sidebar to manage collections, beauty care products, and
                            orders.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Admin;
