import React from "react";
import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white p-6">
                <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
                <nav className="flex flex-col space-y-4">
                    <Link to="/admin/collections" className="hover:text-gray-300">Collections</Link>
                    <Link to="/admin/beauty" className="hover:text-gray-300">Beauty Care</Link>
                    <Link to="/admin/orders" className="hover:text-gray-300">Orders</Link>
                    <button
                        onClick={() => {
                            localStorage.removeItem("token");
                            window.location.href = "/login";
                        }}
                        className="mt-6 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 bg-gray-100 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;
