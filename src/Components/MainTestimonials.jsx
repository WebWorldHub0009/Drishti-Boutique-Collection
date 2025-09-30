import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Groom",
    feedback:
      "Drishti Boutique made my wedding day truly special. The sherwani I rented was elegant, comfortable, and admired by all."
  },
  {
    name: "Ananya Patel",
    role: "Bride",
    feedback:
      "Absolutely loved my lehenga from Drishti! The process was seamless and the outfit felt like it was made just for me."
  },
  {
    name: "Vikram Malhotra",
    role: "Event Organizer",
    feedback:
      "Drishti’s collection added charm to our event. Their team is professional and their service impeccable."
  },
  {
    name: "Neha Verma",
    role: "Bridesmaid",
    feedback:
      "Beautiful collection and so affordable. Renting from Drishti was one of the best decisions for the wedding season."
  },
  {
    name: "Arjun Mehta",
    role: "Father of the Bride",
    feedback:
      "Drishti made sure the entire family looked perfect. The variety and fit were outstanding."
  },
  {
    name: "Simran Kaur",
    role: "Fashion Blogger",
    feedback:
      "Their ethnic wear rentals combine tradition with trend. Highly recommend for any festive occasion."
  }
];

export default function TestimonialSlider() {
  return (
    <section className="bg-[#fffdfa] py-20 px-6 sm:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold mb-4 text-[#B22222]">
          What Our <span className="text-[#D4AF37]">Clients Say</span>
        </h2>
        <p className="text-[#5e5e5e] max-w-xl mx-auto">
          Hear from those who chose Drishti to make their special moments unforgettable.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 }
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-[#f3e5d0] rounded-2xl shadow-lg p-8 flex flex-col h-full justify-between hover:shadow-[#D4AF37]/40 transition duration-300">
              <FaQuoteLeft className="text-[#D4AF37] text-3xl mb-4" />
              <p className="text-[#5e5e5e] text-lg leading-relaxed italic mb-6">
                "{t.feedback}"
              </p>
              <div>
                <h3 className="font-bold text-[#B22222]">{t.name}</h3>
                <p className="text-[#a78f73] text-sm">{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
