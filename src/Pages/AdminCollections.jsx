// src/Pages/AdminCollection.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrls } from "../baseUrls";

function AdminCollection() {
    const [items, setItems] = useState([]);
    const [form, setForm] = useState({
        category: "",
        title: "",
        description: "",
        price: "",
        file: null,
        preview: null,
        fabric: "",
        work: "",
        dupatta: "",
        occasions: "",
        sizeFit: "",
        customAlterations: "",
    });
    const [editingId, setEditingId] = useState(null);

    const token = localStorage.getItem("token");

    // ✅ Fetch items
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get(`${baseUrls}/api/collection`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setItems(res.data);
            } catch (err) {
                console.error("Error fetching collection items:", err);
            }
        };
        fetchItems();
    }, [token]);

    // ✅ Add / Update item
    const saveItem = async () => {
        if (!form.title || !form.description || !form.price || !form.category) {
            alert("Please fill all required fields!");
            return;
        }

        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            if (key === "file" && value) formData.append("image", value);
            else if (key !== "file" && key !== "preview") formData.append(key, value);
        });

        try {
            let res;
            if (editingId) {
                res = await axios.put(`${baseUrls}/api/collection/${editingId}`, formData, {
                    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
                });
                setItems(items.map((item) => (item._id === editingId ? res.data : item)));
                setEditingId(null);
            } else {
                res = await axios.post(`${baseUrls}/api/collection`, formData, {
                    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
                });
                setItems([...items, res.data]);
            }

            setForm({
                category: "",
                title: "",
                description: "",
                price: "",
                file: null,
                preview: null,
                fabric: "",
                work: "",
                dupatta: "",
                occasions: "",
                sizeFit: "",
                customAlterations: "",
            });
        } catch (err) {
            console.error("Error saving collection item:", err);
        }
    };

    const deleteItem = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        try {
            await axios.delete(`${baseUrls}/api/collection/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setItems(items.filter((item) => item._id !== id));
        } catch (err) {
            console.error("Error deleting item:", err);
        }
    };

    const editItem = (item) => {
        setForm({
            category: item.category || "",
            title: item.title || "",
            description: item.description || "",
            price: item.price || "",
            file: null,
            preview: item.image || null,
            fabric: item.fabric || "",
            work: item.work || "",
            dupatta: item.dupatta || "",
            occasions: item.occasions || "",
            sizeFit: item.sizeFit || "",
            customAlterations: item.customAlterations || "",
        });
        setEditingId(item._id);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setForm({ ...form, file, preview: URL.createObjectURL(file) });
    };

    const groupedCollections = items.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div className="bg-white p-6 rounded-2xl shadow max-w-7xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Manage Collection</h2>

            {/* Category */}
            <div className="mb-4">
                <label className="mr-2 font-semibold">Select Category:</label>
                <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="border px-3 py-2 rounded-lg w-full md:w-1/2"
                >
                    <option value="">Select Category</option>
                    <option value="suit">Suit</option>
                    <option value="gown">Gown</option>
                    <option value="dress">Dress</option>
                    <option value="saree">Designer Sarees</option>
                    <option value="blouse">Designer Blouse</option>
                    <option value="gopidress">Gopi Dresses</option>
                    <option value="sarees">Party Wear Lehenga</option>
                </select>
            </div>

            {/* Form Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {["title", "description", "price", "fabric", "work", "dupatta", "occasions", "sizeFit", "customAlterations"].map((key) => (
                    <input
                        key={key}
                        type={key === "price" ? "number" : "text"}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        className="border px-3 py-2 rounded-lg"
                        value={form[key] || ""}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    />
                ))}

                <input type="file" accept="image/*" onChange={handleFileChange} className="border px-3 py-2 rounded-lg" />

                {form.preview && (
                    <div className="flex justify-center md:justify-start mt-2">
                        <img src={form.preview} alt="Preview" className="w-40 h-40 object-cover rounded-lg border" />
                    </div>
                )}
            </div>

            <button
                onClick={saveItem}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mb-8"
            >
                {editingId ? "Update Item" : "Add Item"}
            </button>

            {/* Collections */}
            {Object.keys(groupedCollections).map((category) => (
                <div key={category} className="mb-8">
                    <h3 className="text-lg md:text-xl font-semibold mb-4 capitalize border-b pb-2">{category}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {groupedCollections[category].map((item) => (
                            <li
                                key={item._id}
                                className="border p-4 rounded-lg hover:shadow-md transition cursor-pointer"
                                onClick={() => editItem(item)}
                            >
                                <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded mb-3" />
                                <p className="font-bold">{item.title} - ₹{item.price}</p>
                                <div className="flex justify-between mt-3">
                                    <button onClick={(e) => { e.stopPropagation(); editItem(item); }} className="text-green-600 hover:underline">
                                        Edit
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); deleteItem(item._id); }} className="text-red-600 hover:underline">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default AdminCollection;
