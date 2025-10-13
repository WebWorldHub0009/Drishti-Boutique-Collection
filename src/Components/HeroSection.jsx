import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { baseUrls } from "../baseUrls";

export default function HeroSection() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch(`${baseUrls}/api/hero`)
      .then(res => res.json())
      .then(data => setSlides(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => slides.length ? (prev + 1) % slides.length : 0), 6000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides.length) return <div className="text-center py-20">Loading slides...</div>;

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      {slides.map((slide, idx) => (
        <div key={idx} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${current === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">{slide.title}</h1>
            <p className="text-lg sm:text-2xl md:text-3xl mb-2 drop-shadow">{slide.desc}</p>
            <p className="italic mb-6 drop-shadow">{slide.extra}</p>

            <div className="flex flex-wrap justify-center gap-3">
              {slide.offers?.map((o, i) => (
                <div key={i} className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold animate-bounce hover:scale-110 shadow-lg" style={{ animationDelay: `${i * 0.2}s` }}>
                  {o.text} - {o.discount}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 right-6 flex gap-3 z-30">
        <button onClick={() => setCurrent(prev => (prev - 1 + slides.length) % slides.length)} className="bg-black/50 p-3 rounded-full text-white hover:bg-yellow-500 transition"><FiArrowLeft /></button>
        <button onClick={() => setCurrent(prev => (prev + 1) % slides.length)} className="bg-black/50 p-3 rounded-full text-white hover:bg-yellow-500 transition"><FiArrowRight /></button>
      </div>
    </section>
  );
}
