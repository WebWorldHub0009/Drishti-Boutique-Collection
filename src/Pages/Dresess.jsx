import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiShoppingCart } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import HeroBG from "../assets/images/gallery/bg.jpg";
import { buyNow } from "../utils/order";
import { baseUrls } from "../baseUrls";

export default function DesignerSuit({ addToCart, category = "dress", title = "Designer Dresses" }) {
  const [suits, setSuits] = useState([]);
  const [modal, setModal] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseUrls}/api/collection/${category}`)
      .then((res) => setSuits(res.data))
      .catch((err) => console.error(err));
  }, [category]);

  const scrollToSection = () =>
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleAddToCart = (item) => {
    if (addToCart) addToCart(item);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Generic Buy Now → Save order
  const handleBuyNow = async (item) => {
    const result = await buyNow(item, "Guest");
    if (result.success) {
      alert("Order placed successfully!");
    } else {
      alert("Failed: " + result.message);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${HeroBG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-[Great_Vibes] text-[#FFD700] drop-shadow-lg mb-4">
              {title} Collection
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              From regal styles to elegant pastels – handpicked fusion of tradition & luxury.
            </p>
            <button
              onClick={scrollToSection}
              className="bg-gradient-to-r from-[#B22222] to-[#FFD700] text-white px-10 py-3 rounded-full shadow-lg font-semibold tracking-wide hover:from-[#98131f] hover:to-[#f0c243] transition-all"
            >
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section
        ref={sectionRef}
        className="py-16 px-4 md:px-12 bg-gradient-to-b from-[#fff9f5] via-[#fff4ea] to-[#ffeedd]"
      >
        <div className="text-center mb-14">
          <h2 className="text-5xl font-[Great_Vibes] text-[#B22222] mb-3">
            Elegance in Every Stitch
          </h2>
          <p className="text-[#5A3E36] text-lg italic max-w-xl mx-auto">
            "Each piece is a celebration of heritage, artistry, and grace."
          </p>
          <div className="w-28 h-1 bg-[#FFD700] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {suits.map((item) => (
            <div
              key={item._id}
              className="rounded-3xl overflow-hidden bg-white shadow-lg border border-[#e6c17b] group relative cursor-pointer hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              onClick={() => setModal(item)}
            >
              <div className="relative overflow-hidden h-64 bg-[#fffaf3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-[#B22222] to-[#FFD700] text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300"
                >
                  <FiShoppingCart size={20} />
                </div>
              </div>

              <div className="px-2 py-2 flex flex-col justify-between h-[140px]">
                <div>
                  <h3 className="text-lg font-bold text-[#B22222] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700">
                    {item.description.split(" ").slice(0, 10).join(" ")}
                    {item.description.split(" ").length > 10 && "..."}
                  </p>
                </div>

                {item.price && (
                  <p className="text-base font-semibold text-[#B22222] mt-2">
                    ₹{item.price}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DYNAMIC MODAL */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[65vw] h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative border border-[#e6c17b]"
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 text-[#B22222] text-4xl font-bold hover:text-[#98131f] z-20"
            >
              ×
            </button>

            <div className="w-full md:w-1/2 h-[40vh] md:h-full relative bg-[#faf7f2]">
              <img
                src={modal.image}
                alt={modal.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-full md:w-1/2 h-full p-8 flex flex-col overflow-y-auto hide-scrollbar bg-[#fffaf5]">
              <h2 className="text-3xl font-bold text-[#B22222] mb-3">{modal.title}</h2>
              <div className="w-20 h-1 bg-[#FFD700] rounded-full mb-5"></div>
              <p className="text-base text-[#555] mb-6">{modal.description}</p>

              {modal.price && (
                <p className="text-2xl font-bold text-[#B22222] mb-6">Price: ₹{modal.price}</p>
              )}

              <a
                href="https://www.whatsapp.com/catalog/919811676755/?app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base font-bold text-white bg-gradient-to-r from-[#B22222] to-[#FFD700] px-6 py-3 rounded-full mb-6 hover:from-[#98131f] hover:to-[#f0c243] transition"
              >
                <FaWhatsapp className="text-xl" /> Book Now on WhatsApp
              </a>

              {/* Dynamic Fields */}
              <div className="space-y-3 text-sm text-[#333] font-medium mb-6">
                {modal.fabric && <p><span className="font-bold text-[#B22222]">Fabric Type:</span> {modal.fabric}</p>}
                {modal.work && <p><span className="font-bold text-[#B22222]">Work Detailing:</span> {modal.work}</p>}
                {modal.dupatta && <p><span className="font-bold text-[#B22222]">Dupatta:</span> {modal.dupatta}</p>}
                {modal.occasions && <p><span className="font-bold text-[#B22222]">Occasions:</span> {modal.occasions}</p>}
                {modal.sizeFit && <p><span className="font-bold text-[#B22222]">Size Fit:</span> {modal.sizeFit}</p>}
                {modal.customAlterations && <p><span className="font-bold text-[#B22222]">Custom Alterations:</span> {modal.customAlterations}</p>}
              </div>

              <div className="flex gap-4 mt-auto">
                <button
                  onClick={() => handleAddToCart(modal)}
                  className="flex-1 bg-gradient-to-r from-[#B22222] to-[#FFD700] text-white px-6 py-3 rounded-full font-bold hover:from-[#98131f] hover:to-[#f0c243] transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(modal)}
                  className="flex-1 bg-[#FFD700] text-[#B22222] px-6 py-3 rounded-full font-bold hover:bg-[#f0c243] transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B22222] to-[#FFD700] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm md:text-base font-semibold z-[9999]">
          <FiShoppingCart className="text-lg md:text-xl" /> Item Added Successfully!
        </div>
      )}
    </>
  );
}
