import React from "react";
import { motion } from "framer-motion";
import { FaCrown, FaSmile, FaShippingFast, FaTshirt } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaCrown />,
      title: "Premium Quality",
      desc: "Each outfit is handpicked and maintained to deliver unmatched elegance.",
    },
    {
      icon: <FaShippingFast />,
      title: "Flexible Rentals",
      desc: "Enjoy easy booking, timely delivery, and hassle-free returns.",
    },
    {
      icon: <FaSmile />,
      title: "Customer Satisfaction",
      desc: "Thousands of happy clients trust us for their special moments.",
    },
    {
      icon: <FaTshirt />,
      title: "Wide Collection",
      desc: "From bridal to party wear — find the perfect fit for every occasion.",
    },
  ];

  return (
    <section className="relative bg-[#FAFAF0] py-16 px-4 sm:px-8 md:px-12 overflow-hidden font-['Libre_Franklin']">
      {/* Background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#B22222]/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#D4AF37]/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B22222] mb-3">
          Why Choose Us
        </h2>
        <p className="text-[#B22222]/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Discover the reasons why our clients love us and why Drishti Boutique stands out.
        </p>
      </motion.div>

      {/* Floating cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              delay: idx * 0.5,
            }}
            className="bg-[#F5F5DC] border border-[#DDD6C5] rounded-xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center text-center transition-transform duration-500"
          >
            <div className="text-4xl text-[#D4AF37] mb-3">{item.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#B22222] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-[#B22222]/80">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
