import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    
    params: {
        folder: "admin_panel",
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
    },
});

const parser = multer({ storage });

export default parser;
