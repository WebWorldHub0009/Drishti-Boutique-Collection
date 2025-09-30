// src/Pages/AdminOrders.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrls } from "../baseUrls";

function AdminOrders() {
    const [orders, setOrders] = useState([]);

    // Fetch orders from backend
    useEffect(() => {
        axios
            .get(`${baseUrls}/api/orders`)
            .then((res) => setOrders(res.data))
            .catch((err) => console.error("Error fetching orders:", err));
    }, []);

    // Delete order (optional: also delete from DB)
    const deleteOrder = async (id) => {
        try {
            await axios.delete(`${baseUrls}/api/orders/${id}`);
            setOrders(orders.filter((o) => o._id !== id));
        } catch (err) {
            console.error("Error deleting order:", err);
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-4">Manage Orders</h2>
            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Order ID</th>
                        <th className="border px-4 py-2">Customer</th>
                        <th className="border px-4 py-2">Phone</th>
                        <th className="border px-4 py-2">Product</th>
                        <th className="border px-4 py-2">Qty</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="border px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? (
                        orders.map((o) => (
                            <tr key={o._id}>
                                <td className="border px-4 py-2">{o._id}</td>
                                <td className="border px-4 py-2">{o.userName}</td>
                                <td className="border px-4 py-2">{o.userPhone}</td>
                                <td className="border px-4 py-2">{o.productTitle}</td>
                                <td className="border px-4 py-2">{o.quantity}</td>
                                <td className="border px-4 py-2">₹{o.price}</td>
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
                            <td colSpan="7" className="text-center py-4">
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
