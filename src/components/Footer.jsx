import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-10">
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Victor David. All rights reserved.
          </p>

          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/victordavid" // Update your real GitHub username
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transform hover:scale-110 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/victordavid" // Update your real LinkedIn
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transform hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/victordavid" // Update your real Twitter/X handle
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transform hover:scale-110 transition"
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
