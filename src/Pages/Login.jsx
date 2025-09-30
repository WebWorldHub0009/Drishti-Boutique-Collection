import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrls } from "../baseUrls";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${baseUrls}/api/auth/login`, {
                email,
                password,
            });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("isAdmin", res.data.isAdmin);
            // Example: src/pages/Login.jsx

            setMsg("✅ Login successful!");
            setTimeout(() => {
                if (res.data.isAdmin) {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            }, 1500);
        } catch (err) {
            setMsg("❌ Invalid credentials!");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleLogin} className="p-6 border rounded w-96">
                <h2 className="text-xl mb-4">Login</h2>
                {msg && <p className={msg.includes("✅") ? "text-green-600" : "text-red-600"}>{msg}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 mb-2"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 mb-2"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="w-full bg-blue-500 text-white p-2">Login</button>
            </form>
        </div>
    );
}

export default Login;
