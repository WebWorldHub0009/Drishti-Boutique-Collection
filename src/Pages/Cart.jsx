import React from "react";
import { FiPlus, FiMinus, FiTrash2, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Cart({ cartItems, setCartItems }) {
  // ✅ Increase Quantity
  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setCartItems(updatedCart);
  };

  // ✅ Decrease Quantity
  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if ((updatedCart[index].quantity || 1) > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
    }
  };

  // ✅ Remove Item
  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // ✅ Calculate Total Price
  const totalAmount = cartItems.reduce((acc, item) => {
    const quantity = item.quantity || 1;
    const price = item.price || 1200; // You can update default price here or from item object
    return acc + price * quantity;
  }, 0);

  return (
    <div className="min-h-screen py-12 px-6 md:px-20 bg-gradient-to-b from-[#FAFAF0] via-[#F5F5DC] to-[#F3DECC] font-libre">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#B22222]"> Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 text-gray-700 mt-20">
          <FiShoppingCart className="text-6xl text-[#B22222]" />
          <p className="text-xl font-semibold">Your Cart is Empty</p>
          <Link to="/" className="bg-[#B22222] hover:bg-[#98131f] text-white font-bold py-3 px-6 rounded-full">Go Shopping</Link>
        </div>
      ) : (
        <>
          <div className="grid gap-6 max-w-5xl mx-auto">
            {cartItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-lg border border-[#B22222]/30">
                {/* Image */}
                <img src={item.image} alt={item.title} className="w-32 h-32 rounded-xl object-contain mb-4 md:mb-0" />

                {/* Title & Description */}
                <div className="flex-1 px-4 text-center md:text-left">
                  <h2 className="text-lg md:text-xl font-bold text-[#B22222]">{item.title}</h2>
                  <p className="text-gray-600 text-sm mt-1">{item.description?.slice(0, 60)}...</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="bg-[#B22222] text-white p-2 rounded-full hover:bg-[#98131f]"
                  >
                    <FiMinus />
                  </button>
                  <span className="font-bold">{item.quantity || 1}</span>
                  <button
                    onClick={() => increaseQuantity(index)}
                    className="bg-[#B22222] text-white p-2 rounded-full hover:bg-[#98131f]"
                  >
                    <FiPlus />
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(index)}
                  className="text-[#B22222] hover:text-[#98131f] text-xl  ml:12 md:ml-6"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>

          {/* Total Amount Section */}
          <div className="max-w-5xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#fefefe] p-6 rounded-2xl shadow-xl border border-[#B22222]/20">
           <h3 className="text-2xl font-bold text-[#B22222]">
  Total Items: {cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)}
</h3>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#B22222] to-[#D4AF37] hover:from-[#98131f] hover:to-[#c9a737] text-white py-3 px-8 font-bold rounded-full text-lg transition-all"
            >
              Buy Now
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
