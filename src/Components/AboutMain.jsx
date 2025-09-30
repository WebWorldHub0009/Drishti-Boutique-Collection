import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../assets/images/slider/saree2.jpg";
import img2 from "../assets/images/slider/saree.jpg";
import img3 from "../assets/images/slider/western.jpg";

export default function AboutMain() {
  return (
    <section className="relative w-full min-h-[100vh] bg-gradient-to-br from-[#FAFAF0] via-[#F5F5DC] to-[#F3DECC] flex items-center overflow-hidden">

      {/* Subtle background image layer */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1602810310434-32d78c70c8ae?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-10"></div>

      {/* Floating glowing orbs */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#B22222]/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0, -50, 0], y: [0, 50, 0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#D4AF37]/20 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0, 50, 0], y: [0, -50, 0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-[Great_Vibes] text-[#B22222] mb-4 leading-tight drop-shadow">
            Where Elegance Meets Affordability
          </h1>

          <p className="text-[#B22222]/80 text-base md:text-lg max-w-xl mb-4">
            <strong>Drishti Boutique</strong> in Mohan Garden, Delhi redefines luxury fashion rental with exquisite lehengas, sarees, gowns, and western wear. Each piece is curated to make your special moments unforgettable — all at accessible prices.
          </p>

          <p className="italic text-sm md:text-base text-[#B22222]/70 mb-6">
            "Style is a way to say who you are without having to speak."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/gallery"
              className="bg-gradient-to-r from-[#B22222] to-[#D4AF37] text-white font-semibold px-6 py-3 rounded-full shadow hover:from-[#98131f] hover:to-[#c9a737] transition"
            >
              Explore Our Gallery
            </Link>
            <Link
              to="/contact"
              className="border border-[#B22222] text-[#B22222] font-semibold px-6 py-3 rounded-full hover:bg-[#B22222] hover:text-white transition"
            >
              Book an Appointment
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE STACK */}
        <motion.div
          className="flex-1 flex items-center justify-center gap-4"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative flex items-end justify-center gap-4">
            <motion.img
              src={img1}
              alt="Drishti Side Left"
              className="w-28 sm:w-32 h-52 sm:h-64 rounded-xl object-cover shadow-lg border-4 border-white"
              animate={{ y: [0, -10, 0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={img2}
              alt="Drishti Center"
              className="w-44 sm:w-52 h-64 sm:h-80 rounded-xl object-cover shadow-xl border-4 border-white"
              animate={{ y: [0, 15, 0, -15, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={img3}
              alt="Drishti Side Right"
              className="w-28 sm:w-32 h-52 sm:h-64 rounded-xl object-cover shadow-lg border-4 border-white"
              animate={{ y: [0, -10, 0, 10, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
