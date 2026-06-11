import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
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
      className="w-full h-full"
    >
      <Tilt
      className="h-full rounded-3xl"
  glareEnable={false}
  scale={1.01}
  perspective={1200}
  tiltMaxAngleX={4}
  tiltMaxAngleY={4}
  transitionSpeed={2000}
>
        <div
          className="
          group
          h-full
          flex
          flex-col
          rounded-3xl
          border
          border-white/10
          bg-[#151030]
          p-5
          transition-all
          duration-500
          hover:-translate-y-3
          hover:border-pink-500
          hover:shadow-[0_0_50px_rgba(236,72,153,0.6)]
        "
        >
          {/* Project Image */}
          <div className="relative h-[230px] w-full overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
            />

            {/* GitHub Icon */}
            <div className="absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/70 backdrop-blur-md transition duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)]"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="rounded-lg bg-[#1d1836] px-3 py-1 text-xs font-medium text-[#c084fc]"
              >
                {tag.name.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Project Info */}
          <div className="mt-5 flex-grow">
            <p className="text-sm font-semibold uppercase text-pink-500">
              &lt;/&gt; Project
            </p>

            <h3 className="mt-3 text-[30px] font-bold text-white">
              {name}
            </h3>

            <p className="mt-4 text-[16px] leading-[30px] text-[#cbd5e1]">
              {description}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="mt-auto">
            <div className="mt-6 h-[1px] w-full bg-white/10"></div>

            <div className="mt-6">
              <button
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#1d1836]
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-gradient-to-r
                  hover:from-purple-600
                  hover:to-pink-600
                  hover:border-pink-500
                  hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]
                  hover:scale-[1.02]
                "
              >
                View Source Code
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
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
              PROJECTS
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-black text-white md:text-6xl">
          My{" "}
          <span className="bg-gradient-to-r from-[#915EFF] to-[#6EE7FF] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Description */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mx-auto mt-6 max-w-4xl text-center text-[18px] leading-[32px] text-[#cbd5e1]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 items-stretch">
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