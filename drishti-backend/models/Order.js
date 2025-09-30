// models/Order.js
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        productId: { type: String, required: true },
        productTitle: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, default: 1 },
        userName: { type: String, required: true },   // ✅ new
        userPhone: { type: String, required: true },  // ✅ new
    },
    { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
