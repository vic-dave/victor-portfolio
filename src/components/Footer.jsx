import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaArrowUp,
} from "react-icons/fa";

import { useEffect, useState } from "react";

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-white pt-10">
      {/* Top border line */}
      <div className="border-t border-emerald-500/40" />

      {/* Scroll to top button */}
      {showTop && (
        <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-24 right-5 p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-500 transition-transform hover:scale-110 z-50"
      >
        <FaArrowUp />
      </button>      
      )}

      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Victor David. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap gap-5 text-xl">
          <a
            href="https://github.com/victordavid"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-emerald-400 hover:bg-gray-800 p-2 rounded-full transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/victordavid"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-emerald-400 hover:bg-gray-800 p-2 rounded-full transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/victordavid"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-emerald-400 hover:bg-gray-800 p-2 rounded-full transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/victordavid"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 hover:text-pink-400 hover:bg-gray-800 p-2 rounded-full transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@victordavid"
            aria-label="YouTube"
            target="_blank"
            rel="noreferrer"
            className="text-red-600 hover:text-red-800 hover:bg-gray-800 p-2 rounded-full transition-transform transform hover:scale-110"
          >
            <FaYoutube />
          </a>
          <a
            href="https://t.me/victordavid"
            aria-label="Telegram"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-300 hover:bg-gray-800 p-2 rounded-full transition-transform transform hover:scale-110"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
