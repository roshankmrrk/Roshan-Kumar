import { motion } from "framer-motion";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "J.S. University, Shikohabad",
      duration: "2022 – 2025",
      percentage: "74%",
      details:
        "Graduated with strong academic performance focusing on computer programming, data structures, web development, and database systems. Completed several real-world projects using the MERN stack, showcasing both technical and problem-solving skills.",
    },
    {
      degree: "Intermediate (12th – PCM)",
      institution: "Lokmanya Inter College, Tamkuhi Road",
      duration: "2020 – 2022",
      percentage: "59%",
      details:
        "Specialized in Physics, Chemistry, and Mathematics. Built a solid understanding of logical reasoning and analytical thinking, which laid the foundation for software development.",
    },
    {
      degree: "High School (10th)",
      institution: "Lokmanya Inter College, Tamkuhi Road",
      duration: "2018 – 2020",
      percentage: "70%",
      details:
        "Achieved strong academic results with a focus on Science and Mathematics, sparking an early interest in computers and technology.",
    },
  ];

  return (
    <div className="pb-24" id="education">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Education 🎓
      </motion.h2>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative border-l border-stone-700 pl-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-4"
          >
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-stone-900"></div>
            <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-stone-400 text-sm mb-1">{edu.institution}</p>
            <span className="text-stone-500 text-sm italic">{edu.duration}</span>
            <p className="text-stone-400 text-sm mt-1">
              <strong>Percentage:</strong> {edu.percentage}
            </p>
            <p className="mt-2 text-stone-300 text-[15px] leading-relaxed">
              {edu.details}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
