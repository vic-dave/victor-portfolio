import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-emerald-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-emerald-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">vicdave888@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhone className="text-emerald-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+234 812 176 7040</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-emerald-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600">Kaduna, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            className="bg-white p-6 rounded-xl shadow-lg space-y-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
