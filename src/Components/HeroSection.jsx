import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import lehengaImg from "../assets/images/slider/lehenga.jpg";
import sareeImg from "../assets/images/slider/saree3.jpg";
import westernImg from "../assets/images/bgw.jpg";

const slides = [
  {
    image: lehengaImg,
    title: "Exquisite Bridal Lehengas",
    desc: "Rent designer bridal lehengas to make your big day unforgettable.",
    extra: "Perfect fit, unmatched style — every time.",
  },
  {
    image: sareeImg,
    title: "Graceful Sarees",
    desc: "Premium sarees available on rent for weddings & festivals.",
    extra: "Traditional elegance, modern convenience.",
  },
  {
    image: westernImg,
    title: "Trendy Western Dresses",
    desc: "Western party wear available for rent — style meets convenience.",
    extra: "Stand out at every celebration.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden font-libre">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />

          {/* Centered content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-20">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-[Playfair_Display] font-extrabold text-[#D4AF37] drop-shadow-[3px_3px_6px_rgba(0,0,0,0.7)] mb-4">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl text-[#FAFAF0]/90 font-light mb-2 drop-shadow-md">
                {slide.desc}
              </p>
              <p className="text-sm sm:text-lg md:text-xl text-[#FAFAF0]/80 mb-6 italic drop-shadow-sm">
                {slide.extra}
              </p>
              <Link
                to="/royal-pick"
                className="inline-block bg-gradient-to-r from-[#B22222] to-[#D4AF37] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold shadow-md hover:from-[#98131f] hover:to-[#c9a737] transition-all"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-30">
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="bg-black/50 p-3 rounded-full text-white hover:bg-[#D4AF37] hover:text-black transition"
        >
          <FiArrowLeft size={20} />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="bg-black/50 p-3 rounded-full text-white hover:bg-[#D4AF37] hover:text-black transition"
        >
          <FiArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
