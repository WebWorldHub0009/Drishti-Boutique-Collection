import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
    const token = localStorage.getItem("token"); // ✅ Token check

    if (!token) {
        return <Navigate to="/login" replace />; // Agar login nahi hai to login pe bhej do
    }

    return children; // Agar login hai to andar jaane do
}
