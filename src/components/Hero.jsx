// src/components/Hero.jsx
import heroBg from '/tech.jpg';
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-4 pt-24"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/tech.jpg')" }} // 👈 Replace with your background
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.img
          src="/victor.jpeg" // 👈 Replace with your profile image
          alt="Victor"
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-xl border-4 border-white mb-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="text-white text-3xl md:text-5xl font-bold mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I’m Victor
        </motion.h1>

        <motion.p
          className="text-white text-lg md:text-xl max-w-xl mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I build software, simplify tech through teaching, and live to please Jesus.
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
