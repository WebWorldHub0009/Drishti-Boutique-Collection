import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCrown,
  FaSmile,
  FaShippingFast,
  FaUserFriends,
  FaTshirt,
  FaStoreAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import img1 from "../assets/images/slider/saree.jpg";
import img2 from "../assets/images/slider/lehenga.jpg";
import img3 from "../assets/images/slider/saree2.jpg";
import img4 from "../assets/images/slider/saree3.jpg";

export default function DrishtiServices() {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, []);

  const categories = [
    "Bridal Lehengas",
    "Designer Sarees",
    "Party Gowns",
    "Western Dresses",
    "Ethnic Sets",
    "Themed Costumes",
    "Kids Costumes",
    "Festive Wear",
    "Custom Rentals",
  ];

  const images = [img1, img2, img3, img4];

  return (
    <div className="w-full bg-[#FAFAF0] py-12 px-4 md:px-12 font-libre">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT CONTENT */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col justify-between bg-[#F5F5DC] rounded-xl shadow-2xl p-6 border border-[#DDD6C5] relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl  text-[#B22222] mb-3 relative z-10">
              Drishti Collection
            </h2>
            <p className="italic text-[#B22222]/80 mb-4 z-10 relative">
              "Where elegance meets affordability."
            </p>

            <p className="text-[#B22222] text-base sm:text-lg leading-relaxed mb-6 z-10 relative">
              <strong>Drishti Collection</strong> in Mohan Garden, Delhi offers premium rental attire for weddings, parties, and festive occasions. Our diverse range includes bridal lehengas, designer sarees, and themed costumes, crafted for your unforgettable moments.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {categories.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#F5F5DC] border border-[#DDD6C5] rounded-lg text-center p-3 hover:border-[#D4AF37] hover:shadow-xl transition relative z-10"
                >
                  <span className="text-sm font-semibold text-[#B22222]">
                    {item}
                  </span>
                  <p className="text-[10px] text-[#D4AF37]">Available on Rent</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-[#B22222]">
                <FaTshirt className="text-[#B22222]" /> Premium Outfits
              </div>
              <div className="flex items-center gap-2 text-sm text-[#B22222]">
                <FaShippingFast className="text-[#B22222]" /> Flexible Rental
              </div>
              <div className="flex items-center gap-2 text-sm text-[#B22222]">
                <FaSmile className="text-[#B22222]" /> Seamless Experience
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/collection"
                  className="block text-center px-4 py-3 bg-[#B22222] text-[#FAFAF0] font-semibold rounded-full shadow hover:bg-[#D4AF37] transition"
                >
                  Explore Collection
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/trending"
                  className="block text-center px-4 py-3 bg-[#B22222] text-[#FAFAF0] font-semibold rounded-full shadow hover:bg-[#D4AF37] transition"
                >
                  Own the Spotlight
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/gallery"
                  className="block text-center px-4 py-3 bg-[#B22222] text-[#FAFAF0] font-semibold rounded-full shadow hover:bg-[#D4AF37] transition"
                >
                  Style Showcase
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center bg-[#F5F5DC] p-4 rounded-lg border border-[#DDD6C5] shadow-sm hover:shadow-lg transition">
              <FaUserFriends className="mx-auto text-xl text-[#B22222] mb-1" />
              <p className="text-lg font-bold text-[#B22222]">1000+</p>
              <p className="text-xs text-[#D4AF37]">Happy Clients</p>
            </div>
            <div className="text-center bg-[#F5F5DC] p-4 rounded-lg border border-[#DDD6C5] shadow-sm hover:shadow-lg transition">
              <FaStoreAlt className="mx-auto text-xl text-[#B22222] mb-1" />
              <p className="text-lg font-bold text-[#B22222]">500+</p>
              <p className="text-xs text-[#D4AF37]">Costumes</p>
            </div>
            <div className="text-center bg-[#F5F5DC] p-4 rounded-lg border border-[#DDD6C5] shadow-sm hover:shadow-lg transition">
              <FaCrown className="mx-auto text-xl text-[#B22222] mb-1" />
              <p className="text-lg font-bold text-[#B22222]">5+</p>
              <p className="text-xs text-[#D4AF37]">Years Excellence</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT GRID */}
        <div
          className="w-full lg:w-1/2 grid grid-cols-2 gap-3"
          style={{ height: contentHeight ? `${contentHeight}px` : "auto" }}
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-full min-h-[50%] overflow-hidden rounded-xl shadow-md group"
              style={{ height: `calc(${contentHeight / 2 - 4}px)` }}
            >
              <img
                src={src}
                alt={`Drishti ${idx}`}
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
