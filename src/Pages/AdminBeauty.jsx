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
        image: null,
        ingredients: "",
        skinType: "",
        volume: "",
        usage: "",
    });
    const [editingId, setEditingId] = useState(null);
    const token = localStorage.getItem("token");

    // ✅ Fetch items whenever selectedCategory changes
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

    // ✅ Save item (Create / Update)
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

            if (form.image instanceof File) {
                formData.append("image", form.image);
            }

            let res;
            if (editingId) {
                res = await axios.put(
                    `${baseUrls}/api/beauty/${editingId}`,
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
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

            setForm({
                category: selectedCategory,
                title: "",
                description: "",
                price: "",
                image: null,
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
            image: item.image || null,
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

            {/* Form */}
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

                <input
                    type="file"
                    onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                    className="border px-3 py-2 rounded-lg w-full"
                />

                {form.image && (
                    <img
                        src={form.image instanceof File ? URL.createObjectURL(form.image) : form.image}
                        alt="Preview"
                        className="h-24 mt-2 rounded object-cover"
                    />
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

            {/* Items List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                    <div key={item._id} className="border p-3 rounded-lg shadow">
                        {item.image && (
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-32 w-full object-cover rounded"
                            />
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
