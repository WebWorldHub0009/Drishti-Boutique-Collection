import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrls } from "../baseUrls";

function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const res = await axios.put(
                `${baseUrls}/api/auth/change-password`,
                { oldPassword, newPassword },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setMsg("✅ Password changed successfully!");
            setTimeout(() => {
                navigate("/admin"); // redirect after success
            }, 1500);
        } catch (err) {
            setMsg(err.response?.data?.message || "❌ Something went wrong!");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleChangePassword} className="p-6 border rounded w-96">
                <h2 className="text-xl mb-4">Change Password</h2>
                {msg && <p className={msg.includes("✅") ? "text-green-600" : "text-red-600"}>{msg}</p>}

                <input
                    type="password"
                    placeholder="Old Password"
                    className="w-full border p-2 mb-2"
                    onChange={(e) => setOldPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="New Password"
                    className="w-full border p-2 mb-2"
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <button className="w-full bg-green-500 text-white p-2">Change Password</button>
            </form>
        </div>
    );
}

export default ChangePassword;
