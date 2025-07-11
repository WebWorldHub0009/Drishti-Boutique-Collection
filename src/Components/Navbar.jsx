import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiPhone,
  FiMail,
  FiHome,
  FiImage,
  FiInfo,
  FiStar,
  FiBookOpen,
  FiPhoneCall,
} from "react-icons/fi";
import logo from "../assets/logo9.png";

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
      <div className="w-full bg-[#B22222] text-[#FAFAF0] text-[7px] py-[6px] px-3 flex flex-wrap justify-center items-center gap-4 font-libre text-center tracking-wide">
        <a
          href="mailto:Info@drishtiboutiquecollection.com"
          className="flex items-center font-bold gap-1 hover:underline transition"
        >
          <FiMail className="text-sm" />
          Info@drishtiboutiquecollection.com
        </a>
        <a
          href="tel:+919811676755"
          className="flex items-center gap-1 font-bold hover:underline transition"
        >
          <FiPhone className="text-sm" />
          +91 9811676755
        </a>
        <a
          href="tel:+919971446909"
          className="flex items-center font-bold gap-1 hover:underline transition"
        >
          <FiPhone className="text-sm" />
          +91 9971446909
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-[#FAFAF0] shadow-md font-libre">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Drishti Boutique" className="h-14 md:h-16 relative right-5 md:right-4" />
          </Link>

          {/* Desktop Links */}
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
                COLLECTION {showCollection ? <FiChevronUp /> : <FiChevronDown />}
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

          {/* CTA Button */}
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
        } shadow-xl flex flex-col py-6 px-4 font-libre`}
      >
        {/* Close Icon */}
        <div className="flex justify-end pr-1">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-[#B22222] hover:text-[#D4AF37] transition"
          >
            <FiX />
          </button>
        </div>

        {/* Menu Heading */}
        <div className="text-center mt-2 mb-4">
          <h3 className="text-xl font-bold text-[#B22222] uppercase">Menu</h3>
          <div className="w-16 h-[2px] bg-[#B22222] mx-auto mt-1 mb-2" />
        </div>

        {/* Links */}
        <nav className="flex flex-col items-center gap-5 text-[#B22222] font-semibold text-[15px]">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] flex items-center gap-2">
            <FiHome /> HOME
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] flex items-center gap-2">
            <FiInfo /> ABOUT
          </Link>
          <Link to="/royal-pick" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] flex items-center gap-2">
            <FiStar /> ROYAL PICK
          </Link>

          {/* Dropdown Collection */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setShowCollection(!showCollection)}
              className="flex items-center gap-2 hover:text-[#D4AF37]"
            >
              <FiBookOpen /> COLLECTION {showCollection ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {showCollection && (
              <div className="mt-2 flex flex-col items-center gap-2 text-sm">
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

          <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] flex items-center gap-2">
            <FiImage /> GALLERY
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] flex items-center gap-2">
            <FiPhoneCall /> CONTACT
          </Link>

          {/* Enquire Now CTA */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-[#B22222] hover:bg-[#98131f] text-white text-sm font-semibold px-5 py-2 rounded-full text-center shadow-md transition ring-2 ring-[#D4AF37]/40 hover:ring-[#D4AF37]"
          >
            Enquire Now
          </Link>
        </nav>

        {/* Bottom Quote */}
        <div className="mt-8 border-t pt-4 text-center text-xs text-[#444] px-2">
          “Elegance is when the inside is as beautiful as the outside.” <br />
          <span className="italic text-[#B22222] font-medium">— Drishti Boutique</span>
        </div>
      </div>
    </>
  );
}
