import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaWhatsapp } from "react-icons/fa";
import HeroBG from "../assets/images/gallery/bg.jpg";

// Import your saree images:
import lehnga1 from "../assets/images/lehnga/black.jpg";
import lehnga2 from "../assets/images/lehnga/brown.jpg";
import lehnga3 from "../assets/images/lehnga/red.jpg";
import lehnga4 from "../assets/images/lehnga/gray.jpg";
import lehnga5 from "../assets/images/lehnga/green.jpg";
import lehnga6 from "../assets/images/lehnga/l2.jpg";
import lehnga7 from "../assets/images/lehnga/l16.jpg";
import lehnga8 from "../assets/images/lehnga/l32.jpg";

import lehnga9 from "../assets/images/lehnga/mixblue.jpg";
import lehnga10 from "../assets/images/lehnga/multi.jpg";
import lehnga11 from "../assets/images/lehnga/multiblack.jpg";
import lehnga12 from "../assets/images/lehnga/pink.jpg";
import lehnga13 from "../assets/images/lehnga/pink2.jpg";
import lehnga14 from "../assets/images/lehnga/pink3.jpg";

import lehnga15 from "../assets/images/lehnga/purple.jpg";
import lehnga16 from "../assets/images/lehnga/white.jpg";
import lehnga17 from "../assets/images/lehnga/white2.jpg";
import lehnga18 from "../assets/images/lehnga/darkgreen.jpg";




const sarees = [
  { title: "Elegance Embroided Balck Lehenga", image: lehnga1, description: "A shimmering gold Banarasi silk saree with royal finesse." },
  { title: "Velvet Brown Lehenga", image: lehnga2, description: "Vibrant crimson with traditional motifs and gold zari work." },
  { title: "Traditional Red Lehenga", image: lehnga3, description: "Flowy pastel saree perfect for contemporary style lovers." },
  { title: "Off Shaded Modern lehenga", image: lehnga4, description: "Classic ivory silk with intricate thread embroidery." },
  { title: "Golden Grace Lehenga", image: lehnga7, description: "Flowy pastel saree perfect for contemporary style lovers." },
  { title: "Contrast Lehenga", image: lehnga5, description: "A shimmering gold Banarasi silk saree with royal finesse." },
  { title: "Metallic Tiki Lehenga ", image: lehnga6, description: "Vibrant crimson with traditional motifs and gold zari work." },
 { title: "Traditional Pink Lehenga", image: lehnga8, description: "Vibrant crimson with traditional motifs and gold zari work." },
{ title: "Modern Navy Blue Lehenga", image: lehnga9, description: "A shimmering gold Banarasi silk saree with royal finesse." },
  { title: "Old Style Choli Lehenga", image: lehnga10, description: "Vibrant crimson with traditional motifs and gold zari work." },
  { title: "Multi Color Lehenga", image: lehnga11, description: "Flowy pastel saree perfect for contemporary style lovers." },
  { title: "Wedding Lehenga", image: lehnga12, description: "Classic ivory silk with intricate thread embroidery." },
  { title: "Modern Pink Lehenga", image: lehnga13, description: "Flowy pastel saree perfect for contemporary style lovers." },
  { title: "Handmade Pink Lehenga", image: lehnga14, description: "A shimmering gold Banarasi silk saree with royal finesse." },
  { title: "Peacock Style Velvet Lehenga", image: lehnga15, description: "Vibrant crimson with traditional motifs and gold zari work." },
 { title:"Off White Golden Lehenga", image: lehnga16, description: "Vibrant crimson with traditional motifs and gold zari work." },
{ title: "Modern Multi Color Lehenga", image: lehnga17, description: "A shimmering gold Banarasi silk saree with royal finesse." },
  { title: "Paster Green Shiny Lehenga", image: lehnga18, description: "Vibrant crimson with traditional motifs and gold zari work." },



];

export default function DesignerSaree() {
  const [modal, setModal] = useState(null);
  const sectionRef = useRef(null);

  const scrollToSarees = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO SECTION */}
     {/* HERO SECTION */}
<section className="relative h-[75vh] w-full overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center scale-110"
    style={{ backgroundImage: `url(${HeroBG})` }}
  />
  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
  <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
    <div>
      <motion.h1
        className="text-4xl md:text-6xl font-[Great_Vibes] text-[#D4AF37] mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Designer Lehenga Collection
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Where timeless tradition blends with modern couture – explore our luxurious bridal & festive lehengas.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={scrollToSarees}
        className="bg-gradient-to-r cursor-pointer from-[#B22222] to-[#D4AF37] text-white px-8 py-3 rounded-full shadow-md hover:from-[#98131f] hover:to-[#c9a737] transition-all"
      >
        Explore Lehengas
      </motion.button>
    </div>
  </div>
</section>


      {/* SAREE GALLERY */}
      <section
        ref={sectionRef}
        className="py-16 px-4 md:px-12 bg-gradient-to-b from-[#FAFAF0] via-[#F5F5DC] to-[#F3DECC]"
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl font-[Great_Vibes] text-[#B22222] mb-2">
            Elegance Draped in Threads
          </h2>
          <p className="text-[#0B1F3A] text-lg italic">
            "Unfold grace with every pleat and pallu."
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-6 max-w-7xl mx-auto">
          {sarees.map((saree, idx) => (
            <motion.div
              key={idx}
              className="break-inside-avoid rounded-3xl overflow-hidden bg-white/50 shadow-xl backdrop-blur-md border border-[#B22222]/20 group relative cursor-pointer hover:shadow-2xl transition duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setModal(saree)}
            >
              <img
                src={saree.image}
                alt={saree.title}
                className="w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#B22222] mb-1">
                  {saree.title}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {saree.description}
                </p>
              </div>
              <div className="absolute top-3 right-3 bg-[#B22222]/80 text-white p-2 rounded-full shadow-lg">
                <FaHeart />
              </div>
            </motion.div>
          ))}
        </div>
         <div className="mt-16 max-w-4xl mx-auto text-center px-4">
          <p className="text-[#7A5C3D] text-lg md:text-xl italic">
            This is just a glimpse of our craftsmanship. We create countless unique designs using various fabrics, textures, and embroidery techniques – customized for your style and occasion.
          </p>
        </div>
      </section>

      {/* MODAL */}
     {modal && (
  <div
    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 sm:p-8"
    onClick={() => setModal(null)}
  >
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 relative"
    >
      {/* Close Button */}
      <button
        onClick={() => setModal(null)}
        className="absolute top-4 right-4 text-[#B22222] text-3xl hover:text-[#98131f] transition font-bold z-10"
      >
        &times;
      </button>

      {/* Left Image */}
      <div className="relative h-[400px] md:h-[600px]">
        <img
          src={modal.image}
          alt={modal.title}
          className="w-full h-full object-fit"
        />
        <div className="absolute top-3 right-3 bg-[#B22222]/80 text-white p-2 rounded-full shadow-lg z-10">
          <FaHeart />
        </div>
      </div>

      {/* Right Content */}
      <div className="p-8 flex flex-col justify-center text-center md:text-left bg-[#fffaf5]">
        <h3 className="text-3xl font-bold text-[#B22222] mb-4">{modal.title}</h3>
        <p className="text-gray-700 mb-6">{modal.description}</p>

        <a
          href="https://www.whatsapp.com/catalog/919811676755/?app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center md:justify-start items-center gap-2 bg-[#B22222] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#98131f] transition"
        >
          <FaWhatsapp className="text-lg" /> Enquire Now
        </a>
      </div>
    </motion.div>
  </div>
)}

    </>
  );
}
