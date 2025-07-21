import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-primary font-bold text-xl flex items-center gap-2">
          <FaUser className="text-secondary" />
          Victor David
        </h1>

        {/* Desktop Menu */}
        <div className="space-x-6 text-gray-700 font-medium hidden md:flex">
          <a href="#hero" className="hover:text-primary transition">Home</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#resume" className="hover:text-primary transition">Resume</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#testimonials" className="hover:text-primary transition">Testimonials</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl text-gray-700 cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg px-6 py-6 space-y-5 text-center shadow-2xl rounded-b-2xl transition-all duration-300">
          <a href="#hero" className="block text-gray-800 hover:text-primary" onClick={closeMenu}>Home</a>
          <a href="#about" className="block text-gray-800 hover:text-primary" onClick={closeMenu}>About</a>
          <a href="#resume" className="block text-gray-800 hover:text-primary" onClick={closeMenu}>Resume</a>
          <a href="#projects" className="block text-gray-800 hover:text-primary" onClick={closeMenu}>Projects</a>
          <a href="#testimonials" className="block text-gray-800 hover:text-primary" onClick={closeMenu}>Testimonials</a>
          <a href="#contact" className="block text-gray-800 hover:text-primary" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
