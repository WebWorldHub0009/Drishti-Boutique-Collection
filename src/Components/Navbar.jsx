import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import logo from "../assets/images/dristi.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCollection, setShowCollection] = useState(false);

  const collections = [
    "Suits",
    "Gowns",
    "Dresses",
    "Designer Sarees",
    "Designer Blouses",
    "Party Wear Lehenga",
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-[#B22222] text-[#FAFAF0] text-[11px] py-[5px] px-4 flex justify-center items-center gap-3 flex-wrap font-libre text-center tracking-wide">
        <span className="flex items-center gap-1">
          <FiMail className="text-xs" /> Info@drishtiboutiquecollection.com
        </span>
        <span className="flex items-center gap-1">
          <FiPhone className="text-xs" /> 9811676755 / 9971446909
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-[#FAFAF0] shadow-md font-libre">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Drishti Boutique" className="h-14 md:h-16" />
          </Link>

          {/* Main Links */}
          <div className="hidden md:flex gap-8 items-center font-semibold text-[#B22222]">
            <Link to="/" className="hover:text-[#D4AF37]">HOME</Link>
            <Link to="/about" className="hover:text-[#D4AF37]">ABOUT</Link>
            <Link to="/royal-pick" className="hover:text-[#D4AF37]">ROYAL PICK</Link>

            {/* Collection Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setShowCollection(!showCollection)}
                className="flex items-center gap-1 hover:text-[#D4AF37]"
              >
                COLLECTION
                {showCollection ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              <div
                className={`absolute left-0 top-full mt-2 bg-[#F5F5DC] border border-[#DDD6C5] rounded-lg shadow-lg p-4 grid grid-cols-1 gap-2 w-48 z-50 transition-all duration-300 ${
                  showCollection ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {collections.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/collection/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-[#D4AF37] transition"
                    onClick={() => setShowCollection(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/gallery" className="hover:text-[#D4AF37]">GALLERY</Link>
            <Link to="/contact" className="hover:text-[#D4AF37]">CONTACT</Link>
          </div>

          {/* Enquire Now Button */}
          <div className="hidden md:flex">
            <a
              href="/contact"
              className="bg-[#B22222] hover:bg-[#98131f] text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md transition ring-2 ring-[#D4AF37]/40 hover:ring-[#D4AF37]"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-3xl text-[#B22222] cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <FiMenu />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#FAFAF0] z-[100] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-xl flex flex-col py-8 px-6 font-libre`}
      >
        {/* Close Icon */}
        <div className="absolute top-4 right-4 text-2xl text-[#B22222] cursor-pointer">
          <FiX onClick={() => setIsOpen(false)} />
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-5 text-[#B22222] font-semibold mt-12 text-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37]">HOME</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37]">ABOUT</Link>
          <Link to="/royal-pick" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37]">ROYAL PICK</Link>

          <div className="flex flex-col">
            <button
              onClick={() => setShowCollection(!showCollection)}
              className="flex items-center gap-1 hover:text-[#D4AF37]"
            >
              COLLECTION {showCollection ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {showCollection && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                {collections.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/collection/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => {
                      setShowCollection(false);
                      setIsOpen(false);
                    }}
                    className="hover:text-[#D4AF37]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37]">GALLERY</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37]">CONTACT</Link>

          {/* Enquire Now CTA inside drawer */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 bg-[#B22222] hover:bg-[#98131f] text-white text-sm font-semibold px-5 py-2 rounded-full text-center shadow-md transition ring-2 ring-[#D4AF37]/40 hover:ring-[#D4AF37]"
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </>
  );
}
