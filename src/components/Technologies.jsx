import { useState } from "react";
import { motion } from "framer-motion";
import {
  RiReactjsLine,
  RiHtml5Fill,
  RiCss3Fill,
} from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiPostman,
  SiGit,
  SiGithub,
  SiMongoose,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

// Animation variants (same bounce effect)
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  // 🧠 All Categories & Icons (with labels)
  const categories = {
    Frontend: [
      { Icon: RiReactjsLine, name: "React.js", color: "text-cyan-400", duration: 2 },
      { Icon: RiHtml5Fill, name: "HTML5", color: "text-orange-500", duration: 2.2 },
      { Icon: RiCss3Fill, name: "CSS3", color: "text-blue-500", duration: 2.3 },
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400", duration: 2.5 },
      { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400", duration: 3 },
    ],
    Backend: [
      { Icon: FaNodeJs, name: "Node.js", color: "text-green-500", duration: 3 },
      { Icon: SiExpress, name: "Express.js", color: "text-gray-300", duration: 2.8 },
      { Icon: SiMongoose, name: "Mongoose", color: "text-red-500", duration: 2.6 },
    ],
    Database: [
      { Icon: SiMongodb, name: "MongoDB", color: "text-green-600", duration: 2.5 },
    ],
    Tools: [
      { Icon: SiVisualstudiocode, name: "VS Code", color: "text-blue-400", duration: 2.2 },
      { Icon: SiPostman, name: "Postman", color: "text-orange-400", duration: 2.3 },
      { Icon: SiGit, name: "Git", color: "text-red-500", duration: 2.5 },
      { Icon: SiGithub, name: "GitHub", color: "text-gray-400", duration: 2.6 },
      { Icon: SiRedux, name: "Redux Toolkit", color: "text-purple-500", duration: 2.7 },
    ],
  };

  const tabs = Object.keys(categories);

  return (
    <div className="pb-24" id="Skills">
      {/* Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h2>

      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-6 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveCategory(tab)}
            className={`px-5 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
              activeCategory === tab
                ? "bg-blue-600 text-white shadow-lg scale-110"
                : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Animated Icons */}
      <motion.div
        initial="initial"
        animate="animate"
        className="flex flex-wrap items-center justify-center gap-10"
      >
        {categories[activeCategory].map(({ Icon, name, color, duration }, i) => (
          <motion.div
            key={i}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center p-4 cursor-pointer"
          >
            <Icon className={`text-7xl ${color}`} />
            <p className="mt-3 text-lg font-medium text-gray-300">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
