import { FaGraduationCap, FaCode, FaTools, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-14 text-emerald-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Resume
        </motion.h2>

        {/* Education */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
            <FaGraduationCap className="text-emerald-600" /> Education
          </h3>
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-900">Kaduna Polytechnic</h4>
            <p className="text-gray-600 text-sm">ND in Computer Science (2022–2024)</p>
            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
              Graduated as best student in the department. Widely known as “Mr. Tutorials” for simplifying programming and teaching others passionately.
            </p>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
            <FaCode className="text-emerald-600" /> Experience & Projects
          </h3>
          <div className="space-y-5">
            {[{
              title: "SUG Voting App",
              tech: "React Native, Java, Firebase",
              desc: "Built a secure voting platform with admin dashboard, vote counts, and PDF result exports.",
            }, {
              title: "Online Entrepreneur Training Platform",
              tech: "PHP, MySQL, Tailwind",
              desc: "Developed a multi-role system for instructors, students, and admins. Features include quizzes, certifications, and lesson videos.",
            }, {
              title: "TailorPro Startup MVP",
              tech: "React, Node.js (in progress)",
              desc: "Designing a tech platform to digitally transform tailoring in Africa — appointments, measurements, CRM tools.",
            }].map((item, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.tech}</p>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
            <FaTools className="text-emerald-600" /> Skills & Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-800">
            {[
              "Java", "PHP", "Firebase", "Tailwind CSS", "MySQL",
              "React", "Git", "Teaching"
            ].map((skill, i) => (
              <span key={i} className="bg-emerald-100 px-3 py-2 rounded text-center font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-full shadow-md hover:bg-emerald-700 transition"
          >
            <FaDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
