import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaSearchLocation,
  FaHome,
  FaFire,
  FaImages,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import logo from "../assets/logo12.png";
import bgFooter from "../assets/rbg.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative text-white px-6 md:px-10 pt-15 pb-10 font-sans font-semibold overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center "
        style={{ backgroundImage: `url(${bgFooter})` }}
      />

      {/* Glow effects */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-[#B22222]/10 blur-[130px] opacity-20 rounded-full -z-10" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-[#D4AF37]/10 blur-[150px] opacity-20 rounded-full -z-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm relative z-10">
        {/* About */}
        <div className="flex flex-col relative top-[20px] ">
          <img src={logo} alt="Drishti Boutique Logo" className="w-[200px] md:w-[260px] text-white mb-5 relative right-5" />
          <h4 className="font-bold mb-2 text-2xl">About Drishti Boutique</h4>
          <p className="leading-relaxed">
            Drishti Boutique brings you premium ethnic and fusion wear on rent — from elegant lehengas and sarees to trendy western dresses.
            We redefine affordable luxury for your special occasions.
          </p>
          <div className="mt-4">
            <a
              href="https://share.google/yAjSxMlWUP3DldZz1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-[#B22222] text-white rounded hover:bg-[#D4AF37] hover:text-white transition duration-300 text-sm font-medium"
            >
              JustDial Listing
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-2xl mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              ["Home", "/", <FaHome />],
              ["Royal-Pick", "/royal-pick", <FaFire />],
              ["Gallery", "/gallery", <FaImages />],
              ["About", "/about", <FaInfoCircle />],
              ["Contact", "/contact", <FaPhoneAlt />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-bold text-2xl">Emails</h4>
          <ul className="mt-2 space-y-2">
            {[
              "Info@drishtiboutiquecollection.com",
              "Drishtiboutiquecollection@gmail.com",
            ].map((email, i) => (
              <li key={i}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-2 hover:text-[#D4AF37] transition duration-300"
                >
                  <FaEnvelope className="text-[#D4AF37]" />
                  <span>{email}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Collection */}
        <div>
          <h4 className="font-bold text-2xl mb-4">Our Collection</h4>
          <ul className="space-y-2">
            {[
              "Designer Suits",
              "Bridal Lehengas",
              "Graceful Sarees",
              "Western Party Dresses",
              "Ethnic Sets",
              "Gowns & More",
            ].map((svc, i) => (
              <li key={i}>
                <Link
                  to="/trending"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  {svc}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & Contact */}
        <div>
          <h4 className="font-bold text-2xl mb-4">Contact Numbers</h4>
          <div className="space-y-2 mb-4">
            <a
              href="tel:+919811676755"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaPhoneAlt className="text-white" />
              +91 9811676755
            </a>
            <a
              href="tel:+919971446909"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaPhoneAlt className="text-white" />
              +91 9971446909
            </a>
          </div>

          <h4 className="font-bold text-2xl mb-4">Our Address</h4>
          <address className="not-italic leading-relaxed mb-4">
            Shop No F, 1 Gali no 8<br />
            Pipal Wala Rd, opp. Panchsheel hospital<br />
            Mohan Garden, Uttam Nagar<br />
            New Delhi, Delhi 110059
          </address>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex justify-center items-center">
              <div>
            <Translator />
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <a
              href="https://www.instagram.com/drishtiboutiquecollection?igsh=M2hwMGtsNm9pMG95"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#D4AF37] transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/16exX8Fbyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#D4AF37] transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://youtube.com/@drishti7064?si=Ey8Bzdldq7xbnRSW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#D4AF37] transition"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://share.google/yAjSxMlWUP3DldZz1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#D4AF37] transition"
            >
              <FaSearchLocation size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-white/70 border-t border-[#DDD6C5] pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p className="text-white">© {new Date().getFullYear()} Drishti Boutique. All rights reserved.</p>
        <p className="text-white">
          Designed & Developed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-[#d1b868] transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
