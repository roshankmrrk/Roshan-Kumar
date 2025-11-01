import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Angad Sharma",
    role: "Dot Net Developer, Delhi, India",
    feedback:
      "Working with Roshan was a great experience! His React and Tailwind CSS skills are top-notch and he delivers visually stunning results.",
    image: "https://balwant.netlify.app/anagad-modified.png",
  },
  {
    name: "Rahul Jatav",
    role: "BCA Graduate, Gorakhpur, India",
    feedback:
      "Roshan is highly professional and detail-oriented. The web app he built was fast, secure, and beautifully responsive!",
    image: "https://balwant.netlify.app/rahul-modified.png",
  },
  {
    name: "Balavant Kumar",
    role: "Full Stack Developer Noida,India",
    feedback:
      "His backend logic and API handling are impressive. The integration with MongoDB and Express.js was flawless!",
    image: "https://balwant.netlify.app/balwantlogo-modified.png",
  },
  {
    name: "Karan Kumar",
    role: "Frontend Developer Noida,India",
    feedback:
      "He has deep MERN stack knowledge and a great eye for detail. It’s always fun collaborating with him on projects.",
    image: "https://balwant.netlify.app/karan-modified.png",
  },
  {
    name: "Rahul Sharma",
    role: "BCA Graduate, Gorakhpur, India",
    feedback:
      "Roshan is highly professional and detail-oriented. The web app he built was fast, secure, and beautifully responsive!",
    image: "https://balwant.netlify.app/rahul-modified.png",
  },
  {
    name: "Rahul Jatav",
    role: "BCA Graduate, Gorakhpur, India",
    feedback:
      "Roshan is highly professional and detail-oriented. The web app he built was fast, secure, and beautifully responsive!",
    image: "https://balwant.netlify.app/rahul-modified.png",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev + 1 >= testimonials.length - (isMobile ? 0 : 2) ? 0 : prev + 1
      );
    }, 4000);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const visibleCount = isMobile ? 1 : 3;

  return (
    <div className="pb-32" id="testimonials">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="my-16 text-center text-4xl font-semibold text-white"
      >
        Testimonials 💬
      </motion.h2>

      {/* Carousel */}
      <div className="relative overflow-hidden max-w-7xl mx-auto px-4">
        <motion.div
          className="flex gap-8"
          animate={{ x: `-${current * (100 / visibleCount)}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            width: `${(testimonials.length * 100) / visibleCount}%`,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex justify-center"
              style={{ minWidth: `${100 / visibleCount}%` }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-stone-900/40 border border-stone-800 backdrop-blur-lg rounded-2xl p-8 shadow-lg text-center w-full max-w-sm"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 border border-stone-700"
                />
                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                <p className="text-sm text-stone-400">{t.role}</p>
                <p className="mt-4 text-stone-300 italic leading-relaxed">
                  “{t.feedback}”
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 gap-2">
        {Array.from({
          length: testimonials.length - (visibleCount - 1),
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === i ? "bg-blue-500 w-6" : "bg-stone-600"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
