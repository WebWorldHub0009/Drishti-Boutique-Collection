import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://drishti-back.onrender.com/api/hero";

export default function HeroAdmin() {
    const [slides, setSlides] = useState([]);
    const [form, setForm] = useState({ title: "", desc: "", extra: "" });
    const [offers, setOffers] = useState([{ text: "", discount: "" }]);
    const [imageFile, setImageFile] = useState(null);
    const [editingId, setEditingId] = useState(null);

    const fetchSlides = async () => {
        const { data } = await axios.get(API_URL);
        setSlides(data);
    };

    useEffect(() => {
        fetchSlides();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("desc", form.desc);
        formData.append("extra", form.extra);

        // Only send offers with text + discount
        const validOffers = offers.filter(o => o.text && o.discount);
        formData.append("offers", JSON.stringify(validOffers));

        if (imageFile) formData.append("image", imageFile);

        try {
            if (editingId) {
                await axios.put(`${API_URL}/${editingId}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
            } else {
                await axios.post(API_URL, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
            }
            setForm({ title: "", desc: "", extra: "" });
            setOffers([{ text: "", discount: "" }]);
            setImageFile(null);
            setEditingId(null);
            fetchSlides();
        } catch (err) {
            console.error(err);
            alert("Error saving slide. Check console for details.");
        }
    };

    const handleEdit = (slide) => {
        setForm({ title: slide.title, desc: slide.desc, extra: slide.extra });
        setOffers(slide.offers?.length ? slide.offers : [{ text: "", discount: "" }]);
        setEditingId(slide._id);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this slide?")) return;
        await axios.delete(`${API_URL}/${id}`);
        fetchSlides();
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Hero Section Management</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md mb-8 grid gap-4 md:grid-cols-2">
                <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="border p-2 rounded-md w-full" required />
                <input type="text" placeholder="Description" value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} className="border p-2 rounded-md w-full" required />
                <input type="text" placeholder="Extra Line" value={form.extra} onChange={e => setForm({ ...form, extra: e.target.value })} className="border p-2 rounded-md w-full" />

                {/* Offers Section */}
                <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-2">Offers</h3>
                    {offers.map((offer, idx) => (
                        <div key={idx} className="flex gap-2 mb-2">
                            <input type="text" placeholder="Offer Text" value={offer.text} onChange={e => { const newOffers = [...offers]; newOffers[idx].text = e.target.value; setOffers(newOffers); }} className="border p-2 rounded-md w-full" />
                            <input type="text" placeholder="Discount (e.g. 30% OFF)" value={offer.discount} onChange={e => { const newOffers = [...offers]; newOffers[idx].discount = e.target.value; setOffers(newOffers); }} className="border p-2 rounded-md w-40" />
                            <button type="button" onClick={() => setOffers(offers.filter((_, i) => i !== idx))} className="bg-red-500 text-white px-2 rounded">✕</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => setOffers([...offers, { text: "", discount: "" }])} className="bg-green-500 text-white px-3 py-1 rounded-md mt-1">+ Add Offer</button>
                </div>

                <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} className="border p-2 rounded-md w-full md:col-span-2" required={!editingId} />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition md:col-span-2">{editingId ? "Update Slide" : "Add Slide"}</button>
            </form>

            {/* Slides Table */}
            <div className="bg-white rounded-xl shadow-md overflow-x-auto">
                <table className="min-w-full text-left border">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 border">Image</th>
                            <th className="p-3 border">Title</th>
                            <th className="p-3 border">Description</th>
                            <th className="p-3 border">Extra</th>
                            <th className="p-3 border">Offers</th>
                            <th className="p-3 border text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slides.map(slide => (
                            <tr key={slide._id} className="border-t">
                                <td className="p-3 border"><img src={slide.image} alt={slide.title} className="w-20 h-16 object-cover rounded-md" /></td>
                                <td className="p-3 border">{slide.title}</td>
                                <td className="p-3 border">{slide.desc}</td>
                                <td className="p-3 border">{slide.extra}</td>
                                <td className="p-3 border">
                                    {slide.offers?.map((offer, i) => (
                                        <div key={i} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded mb-1 font-semibold">
                                            {offer.text} - {offer.discount}
                                        </div>
                                    ))}
                                </td>
                                <td className="p-3 border text-center space-x-2">
                                    <button onClick={() => handleEdit(slide)} className="bg-yellow-400 px-3 py-1 rounded-md text-white hover:bg-yellow-500">Edit</button>
                                    <button onClick={() => handleDelete(slide._id)} className="bg-red-500 px-3 py-1 rounded-md text-white hover:bg-red-600">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
