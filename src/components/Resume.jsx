import { FaGraduationCap, FaCode, FaTools, FaDownload, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

export default function Resume() {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    html2pdf().set({
      margin: 0.5,
      filename: "Vincent_David_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }).from(element).save();
  };

  return (
    <section id="resume" className="py-20 bg-white" ref={resumeRef}>
      <div className="container mx-auto px-4 max-w-4xl relative">
        {/* Timeline vertical line */}
        <div className="absolute top-0 bottom-0 left-6 w-1 bg-emerald-200 hidden sm:block"></div>

        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-16 text-emerald-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Resume
        </motion.h2>

        {/* Timeline Items */}
        <div className="space-y-16 pl-8 sm:pl-14">

          {/* Education */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-8 top-1 sm:-left-12">
              <FaGraduationCap className="text-emerald-600 text-xl" />
            </div>
            <div className="bg-gray-100 p-5 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Kaduna Polytechnic</h3>
              <p className="text-sm text-gray-600">ND in Computer Science (2022–2024)</p>
              <p className="mt-2 text-sm text-gray-700">
                Graduated as the best student in the department. Widely known as “Mr. Tutorials” for simplifying programming and teaching others passionately.
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-8 top-1 sm:-left-12">
              <FaCode className="text-emerald-600 text-xl" />
            </div>
            <div className="bg-gray-100 p-5 rounded-lg shadow space-y-4">
              <div>
                <h4 className="font-semibold">SUG Voting App</h4>
                <p className="text-gray-600 text-sm">React Native, Java, Firebase</p>
                <p className="text-sm text-gray-700">
                  Developed a secure voting platform with admin dashboard, vote counts, and PDF result exports.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Online Entrepreneur Training Platform</h4>
                <p className="text-gray-600 text-sm">PHP, MySQL, Tailwind</p>
                <p className="text-sm text-gray-700">
                  Multi-role system for instructors, students, and admins with quizzes, certifications, and video content.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">TailorPro Startup MVP</h4>
                <p className="text-gray-600 text-sm">React, Node.js (In Progress)</p>
                <p className="text-sm text-gray-700">
                  Building a platform to digitize tailoring services — bookings, CRM tools, and measurement records.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-8 top-1 sm:-left-12">
              <FaTools className="text-emerald-600 text-xl" />
            </div>
            <div className="bg-gray-100 p-5 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Skills & Tools</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700">
                {[
                  "Java", "PHP", "Firebase", "Tailwind CSS", "MySQL", "React", "Git", "Teaching"
                ].map((skill, idx) => (
                  <span key={idx} className="bg-emerald-100 p-2 rounded text-center">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-8 top-1 sm:-left-12">
              <FaCertificate className="text-emerald-600 text-xl" />
            </div>
            <div className="bg-gray-100 p-5 rounded-lg shadow space-y-3">
              <div>
                <h4 className="font-semibold">Responsive Web Design</h4>
                <p className="text-gray-600 text-sm">freeCodeCamp (2023)</p>
              </div>
              <div>
                <h4 className="font-semibold">Java Programming Fundamentals</h4>
                <p className="text-gray-600 text-sm">Coursera – Duke University (2024)</p>
              </div>
              <div>
                <h4 className="font-semibold">Firebase for Web</h4>
                <p className="text-gray-600 text-sm">Google Developers Training (2024)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition"
          >
            <FaDownload />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
