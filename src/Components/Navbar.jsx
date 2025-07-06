import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import logo from "../assets/images/logo4.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCollection, setShowCollection] = useState(false);

  const collections = [
    "Party Wear Lehenga",
    "Gown",
    "Designer Sarees",
    "Designer Blouses",
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-[#B22222] text-[#FAFAF0] text-xs py-1 px-4 flex justify-center items-center gap-4 flex-wrap font-libre text-center">
        <span className="flex items-center gap-1">
          <FiMail /> Info@drishtiboutiquecollection.com
        </span>
        <span className="flex items-center gap-1">
          <FiMail /> Drishtiboutiquecollection@gmail.com
        </span>
        <span className="flex items-center gap-1">
          <FiPhone /> 9811676755
        </span>
        <span className="flex items-center gap-1">
          <FiPhone /> 9971446909
        </span>
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
                } group-hover:opacity-100 group-hover:visible`}
              >
                {collections.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/collection/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-[#D4AF37] transition-colors duration-200"
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

          {/* Social Icons in place of Get in Touch button */}
          <div className="hidden md:flex gap-4 text-lg">
            <a
              href="https://www.instagram.com/drishtiboutiquecollection?igsh=M2hwMGtsNm9pMG95"
              target="_blank"
              rel="noreferrer"
              className="text-[#B22222] hover:text-[#D4AF37] transition"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/16exX8Fbyc/"
              target="_blank"
              rel="noreferrer"
              className="text-[#B22222] hover:text-[#D4AF37] transition"
            >
              <FiFacebook />
            </a>
            <a
              href="https://youtube.com/@drishti7064?si=Ey8Bzdldq7xbnRSW"
              target="_blank"
              rel="noreferrer"
              className="text-[#B22222] hover:text-[#D4AF37] transition"
            >
              <FiYoutube />
            </a>
          </div>

          <div
            className="md:hidden text-3xl text-[#B22222]"
            onClick={() => setIsOpen(!isOpen)}
          >
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
        </div>
      )}
    </>
  );
}
