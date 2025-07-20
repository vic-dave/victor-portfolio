import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Abdulrahman Yusuf",
    role: "Classmate, Kaduna Polytechnic",
    quote:
      "Victor has a rare gift for making complex topics easy to understand. His tutorials helped our whole class, and many of us wouldn’t have passed without him. He’s not just a great coder, but a great teacher too.",
  },
  {
    name: "Joyce Michael",
    role: "Junior Developer",
    quote:
      "Before meeting Victor, I was struggling with Java. But his patience, clarity, and constant encouragement changed everything. He made me fall in love with programming.",
  },
  {
    name: "Brother Chinedu",
    role: "Youth Fellowship Leader",
    quote:
      "Victor's dedication in our care group and technical media team is inspiring. He combines faith, skill, and humility in a way that’s rare to find. You can always count on him.",
  },
  {
    name: "Daniel Eze",
    role: "Startup Founder",
    quote:
      "Working with Victor on our startup’s web platform was a smooth and professional experience. He understood what we wanted and delivered even better. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-3xl font-bold text-center text-emerald-700 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What People Say
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <h4 className="font-semibold text-emerald-700">
                {testimonial.name}
              </h4>
              <span className="text-sm text-gray-500">{testimonial.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
