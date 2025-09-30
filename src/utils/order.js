// utils/order.js
import axios from "axios";
import {baseUrls} from "../baseUrls.js"

export const buyNow = async (item) => {
    try {
        const userName = prompt("Enter your name:");
        const userPhone = prompt("Enter your phone number:");

        if (!userName || !userPhone) {
            return { success: false, message: "Name and phone are required" };
        }

        const res = await axios.post(`${baseUrls}/api/orders`, {
            productId: item._id,
            productTitle: item.title,
            price: item.price,
            userName,
            userPhone,
        });

        return { success: true, order: res.data };
    } catch (error) {
        console.error(error.response?.data || error.message);
        return { success: false, message: error.response?.data?.message || error.message };
    }
};
