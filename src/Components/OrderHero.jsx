import React, { useRef } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import bg from "../assets/images/c.jpg"; 

export default function ContactHero() {
  const orderRef = useRef(null);

  const scrollToOrder = () => {
    if (orderRef.current) {
      orderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image + Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl px-6 md:px-12 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-[Great_Vibes] mb-4 text-[#8B0000]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
           Make Your Dream Outfit
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl font-light mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typewriter
              options={{
                strings: [
                  "Premium Sarees and Lehengas on Rent",
                  "Perfect for Weddings, Parties, and Festive Events",
                  "Tradition Meets Modern Elegance"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30
              }}
            />
          </motion.div>

          <motion.p
            className="text-gray-200 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Drishti Collection brings you the finest sarees, lehengas, and ethnic wear to make your special occasions unforgettable. Book now and experience elegance like never before.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <button
              onClick={scrollToOrder}
              className="bg-gradient-to-r from-[#8B0000] to-[#B22222] text-white font-semibold px-6 py-3 rounded-full shadow hover:from-[#6e0000] hover:to-[#98131f] transition"
            >
              Book Now
            </button>
          </motion.div>
        </div>

        {/* Decorative Blurs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#8B0000]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#B22222]/20 rounded-full blur-3xl"></div>
      </section>
    </>
  );
}
