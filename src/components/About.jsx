import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import profilePic from "/about.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-emerald-700"
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
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={profilePic}
              alt="Victor David"
              className="w-64 h-64 rounded-full shadow-xl object-cover border-4 border-emerald-600"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-5"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm <span className="font-semibold text-emerald-700">Victor David</span> — a developer, mentor, and faith-driven teacher. My tech journey began back in school, where I went from tutoring classmates to building impactful platforms like <strong>TailorPro</strong> and an <strong>Entrepreneurial Training Hub</strong>. Today, I focus on turning complex code into clear solutions — and helping others grow through it.
            </p>

            {/* Highlights */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Highlights:</h3>
              <ul className="space-y-3 text-gray-800 text-base">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-emerald-500 mt-1" />
                  <span>
                    Graduated as <strong>Best Student</strong> – Computer Science, Kaduna Polytechnic
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-emerald-500 mt-1" />
                  <span>
                    Built real-world platforms: <strong>TailorPro</strong>, <strong>SUG Voting App</strong>, <strong>Siwes Tracker</strong>, and more
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-emerald-500 mt-1" />
                  <span>
                    Known as <strong>“Mr. Tutorials”</strong> for simplifying tech and mentoring on campus
                  </span>
                </li>
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
