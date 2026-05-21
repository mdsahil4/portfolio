import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";

const achievements = [
  {
    title: "700+",
    subtitle: "LeetCode Problems Solved",
  },
  {
    title: "5★",
    subtitle: "HackerRank Problem Solving",
  },
  {
    title: "Adobe",
    subtitle: "India Hackathon Qualified",
  },
  {
    title: "3+",
    subtitle: "AI & Full Stack Projects",
  },
];

const Achievements = () => {
  return (
    <>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[17px]"
      >
        WHAT I HAVE ACHIEVED
      </motion.p>

      <motion.h2
        variants={fadeIn("", "", 0.2, 1)}
        className="font-black text-white lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
      >
        Achievements.
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="rounded-2xl border border-[#915EFF]/20 bg-[#151030] p-8 shadow-[0_0_15px_rgba(145,94,255,0.15)] transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(145,94,255,0.45)]"
          >
            <h2 className="text-5xl font-black text-[#915EFF]">
              {item.title}
            </h2>

            <p className="mt-4 text-[18px] text-white">
              {item.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");