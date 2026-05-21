import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

import { profile } from "../../assets";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full overflow-hidden">
      
      {/* Hero Content */}
      <div
        className={`absolute inset-0 top-[120px] z-10 mx-auto flex max-w-7xl flex-row items-start gap-5 ${styles.paddingX}`}
      >
        
        {/* Left Side Line */}
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        {/* Text Content */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-[#915EFF] drop-shadow-[0_0_15px_#915EFF]">
              {config.hero.name}
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {config.hero.p[0]}
            <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#work"
              className="rounded-xl bg-[#915EFF] px-6 py-3 font-semibold text-white shadow-[0_0_25px_#915EFF] transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_#915EFF]"
            >
              View Projects
            </a>

            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
            >
              View Resume
            </a>
          </div>

          {/* Profile Image */}
<div className="mt-16 ml-5">
  <img
    src={profile}
    alt="Mohd Sahil"
    className="h-52 w-52 rounded-full border-4 border-[#915EFF] object-cover object-top shadow-[0_0_35px_#915EFF]"
  />
</div>
        </div>
      </div>

      {/* Computer Canvas */}
      <div className="absolute right-[-130px] top-0 h-full w-full pointer-events-none">
        <ComputersCanvas />
      </div>

      {/* Scroll Animation */}
      <div className="xs:bottom-10 absolute bottom-32 z-10 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;