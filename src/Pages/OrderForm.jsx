import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  useEffect(() => {
    if (location.state?.checkoutItems) {
      setCheckoutItems(location.state.checkoutItems);
    }
  }, [location.state]);

  const calculateTotal = () => {
    return checkoutItems.reduce(
      (total, item) => total + (item.price * (item.quantity || 1)),
      0
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (checkoutItems.length === 0) {
      alert("No items to order!");
      return;
    }

    // EmailJS params
    const templateParams = {
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone,
      customer_address: formData.address,
      notes: formData.notes,
      order_details: checkoutItems
        .map((item) => `${item.title} - ₹${item.price}`)
        .join(", "),
      total_price: calculateTotal(),
    };

    emailjs
      .send(
        "service_q48d8of",   // 🔹 Replace with your EmailJS service ID
        "template_x2koi5e",  // 🔹 Replace with your EmailJS template ID
        templateParams,
        "MFeY1xOAgN5Nn_0Om"    // 🔹 Replace with your EmailJS public key
      )
      .then(() => {
        alert("✅ Order placed & sent to owner!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Failed to send order details.");
      });
  };

  if (checkoutItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdfaf6]">
        <h2 className="text-2xl font-bold text-[#B22222] mb-4">No items in checkout</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-[#B22222] text-white px-6 py-3 rounded-full hover:bg-[#98131f] transition"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfaf6] p-6 md:p-12">
      <h1 className="text-3xl font-bold text-[#B22222] mb-8 text-center">Checkout</h1>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        {/* Items */}
        {checkoutItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg border border-gray-300"
              />
              <div>
                <h3 className="text-lg font-semibold text-[#B22222]">{item.title}</h3>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
            </div>
            <p className="font-bold text-[#D4AF37]">₹{item.price}</p>
          </div>
        ))}

        {/* Total */}
        <div className="flex justify-between items-center mt-6 text-lg font-bold">
          <span>Total:</span>
          <span className="text-[#D4AF37]">₹{calculateTotal()}</span>
        </div>

        {/* Form */}
        <form onSubmit={handlePlaceOrder} className="mt-8 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />
          <textarea
            name="address"
            placeholder="Full Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />
          <textarea
            name="notes"
            placeholder="Additional Notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#B22222] to-[#FFD700] text-white py-3 rounded-full font-bold hover:from-[#98131f] hover:to-[#f0c243] transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
