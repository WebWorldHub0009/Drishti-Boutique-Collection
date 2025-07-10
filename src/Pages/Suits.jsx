import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaWhatsapp } from "react-icons/fa";
import HeroBG from "../assets/images/gallery/bg.jpg";

// Suit Images
import flower from "../assets/images/suit/flower.jpg";
import green from "../assets/images/suit/green.jpg";
import pink from "../assets/images/suit/pink.jpg";
import red from "../assets/images/suit/red.jpg";
import velvet from "../assets/images/suit/velvet.jpg";
import white from "../assets/images/suit/white.jpg";
import yellow from "../assets/images/suit/yellow.jpg";

const suits = [
  {
    title: "Floral Fantasy Suit",
    image: flower,
    description:
      "A dreamy georgette suit adorned with blooming floral embroidery — perfect for festive mornings and breezy celebrations.",
  },
  {
    title: "Floral Green Suit",
    image: green,
    description:
      "Elegant green suit featuring delicate floral threadwork and a complementing dupatta — ideal for traditional gatherings and evening events.",
  },
  {
    title: "Pastel Pink Perfection",
    image: pink,
    description:
      "Soft pastel pink suit with scalloped lace borders and a light chiffon dupatta — designed for mehendi, roka, and day functions.",
  },
  {
    title: "Classic Red Patiyala Suit",
    image: red,
    description:
      "Rich red Patiyala suit enhanced with zari, gotta patti, and traditional detailing — a bold pick for pre-wedding rituals.",
  },
  {
    title: "Beautiful Sequence Suit",
    image: velvet,
    description:
      "Plush velvet suit in deep maroon featuring intricate sequin and zardosi accents — a royal ensemble for winter weddings.",
  },
  {
    title: "Pearl White Grace Suit",
    image: white,
    description:
      "Graceful white suit with elegant chikankari embroidery and sheer dupatta — minimalist, divine, and timelessly chic.",
  },
  {
    title: "Yellow Hot Pink Suit",
    image: yellow,
    description:
      "A vibrant combo of yellow and hot pink with playful mirror work — made for haldi, sangeet, and sunny-day events.",
  },
];


export default function DesignerSuit() {
  const [modal, setModal] = useState(null);
  const sectionRef = useRef(null);

  const scrollToSuits = () => sectionRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* HERO SECTION */}
     <section className="relative h-[75vh] w-full overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center scale-110"
    style={{ backgroundImage: `url(${HeroBG})` }}
  />
  <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/50 to-black/75" />
  <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
    <div>
      <motion.h1
        className="text-4xl md:text-6xl font-[Great_Vibes] text-[#D4AF37] mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Designer Suit Collection
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        From regal Patiala to elegant pastels – experience the art of tradition, comfort & couture stitched together.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={scrollToSuits}
        className="bg-gradient-to-r cursor-pointer from-[#B22222] to-[#D4AF37] text-white px-8 py-3 rounded-full shadow-md hover:from-[#98131f] hover:to-[#c9a737] transition-all"
      >
        Explore Suits
      </motion.button>
    </div>
  </div>
</section>


      {/* SUIT GALLERY */}
      <section
        ref={sectionRef}
        className="py-16 px-4 md:px-12 bg-gradient-to-b from-[#FAFAF0] via-[#F5F5DC] to-[#F3DECC]"
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl font-[Great_Vibes] text-[#B22222] mb-2">
            Elegance in Every Stitch
          </h2>
          <p className="text-[#0B1F3A] text-lg italic">
            "Celebrate every moment with handcrafted beauty."
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-6 max-w-7xl mx-auto">
          {suits.map((suit, idx) => (
            <motion.div
              key={idx}
              className="break-inside-avoid rounded-3xl overflow-hidden bg-white/50 shadow-xl backdrop-blur-md border border-[#B22222]/20 group relative cursor-pointer hover:shadow-2xl transition duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setModal(suit)}
            >
              <img
                src={suit.image}
                alt={suit.title}
                className="w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#B22222] mb-1">
                  {suit.title}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-2">{suit.description}</p>
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
                className="w-full h-full object-cover"
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
