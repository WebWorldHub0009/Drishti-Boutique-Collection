import Beauty from "../models/Beauty.js";
import cloudinary from "../config/cloudinary.js";

// GET
export const getBeauty = async (req, res) => {
    try {
        const { category } = req.params;
        const items = await Beauty.find({ category });
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

export const createBeauty = async (req, res) => {
    try {
        let imageUrl = "";

        if (req.file) {
            // ✅ Upload to Cloudinary
            const uploadRes = await cloudinary.uploader.upload(req.file.path, {
                folder: "beauty",
            });
            imageUrl = uploadRes.secure_url;
        }

        const newItem = new Beauty({
            ...req.body,
            image: imageUrl,
        });

        await newItem.save();
        res.json(newItem);
    } catch (error) {
        console.error("Create Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

export const updateBeauty = async (req, res) => {
    try {
        let updatedData = { ...req.body };

        if (req.file) {
            // ✅ Upload new image to Cloudinary
            const uploadRes = await cloudinary.uploader.upload(req.file.path, {
                folder: "beauty",
            });
            updatedData.image = uploadRes.secure_url;
        }

        const updated = await Beauty.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true }
        );

        res.json(updated);
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
};


// DELETE
export const deleteBeauty = async (req, res) => {
    try {
        await Beauty.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};
