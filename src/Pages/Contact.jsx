import React from 'react';
import ContactHero from '../Components/OrderHero';
import { HiMap, HiPhone } from 'react-icons/hi';
import { AiOutlineAim } from 'react-icons/ai';
import MapSection from '../Components/MapSection';

function Contact() {
  return (
    <>
      <ContactHero />
      <section className="w-full bg-gradient-to-br from-[#FAFAF0] via-[#F5F5DC] to-[#F3DECC] font-sans py-1">
        {/* Hero Section */}
        {/* <div className="w-full bg-[#c72d2d] text-white text-center px-6 py-20 relative overflow-hidden">
          <h1 className="text-5xl md:text-6xl font-[Great_Vibes] mb-4">We’d Love To Hear From You</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Whether you have a question about rentals, fittings, or anything else — our team is ready to assist.
          </p>
          <div className="absolute w-64 h-64 bg-white opacity-20 rounded-full bottom-[-80px] right-[-80px] z-0"></div>
        </div> */}

        {/* Contact Box */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl mt-[-60px] z-10 relative flex flex-col md:flex-row overflow-hidden px-6 md:px-12 py-12 md:py-16">
          {/* Left Info */}
          <div className="bg-[#B22222] text-white px-8 py-12 relative md:w-1/2 w-full rounded-2xl md:rounded-r-none">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-white/90 text-base mb-6">
              We’re here to help and make your event unforgettable.
            </p>

            <div className="flex items-start gap-4 text-base mb-4">
              <HiPhone className="mt-1 text-white text-2xl" />
              <div>
                9971446909 (Call) <br /> 9811676755 (WhatsApp)
              </div>
            </div>

            <div className="flex items-start gap-4 text-base mb-4">
              <AiOutlineAim className="mt-1 text-white text-2xl" />
              <div>
                yughpal@gmail.com <br />
                info@drishtiboutiquecollection.com <br />
                drishtiboutiquecollection@gmail.com
              </div>
            </div>

            <div className="flex items-start gap-4 text-base mb-4">
              <HiMap className="mt-1 text-white text-2xl" />
              <div>
                K-3/215, Near By Satya Hospital, Pipal Road, Mohan Garden-110059
              </div>
            </div>

            <p className="text-white/80 text-sm mt-4">
              Owner: Yogesh Leela Pal <br />
              <a href="https://www.facebook.com/share/16exX8Fbyc/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D4AF37]">
                Facebook
              </a> |{" "}
              <a href="https://youtube.com/@drishti7064?si=Ey8Bzdldq7xbnRSW" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D4AF37]">
                YouTube
              </a>
            </p>

            <div className="absolute w-80 h-80 bg-white opacity-20 rounded-full bottom-[-100px] right-[-100px] z-0"></div>
          </div>

          {/* Right Form */}
          <div className="px-8 py-12 md:w-1/2 w-full bg-gradient-to-br from-[#FAFAF0] via-[#F5F5DC] to-[#F3DECC] rounded-2xl">
            <form
              className="w-full"
              action="https://formsubmit.co/info@drishtiboutiquecollection.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://drishtiboutiquecollection.com/thank-you" />

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1">
                  <label className="block text-lg text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full border-b-2 border-gray-300 focus:border-[#B22222] outline-none py-3 text-base"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-lg text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border-b-2 border-gray-300 focus:border-[#B22222] outline-none py-3 text-base"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-lg text-gray-700 mb-2">Your Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help you?"
                  className="w-full border-b-2 border-gray-300 focus:border-[#B22222] outline-none py-3 text-base"
                />
              </div>

              <div className="mb-8">
                <label className="block text-lg text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Write your message here"
                  className="w-full border-b-2 border-gray-300 focus:border-[#B22222] outline-none py-3 text-base resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#B22222] to-[#D4AF37] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-[#98131f] hover:to-[#c9a737] transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <MapSection/>
    </>
  );
}

export default Contact;
