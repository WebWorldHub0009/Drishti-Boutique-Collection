import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu, FiX, FiChevronDown, FiChevronUp, FiPhone, FiMail, FiHome,
  FiImage, FiInfo, FiStar, FiBookOpen, FiPhoneCall
} from "react-icons/fi";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo9.png";

export default function Navbar({ cartCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  const [showBeauty, setShowBeauty] = useState(false);

  const collections = [
    "Suits", "Gowns", "Dresses", "Designer Sarees", "Designer Blouses", "Gopi Dresess",
    "Party Wear Lehenga", "Customised Colours Sarees Avaliable", "Customised Colours Blouses Avaliable"
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-[#B22222] text-[#FAFAF0] py-1 px-3 flex flex-wrap justify-center items-center gap-x-6 gap-y-1 text-center font-libre text-sm md:text-base">
        <a href="mailto:Info@drishtiboutiquecollection.com" className="flex items-center gap-1 font-semibold hover:underline transition">
          <FiMail /> Info@drishtiboutiquecollection.com
        </a>
        <a href="tel:+919811676755" className="flex items-center gap-1 font-semibold hover:underline transition">
          <FiPhone /> +91 9811676755
        </a>
        <a href="tel:+919971446909" className="flex items-center gap-1 font-semibold hover:underline transition">
          <FiPhone /> +91 9971446909
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-[#FAFAF0] shadow-md font-libre">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Drishti Boutique" className="h-14 md:h-16 relative right-5 md:right-4" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-5 items-center font-semibold text-[#B22222] ml-0 md:ml-22 mx-auto">
            <Link to="/" className="hover:text-[#D4AF37]">HOME</Link>
            <Link to="/about" className="hover:text-[#D4AF37]">ABOUT</Link>
            <Link to="/royal-pick" className="hover:text-[#D4AF37]">ROYAL PICK</Link>

            {/* Collection Dropdown */}
            <div className="relative">
              <button onClick={() => setShowCollection(!showCollection)} className="flex items-center gap-1 hover:text-[#D4AF37]">
                COLLECTION {showCollection ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              <div className={`absolute left-0 top-full mt-2 bg-[#F5F5DC] border rounded-lg shadow-lg p-4 grid gap-2 w-56 z-50 transition-all duration-300 ${showCollection ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                {collections.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/collection/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setShowCollection(false)}
                    className="hover:text-[#D4AF37]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Beauty Dropdown */}
            <div className="relative">
              <button onClick={() => setShowBeauty(!showBeauty)} className="flex items-center gap-1 hover:text-[#D4AF37]">
                BEAUTY & CARE {showBeauty ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              <div className={`absolute left-0 top-full mt-2 bg-[#F5F5DC] border rounded-lg shadow-lg p-4 grid gap-2 w-56 z-50 transition-all duration-300 ${showBeauty ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <Link to="/beauty-care/soap" onClick={() => setShowBeauty(false)} className="hover:text-[#D4AF37]">Soap</Link>
                <Link to="/beauty-care/hair-oil" onClick={() => setShowBeauty(false)} className="hover:text-[#D4AF37]">Hair Oil</Link>
                <Link to="/beauty-care/night-cream" onClick={() => setShowBeauty(false)} className="hover:text-[#D4AF37]">Night Face Cream</Link>
              </div>
            </div>

            <Link to="/gallery" className="hover:text-[#D4AF37]">GALLERY</Link>
            <Link to="/contact" className="hover:text-[#D4AF37]">CONTACT</Link>
          </div>

          {/* Desktop Cart & Login */}
          <div className="hidden md:flex items-center gap-6">
            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center gap-2 px-3 py-2 rounded-full border border-[#B22222] text-[#B22222] hover:bg-[#B22222] hover:text-white transition"
            >
              <FaShoppingCart className="text-lg" />
              <span className="font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#B22222] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login
            <Link
              to="/login"
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-[#B22222] text-[#B22222] hover:bg-[#B22222] hover:text-white transition"
            >
              <FaUser className="text-lg" />
              <span className="font-medium">Login</span>
            </Link> */}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-3xl text-[#B22222] cursor-pointer" onClick={() => setIsOpen(true)}>
            <FiMenu />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-[#FAFAF0] z-[100] transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} shadow-xl flex flex-col py-6 px-4`}>
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-2xl text-[#B22222] hover:text-[#D4AF37]">
            <FiX />
          </button>
        </div>

        <div className="text-center mt-2 mb-4">
          <h3 className="text-xl font-bold text-[#B22222] uppercase">Menu</h3>
          <div className="w-16 h-[2px] bg-[#B22222] mx-auto mt-1 mb-2" />
        </div>

        <nav className="flex flex-col items-center gap-5 text-[#B22222] font-semibold text-[15px]">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-[#D4AF37]"><FiHome /> HOME</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-[#D4AF37]"><FiInfo /> ABOUT</Link>
          <Link to="/royal-pick" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-[#D4AF37]"><FiStar /> ROYAL PICK</Link>

          {/* Mobile Collection */}
          <div className="flex flex-col items-center">
            <button onClick={() => setShowCollection(!showCollection)} className="flex items-center gap-2 hover:text-[#D4AF37]">
              <FiBookOpen /> COLLECTION {showCollection ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {showCollection && (
              <div className="mt-2 flex flex-col items-center gap-2 text-sm">
                {collections.map((item, idx) => (
                  <Link key={idx} to={`/collection/${item.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => { setShowCollection(false); setIsOpen(false); }} className="hover:text-[#D4AF37]">
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Beauty */}
          <div className="flex flex-col items-center">
            <button onClick={() => setShowBeauty(!showBeauty)} className="flex items-center gap-2 hover:text-[#D4AF37]">
              <FiBookOpen /> BEAUTY & CARE {showBeauty ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {showBeauty && (
              <div className="mt-2 flex flex-col items-center gap-2 text-sm">
                <Link to="/beauty-care/soap" onClick={() => { setShowBeauty(false); setIsOpen(false); }} className="hover:text-[#D4AF37]">Soap</Link>
                <Link to="/beauty-care/hair-oil" onClick={() => { setShowBeauty(false); setIsOpen(false); }} className="hover:text-[#D4AF37]">Hair Oil</Link>
                <Link to="/beauty-care/night-cream" onClick={() => { setShowBeauty(false); setIsOpen(false); }} className="hover:text-[#D4AF37]">Night Face Cream</Link>
              </div>
            )}
          </div>

          <Link to="/gallery" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-[#D4AF37]"><FiImage /> GALLERY</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-[#D4AF37]"><FiPhoneCall /> CONTACT</Link>
        </nav>

        {/* Mobile Cart */}
        <div className="flex justify-center mt-6">
          <Link to="/cart" className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#B22222] text-[#B22222] hover:bg-[#B22222] hover:text-white transition relative">
            <FaShoppingCart className="text-lg" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#B22222] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Login
        <div className="flex justify-center mt-4">
          <Link to="/login" className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#B22222] text-[#B22222] hover:bg-[#B22222] hover:text-white transition">
            <FaUser className="text-lg" />
            <span>Login</span>
          </Link>
        </div> */}

        <div className="mt-8 border-t pt-4 text-center text-xs text-[#444] px-2">
          “Elegance is when the inside is as beautiful as the outside.” <br />
          <span className="italic text-[#B22222] font-medium">— Drishti Boutique</span>
        </div>
      </div>
    </>
  );
}
