import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full sm:w-[360px]"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.25}
        scale={1.02}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        transitionSpeed={2500}
      >
        <div className="rounded-3xl border border-[#915EFF]/20 bg-[#151030] p-5 shadow-[0_0_20px_rgba(145,94,255,0.15)] transition duration-300 hover:shadow-[0_0_45px_rgba(145,94,255,0.45)]">
          
          {/* Project Image */}
          <div className="relative h-[230px] w-full overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition duration-500 hover:scale-110"
            />

            {/* GitHub Button */}
            <div className="absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/70 backdrop-blur-md transition duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(145,94,255,0.7)]"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-6">
            <h3 className="text-[24px] font-bold text-white">
              {name}
            </h3>

            <p className="mt-3 text-[15px] leading-[26px] text-[#cbd5e1]">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="rounded-full border border-[#915EFF]/20 bg-[#1d1836] px-3 py-1 text-[13px] font-medium text-[#915EFF]"
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={() => window.open(sourceCodeLink, "_blank")}
              className="rounded-xl bg-[#915EFF] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(145,94,255,0.35)] transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(145,94,255,0.65)]"
            >
              GitHub
            </button>

            <button
              className="rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
            >
              Live Demo
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Heading */}
      <Header useMotion={true} {...config.sections.works} />

      {/* Description */}
      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 max-w-4xl text-[18px] leading-[32px] text-[#cbd5e1]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");