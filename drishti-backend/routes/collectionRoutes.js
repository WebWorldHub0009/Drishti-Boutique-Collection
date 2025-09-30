import express from "express";
import {
    getCollections,
    getCategory,
    createCollection,
    updateCollection,
    deleteCollection
} from "../controllers/collectionController.js";
import parser from "../middleware/multer.js"; // Cloudinary middleware

const router = express.Router();

router.get("/", getCollections);
router.get("/:category", getCategory);
router.post("/", parser.single("image"), createCollection);
router.put("/:id", parser.single("image"), updateCollection);
router.delete("/:id", deleteCollection);

export default router;
