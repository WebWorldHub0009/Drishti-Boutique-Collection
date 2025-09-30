import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroBG from "../assets/images/gallery/bg.jpg";
import { FaHeart, FaWhatsapp, FaShoppingCart } from "react-icons/fa";

// Import your Dupatta images
import dupatta1 from "../assets/images/dupatta/d1.jpg";
import dupatta2 from "../assets/images/dupatta/d2.jpg";
import dupatta3 from "../assets/images/dupatta/d3.jpg";
import dupatta4 from "../assets/images/dupatta/d4.jpg";
import dupatta5 from "../assets/images/dupatta/d5.jpg";
import dupatta6 from "../assets/images/dupatta/d6.jpg";

import dupatta7 from "../assets/images/dupatta/d7.jpg";
import dupatta8 from "../assets/images/dupatta/d8.jpg";
import dupatta9 from "../assets/images/dupatta/d9.jpg";
import dupatta10 from "../assets/images/dupatta/d10.jpg";
import dupatta11 from "../assets/images/dupatta/d11.jpg";
import dupatta12 from "../assets/images/dupatta/d12.jpg";

import dupatta13 from "../assets/images/dupatta/d13.jpg";
import dupatta14 from "../assets/images/dupatta/d14.jpg";
import dupatta15 from "../assets/images/dupatta/d15.jpg";
import dupatta16 from "../assets/images/dupatta/d16.jpg";
import dupatta17 from "../assets/images/dupatta/d17.jpg";
import dupatta18 from "../assets/images/dupatta/d18.jpg";

import dupatta19 from "../assets/images/dupatta/d19.jpg";
import dupatta20 from "../assets/images/dupatta/d20.jpg";
import dupatta21 from "../assets/images/dupatta/d21.jpg";
import dupatta22 from "../assets/images/dupatta/d22.jpg";
import dupatta23 from "../assets/images/dupatta/d23.jpg";
import dupatta24 from "../assets/images/dupatta/d24.jpg";

import dupatta25 from "../assets/images/dupatta/d25.jpg";
import dupatta26 from "../assets/images/dupatta/d26.jpg";
import dupatta27 from "../assets/images/dupatta/d27.jpg";
import dupatta28 from "../assets/images/dupatta/d28.jpg";
import dupatta29 from "../assets/images/dupatta/d29.jpg";
import dupatta30 from "../assets/images/dupatta/d30.jpg";

import dupatta31 from "../assets/images/dupatta/d31.jpg";
import dupatta32 from "../assets/images/dupatta/d32.jpg";
import dupatta33 from "../assets/images/dupatta/d33.jpg";

import dupatta35 from "../assets/images/dupatta/d35.jpg";
import dupatta36 from "../assets/images/dupatta/d36.jpg";

import dupatta38 from "../assets/images/dupatta/d38.jpg";
import dupatta39 from "../assets/images/dupatta/d39.jpg";
import dupatta40 from "../assets/images/dupatta/d40.jpg";
import dupatta41 from "../assets/images/dupatta/d41.jpg";
import dupatta42 from "../assets/images/dupatta/d42.jpg";

import dupatta43 from "../assets/images/dupatta/d43.jpg";
import dupatta44 from "../assets/images/dupatta/d44.jpg";
import dupatta45 from "../assets/images/dupatta/d45.jpg";
import dupatta46 from "../assets/images/dupatta/d46.jpg";
import dupatta47 from "../assets/images/dupatta/d47.jpg";
import dupatta48 from "../assets/images/dupatta/d48.jpg";
import dupatta49 from "../assets/images/dupatta/d49.jpg";


const dupattaCollection = [
  {
    title: "Elegant Silk Saree",
    image: dupatta1,
    description:
      "Luxurious silk with intricate zari work — perfect for weddings.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta2,
    description:
      "Lightweight chiffon with hand-painted floral designs — airy and graceful.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta3,
    description:
      "Vibrant tie-dye patterns from Rajasthan — pure ethnic charm.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta4,
    description:
      "Exquisite Kashmiri threadwork on premium fabric — timeless elegance.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta5,
    description:
      "Sheer net dupatta with delicate sequin embellishments — perfect for evening wear.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta6,
    description:
      "Soft cotton with block print motifs — casual yet classy.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta7,
    description:
      "Luxurious silk with intricate zari work — perfect for weddings.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta8,
    description:
      "Lightweight chiffon with hand-painted floral designs — airy and graceful.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta9,
    description:
      "Vibrant tie-dye patterns from Rajasthan — pure ethnic charm.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta10,
    description:
      "Exquisite Kashmiri threadwork on premium fabric — timeless elegance.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta11,
    description:
      "Sheer net dupatta with delicate sequin embellishments — perfect for evening wear.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta12,
    description:
      "Soft cotton with block print motifs — casual yet classy.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta13,
    description:
      "Luxurious silk with intricate zari work — perfect for weddings.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta14,
    description:
      "Lightweight chiffon with hand-painted floral designs — airy and graceful.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta15,
    description:
      "Vibrant tie-dye patterns from Rajasthan — pure ethnic charm.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta16,
    description:
      "Exquisite Kashmiri threadwork on premium fabric — timeless elegance.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta17,
    description:
      "Sheer net dupatta with delicate sequin embellishments — perfect for evening wear.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta18,
    description:
      "Soft cotton with block print motifs — casual yet classy.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta19,
    description:
      "Luxurious silk with intricate zari work — perfect for weddings.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta20,
    description:
      "Lightweight chiffon with hand-painted floral designs — airy and graceful.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta21,
    description:
      "Vibrant tie-dye patterns from Rajasthan — pure ethnic charm.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta22,
    description:
      "Exquisite Kashmiri threadwork on premium fabric — timeless elegance.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta23,
    description:
      "Sheer net dupatta with delicate sequin embellishments — perfect for evening wear.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta24,
    description:
      "Soft cotton with block print motifs — casual yet classy.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta25,
    description:
      "Luxurious silk with intricate zari work — perfect for weddings.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta26,
    description:
      "Lightweight chiffon with hand-painted floral designs — airy and graceful.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta27,
    description:
      "Vibrant tie-dye patterns from Rajasthan — pure ethnic charm.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta28,
    description:
      "Exquisite Kashmiri threadwork on premium fabric — timeless elegance.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta29,
    description:
      "Sheer net dupatta with delicate sequin embellishments — perfect for evening wear.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta30,
    description:
      "Soft cotton with block print motifs — casual yet classy.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta31,
    description:
      "Luxurious silk with intricate zari work — perfect for weddings.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta32,
    description:
      "Lightweight chiffon with hand-painted floral designs — airy and graceful.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta35,
    description:
      "Sheer net dupatta with delicate sequin embellishments — perfect for evening wear.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta36,
    description:
      "Soft cotton with block print motifs — casual yet classy.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta38,
    description:
      "Lightweight chiffon with hand-painted floral designs — airy and graceful.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta39,
    description:
      "Vibrant tie-dye patterns from Rajasthan — pure ethnic charm.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta40,
    description:
      "Exquisite Kashmiri threadwork on premium fabric — timeless elegance.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta41,
    description:
      "Sheer net dupatta with delicate sequin embellishments — perfect for evening wear.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta42,
    description:
      "Soft cotton with block print motifs — casual yet classy.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta43,
    description:
      "Luxurious silk with intricate zari work — perfect for weddings.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta44,
    description:
      "Lightweight chiffon with hand-painted floral designs — airy and graceful.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta45,
    description:
      "Vibrant tie-dye patterns from Rajasthan — pure ethnic charm.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta46,
    description:
      "Exquisite Kashmiri threadwork on premium fabric — timeless elegance.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta47,
    description:
      "Sheer net dupatta with delicate sequin embellishments — perfect for evening wear.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta48,
    description:
      "Soft cotton with block print motifs — casual yet classy.",
    price: 1550,
  },
  {
    title: "Elegant Silk Saree",
    image: dupatta49,
    description:
      "Luxurious silk with intricate zari work — perfect for weddings.",
    price: 1550,
  },
];


const Dupatta = ({ addToCart }) => {
  const [modal, setModal] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAddToCart = (item) => {
    if (typeof addToCart === "function") addToCart(item);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleBuyNow = (item) => {
    if (typeof addToCart === "function") addToCart(item);
    navigate("/cart");
  };

  return (
    <>
      {/* Hero Section */}
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
              Designer Silk Saree
            </motion.h1>
            <motion.p
              className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Wrap yourself in elegance with our handcrafted Silk collection.
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

      {/* Gallery Section */}
      <section
        ref={sectionRef}
        className="py-16 px-4 md:px-12 bg-[#FAFAF0] overflow-hidden"
      >
        <div className="text-center mb-10">
          <h2 className="text-5xl font-[Great_Vibes] text-[#B22222] mb-3">
            Explore Our Silk Collection
          </h2>
          <p className="italic text-[#444]">
            "Every drape tells a story of elegance."
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {dupattaCollection.map((item, idx) => (
            <motion.div
              key={idx}
              onClick={() => setModal(item)}
              className="overflow-hidden rounded-3xl cursor-pointer bg-white shadow-lg border border-[#B22222]/20 group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden h-64 bg-[#fffaf3] flex items-center justify-center">
                <img
                  src={item.image}
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

      {/* Modal */}
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
              <img
                src={modal.image}
                alt={modal.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="w-full md:w-1/2 h-full p-6 md:p-8 flex flex-col overflow-y-auto hide-scrollbar bg-[#fffaf5]">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#B22222] mb-3">
                {modal.title}
              </h2>
              <div className="w-20 h-1 bg-[#D4AF37] rounded-full mb-5"></div>

              <p className="text-base md:text-lg text-[#444] mb-6">
                {modal.description}
              </p>
              <p className="text-xl font-bold text-[#D4AF37] mb-6">
                ₹{modal.price}
              </p>

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
                <FaWhatsapp className="text-xl" /> Book Now on WhatsApp
              </a>

              <div className="space-y-4 text-sm md:text-base text-[#333] font-medium leading-relaxed mt-auto">
                <p>
                  <span className="font-bold text-[#B22222]">Fabric Type:</span>{" "}
                  Silk, Cotton, Chiffon, and Net
                </p>
                <p>
                  <span className="font-bold text-[#B22222]">Work Detailing:</span>{" "}
                  Zari, Sequins, Embroidery, and Prints
                </p>
                <p>
                  <span className="font-bold text-[#B22222]">Comfort & Fit:</span>{" "}
                  Lightweight and breathable
                </p>
                <p>
                  <span className="font-bold text-[#B22222]">Occasion Suitability:</span>{" "}
                  Weddings, Festivals, Cultural Events, and Daily Wear
                </p>
                <p>
                  <span className="font-bold text-[#B22222]">Customization:</span>{" "}
                  Available for size, fabric, and embroidery
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B22222] to-[#FFD700] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm md:text-base font-semibold z-[9999]">
          <FaShoppingCart className="text-lg md:text-xl" /> Item added to cart!
        </div>
      )}
    </>
  );
};

export default Dupatta;
