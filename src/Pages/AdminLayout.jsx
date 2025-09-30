import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar for desktop */}
            <div className="hidden md:flex md:flex-col w-64 bg-gray-900 text-white p-6">
                <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
                <nav className="flex flex-col space-y-2">
                    <NavLink
                        to="/admin/collections"
                        className={({ isActive }) =>
                            `px - 3 py - 2 rounded - md transition ${
    isActive ? "bg-blue-600" : "hover:bg-gray-700"
} `
                        }
                    >
                        Collections
                    </NavLink>
                    <NavLink
                        to="/admin/beauty"
                        className={({ isActive }) =>
                            `px - 3 py - 2 rounded - md transition ${
    isActive ? "bg-blue-600" : "hover:bg-gray-700"
} `
                        }
                    >
                        Beauty Care
                    </NavLink>
                    <NavLink
                        to="/admin/orders"
                        className={({ isActive }) =>
                            `px - 3 py - 2 rounded - md transition ${
    isActive ? "bg-blue-600" : "hover:bg-gray-700"
} `
                        }
                    >
                        Orders
                    </NavLink>
                    <button
                        onClick={handleLogout}
                        className="mt-6 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white flex justify-between items-center px-4 py-3 shadow">
                <h2 className="text-xl font-bold">Admin</h2>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >
                    ☰
                </button>
            </div>

            {/* Sidebar for mobile */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="w-64 bg-gray-900 text-white p-6">
                        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
                        <nav className="flex flex-col space-y-2">
                            <NavLink
                                to="/admin/collections"
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `px - 3 py - 2 rounded - md transition ${
    isActive ? "bg-blue-600" : "hover:bg-gray-700"
} `
                                }
                            >
                                Collections
                            </NavLink>
                            <NavLink
                                to="/admin/beauty"
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `px - 3 py - 2 rounded - md transition ${
    isActive ? "bg-blue-600" : "hover:bg-gray-700"
} `
                                }
                            >
                                Beauty Care
                            </NavLink>
                            <NavLink
                                to="/admin/orders"
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `px - 3 py - 2 rounded - md transition ${
    isActive ? "bg-blue-600" : "hover:bg-gray-700"
} `
                                }
                            >
                                Orders
                            </NavLink>
                            <button
                                onClick={handleLogout}
                                className="mt-6 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </nav>
                    </div>
                    <div
                        className="flex-1 bg-black bg-opacity-50"
                        onClick={() => setIsOpen(false)}
                    />
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 p-6 md:ml-64 mt-12 md:mt-0 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;

