import { motion } from "framer-motion";

import { technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";

const Skills = () => {
  return (
    <>
      {/* Heading */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[17px]"
      >
        MY TECH STACK
      </motion.p>

      <motion.h2
        variants={fadeIn("", "", 0.2, 1)}
        className="font-black text-white lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
      >
        Skills.
      </motion.h2>

      {/* Skills Grid */}
      <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className="group flex flex-col items-center justify-center rounded-2xl border border-[#915EFF]/20 bg-[#151030] p-6 shadow-[0_0_15px_rgba(145,94,255,0.15)] transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(145,94,255,0.45)]"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1d1836] shadow-[0_0_20px_rgba(145,94,255,0.25)]">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-16 w-16 object-contain"
              />
            </div>

            <p className="mt-5 text-center text-[18px] font-semibold text-white">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");