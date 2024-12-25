import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-[#567bb5] text-white py-8 text-center">
      <div className="space-x-10">
        <a href="/contact-us" className="hover:underline">
          Contact Us
        </a>
        <a href="/faq" className="hover:underline">
          FAQ
        </a>
        <a href="/about" className="hover:underline">
          {" "}
          {/* Correct link */}
          About Us
        </a>
      </div>
      <div className="flex justify-center space-x-6 mt-6">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white text-2xl hover:text-[#ff3131]" />
        </a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-white text-2xl hover:text-[#ff3131]" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-white text-2xl hover:text-[#ff3131]" />
        </a>
      </div>
      <p className="mt-6">
        &copy; 2024 Little More Learning. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
