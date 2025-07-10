import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function VisionMission() {
  return (
    <section className="relative w-full bg-[#FAFAF0] overflow-hidden py-24 px-6 md:px-12">

      {/* Subtle floating shapes */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#B22222]/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* DRISHTI Watermark */}
      <motion.h1
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[15vw] font-extrabold text-[#B22222]/5 select-none"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        DRISHTI
      </motion.h1>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="group bg-white/70 border border-[#DDD6C5] rounded-2xl p-8 shadow-lg backdrop-blur-sm hover:shadow-2xl transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#B22222]"
            >
              <FaEye size={50} />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#B22222]">
              Our Vision
            </h2>
          </div>
          <p className="text-[#B22222]/80 text-base md:text-lg leading-relaxed mb-2">
            To become India’s most trusted name for ethnic and designer rental wear,
            making premium fashion accessible without compromise.
          </p>
          <p className="text-[#B22222]/70 text-sm md:text-base leading-relaxed">
            We envision a future where style meets sustainability, helping people celebrate
            life’s moments in elegance — without the weight of ownership.
          </p>
        </motion.div>

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="group bg-white/70 border border-[#DDD6C5] rounded-2xl p-8 shadow-lg backdrop-blur-sm hover:shadow-2xl transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#D4AF37]"
            >
              <FaBullseye size={50} />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#B22222]">
              Our Mission
            </h2>
          </div>
          <p className="text-[#B22222]/80 text-base md:text-lg leading-relaxed mb-2">
            To provide seamless rental experiences with unmatched quality,
            personal service, and affordability — helping clients shine at every event.
          </p>
          <p className="text-[#B22222]/70 text-sm md:text-base leading-relaxed">
            We aim to blend tradition with modernity, offering curated collections that
            honor heritage while embracing today’s trends.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
