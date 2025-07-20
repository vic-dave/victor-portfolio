// src/components/Hero.jsx
import { useEffect } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

function Hero() {
  useEffect(() => {
    const typed = new Typed('.typed-text', {
      strings: [
        'I build software 💻',
        'I simplify tech through teaching 🎓',
        'I live to please Jesus ✝️',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
    });

    // Scroll smoothly to hero section on load
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-4 pt-24"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/tech.jpg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.img
          src="/victor.jpeg"
          alt="Victor"
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-xl border-4 border-white mb-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Typing Text with Fade In */}
        <motion.h1
          className="text-white text-3xl md:text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hi, I’m Victor
        </motion.h1>

        <motion.p
          className="text-white text-lg md:text-xl max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="typed-text"></span>
        </motion.p>

        <motion.a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          View My Projects
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
