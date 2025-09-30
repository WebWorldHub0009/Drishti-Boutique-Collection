import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";
import beautyRoutes from "./routes/beautyRoutes.js";
import orderRoutes from "./routes/order.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
console.log("Cloudinary API Key:", process.env.CLOUD_API_KEY);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/collection", collectionRoutes);
app.use("/api/beauty", beautyRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
