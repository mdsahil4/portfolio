import { motion } from "framer-motion";

import { technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">MY SKILLS</p>

        <h2 className="sectionHeadText">Skills.</h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {technologies.map((technology, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            key={technology.name}
            className="group"
          >
            <div className="flex flex-col items-center justify-center rounded-2xl border border-[#6d28d9] bg-[#120526] p-6 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-20 w-20 object-contain"
              />

              <h3 className="mt-4 text-center text-[18px] font-semibold text-white">
                {technology.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");