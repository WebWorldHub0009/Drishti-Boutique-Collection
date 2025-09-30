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
import img1 from "../assets/images/gallery/l2.jpg";
import img2 from "../assets/images/gallery/l21.jpg";
import img3 from "../assets/images/gallery/l30.jpg";
import img4 from "../assets/images/gallery/l32.jpg";

export default function DrishtiServices() {
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
    <div className="w-full bg-[#FAFAF0] py-16 px-4 md:px-12 font-libre">
      <div className="grid lg:grid-cols-2 gap-10 items-stretch">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#F5F5DC] rounded-2xl shadow-xl p-8 border border-[#DDD6C5] flex flex-col justify-between"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#B22222] mb-3">
              Drishti Collection
            </h2>
            <p className="italic text-[#B22222]/80 mb-4">
              "Where elegance meets affordability."
            </p>
            <p className="text-[#B22222] text-base sm:text-lg leading-relaxed mb-6">
              <strong>Drishti Collection</strong> in Mohan Garden, Delhi offers premium rental attire for weddings, parties, and festive occasions. Our diverse range includes bridal lehengas, designer sarees, and themed costumes, crafted for your unforgettable moments.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-8">
              {categories.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-[#DDD6C5] rounded-lg text-center p-3 hover:border-[#D4AF37] hover:shadow-lg transition"
                >
                  <span className="text-xs font-semibold text-[#B22222]">
                    {item}
                  </span>
                  <p className="text-[10px] text-[#D4AF37]">Available on Rent</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-[#B22222]">
                <FaTshirt className="text-[#D4AF37]" /> Premium Outfits
              </div>
              <div className="flex items-center gap-2 text-sm text-[#B22222]">
                <FaShippingFast className="text-[#D4AF37]" /> Flexible Rental
              </div>
              <div className="flex items-center gap-2 text-sm text-[#B22222]">
                <FaSmile className="text-[#D4AF37]" /> Seamless Experience
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                ["Explore Collection", "/royal-pick"],
                ["Own the Spotlight", "/royal-pick"],
                ["Style Showcase", "/gallery"],
              ].map(([text, link], i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={link}
                    className="block text-center px-4 py-3 bg-[#B22222] text-[#FAFAF0] font-semibold rounded-full shadow hover:bg-[#D4AF37] transition"
                  >
                    {text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-2 grid grid-cols-3 gap-3">
            {[
              [<FaUserFriends />, "1000+", "Happy Clients"],
              [<FaStoreAlt />, "500+", "Costumes"],
              [<FaCrown />, "5+", "Years Excellence"],
            ].map(([icon, stat, label], i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg border border-[#DDD6C5] shadow-sm text-center"
              >
                <div className="text-2xl text-[#D4AF37] mb-1">{icon}</div>
                <p className="text-lg font-bold text-[#B22222]">{stat}</p>
                <p className="text-xs text-[#B22222]/70">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative w-full overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={src}
                alt={`Drishti ${idx}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
