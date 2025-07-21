// src/components/About.jsx
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import profilePic from "/about.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-emerald-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Grid Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={profilePic || "/fallback.jpg"}
              alt="Victor David"
              className="w-64 h-64 md:w-72 md:h-72 rounded-full shadow-xl object-cover border-4 border-emerald-600"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              I’m <span className="font-semibold text-emerald-700">Victor David</span> — a software developer, educator, and visionary founder of <strong>TailorPro</strong>. With a passion for solving real-world problems through tech, I believe TailorPro is more than just an app — it’s a platform destined to make generational impact across Africa’s fashion and tailoring industry.
              <br /><br />
              My journey started in school, where I helped classmates understand complex topics through simple explanations. That drive grew into building solutions that now serve hundreds — from a <strong>SUG Voting App</strong> to a <strong>SIWES Tracker</strong>, and of course, TailorPro. I'm committed to creating tools that empower others — and leading with excellence, faith, and purpose in everything I do.
            </p>

            {/* Highlights */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Highlights:
              </h3>
              <ul className="space-y-3 text-gray-800 text-base">
                {[
                    "Graduated as <strong>Best Student</strong> – Computer Science, Kaduna Polytechnic",
                    "Founder of <strong>TailorPro</strong>: Digitizing fashion businesses across Africa",
                    "Built impactful platforms like the <strong>SUG Voting App</strong> and <strong>SIWES Tracker</strong>",
                    "Known as <strong>“Mr. Tutorials”</strong> for simplifying complex tech into practical learning",
                    "Mentored dozens of aspiring developers and entrepreneurs through hands-on training"
                  ].map((text, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheckCircle className="text-emerald-500 mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: text.replace(/(TailorPro|SUG Voting App|Siwes Tracker|Best Student|“Mr. Tutorials”)/g, '<strong>$1</strong>') }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm text-gray-600 mb-2 font-semibold uppercase tracking-wide">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2 text-sm text-white">
                {[
                  "Java",
                  "Firebase",
                  "PHP",
                  "Tailwind",
                  "React",
                  "MySQL",
                  "JavaScript",
                  "XML",
                  "HTML",
                  "CSS",
                ].map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-emerald-600 px-3 py-1 rounded-full hover:bg-emerald-700 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
