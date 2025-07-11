import React from "react";
import { useNavigate } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowRight } from "react-icons/fa";

import prod1 from "../assets/images/blouse/b5.jpg";
import prod2 from "../assets/images/dress/d5.jpg";
import prod3 from "../assets/images/gown/golden.jpg";
import prod4 from "../assets/images/lehnga/black.jpg";
import prod5 from "../assets/images/saree/blue.jpg";
import prod6 from "../assets/images/saree/green.jpg";
import prod7 from "../assets/images/saree/yellow.jpg";
import prod8 from "../assets/images/blouse/b10.jpg";

const products = [
  { id: 1, image: prod1, route: "/collection/designer-blouses", label: "Designer Blouses" },
  { id: 2, image: prod2, route: "/collection/dresses", label: "Dresses" },
  { id: 3, image: prod3, route: "/collection/gowns", label: "Gowns" },
  { id: 4, image: prod4, route: "/collection/party-wear-lehenga", label: "Party Wear Lehenga" },
  { id: 5, image: prod5, route: "/collection/designer-sarees", label: "Designer Sarees" },
  { id: 6, image: prod6, route: "/collection/designer-sarees", label: "Designer Sarees" },
  { id: 7, image: prod7, route: "/collection/designer-sarees", label: "Designer Sarees" },
  { id: 8, image: prod8, route: "/collection/designer-blouses", label: "Designer Blouses" },
];

export default function ProductSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 25 },
      },
    },
  });

  const navigate = useNavigate();

  return (
    <section className="py-8 bg-[#fffaf7]">
       <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-widest text-[#B22222] mb-2">Drishti’s Handpicked</p>
        <h2 className="text-4xl md:text-5xl font-[Great_Vibes] text-[#B22222]">
          Most Loved Collection
        </h2>
        <p className="text-gray-700 mt-3 text-sm md:text-base italic">
          Trending styles, curated with love and heritage.
        </p>
        <div className="w-24 h-[3px] bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
      </div>

      <div ref={sliderRef} className="keen-slider px-4 md:px-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="keen-slider__slide bg-white/60 rounded-3xl overflow-hidden shadow-lg backdrop-blur-md group transition-all duration-700"
          >
            <div className="relative w-full h-[420px] sm:h-[550px]">
              <img
                src={product.image}
                alt={product.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00000099] to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Product Title */}
              <div className="absolute bottom-5 left-5 bg-white/90 text-[#B22222] px-4 py-1 text-sm font-semibold rounded-full shadow-md">
                {product.label}
              </div>

              {/* Arrow Button */}
              <div className="absolute bottom-5 right-5">
                <button
                  onClick={() => {
                    console.log("Navigating to:", product.route); // Debug
                    navigate(product.route);
                  }}
                  className="bg-white p-3 rounded-full shadow-md hover:bg-[#F5F5DC] transition"
                >
                  <FaArrowRight className="text-[#B22222] cursor-pointer  text-sm" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
