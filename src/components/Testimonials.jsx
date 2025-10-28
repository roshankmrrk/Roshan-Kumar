import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Frontend Developer",
    feedback:
      "Working with Roshan was a great experience! His React and Tailwind CSS skills are top-notch and he delivers visually stunning results.",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Priya Patel",
    role: "Project Manager",
    feedback:
      "Roshan is highly professional and detail-oriented. The web app he built was fast, secure, and beautifully responsive!",
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Vikram Singh",
    role: "Backend Engineer",
    feedback:
      "His backend logic and API handling are impressive. The integration with MongoDB and Express.js was flawless!",
    image: "https://i.pravatar.cc/100?img=45",
  },
  {
    name: "Neha Verma",
    role: "UI/UX Designer",
    feedback:
      "Roshan understands design systems and implements them beautifully with Tailwind CSS and Framer Motion animations.",
    image: "https://i.pravatar.cc/100?img=26",
  },
  {
    name: "Arjun Mehta",
    role: "Full Stack Developer",
    feedback:
      "He has deep MERN stack knowledge and a great eye for detail. It’s always fun collaborating with him on projects.",
    image: "https://i.pravatar.cc/100?img=60",
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
    <div className="pb-24" id="testimonials">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Testimonials 💬
      </motion.h2>

      {/* Carousel */}
      <div className="relative overflow-hidden max-w-6xl mx-auto">
        <motion.div
          className="flex"
          animate={{ x: `-${current * (100 / visibleCount)}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            width: `${(testimonials.length * 100) / visibleCount}%`,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`w-${isMobile ? "full" : "1/3"} flex justify-center p-4`}
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
      <div className="flex justify-center mt-6 gap-2">
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
