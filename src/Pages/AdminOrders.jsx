// src/Pages/AdminOrders.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrls } from "../baseUrls";

function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch orders
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get(`${baseUrls}/api/orders`);
                setOrders(res.data);
            } catch (err) {
                console.error("Error fetching orders:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    // ✅ Delete order
    const deleteOrder = async (id) => {
        if (!window.confirm("Are you sure you want to delete this order?")) return;
        try {
            await axios.delete(`${baseUrls}/api/orders/${id}`);
            setOrders(orders.filter((o) => o._id !== id));
        } catch (err) {
            console.error("Error deleting order:", err);
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Manage Orders</h2>
            <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        <th className="border px-4 py-2">Order ID</th>
                        <th className="border px-4 py-2">Customer</th>
                        <th className="border px-4 py-2">Phone</th>
                        <th className="border px-4 py-2">Product</th>
                        <th className="border px-4 py-2">Qty</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="8" className="text-center py-4 text-gray-500">
                                Loading orders...
                            </td>
                        </tr>
                    ) : orders.length > 0 ? (
                        orders.map((o) => (
                            <tr key={o._id} className="hover:bg-gray-50">
                                <td className="border px-4 py-2">{o._id}</td>
                                <td className="border px-4 py-2">{o.userName}</td>
                                <td className="border px-4 py-2">{o.userPhone}</td>
                                <td className="border px-4 py-2">{o.productTitle}</td>
                                <td className="border px-4 py-2">{o.quantity}</td>
                                <td className="border px-4 py-2">₹{o.price}</td>
                                <td className="border px-4 py-2">
                                    <span
                                        className={`px-2 py-1 rounded text-xs ${o.status === "Delivered"
                                                ? "bg-green-100 text-green-700"
                                                : o.status === "Cancelled"
                                                    ? "bg-red-100 text-red-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {o.status || "Pending"}
                                    </span>
                                </td>
                                <td className="border px-4 py-2">
                                    <button
                                        onClick={() => deleteOrder(o._id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center py-4 text-gray-500">
                                No orders yet
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AdminOrders;
