import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import bgImg from "../assets/images/slider/lehenga.jpg"; // Replace with your bg image

export default function AboutHero() {
  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden font-libre">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="About Drishti"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* FLOATING ORBS */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#B22222]/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0, -50, 0], y: [0, 50, 0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#D4AF37]/20 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0, 50, 0], y: [0, -50, 0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* WATERMARK TEXT */}
      <motion.h1
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[14vw] font-extrabold text-white/5 select-none"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        DRISHTI
      </motion.h1>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full max-w-7xl mx-auto px-6">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 text-white"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            About Drishti Boutique
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-6 drop-shadow">
            We blend tradition and modernity, offering premium rental fashion for weddings, parties, and festive occasions. Discover elegance, without the price tag.
          </p>
          <Link
            to="/collection"
            className="inline-block bg-[#B22222] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#D4AF37] transition"
          >
            Explore Our Collection
          </Link>
        </motion.div>

        {/* RIGHT FLOATING ICONS */}
        <motion.div 
          className="hidden md:flex md:w-1/2 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Example floating badges */}
          {["Bridal", "Festive", "Custom", "Designer"].map((text, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#FAFAF0]/10 border border-white/30 text-white text-sm px-3 py-1 rounded-full backdrop-blur"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`
              }}
              animate={{ y: [0, -10, 0, 10, 0] }}
              transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
