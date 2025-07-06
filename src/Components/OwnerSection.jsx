import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaAward, FaUsers, FaHeart, FaQuoteLeft } from "react-icons/fa";

export default function OwnerSection() {
  const stats = [
    { icon: <FaAward />, label: "5+ Years", sub: "Excellence in Fashion" },
    { icon: <FaUsers />, label: "1000+", sub: "Happy Clients" },
    { icon: <FaHeart />, label: "100%", sub: "Passion & Dedication" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#FAFAF0] via-[#F5F5DC] to-white py-20 px-6 sm:px-12 overflow-hidden font-['Libre_Franklin']">

      {/* Soft moving background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-10 animate-pulse"></div>

      {/* Big watermark */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[14vw] font-extrabold text-[#B22222]/5 select-none z-0">
        DRISHTI
      </h1>

      {/* Glowing orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#B22222]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Owner icon with float */}
        <motion.div
          animate={{
            y: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[#B22222]"
        >
          <FaUserCircle className="text-[120px] sm:text-[160px] drop-shadow-lg" />
        </motion.div>

        {/* Owner name */}
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#B22222]">
          Yogesh Leela Pal
        </h2>

        {/* Signature effect */}
        <p className="text-[#D4AF37]/70 italic text-sm sm:text-base font-['Great_Vibes'] mt-1">
          ~ Founder of Drishti Boutique ~
        </p>

        {/* Decorative separator */}
        <div className="mt-4 w-32 h-1 bg-gradient-to-r from-[#B22222] via-[#D4AF37] to-[#B22222] rounded-full animate-pulse"></div>

        {/* Floating quote */}
        <motion.blockquote 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.7, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mt-6 max-w-3xl text-[#B22222]/80 text-lg sm:text-xl italic relative"
        >
          <FaQuoteLeft className="absolute -top-2 -left-4 text-[#D4AF37]" />
          “Style is a way to say who you are without having to speak.”
        </motion.blockquote>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
              className="flex flex-col items-center bg-[#F5F5DC]/70 border border-[#DDD6C5] rounded-lg shadow hover:shadow-xl p-5"
            >
              <div className="text-[#D4AF37] text-3xl mb-2">{item.icon}</div>
              <p className="text-lg font-bold text-[#B22222]">{item.label}</p>
              <p className="text-xs text-[#B22222]/70">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-10"
        >
          <button className="bg-[#B22222] text-[#FAFAF0] px-6 py-3 rounded-full shadow-lg hover:bg-[#D4AF37] hover:text-[#FAFAF0] transition-transform hover:scale-105">
            Connect with Owner
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
