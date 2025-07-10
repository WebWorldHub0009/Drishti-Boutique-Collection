import React, { useRef } from "react";
import { motion } from "framer-motion";
import galleryBg from "../assets/images/gallery/bg.jpg"; 

export default function GalleryHero() {
  const sectionRef = useRef(null);
    const scrollToSection = () => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <section
      className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${galleryBg})` }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-[Great_Vibes] text-[#D4AF37] drop-shadow-lg mb-6"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Drishti Gallery
        </motion.h1>

        <motion.p
          className="text-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Step into a world of timeless elegance. Explore our handpicked collection of sarees, lehengas & gowns crafted with grace and heritage.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
         <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={scrollToSection}
              className="mt-4 bg-gradient-to-r from-[#B22222] to-[#D4AF37] text-white px-8 py-3 rounded-full shadow-md hover:from-[#98131f] hover:to-[#c9a737] transition-all"
            >
              View Collection
            </motion.button>
        </motion.div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#B22222]/10 rounded-full blur-3xl"></div>
    </section>
  );
}
