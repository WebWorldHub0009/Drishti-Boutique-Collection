import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTags, FaHeart, FaArrowDown, FaWhatsapp } from "react-icons/fa";
import HeroBG from "../assets/images/gallery/bg.jpg";

// Images
import royal1 from "../assets/images/lehnga/red.jpg";
import royal2 from "../assets/images/lehnga/white.jpg";
import royal3 from "../assets/images/lehnga/pink3.jpg";
import royal5 from "../assets/images/saree/pink.jpg";
import royal6 from "../assets/images/saree/purple.jpg";
import royal4 from "../assets/images/gown/golden.jpg"
import royal7 from "../assets/images/suit/red.jpg";
import royal8 from "../assets/images/suit/white.jpg";
import royal9 from "../assets/images/dress/d2.jpg"
import royal10 from "../assets/images/dress/d4.jpg"

const royalPickData = [
  {
    title: "Red Bridal Lehenga",
    image: royal1,
    description:
      "A masterpiece in deep red with intricate hand embroidery and zari work — made to dazzle on your wedding day.",
  },
  {
    title: "Bridal Lehnga",
    image: royal2,
    description:
      "Traditional bridal lehenga featuring ornate patterns and rich fabric, perfect for a timeless bridal look.",
  },
  {
    title: "Karva Chauth Hot Pink Lehnga",
    image: royal3,
    description:
      "Vibrant hot pink lehenga with shimmering accents — ideal for Karva Chauth and festive rituals.",
  },
  {
    title: "Modern Designer Gown",
    image: royal4,
    description:
      "A sleek, contemporary gown blending western silhouettes with traditional detailing — perfect for receptions.",
  },
  {
    title: "Hand Work Saree With Zara Sequence",
    image: royal5,
    description:
      "Elegant saree featuring exquisite handwork and Zara sequin sparkle — graceful for evening events.",
  },
  {
    title: "Beautiful Velvet Saree",
    image: royal6,
    description:
      "Luxurious velvet saree with a rich drape and subtle shimmer — tailored for winter weddings and grand celebrations.",
  },
  {
    title: "Red Patiyala Suit",
    image: royal7,
    description:
      "Classic red Patiyala suit with embroidered kurti and flowing bottom — vibrant choice for festive gatherings.",
  },
  {
    title: "Royal Maroon Lehenga",
    image: royal8,
    description:
      "Deep maroon lehenga with gold threadwork — exuding heritage charm and majestic elegance.",
  },
  {
    title: "Premium Western Dress",
    image: royal9,
    description:
      "Chic western-style dress with a premium finish — ideal for cocktail parties and upscale events.",
  },
  {
    title: "Red Unique Dress",
    image: royal10,
    description:
      "A striking red dress with contemporary cuts and a bold flair — perfect for making a statement.",
  },
];

export default function RoyalPickSection() {
  const [modal, setModal] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[75vh] w-full overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${HeroBG})` }}
  />
  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
    <motion.h1
      className="text-4xl md:text-6xl font-[Great_Vibes] text-[#D4AF37] mb-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Royal Picks Collection
    </motion.h1>
    <motion.p
      className="max-w-2xl mx-auto text-lg md:text-xl text-white/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Where every piece whispers luxury — experience couture crafted for queens.
    </motion.p>

    <motion.a
      href="#royal-collection"
      whileHover={{ scale: 1.1 }}
      className="mt-8 inline-flex items-center gap-2 bg-[#B22222] px-6 py-3 rounded-full text-white font-medium hover:bg-[#98131f] transition shadow-lg"
    >
      Explore Collection <FaArrowDown />
    </motion.a>
  </div>
</section>


      {/* MASONRY GALLERY */}
      <section
        id="royal-collection"
        className="bg-gradient-to-br from-[#FAFAF0] via-[#F5F5DC] to-[#F3DECC] py-16 px-4 sm:px-10 lg:px-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl font-[Great_Vibes] text-[#B22222] mb-2">Royal Picks</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto italic">
            A luxurious selection — handpicked for timeless charm and modern grace.
          </p>
          <div className="w-28 h-[3px] bg-[#D4AF37] mx-auto mt-4 rounded-full shadow-md"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
          {royalPickData.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => setModal(item)}
              className="break-inside-avoid overflow-hidden rounded-3xl bg-white/50 shadow-xl border border-[#B22222]/20 backdrop-blur-md cursor-pointer hover:shadow-2xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#D4AF37] text-[#B22222] text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Royal Pick
                </div>
                <div className="absolute top-3 right-3 text-white bg-[#B22222]/90 rounded-full p-1">
                  <FaHeart size={16} />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#B22222] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700">
                  {item.description.length > 70
                    ? item.description.slice(0, 70) + "..."
                    : item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16 max-w-3xl mx-auto text-[#0B1F3A] text-lg md:text-xl italic">
  These are just glimpses of our royal collection. We have countless exquisite designs crafted for weddings, festivities, and every special occasion — visit us to explore the full range.
</div>

      </section>

      {/* MODAL */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setModal(null)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 relative"
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 text-[#B22222] text-3xl hover:text-[#98131f] transition font-bold z-10"
            >
              &times;
            </button>

            {/* Left Side Image */}
            <div className="relative h-[400px] md:h-[550px]">
              <img
                src={modal.image}
                alt={modal.title}
                className="w-full h-full object-center"
              />
              <div className="absolute top-3 right-3 bg-[#B22222]/80 text-white p-2 rounded-full shadow-lg z-10">
                <FaHeart />
              </div>
            </div>

            {/* Right Content */}
            <div className="p-8 flex flex-col justify-center text-center md:text-left bg-[#fffaf5]">
              <h3 className="text-3xl font-bold text-[#B22222] mb-4">{modal.title}</h3>
              <p className="text-gray-700 mb-6">{modal.description}</p>

              <a
                href="https://www.whatsapp.com/catalog/919811676755/?app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center md:justify-start items-center gap-2 bg-[#B22222] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#98131f] transition"
              >
                <FaWhatsapp className="text-lg" /> Enquire Now
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
