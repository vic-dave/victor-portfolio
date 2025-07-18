import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "TailorPro",
    image: "/images/tailorpro.png",
    description: "A digital tailoring platform for Africa with order management, measurements, and appointments.",
    technologies: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/your-tailorpro-repo",
    live: "https://tailorpro.vercel.app",
  },
  {
    title: "Online Training Platform",
    image: "/images/training-platform.png",
    description: "A skill development platform offering tech courses, certification, and quizzes.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/your-training-platform",
    live: "https://training-platform.com",
  },
  {
    title: "SUG Voting App",
    image: "/images/voting-app.png",
    description: "Android-based voting system for campus elections built with Firebase backend.",
    technologies: ["Java", "Firebase", "XML"],
    github: "https://github.com/your-voting-app",
    live: "https://voting-app.com",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-emerald-700">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              whileHover={{ scale: 1.02 }}
            >
              <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{proj.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">{proj.description}</p>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.technologies.map((tech, i) => (
                    <span key={i} className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelected(proj)}
                  className="text-emerald-700 font-medium hover:underline"
                >
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 w-[90%] md:w-[600px] shadow-xl relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
              <img src={selected.image} alt={selected.title} className="rounded mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-emerald-700">{selected.title}</h3>
              <p className="text-gray-700 mb-4">{selected.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-1">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((tech, i) => (
                    <span key={i} className="bg-emerald-100 text-emerald-700 text-sm px-2 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={selected.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
                >
                  Live Preview
                </a>
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded hover:bg-emerald-50"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
