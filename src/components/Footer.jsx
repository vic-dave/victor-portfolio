import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-10">
      <div className="border-t border-emerald-600/30">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Victor David. All rights reserved.
          </p>

          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/victordavid"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 hover:bg-gray-700 p-2 rounded-full transition-transform duration-200 transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/victordavid"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 hover:bg-gray-700 p-2 rounded-full transition-transform duration-200 transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/victordavid"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 hover:bg-gray-700 p-2 rounded-full transition-transform duration-200 transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
