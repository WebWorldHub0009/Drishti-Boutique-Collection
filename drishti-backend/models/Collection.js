import mongoose from "mongoose";

const CollectionSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        set: (v) => v.toLowerCase().replace(/\s+/g, ""), // Normalize on save
    },  // admin can type "Saree" -> saved as "saree"
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },

    fabric: { type: String },
    work: { type: String },
    dupatta: { type: String },
    occasions: { type: String },
    sizeFit: { type: String },
    customAlterations: { type: String },
});

export default mongoose.model("Collection", CollectionSchema);
