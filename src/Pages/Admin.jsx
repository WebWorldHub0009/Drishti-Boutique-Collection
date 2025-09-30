import React from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Top Navbar */}
            <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </header>

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
                    <h2 className="text-lg font-semibold mb-4">Menu</h2>
                    <ul className="space-y-3">
                        <li>
                            <button
                                onClick={() => navigate("/admin")}
                                className="w-full text-left px-3 py-2 rounded-md hover:bg-blue-100 transition"
                            >
                                Dashboard
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => navigate("/admin/collections")}
                                className="w-full text-left px-3 py-2 rounded-md hover:bg-blue-100 transition"
                            >
                                Collections
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => navigate("/admin/beauty")}
                                className="w-full text-left px-3 py-2 rounded-md hover:bg-blue-100 transition"
                            >
                                Beauty Care
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => navigate("/admin/orders")}
                                className="w-full text-left px-3 py-2 rounded-md hover:bg-blue-100 transition"
                            >
                                Orders
                            </button>
                        </li>
                    </ul>
                </aside>

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
