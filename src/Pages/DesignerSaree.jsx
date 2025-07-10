import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaWhatsapp } from "react-icons/fa";
import HeroBG from "../assets/images/gallery/bg.jpg";

// Import your saree images:
import saree1 from "../assets/images/saree/bblacks.jpg";
import saree2 from "../assets/images/saree/bblue1.jpg";
import saree3 from "../assets/images/saree/black1.jpg";
import saree4 from "../assets/images/saree/blue.jpg";
import saree5 from "../assets/images/saree/coatbluose.jpg";
import saree6 from "../assets/images/saree/ggolden.jpg";
import saree7 from "../assets/images/saree/golden.jpg";
import saree8 from "../assets/images/saree/green.jpg";
import saree9 from "../assets/images/saree/lightgolden.jpg";
import saree10 from "../assets/images/saree/pink2.jpg";
import saree11 from "../assets/images/saree/pink11.jpg";
import saree12 from "../assets/images/saree/purple1.jpg";
import saree13 from "../assets/images/saree/sky.jpg";
import saree14 from "../assets/images/saree/yellow.jpg";

const sarees = [
  {
    title: "Black Embroidered Saree",
    image: saree1,
    description: "A rich black saree adorned with intricate embroidery — timeless, bold, and perfect for evening elegance.",
  },
  {
    title: "Beautiful Blue Black Saree",
    image: saree2,
    description: "A stunning blend of blue and black hues with subtle shimmer — where mystery meets grace.",
  },
  {
    title: "Premium Black Saree",
    image: saree3,
    description: "Elevate your style with this classic black premium saree featuring luxe textures and a refined drape.",
  },
  {
    title: "Elegance Blue Saree",
    image: saree4,
    description: "Royal blue finesse with elegant detailing — the definition of serene sophistication.",
  },
  {
    title: "Draping Outfit With Blazer",
    image: saree5,
    description: "A modern take on tradition — fusion saree with a tailored blazer for bold fashionistas.",
  },
  {
    title: "Premium Embroidered Saree",
    image: saree6,
    description: "An exclusive piece showcasing fine embroidery work on a soft silhouette — pure handcrafted charm.",
  },
  {
    title: "Silk Peacock Design Saree",
    image: saree7,
    description: "Luxurious silk saree featuring regal peacock motifs — a tribute to traditional artistry.",
  },
  {
    title: "Armani Foil Silk Saree",
    image: saree9,
    description: "Sleek and contemporary, this Armani foil silk saree radiates metallic elegance for grand occasions.",
  },
  {
    title: "Pink Net Saree",
    image: saree10,
    description: "A delicate pink net saree with shimmer accents — soft, feminine, and flowy for special celebrations.",
  },
  {
    title: "Handwork Saree",
    image: saree11,
    description: "Crafted to perfection, this saree flaunts exquisite hand embroidery for a truly bespoke touch.",
  },
  {
    title: "Velvet Saree",
    image: saree12,
    description: "Opulent velvet fabric meets deep hues — ideal for winter weddings and regal nights.",
  },
  {
    title: "Handwork Pink Saree",
    image: saree13,
    description: "A romantic pink saree detailed with hand embroidery — the essence of handcrafted luxury.",
  },
  {
    title: "Red Yellow Charm",
    image: saree14,
    description: "A vibrant fusion of red and yellow — energetic, joyful, and full of cultural flair.",
  },
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
        Designer Sarees
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Grace woven in every thread — discover our collection of timeless sarees crafted for elegance, tradition, and charm.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={scrollToSarees}
        className="bg-gradient-to-r from-[#B22222] to-[#D4AF37] text-white px-8 py-3 rounded-full shadow-md hover:from-[#98131f] hover:to-[#c9a737] transition-all"
      >
        Explore Sarees
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
