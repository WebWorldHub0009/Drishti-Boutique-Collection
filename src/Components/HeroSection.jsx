import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import lehengaImg from "../assets/images/slider/lehenga.jpg";
import sareeImg from "../assets/images/slider/saree3.jpg";
import westernImg from "../assets/images/slider/western2.jpg";

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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden font-libre">
      {/* Image Slider */}
      {slides.map((slide, idx) => (
        <img
          key={idx}
          src={slide.image}
          alt={slide.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF0]/80 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start max-w-7xl mx-auto px-6 sm:px-12">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute transition-opacity duration-1000 ${
              current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-[cursive] text-[#B22222] mb-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]">
              {slide.title}
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl text-[#B22222]/90 mb-2 font-libre drop-shadow-[1px_1px_3px_rgba(0,0,0,0.5)]">
              {slide.desc}
            </p>
            <p className="text-sm sm:text-lg md:text-xl text-[#B22222]/80 mb-6 font-libre drop-shadow-[1px_1px_2px_rgba(0,0,0,0.4)]">
              {slide.extra}
            </p>
            <Link
              to="/collection"
              className="bg-[#B22222] text-[#FAFAF0] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold font-libre hover:bg-[#D4AF37] transition"
            >
              Explore Collection
            </Link>
          </div>
        ))}
      </div>

      {/* Optional arrows (not active now, can be implemented) */}
      {/* <div className="absolute bottom-6 right-6 flex gap-3">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="bg-[#B22222]/70 p-2 rounded-full text-white hover:bg-[#D4AF37]"
        >
          <FiArrowLeft size={20} />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="bg-[#B22222]/70 p-2 rounded-full text-white hover:bg-[#D4AF37]"
        >
          <FiArrowRight size={20} />
        </button>
      </div> */}
    </section>
  );
}
