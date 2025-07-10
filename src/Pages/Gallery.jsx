import React, { useState } from "react";
import GalleryHero from "../Components/GalleryHero";
import { Lightbox } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";

// Images
import img1 from "../assets/images/saree/bblacks.jpg";
import img2 from "../assets/images/saree/bblue.jpg";
import img3 from "../assets/images/saree/golden.jpg";
import img4 from "../assets/images/saree/pink.jpg";
import img5 from "../assets/images/saree/purple.jpg";
import img6 from "../assets/images/suit/flower.jpg";
import img7 from "../assets/images/suit/green.jpg";
import img8 from "../assets/images/suit/red.jpg";
import img9 from "../assets/images/suit/pink.jpg";
import img10 from "../assets/images/suit/velvet.jpg";
import img11 from "../assets/images/lehnga/black.jpg";
import img12 from "../assets/images/lehnga/brown.jpg";
import img13 from "../assets/images/lehnga/gray.jpg";
import img14 from "../assets/images/lehnga/green.jpg";
import img15 from "../assets/images/lehnga/red.jpg";
import img16 from "../assets/images/gown/b1.jpg";
import img17 from "../assets/images/gown/blue.jpg";
import img18 from "../assets/images/gown/gray.jpg";
import img19 from "../assets/images/gown/green.jpg";
import img20 from "../assets/images/gown/silver.jpg";
import img21 from "../assets/images/blouse/b6.jpg";
import img22 from "../assets/images/blouse/b5.jpg";
import img23 from "../assets/images/blouse/b7.jpg";
import img24 from "../assets/images/blouse/b8.jpg";
import img25 from "../assets/images/dress/d5.jpg";

// Corrected variable name
const galleryImages = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
  { src: img13 },
  { src: img14 },
  { src: img15 },
  { src: img16 },
  { src: img17 },
  { src: img18 },
  { src: img19 },
  { src: img20 },
  { src: img21 },
  { src: img22 },
  { src: img23 },
  { src: img24 },
  { src: img25 },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <GalleryHero />

      <section className="w-full bg-gradient-to-b from-[#FAFAF0] via-[#F5F5DC] to-[#F3DECC] py-8 px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-[Great_Vibes] text-[#B22222] mb-4 leading-snug">
            A Glimpse Into Our World of Elegance
          </h2>
          <p className="text-lg md:text-xl text-[#0B1F3A] font-light">
            Discover timeless styles, crafted with passion & heritage.
          </p>
          <div className="w-24 h-[3px] bg-[#D4AF37] mx-auto mt-4"></div>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl shadow-2xl break-inside-avoid group relative cursor-pointer"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={img.src}
                alt={`Gallery item ${i + 1}`}
                className="w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={galleryImages}
            index={index}
            plugins={[Captions]}
          />
        )}
      </section>
    </>
  );
};

export default Gallery;
