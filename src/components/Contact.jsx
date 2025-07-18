import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-emerald-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-emerald-600 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">yourname@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhone className="text-emerald-600 mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+234 812 345 6789</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-emerald-600 mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">Kaduna, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Contact Form (Optional – for future functionality) */}
          <form className="bg-white p-6 rounded-lg shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded p-2 focus:outline-emerald-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded p-2 focus:outline-emerald-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded p-2 focus:outline-emerald-500"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
