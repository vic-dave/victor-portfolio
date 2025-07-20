import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import profilePic from "/about.png"; // Replace with your image path

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-emerald-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={profilePic}
              alt="Victor David"
              className="w-64 h-64 rounded-full shadow-lg object-cover border-4 border-emerald-600"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-5">
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm Victor David, a passionate developer and educator. My Tech journey begin in school From helping
              my classmates code in ND1 to launching powerful apps like TailorPro and
              an Entrepreneurial Training Platform — I turn complex tech into clear solutions.
            </p>

            {/* Highlights */}
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-emerald-500 mt-1" />
                <span>Graduated Best Student – Computer Science, Kaduna Polytechnic</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-emerald-500 mt-1" />
                <span>Built real-world platforms – TailorPro, SUG Voting App, Training System</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-emerald-500 mt-1" />
                <span>Known as “Mr. Tutorials” for simplifying code and mentoring</span>
              </li>
            </ul>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm text-gray-600 mb-1 font-semibold">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 text-sm text-white">
                <span className="bg-emerald-600 px-2 py-1 rounded">Java</span>
                <span className="bg-emerald-600 px-2 py-1 rounded">Firebase</span>
                <span className="bg-emerald-600 px-2 py-1 rounded">PHP</span>
                <span className="bg-emerald-600 px-2 py-1 rounded">Tailwind</span>
                <span className="bg-emerald-600 px-2 py-1 rounded">React</span>
                <span className="bg-emerald-600 px-2 py-1 rounded">MySQL</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
