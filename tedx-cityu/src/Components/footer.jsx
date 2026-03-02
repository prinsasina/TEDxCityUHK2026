import React from "react";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 pb-16 text-center md:py-6 md:pb-12">
      <h3 className="text-[2rem] md:text-[3.5rem] mb-8">
        FOLLOW US!
      </h3>

      <div className="flex justify-center items-center gap-10 mb-8 md:gap-10 md:mb-8">
        <a
          href="https://www.instagram.com/tedxcityuhk/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
          className="text-white hover:text-[#e62b1e] transition-colors duration-300 flex items-center justify-center"
        >
          <Instagram size={40} />
        </a>
        <a
          href="https://www.linkedin.com/company/tedxcityuhongkong/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on LinkedIn"
          className="text-white hover:text-[#e62b1e] transition-colors duration-300 flex items-center justify-center"
        >
          <Linkedin size={40} />
        </a>
        <a
          href="https://www.facebook.com/TEDxCityUHK/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Facebook"
          className="text-white hover:text-[#e62b1e] transition-colors duration-300 flex items-center justify-center"
        >
          <Facebook size={40} />
        </a>
        <a
          href="https://youtube.com/@tedxcityuhongkong?si=zqA9FgialVaH8CGB"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on YouTube"
          className="text-white hover:text-[#e62b1e] transition-colors duration-300 flex items-center justify-center"
        >
          <Youtube size={40} />
        </a>
      </div>

      <p className="text-lg text-[rgb(147,141,140)] m-0 md:text-lg">
        Copyright© 2026 TEDxCityUHK
      </p>
    </footer>
  );
}
