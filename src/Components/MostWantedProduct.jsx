import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowRight } from "react-icons/fa";

// Sample product images (replace with your actual paths)
import prod1 from "../assets/images/blouse/b5.jpg";
import prod2 from "../assets/images/dress/d5.jpg";
import prod3 from "../assets/images/gown/golden.jpg";
import prod4 from "../assets/images/lehnga/black.jpg";
import prod5 from "../assets/images/saree/blue.jpg";
import prod6 from "../assets/images/saree/green.jpg";
import prod7 from "../assets/images/saree/yellow.jpg";
import prod8 from "../assets/images/blouse/b10.jpg";

const products = [
  { id: 1, image: prod1 },
  { id: 2, image: prod2 },
  { id: 3, image: prod3 },
  { id: 4, image: prod4 },
  { id: 5, image: prod5 },
  { id: 6, image: prod6 },
  { id: 7, image: prod7 },
  { id: 8, image: prod8 },
];

export default function DrishtiProductSlider() {
  const navigate = useNavigate();
  const sliderContainerRef = useRef(null);
  const timerRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
    created: (slider) => {
      timerRef.current = setInterval(() => {
        slider.next();
      }, 3000);
    },
    destroyed: () => {
      clearInterval(timerRef.current);
    },
  });

  useEffect(() => {
    const sliderElement = sliderContainerRef.current;

    const stopAutoplay = () => clearInterval(timerRef.current);
    const startAutoplay = () => {
      if (instanceRef.current) {
        timerRef.current = setInterval(() => {
          instanceRef.current.next();
        }, 3000);
      }
    };

    if (sliderElement) {
      sliderElement.addEventListener("mouseenter", stopAutoplay);
      sliderElement.addEventListener("mouseleave", startAutoplay);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("mouseenter", stopAutoplay);
        sliderElement.removeEventListener("mouseleave", startAutoplay);
      }
    };
  }, [instanceRef]);

  return (
    <section className="w-full py-20 px-4 md:px-20 bg-gradient-to-b from-[#FAFAF0] via-[#F5F5DC] to-[#F3DECC] font-libre">
      {/* Heading */}
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

      {/* Slider */}
      <div
        ref={(node) => {
          sliderRef(node);
          sliderContainerRef.current = node;
        }}
        className="keen-slider cursor-grab"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="keen-slider__slide bg-white/60 rounded-3xl overflow-hidden shadow-lg backdrop-blur-md group transition-all duration-700"
          >
            <div className="relative w-full h-[420px] sm:h-[550px]">
              <img
                src={product.image}
                alt="Product"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00000099] to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              
              {/* Arrow Button on Right-Bottom */}
              <div className="absolute bottom-5 right-5">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white p-3 rounded-full shadow-md hover:bg-[#F5F5DC] transition"
                >
                  <FaArrowRight className="text-[#B22222] text-sm" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
