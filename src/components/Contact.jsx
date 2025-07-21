import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(null); // {type: 'success'|'error', text: ''}
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_8np6rks",
        "template_hk6jo3l",
        form.current,
        "1EmZ6MOOLET22WaUF"
      )
      .then(
        () => {
          setMessage({ type: "success", text: "✅ Message sent successfully!" });
          setLoading(false);
          e.target.reset();

          // Auto-dismiss after 5 seconds
          setTimeout(() => setMessage(null), 5000);
        },
        () => {
          setMessage({ type: "error", text: "❌ Failed to send. Please try again later." });
          setLoading(false);
          setTimeout(() => setMessage(null), 5000);
        }
      );
  };

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
            ref={form}
            onSubmit={sendEmail}
            className="bg-white p-6 rounded-xl shadow-lg space-y-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>
            <div className="relative">
              <FaPaperPlane className="absolute left-3 top-3 text-gray-400" />
              <textarea
                rows="4"
                name="message"
                required
                placeholder="Your Message"
                className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <AnimatePresence>
              {message && (
                <motion.p
                  key="feedback"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`text-center pt-2 font-medium ${
                    message.type === "success" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {message.text}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
