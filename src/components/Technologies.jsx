import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress, SiRedux, SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

// animation variants
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
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h2>

      <motion.div
        initial="initial"
        animate="animate"
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {[
          { Icon: RiReactjsLine, color: "text-cyan-400", duration: 2 },
          { Icon: TbBrandNextjs, color: "text-white", duration: 3 },
          { Icon: SiMongodb, color: "text-green-500", duration: 2.5 },
          { Icon: FaNodeJs, color: "text-green-400", duration: 3 },
          { Icon: SiExpress, color: "text-gray-300", duration: 2.8 },
          { Icon: SiRedux, color: "text-purple-500", duration: 2.2 },
          { Icon: SiJavascript, color: "text-yellow-400", duration: 3 },
        ].map(({ Icon, color, duration }, i) => (
          <motion.div
            key={i}
            variants={iconVariants(duration)}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 cursor-pointer"
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
