import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

// container animation – controls stagger between child cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // delay between each project
    },
  },
};

// each project card animation – left to right entry
const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.8,
    },
  },
};

const Projects = () => {
  return (
    <div className="pb-24" id="projects">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Projects 🚀
      </motion.h2>

      {/* Animated Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="mb-12 flex flex-wrap lg:justify-center p-6 rounded-2xl bg-stone-900/30 backdrop-blur-sm shadow-lg border border-stone-800 hover:shadow-blue-500/20 transition-shadow duration-300"
          >
            {/* Image Section */}
            <motion.div
              className="w-full lg:w-1/4 flex justify-center"
              variants={cardVariants}
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded-lg shadow-lg object-cover"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4 lg:pl-8"
              variants={cardVariants}
            >
              {/* Title */}
              <h3 className="mb-2 font-semibold text-2xl text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-stone-400 leading-relaxed">
                {project.description}
              </p>

              {/* Key Features */}
              <ul className="mb-4 list-disc list-inside text-stone-400 space-y-1">
                {project.keyFeatures.map((feature, i) => (
                  <motion.li key={i}>{feature}</motion.li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-2 mb-5">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#1f2937",
                    }}
                    className="rounded bg-stone-800/80 px-3 py-1 text-sm font-medium text-stone-300 shadow"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* 🔗 Project Links */}
              <div className="flex gap-4 mt-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    <FiExternalLink className="text-lg" /> View Project
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition text-white"
                  >
                    <FaGithub className="text-lg" /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
