import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/images/bgd.jpg"

// Replace with your actual image paths later
const showcases = [
  { img: "", title: "Modern Bedroom Elegance", role: "Modern Classic" },
  { img: "", title: "Luxury Rest Room", role: "Italian Minimalist" },
  { img: "", title: "Contemporary Room Setup", role: "Comfort & Style" },
  { img: "", title: "Sleek Modular Kitchen", role: "Sleek & Functional" },
  { img: "", title: "Classic Drawing Room", role: "Colorful Concepts" },
  { img: "", title: "Italian Style Guest Room", role: "Royal Touch" },
  { img: "", title: "Minimalist Living Space", role: "Elegant Display" },
  { img: "", title: "Rustic Bathroom Charm", role: "Stylish Storage" },
  { img: "", title: "Artistic Lounge Setup", role: "Luxury Compact" },
  { img: "", title: "Vintage Drawing Room Finish", role: "Open Air Zen" },
  { img: "", title: "Compact Modern Kitchen", role: "Architectural Elegance" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const OurShowcase = () => {
  return (
    <section
      className="relative w-full py-20 text-center px-4 sm:px-8 text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0d0d0de6] backdrop-blur-sm"></div>

      {/* Heading */}
      <div className="relative mb-12 z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Our <span className="text-[#CA9C78]">Showcase</span>
        </h2>
        <p className="text-[#D9D9D9] font-medium italic">
          "Crafted with precision, designed for elegance."
        </p>
        <div className="mt-2 w-8 h-1 mx-auto bg-[#CA9C78] rounded"></div>
      </div>

      {/* Diamond Grid Scrollable */}
      <motion.div
        className="relative z-10 flex flex-wrap justify-center md:justify-center items-center gap-4 max-w-7xl mx-auto overflow-x-auto scrollbar-hide"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {showcases.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative w-[120px] h-[120px] md:w-[160px] md:h-[160px] transform rotate-45 overflow-hidden group shadow-md flex-shrink-0"
          >
            <div className="w-full h-full transform -rotate-45 bg-white p-1">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover scale-145 transition-transform duration-500 group-hover:scale-125"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#000000cc] opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="text-center transform -rotate-45">
                <h4 className="text-white text-sm md:text-base font-semibold">
                  {item.title}
                </h4>
                <p className="text-[#CA9C78] text-xs md:text-sm">{item.role}</p>
              </div>
            </div>

            {/* Golden Border on Hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#CA9C78] transition-all duration-300"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurShowcase;
