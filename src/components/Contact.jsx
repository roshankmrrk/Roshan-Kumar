import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { CONTACT } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_lx88kz9", // ✅ Your Service ID
        "template_9ees3ur", // ✅ Your Template ID
        formData,
        "N9Wlq0Al8WnUc6b5y" // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus("Sent ✅");
          setFormData({ from_name: "", from_email: "", message: "" });
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.error("Error:", error);
          setStatus("Failed ❌");
        }
      );
  };

  return (
    <div className="border-t border-stone-800 pt-16 pb-20">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-semibold mb-10"
      >
        Get in Touch ✉️
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center tracking-tight leading-relaxed space-y-3 text-lg mb-10"
      >
        <p className="text-stone-300">{CONTACT.address}</p>
        <p className="text-stone-400 font-medium">{CONTACT.phoneNo}</p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          whileHover={{
            scale: 1.1,
            color: "#22d3ee",
            textShadow: "0px 0px 8px #22d3ee",
          }}
          className="inline-block mt-3 border-b border-stone-600 text-stone-200 transition-colors duration-300"
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto flex flex-col gap-4 text-stone-200"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-stone-900 border border-stone-700 focus:outline-none focus:border-cyan-400"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          value={formData.from_email}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-stone-900 border border-stone-700 focus:outline-none focus:border-cyan-400"
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="p-3 rounded-md bg-stone-900 border border-stone-700 focus:outline-none focus:border-cyan-400"
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#22d3ee",
            color: "#000",
          }}
          transition={{ duration: 0.2 }}
          type="submit"
          className="bg-cyan-500 text-black font-semibold py-2 rounded-md transition-all"
        >
          {status ? status : "Send Message"}
        </motion.button>
      </motion.form>

      {/* Footer */}
      <motion.p
        className="mt-12 text-center text-sm text-stone-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        © {new Date().getFullYear()} Roshan Kumar Rauniyar. All rights reserved.
      </motion.p>
    </div>
  );
};

export default Contact;
