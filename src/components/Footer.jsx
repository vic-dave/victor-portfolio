import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Victor David. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl hover:text-emerald-300 transition" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl hover:text-emerald-300 transition" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
            <FaTwitter className="text-xl hover:text-emerald-300 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
  }
  
  export default Footer
  