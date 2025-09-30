import React from "react";

import img1 from "../assets/images/category/orange.png";
import img2 from "../assets/images/category/d5.png";
import img3 from "../assets/images/category/golden.png";
import img4 from "../assets/images/category/red.png";
import img5 from "../assets/images/category/b1.png";
import img6 from "../assets/images/category/pink2.png";
import img7 from "../assets/images/category/bgc.png";
import img8 from "../assets/images/category/bg.png";
// import img10 from "../assets/images/soap/soap1.jpg";
import img9 from "../assets/images/dupatta/gop1p.png";
import img11 from "../assets/images/dupatta/d3p.png";

const categories = [
  { name: "Suits", quote: "Elegance in every stitch", image: img1, link: "/collection/suits" },
  { name: "Dress", quote: "Style that defines you", image: img2, link: "/collection/dresses" },
  { name: "Gowns", quote: "Grace for every occasion", image: img3, link: "/collection/gowns" },
  { name: "Lehengas", quote: "Where tradition meets glamour", image: img4, link: "/collection/party-wear-lehenga" },
  { name: "Blouse", quote: "Perfect fit, perfect style", image: img5, link: "/collection/designer-blouses" },
  { name: "Saree", quote: "Drape your elegance", image: img6, link: "/collection/designer-sarees" },
  { name: "Custom Saree", quote: "Made just for you", image: img7, link: "/collection/customised-colours-sarees-avaliable" },
  { name: "Custom Blouse", quote: "Your style, your way", image: img8, link: "/collection/customised-colours-blouses-avaliable" },
{ name: "Gopi Dress", quote: "Tradition meets elegence", image: img9, link: "/collection/gopi-dresess" },
{ name: "Dupatta", quote: "Traditional Dupattas", image: img11, link: "/collection/dupatta" },
 
];


export default function ShopByCategory() {
  return (
    <section className="py-10 bg-[#f1f1e4] text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold font-[poppins] text-red-700 mb-2">
        Explore Your Style
      </h2>
      <p className="text-gray-500 mb-10">
        Choose from our exclusive categories crafted with love
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16">
        {categories.map((cat, index) => (
          <a
            key={index}
            href={cat.link}
            className="group flex flex-col items-center"
          >
            {/* Circle Image Container */}
            <div className="w-45 h-45 sm:w-50 sm:h-50 md:w-70 md:h-70 rounded-full overflow-hidden border-4 border-red-500 shadow-md group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300 flex items-center justify-center "
             style={{
        background: "linear-gradient(135deg, #ffffff 0%, #ffe6e9 80%, #ffccd2 100%)"
     }}>
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <h3 className="mt-2 md:text-xl sm:text-lg font-semibold text-gray-800">
              {cat.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">{cat.quote}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
