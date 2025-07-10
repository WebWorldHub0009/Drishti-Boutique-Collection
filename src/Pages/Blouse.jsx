import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaWhatsapp } from "react-icons/fa";
import HeroBG from "../assets/images/gallery/bg.jpg";

// Images
import blouse1 from "../assets/images/blouse/b1.jpg";
import blouse2 from "../assets/images/blouse/b2.jpg";
import blouse3 from "../assets/images/blouse/b3.jpg";
import blouse4 from "../assets/images/blouse/b4.jpg";
import blouse5 from "../assets/images/blouse/b55.jpg";
import blouse6 from "../assets/images/blouse/b6.jpg";
import blouse7 from "../assets/images/blouse/b77.jpg";
import blouse8 from "../assets/images/blouse/b8.jpg";
import blouse9 from "../assets/images/blouse/b9.jpg";
import blouse10 from "../assets/images/blouse/b10.jpg";
import blouse11 from "../assets/images/blouse/b11.jpg";
import blouse12 from "../assets/images/blouse/b121.jpg";
import blouse13 from "../assets/images/blouse/b13.jpg";
import blouse14 from "../assets/images/blouse/b14.jpg";
import blouse15 from "../assets/images/blouse/b15.jpg";
import blouse16 from "../assets/images/blouse/b16.jpg";

const blouses = [
  {
    title: "Elegant Embroidery Work Blouse",
    image: blouse1,
    description: "A festive-ready blouse featuring intricate embroidery and shimmer – ideal for weddings and sangeet nights.",
  },
  {
    title: "Velvet Curved Neck Blouse",
    image: blouse2,
    description: "Luxurious velvet with a stylish curved neckline and golden accents – perfect for regal looks.",
  },
  {
    title: "Floral Embellished Curved Neck Blouse",
    image: blouse3,
    description: "A modern silhouette enhanced with floral detailing and a graceful curved neckline.",
  },
  {
    title: "Bridal Red Glam Embroidered Blouse",
    image: blouse4,
    description: "Heavily embellished with zardosi and beadwork – a true showstopper for bridal wear.",
  },
  {
    title: "Classic U-Neck Sequin Blouse",
    image: blouse5,
    description: "Timeless U-neckline paired with shimmering sequins and sheer sleeves – effortlessly chic.",
  },
  {
    title: "Sweetheart Neckline Blouse",
    image: blouse6,
    description: "A romantic silhouette with embroidery and a bold tie-back – elegance meets charm.",
  },
  {
    title: "Sweetheart Neck & Hem Designer Blouse",
    image: blouse7,
    description: "Trendy peplum hem meets traditional sweetheart neck – vibrant and unique.",
  },
  {
    title: "Black Zarkan Embellished Blouse",
    image: blouse8,
    description: "Statement black blouse adorned with Zarkan work – bold, edgy, and elegant.",
  },
  {
    title: "Royal Curved Neckline Blouse",
    image: blouse9,
    description: "A raw silk stunner with gold foil prints – radiating regal vibes for grand occasions.",
  },
  {
    title: "Modern Neck Design",
    image: blouse10,
    description: "Heritage-inspired neckline with bold embroidery and stylish layered sleeves.",
  },
  {
    title: "Striped Glam Statement Blouse",
    image: blouse11,
    description: "A minimalistic striped design with a boat neck and delicate pearl embellishments.",
  },
  {
    title: "V-Cut Modern Ethnic Blouse",
    image: blouse12,
    description: "Modern V-cut style fused with ethnic embroidery – fierce yet feminine.",
  },
  {
    title: "Pot Neck Back-Tie Blouse",
    image: blouse13,
    description: "Graceful pot neck blouse with sheer cape details – stunning for parties and receptions.",
  },
  {
    title: "Bold Backless Embroidered Blouse",
    image: blouse14,
    description: "Vibrant kutch work with deep back cut – perfect for that bold, ethnic statement.",
  },
  {
    title: "Velvet Scoop Neckline Blouse",
    image: blouse15,
    description: "Premium velvet with a scoop neckline and golden buti detailing – sheer elegance.",
  },
  {
    title: "V-Cut Zari Work Blouse",
    image: blouse16,
    description: "Sophisticated high-neck V-cut blouse with full sleeves and rich zari embroidery.",
  },
];


export default function DesignerBlouse() {
  const [modal, setModal] = useState(null);
  const scrollRef = useRef(null);

  const scrollToContent = () => scrollRef.current?.scrollIntoView({ behavior: "smooth" });

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
        Designer Blouses
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Where detail meets drama — explore handcrafted blouses that elevate every saree and silhouette.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={scrollToContent}
        className="bg-gradient-to-r from-[#B22222] to-[#D4AF37] text-white px-8 py-3 rounded-full shadow-md hover:from-[#98131f] hover:to-[#c9a737] transition-all"
      >
        Explore Collection
      </motion.button>
    </div>
  </div>
</section>


      {/* COLLECTION GRID */}
      <section ref={scrollRef} className="py-16 bg-gradient-to-b from-[#FAFAF0] via-[#F5F5DC] to-[#F3DECC] px-4 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-[Great_Vibes] text-[#B22222] mb-2">Elegance in Every Stitch</h2>
          <p className="text-[#0B1F3A] text-lg italic">"Handcrafted pieces designed to shine."</p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {blouses.map((item, idx) => (
            <motion.div
              key={idx}
              className="rounded-3xl overflow-hidden bg-white/40 shadow-lg backdrop-blur-md border border-[#B22222]/20 group relative cursor-pointer hover:shadow-2xl transition duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setModal(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#B22222] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700 line-clamp-2">{item.description}</p>
              </div>
              <div className="absolute top-3 right-3 bg-[#B22222]/80 text-white p-2 rounded-full shadow-lg">
                <FaHeart />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 max-w-4xl mx-auto text-center px-4">
          <p className="text-[#7A5C3D] text-lg md:text-xl italic">
            This is just a glimpse of our craftsmanship. We create countless unique designs using various fabrics, textures, and embroidery techniques – customized for your style and occasion.
          </p>
        </div>
      </section>

      {/* MODAL VIEW */}
     {modal && (
  <div className="fixed inset-0 bg-black/70 z-[1000] flex items-center justify-center p-6 backdrop-blur-md">
    <div className="bg-white max-w-5xl w-full rounded-3xl overflow-hidden shadow-xl relative grid grid-cols-1 md:grid-cols-2">
      
      {/* Left Image */}
      <div className="h-[200px] md:h-[450px] w-full">
        <img
          src={modal.image}
          alt={modal.title}
          className="w-full h-full object-fit"
        />
      </div>

      {/* Right Content */}
      <div className="px-8 py-2 flex flex-col justify-center text-center md:text-left h-[350px]">
        <button
          className="absolute top-4 right-4 text-[#B22222] text-3xl font-bold hover:text-[#98131f] transition"
          onClick={() => setModal(null)}
        >
          ×
        </button>
        <h3 className="text-3xl font-bold text-[#B22222] mb-4">{modal.title}</h3>
        <p className="text-gray-700 mb-6">{modal.description}</p>
        <a
          href="https://www.whatsapp.com/catalog/919811676755/?app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#B22222] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#98131f] transition"
        >
          <FaWhatsapp className="text-lg" /> Enquire Now
        </a>
      </div>
    </div>
  </div>
)}

    </>
  );
}
