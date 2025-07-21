import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(null); // { type: 'success'|'error', text: '' }
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
          setMessage({ type: "success", text: "Message sent successfully!" });
          setLoading(false);
          e.target.reset();
          setTimeout(() => setMessage(null), 5000);
        },
        () => {
          setMessage({ type: "error", text: "Failed to send message. Try again." });
          setLoading(false);
          setTimeout(() => setMessage(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {message && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className={`fixed z-50 top-6 right-6 md:right-6 left-1/2 md:left-auto transform md:-translate-x-0 -translate-x-1/2 shadow-xl px-5 py-3 rounded-lg text-white flex items-center gap-3 transition-all
              ${message.type === "success" ? "bg-emerald-600" : "bg-red-500"}
            `}
          >
            {message.type === "success" ? (
              <AiOutlineCheckCircle className="text-2xl animate-bounce" />
            ) : (
              <AiOutlineCloseCircle className="text-2xl animate-bounce" />
            )}
            <span className="font-medium">{message.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

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
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
