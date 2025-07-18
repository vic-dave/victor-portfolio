import { FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-primary font-bold text-xl flex items-center gap-2">
          <FaUser className="text-secondary" />
          Victor David
        </h1>
        <div className="space-x-6 text-gray-700 font-medium hidden md:block">
          <a href="#hero" className="hover:text-primary transition">Home</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
