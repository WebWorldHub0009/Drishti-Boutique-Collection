import React from "react";

const MapSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5f2ef] via-[#e9dbd5] to-[#f3decc] py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-6xl font-[Great_Vibes] text-[#B21B27] mb-4">
          "Find Us Where Quality Meets Trust"
        </h2>
        <p className="text-lg md:text-xl text-[#0B1F3A]">
          Visit our office or reach out anytime — we’re here for you
        </p>
      </div>

      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#B21B27]/30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112067.99095655564!2d76.95685859270955!3d28.62602398200861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d05c3abe8057b%3A0xe4234a5727dfe63d!2sShop%20No%20F%2C%201%20Gali%20no%208%2C%20Pipal%20Wala%20Rd%2C%20opp.%20Panchsheel%20hospital%2C%20Mohan%20Garden%2C%20Uttam%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110059!3m2!1d28.626048899999997!2d77.03926!5e0!3m2!1sen!2sin!4v1751887840432!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;

