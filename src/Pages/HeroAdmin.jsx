import React, { useState, useEffect } from "react";
import axios from "axios";

function HeroAdmin() {
    const [heroData, setHeroData] = useState({
        title: "",
        subtitle: "",
        background: "",
    });
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch existing hero details
        axios
            .get("https://drishti-back.onrender.com/api/hero")
            .then((res) => setHeroData(res.data))
            .catch((err) => console.error(err));
    }, []);

    const handleChange = (e) => {
        setHeroData({ ...heroData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("title", heroData.title);
        formData.append("subtitle", heroData.subtitle);
        if (file) formData.append("background", file);

        try {
            await axios.put("https://drishti-back.onrender.com/api/hero/update", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Hero section updated successfully ✅");
        } catch (err) {
            console.error(err);
            alert("Error updating hero section ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4">Edit Hero Section</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={heroData.title}
                        onChange={handleChange}
                        className="w-full mt-1 border rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="font-medium">Subtitle</label>
                    <input
                        type="text"
                        name="subtitle"
                        value={heroData.subtitle}
                        onChange={handleChange}
                        className="w-full mt-1 border rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="font-medium">Background Image</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="w-full mt-1"
                    />
                    {heroData.background && (
                        <img
                            src={heroData.background}
                            alt="Hero Background"
                            className="mt-2 w-full h-48 object-cover rounded-md"
                        />
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    {loading ? "Updating..." : "Save Changes"}
                </button>
            </form>
        </div>
    );
}

export default HeroAdmin;
