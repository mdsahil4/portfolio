import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

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
      <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-[#151030] px-12 py-8">
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
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 max-w-4xl text-[18px] leading-[34px] text-secondary"
      >
        {config.sections.about.content}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
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