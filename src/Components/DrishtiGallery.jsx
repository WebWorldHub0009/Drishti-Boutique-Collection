import React from "react";
import imgLeft from "../assets/images/slider/western.jpg";
import imgCenter from "../assets/images/slider/saree3.jpg";
import imgRight from "../assets/images/slider/western2.jpg";
import { Link } from "react-router-dom";

const DrishtiGallery = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FAFAF0] to-[#F5F5DC] py-10 px-4 md:px-20 overflow-hidden font-['Libre_Franklin']">
      {/* Background DRISHTI text */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[14vw] font-extrabold text-[#B22222]/10 select-none z-0">
        DRISHTI
      </h1>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B22222] tracking-wide">
          Grace in Every Stitch
        </h2>
        <p className="text-sm sm:text-base italic text-[#B22222]/80 mt-3 max-w-2xl mx-auto">
          Explore silhouettes that celebrate elegance and style — handcrafted for your unforgettable moments.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full">
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#DDD6C5]">
            <img
              src={imgLeft}
              alt="Elegant Comfort"
              className="w-full h-[280px] sm:h-[320px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="text-[15px] md:text-base text-[#B22222]/90 max-w-xs mt-4">
            Lightweight fabrics blended with style — perfect for celebrations, gatherings, or a quiet evening.
          </p>
        </div>

        {/* Center Column */}
        <div className="flex justify-center items-center h-full">
          <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border border-[#DDD6C5] hover:scale-105 transition-all duration-700">
            <img
              src={imgCenter}
              alt="Drishti Signature"
              className="h-full w-full object-cover max-h-[500px] sm:max-h-[550px] md:max-h-full"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between h-full">
          <p className="text-[15px] md:text-base text-[#B22222]/90 text-right max-w-xs ml-auto mb-4">
            Rich embroidery, deep hues, and timeless cuts — crafted to make every occasion memorable.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#DDD6C5]">
            <img
              src={imgRight}
              alt="Festive Elegance"
              className="w-full h-[280px] sm:h-[320px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Floating View More Button */}
      <div className="relative z-20 mt-16 flex justify-center">
        <Link to="/trending">
          <button className="bg-[#B22222] text-[#FAFAF0] px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-lg hover:bg-[#D4AF37] hover:text-[#FAFAF0] transition-transform hover:scale-105">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DrishtiGallery;
