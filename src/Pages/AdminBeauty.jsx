import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrls } from "../baseUrls";

function AdminBeauty() {
    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("soap");
    const [form, setForm] = useState({
        category: "soap",
        title: "",
        description: "",
        price: "",
        images: [],
        ingredients: "",
        skinType: "",
        volume: "",
        usage: "",
    });
    const [editingId, setEditingId] = useState(null);
    const token = localStorage.getItem("token");

    // ✅ Fetch items
    const fetchItems = async (category) => {
        try {
            const res = await axios.get(`${baseUrls}/api/beauty/${category}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setItems(res.data);
        } catch (err) {
            console.error("Error fetching items:", err);
        }
    };

    useEffect(() => {
        fetchItems(selectedCategory);
    }, [selectedCategory]);

    // ✅ Save or Update
    const saveItem = async () => {
        if (!form.title || !form.description || !form.price || !form.category) {
            alert("Please fill all required fields!");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("category", form.category);
            formData.append("title", form.title);
            formData.append("description", form.description);
            formData.append("price", form.price);
            formData.append("ingredients", form.ingredients);
            formData.append("skinType", form.skinType);
            formData.append("volume", form.volume);
            formData.append("usage", form.usage);

            // 👇 Append multiple images
            form.images?.forEach((file) => {
                if (file instanceof File) {
                    formData.append("images", file);
                }
            });

            let res;
            if (editingId) {
                res = await axios.put(`${baseUrls}/api/beauty/${editingId}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                });
                setItems(items.map((item) => (item._id === editingId ? res.data : item)));
                setEditingId(null);
            } else {
                res = await axios.post(`${baseUrls}/api/beauty`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                });
                setItems([...items, res.data]);
            }

            // Reset form
            setForm({
                category: selectedCategory,
                title: "",
                description: "",
                price: "",
                images: [],
                ingredients: "",
                skinType: "",
                volume: "",
                usage: "",
            });
        } catch (err) {
            console.error("Error saving item:", err);
        }
    };

    // ✅ Edit item
    const editItem = (item) => {
        setForm({
            category: item.category,
            title: item.title,
            description: item.description,
            price: item.price,
            images: item.images || [],
            ingredients: item.ingredients || "",
            skinType: item.skinType || "",
            volume: item.volume || "",
            usage: item.usage || "",
        });
        setEditingId(item._id);
    };

    // ✅ Delete item
    const deleteItem = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        try {
            await axios.delete(`${baseUrls}/api/beauty/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setItems(items.filter((item) => item._id !== id));
        } catch (err) {
            console.error("Error deleting item:", err);
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Manage Beauty Care</h2>

            {/* ✅ Category Selector */}
            <div className="mb-4">
                <label className="mr-2 font-semibold">Select Category:</label>
                <select
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setForm({ ...form, category: e.target.value });
                    }}
                    className="border px-3 py-2 rounded-lg"
                >
                    <option value="soap">Soap</option>
                    <option value="hair-oil">Hair Oil</option>
                    <option value="night-cream">Night Cream</option>
                </select>
            </div>

            {/* ✅ Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="border px-3 py-2 rounded-lg w-full"
                />

                <input
                    type="text"
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="border px-3 py-2 rounded-lg w-full"
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="border px-3 py-2 rounded-lg w-full"
                />

                {/* 👇 Multiple image upload */}
                <input
                    type="file"
                    multiple
                    onChange={(e) =>
                        setForm({ ...form, images: Array.from(e.target.files) })
                    }
                    className="border px-3 py-2 rounded-lg w-full"
                />

                {/* 👇 Preview of selected images */}
                {form.images?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 col-span-full">
                        {form.images.map((img, i) => (
                            <img
                                key={i}
                                src={img instanceof File ? URL.createObjectURL(img) : img}
                                alt={`Preview ${i}`}
                                className="h-20 w-20 object-cover rounded"
                            />
                        ))}
                    </div>
                )}

                <input
                    type="text"
                    placeholder="Ingredients"
                    value={form.ingredients}
                    onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
                    className="border px-3 py-2 rounded-lg w-full"
                />

                <input
                    type="text"
                    placeholder="Skin Type"
                    value={form.skinType}
                    onChange={(e) => setForm({ ...form, skinType: e.target.value })}
                    className="border px-3 py-2 rounded-lg w-full"
                />

                <input
                    type="text"
                    placeholder="Volume"
                    value={form.volume}
                    onChange={(e) => setForm({ ...form, volume: e.target.value })}
                    className="border px-3 py-2 rounded-lg w-full"
                />

                <input
                    type="text"
                    placeholder="Usage"
                    value={form.usage}
                    onChange={(e) => setForm({ ...form, usage: e.target.value })}
                    className="border px-3 py-2 rounded-lg w-full"
                />

                <button
                    onClick={saveItem}
                    className="bg-blue-600 text-white py-2 rounded-lg mt-2 w-full"
                >
                    {editingId ? "Update Item" : "Add Item"}
                </button>
            </div>

            {/* ✅ Items List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                    <div key={item._id} className="border p-3 rounded-lg shadow">
                        {item.images?.length > 0 && (
                            <div className="flex gap-2 overflow-x-auto">
                                {item.images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={item.title}
                                        className="h-24 w-24 object-cover rounded"
                                    />
                                ))}
                            </div>
                        )}
                        <h2 className="text-lg font-bold mt-2">{item.title}</h2>
                        <p>{item.description}</p>
                        <p className="font-semibold">₹{item.price}</p>
                        {item.ingredients && <p>Ingredients: {item.ingredients}</p>}
                        {item.skinType && <p>Skin Type: {item.skinType}</p>}
                        {item.volume && <p>Volume: {item.volume}</p>}
                        {item.usage && <p>Usage: {item.usage}</p>}

                        <div className="flex flex-wrap gap-2 mt-2">
                            <button
                                onClick={() => editItem(item)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded w-full sm:w-auto"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteItem(item._id)}
                                className="bg-red-600 text-white px-3 py-1 rounded w-full sm:w-auto"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminBeauty;
