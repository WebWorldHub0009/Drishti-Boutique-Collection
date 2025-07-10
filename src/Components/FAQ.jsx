import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is Drishti’s core service?",
    answer:
      "We provide premium ethnic wear on rent, combining tradition with contemporary style for weddings, events, and special occasions."
  },
  {
    question: "Do you cater to both men and women?",
    answer:
      "Yes! Our collection includes attire for men, women, and kids, suitable for weddings, parties, and festive occasions."
  },
  {
    question: "Where is Drishti located?",
    answer:
      "We are based in Delhi NCR, offering services across India with delivery and pickup options for your convenience."
  },
  {
    question: "How do I book an outfit?",
    answer:
      "Contact us via our website, WhatsApp, or phone to book a trial or reserve your outfit. We’ll guide you through the process."
  }
];

const FAQItem = ({ faq, index, activeIndex, setActiveIndex }) => {
  const isActive = index === activeIndex;
  return (
    <div
      className={`border rounded-2xl shadow-sm transition-all duration-300 
        ${isActive ? 'bg-[#fdf9f6] border-[#D4AF37] shadow-md' : 'bg-white border-[#ecd9c6]'}`}
    >
      <button
        onClick={() => setActiveIndex(isActive ? null : index)}
        className="w-full flex justify-between items-center text-left p-5 font-medium text-lg text-[#B22222] hover:bg-[#faf4f0] rounded-2xl transition"
      >
        <span>{faq.question}</span>
        {isActive ? (
          <FaChevronUp className="text-[#D4AF37]" />
        ) : (
          <FaChevronDown className="text-[#D4AF37]" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isActive ? "max-h-96 opacity-100 p-5 pt-0" : "max-h-0 opacity-0 p-0"
        }`}
      >
        <p className="text-[#5e5e5e] text-base leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-[#fffdfa] py-20 px-6 sm:px-16 font-[Inter]">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#B22222]">
          Frequently Asked <span className="text-[#D4AF37]">Questions</span>
        </h2>
        <p className="mt-4 text-[#5e5e5e] text-lg max-w-2xl mx-auto">
          Get answers about our premium ethnic wear rentals and how Drishti can make your occasion unforgettable.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
}
