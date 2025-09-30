import mongoose from "mongoose";

// Helper function to convert string to kebab-case
const toKebabCase = (str) =>
    str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with dash
        .replace(/[^\w-]+/g, ""); // Remove special characters

const BeautySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        set: v => toKebabCase(v),
    },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },

    // Extra dynamic fields
    ingredients: { type: String },
    skinType: { type: String },
    volume: { type: String },
    usage: { type: String },
}, { timestamps: true });

export default mongoose.model("Beauty", BeautySchema);
