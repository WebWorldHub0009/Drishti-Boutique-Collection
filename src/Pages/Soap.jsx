import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { buyNow } from "../utils/order";
import { baseUrls } from "../baseUrls";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Hero background
import HeroBG from "../assets/images/gallery/bg.jpg";

SwiperCore.use([Navigation, Pagination]);

const SoapPage = ({ addToCart, category = "soap", title = "Soaps" }) => {
  const [soaps, setSoaps] = useState([]);
  const [modal, setModal] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch(`${baseUrls}/api/beauty/${category}`)
      .then((res) => res.json())
      .then((data) => setSoaps(data))
      .catch((err) => console.error("Error fetching soaps:", err));
  }, [category]);

  const scrollToSection = () =>
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleAddToCart = (item) => {
    if (typeof addToCart === "function") addToCart(item);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

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
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${HeroBG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-[Great_Vibes] text-[#D4AF37] mb-4"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {title} Collection
            </motion.h1>
            <motion.p
              className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Pure, natural, and fragrant products for your skincare routine.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={scrollToSection}
              className="bg-gradient-to-r from-[#B22222] to-[#D4AF37] text-white px-8 py-3 rounded-full shadow-md hover:from-[#98131f] hover:to-[#c9a737] transition-all"
            >
              Explore Now
            </motion.button>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section
        ref={sectionRef}
        className="py-16 px-4 md:px-12 bg-[#FAFAF0] overflow-hidden"
      >
        <div className="text-center mb-10">
          <h2 className="text-5xl font-[Great_Vibes] text-[#B22222] mb-3">
            Explore Our {title} Collection
          </h2>
          <p className="italic text-[#444]">
            "Gentle on skin, divine in fragrance."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {soaps.map((item) => (
            <motion.div
              key={item._id}
              onClick={() => setModal(item)}
              className="overflow-hidden rounded-3xl cursor-pointer bg-white shadow-lg border border-[#B22222]/20 group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden h-64 bg-[#fffaf3] flex items-center justify-center">
                <img
                  src={item.image || item.images?.[0]}
                  alt={item.title}
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                  className="absolute top-3 right-3 bg-[#B22222]/80 text-white p-2 rounded-full shadow-lg hover:bg-[#98131f] transition"
                >
                  <FaShoppingCart />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#B22222] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {item.description}
                </p>
                <p className="text-[#D4AF37] font-bold mt-2">₹{item.price}</p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setModal(item);
                  }}
                  className="mt-3 w-full bg-[#B22222] text-white py-2 rounded-full hover:bg-[#98131f] transition"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DYNAMIC MODAL WITH MULTIPLE IMAGES */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative border border-[#e6c17b]"
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 text-[#B22222] text-4xl font-bold hover:text-[#98131f] z-20"
            >
              &times;
            </button>

            <div className="w-full md:w-1/2 h-[40vh] md:h-full bg-[#f7f5f0] flex items-center justify-center">
              <Swiper
                navigation
                pagination={{ clickable: true }}
                className="h-full w-full"
              >
                {(modal.images || [modal.image]).map((img, idx) => (
                  <SwiperSlide key={idx} className="flex items-center justify-center">
                    <img
                      src={img}
                      alt={`${modal.title} ${idx + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="w-full md:w-1/2 h-full p-6 md:p-8 flex flex-col overflow-y-auto hide-scrollbar bg-[#fffaf5]">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#B22222] mb-3">
                {modal.title}
              </h2>
              <div className="w-20 h-1 bg-[#D4AF37] rounded-full mb-5"></div>

              <p className="text-base md:text-lg text-[#444] mb-4">{modal.description}</p>
              {modal.price && <p className="text-xl font-bold text-[#D4AF37] mb-4">₹{modal.price}</p>}

              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => handleAddToCart(modal)}
                  className="flex-1 bg-gradient-to-r from-[#B22222] to-[#FFD700] text-white px-6 py-3 rounded-full font-bold hover:from-[#98131f] hover:to-[#f0c243] transition"
                >
                  <FaShoppingCart className="inline-block mr-2" /> Add to Cart
                </button>

                <button
                  onClick={() => handleBuyNow(modal)}
                  className="flex-1 bg-[#FFD700] text-[#B22222] px-6 py-3 rounded-full font-bold hover:bg-[#f0c243] transition"
                >
                  Buy Now
                </button>
              </div>

              <a
                href="https://www.whatsapp.com/catalog/919811676755/?app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-base font-bold text-white bg-[#25D366] px-6 py-3 rounded-full mb-6 hover:opacity-95 transition"
              >
                <FaWhatsapp className="text-xl" /> Order on WhatsApp
              </a>

              {/* Dynamic Fields */}
              <div className="space-y-4 text-sm md:text-base text-[#333] font-medium leading-relaxed mt-auto">
                {Object.entries(modal)
                  .filter(
                    ([key, value]) =>
                      value && !["_id", "title", "description", "price", "image", "images"].includes(key)
                  )
                  .map(([key, value]) => (
                    <p key={key}>
                      <span className="font-bold text-[#B22222]">
                        {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
                      </span>{" "}
                      {value}
                    </p>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* TOAST */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B22222] to-[#FFD700] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm md:text-base font-semibold z-[9999]">
          <FaShoppingCart className="text-lg md:text-xl" /> Item added to cart!
        </div>
      )}
    </>
  );
};

export default SoapPage;
