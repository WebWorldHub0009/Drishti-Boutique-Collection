
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      
      <a
        href="tel:+919971446909"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaPhoneAlt size={20} />
      </a>

      <a
        href="https://wa.me/+919811676755" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;

