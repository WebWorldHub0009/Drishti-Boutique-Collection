import express from "express";
import { getBeauty, createBeauty, updateBeauty, deleteBeauty } from "../controllers/beautyController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// ✅ Category-wise GET
router.get("/:category", getBeauty);

// ✅ Create with Image Upload
router.post("/", protect, admin, upload.single("image"), createBeauty);

// ✅ Update with Image Upload
router.put("/:id", protect, admin, upload.single("image"), updateBeauty);

// ✅ Delete
router.delete("/:id", protect, admin, deleteBeauty);

export default router;
