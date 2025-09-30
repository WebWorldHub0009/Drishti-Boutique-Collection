// controllers/orderController.js
import Order from "../models/Order.js";

export const createOrUpdateOrder = async (req, res) => {
    try {
        const { productId, productTitle, price, userName, userPhone } = req.body;

        // Check if same user already ordered this product
        let order = await Order.findOne({ productId, userPhone });

        if (order) {
            order.quantity += 1;
            await order.save();
            return res.status(200).json({ message: "Quantity updated", order });
        } else {
            const newOrder = await Order.create({
                productId,
                productTitle,
                price,
                userName,
                userPhone,
            });
            return res.status(201).json({ message: "Order created", order: newOrder });
        }
    } catch (error) {
        res.status(500).json({ message: "Order failed", error: error.message });
    }
};

// ✅ Get all orders
export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 }); // latest first
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error: error.message });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete order", error: error.message });
    }
};


export const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: "Failed to update order", error: error.message });
    }
};
