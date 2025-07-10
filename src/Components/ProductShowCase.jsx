import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Royal Red Lehenga",
    image: "", // Add actual image URL
    description: "A stunning lehenga with intricate zari work, perfect for weddings.",
  },
  {
    id: 2,
    title: "Elegant Gold Saree",
    image: "",
    description: "Classic gold saree with fine embroidery, ideal for festive occasions.",
  },
  {
    id: 3,
    title: "Designer Gown",
    image: "",
    description: "Modern gown blending tradition with contemporary flair.",
  },
  {
    id: 4,
    title: "Pastel Bridal Lehenga",
    image: "",
    description: "Soft pastel lehenga with delicate handwork for a dreamy bridal look.",
  },
  {
    id: 5,
    title: "Silk Saree",
    image: "",
    description: "Pure silk saree with timeless charm for elegant evenings.",
  },
  {
    id: 6,
    title: "Festive Anarkali",
    image: "",
    description: "Vibrant Anarkali perfect for celebrations and festive gatherings.",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#FFF8F3] via-[#FAECE5] to-[#FFF8F3] overflow-hidden relative">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-6xl font-[Great_Vibes] text-[#8B0000] mb-4 relative inline-block">
          Drishti Collection
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-[#8B0000]/10 select-none pointer-events-none">
            Collection
          </span>
        </h2>
        <p className="text-lg text-gray-700 italic max-w-2xl mx-auto">
          "Where every saree and lehenga tells a story of grace and tradition."
        </p>
        <div className="w-24 h-[3px] bg-[#D4AF37] mx-auto mt-4"></div>
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden mb-16">
        <Swiper spaceBetween={20} slidesPerView={1} loop autoplay={{ delay: 3000 }} modules={[Autoplay]}>
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <MobileProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-6 grid-rows-5 gap-6 max-w-7xl mx-auto mb-6">
        {products.map((product, index) => {
          const gridClass = index % 3 === 0 ? "col-span-2 row-span-3" : "col-span-2 row-span-2";
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer ${gridClass}`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/80 via-[#8B0000]/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold text-white mb-1">{product.title}</h3>
                <p className="text-gray-100 text-xs">{product.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <p className="text-lg text-gray-700 mb-2">
          Explore the full Drishti collection and rent your dream outfit today.
        </p>
        <Link to="/gallery">
          <button className="px-8 cursor-pointer py-3 bg-[#8B0000] text-white font-semibold rounded-full shadow-md hover:bg-[#6e0000] transition">
            View Gallery
          </button>
        </Link>
      </div>
    </section>
  );
}

function MobileProductCard({ product }) {
  return (
    <motion.div
      className="bg-[#8B0000]/10 backdrop-blur-lg border border-[#8B0000]/20 rounded-3xl shadow-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img src={product.image} alt={product.title} className="w-full h-[500px] object-cover" />
      <div className="p-4 bg-[#FFF8F3]">
        <h3 className="text-xl font-bold text-[#8B0000] mb-2">{product.title}</h3>
        <p className="text-gray-700 text-sm">{product.description}</p>
      </div>
    </motion.div>
  );
}
