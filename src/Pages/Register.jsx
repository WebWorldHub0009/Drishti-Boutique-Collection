import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrls } from "../baseUrls";


function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "", isAdmin: false });
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${baseUrls}/api/auth/register`, form);
            setMsg("✅ Registered successfully! Please login.");
            navigate("/login");
        } catch (err) {
            setMsg("❌ Something went wrong!");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleRegister} className="p-6 border rounded w-96">
                <h2 className="text-xl mb-4">Register</h2>
                {msg && <p className={msg.includes("✅") ? "text-green-600" : "text-red-600"}>{msg}</p>}
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border p-2 mb-2"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 mb-2"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 mb-2"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <label className="flex items-center gap-2 mb-2">
                    <input
                        type="checkbox"
                        onChange={(e) => setForm({ ...form, isAdmin: e.target.checked })}
                    />
                    Register as Admin
                </label>
                <button className="w-full bg-green-500 text-white p-2">Register</button>
            </form>
        </div>
    );
}

export default Register;
