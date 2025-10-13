import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import logoWatermark from "../assets/watermark.png";
import { baseUrls } from "../baseUrls";

export default function HeroSection() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch(`${baseUrls}/api/hero`)
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Error fetching hero slides:", err));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (slides.length ? (prev + 1) % slides.length : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides.length) return <div className="text-center py-20 text-gray-500">Loading slides...</div>;

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden font-libre">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />

          <div className="absolute top-4 right-4 z-20 pointer-events-none">
            <img src={logoWatermark} alt="Watermark" className="w-28 md:w-36 opacity-50" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-30">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-[Playfair_Display] font-extrabold text-[#D4AF37] mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl text-[#FAFAF0]/90 font-light mb-2 drop-shadow-md">
                {slide.desc}
              </p>
              <p className="text-sm sm:text-lg md:text-xl text-[#FAFAF0]/80 mb-4 italic drop-shadow-sm">
                {slide.extra}
              </p>

              {/* Offers Display */}
              {slide.offers?.length > 0 && (
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-40">
                  {slide.offers.map((offer, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all"
                    >
                      {offer.text} - {offer.discount}
                    </div>
                  ))}
                </div>
              )}


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

      <div className="absolute bottom-6 right-6 flex gap-3 z-40">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
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
