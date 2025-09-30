import Collection from "../models/Collection.js";

// Get all collections
export const getCollections = async (req, res) => {
    try {
        const collections = await Collection.find();
        res.json(collections);
    } catch (err) {
        console.error("GET COLLECTIONS ERROR:", err);
        res.status(500).json({ message: "Failed to fetch collections" });
    }
};

// Get items by category
export const getCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const collections = await Collection.find({ category });
        res.json(collections);
    } catch (err) {
        console.error("GET CATEGORY ERROR:", err);
        res.status(500).json({ message: "Failed to fetch category items" });
    }
};

// Create new collection item with optional image
export const createCollection = async (req, res) => {
    try {
        console.log("REQ BODY:", req.body);
        console.log("REQ FILE:", req.file); // debug file

        const {
            category,
            title,
            description,
            price,
            fabric,
            work,
            dupatta,
            occasions,
            sizeFit,
            customAlterations
        } = req.body;

        const newItem = new Collection({
            category,
            title,
            description,
            price,
            image: req.file?.path, // optional chaining
            fabric,
            work,
            dupatta,
            occasions,
            sizeFit,
            customAlterations
        });

        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        console.error("CREATE COLLECTION ERROR:", err);
        res.status(500).json({ message: "Failed to create collection item" });
    }
};

// Update collection item
export const updateCollection = async (req, res) => {
    try {
        const {
            category,
            title,
            description,
            price,
            fabric,
            work,
            dupatta,
            occasions,
            sizeFit,
            customAlterations
        } = req.body;

        const updatedData = {
            category,
            title,
            description,
            price,
            fabric,
            work,
            dupatta,
            occasions,
            sizeFit,
            customAlterations
        };

        if (req.file?.path) updatedData.image = req.file.path;

        const updatedItem = await Collection.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true }
        );

        res.json(updatedItem);
    } catch (err) {
        console.error("UPDATE COLLECTION ERROR:", err);
        res.status(500).json({ message: "Failed to update collection item" });
    }
};

// Delete collection item
export const deleteCollection = async (req, res) => {
    try {
        await Collection.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        console.error("DELETE COLLECTION ERROR:", err);
        res.status(500).json({ message: "Failed to delete collection item" });
    }
};
