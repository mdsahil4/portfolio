import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({
  index,
  title,
  icon,
}) => (
  <Tilt
    glareEnable
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    scale={1.02}
    className="w-full xs:w-[250px]"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="rounded-[20px] bg-gradient-to-r from-[#915EFF] to-[#6d28d9] p-[1px]"
    >
      <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-[#151030] px-12 py-8 transition-all duration-300 hover:bg-[#1a1335]">
        <img
          src={icon}
          alt={title}
          className="h-16 w-16 object-contain"
        />

        <h3 className="text-center text-[22px] font-bold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Badge */}
      <div className="text-center">

        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-8 py-3 shadow-[0_0_25px_rgba(34,211,238,0.15)]">

            <div className="relative flex h-3 w-3">
              <span className="h-3 w-3 rounded-full bg-[#915EFF] animate-pulse"></span>
            </div>

            <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-300">
              INTRODUCTION
            </span>

          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-black text-white md:text-6xl">
          Overview
        </h2>

        {/* Description */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mx-auto mt-6 max-w-4xl text-center text-[18px] leading-[32px] text-[#cbd5e1]"
        >
          {config.sections.about.content}
        </motion.p>
      </div>

      {/* Cards */}
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");