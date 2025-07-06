import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
import logo from "../assets/images/logo4.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCollection, setShowCollection] = useState(false);

  const collections = [
    "Designer Suits",
    "Lehengas",
    "Gowns",
    "Party Wear",
    "Bridal Wear",
    "Ethnic Sets",
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-[#B22222] text-[#FAFAF0] text-xs py-1 px-4 flex justify-between items-center font-libre">
        <div className="flex items-center gap-4">
          <span>drishtiboutique@gmail.com</span>
          <span>+91 9876543210</span>
        </div>
        <div className="flex gap-3 text-lg">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FiInstagram className="hover:text-[#D4AF37]" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FiFacebook className="hover:text-[#D4AF37]" />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full bg-[#FAFAF0] shadow-md font-libre">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Drishti Boutique" className="h-12" />
          </Link>

          <div className="hidden md:flex gap-8 items-center font-semibold text-[#B22222]">
            <Link to="/" className="hover:text-[#D4AF37]">HOME</Link>
            <Link to="/about" className="hover:text-[#D4AF37]">ABOUT</Link>
            <Link to="/trending" className="hover:text-[#D4AF37]">TRENDING</Link>

            <div className="relative">
              <button
                onClick={() => setShowCollection(!showCollection)}
                className="flex items-center gap-1 hover:text-[#D4AF37]"
              >
                COLLECTION
                {showCollection ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {showCollection && (
                <div className="absolute left-0 top-full mt-2 bg-[#F5F5DC] border border-[#DDD6C5] rounded-lg shadow-lg p-4 grid grid-cols-2 gap-2 w-64 z-50">
                  {collections.map((item, idx) => (
                    <Link
                      key={idx}
                      to={`/collection/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-[#D4AF37]"
                      onClick={() => setShowCollection(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gallery" className="hover:text-[#D4AF37]">GALLERY</Link>
            <Link to="/contact" className="hover:text-[#D4AF37]">CONTACT</Link>
          </div>

          <div className="hidden md:block">
            <Link to="/contact">
              <button className="border border-[#B22222] text-[#B22222] px-5 py-2 rounded-full hover:bg-[#D4AF37] hover:text-[#FAFAF0] transition">
                Get in Touch
              </button>
            </Link>
          </div>

          <div className="md:hidden text-3xl text-[#B22222]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-[#FAFAF0] z-50 flex flex-col items-center justify-center gap-6 text-xl font-semibold text-[#B22222] font-libre">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37]">HOME</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37]">ABOUT</Link>
          <Link to="/trending" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37]">TRENDING</Link>
          <div className="flex flex-col items-center">
            <button
              onClick={() => setShowCollection(!showCollection)}
              className="flex items-center gap-1 hover:text-[#D4AF37]"
            >
              COLLECTION {showCollection ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {showCollection && (
              <div className="flex flex-col mt-2 gap-2">
                {collections.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/collection/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setIsOpen(false)}
                    className="text-base hover:text-[#D4AF37]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37]">GALLERY</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37]">CONTACT</Link>
          <Link to="/contact">
            <button className="border border-[#B22222] text-[#B22222] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-[#FAFAF0] transition">
              Get in Touch
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
