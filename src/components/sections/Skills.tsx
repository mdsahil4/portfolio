import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";

import {
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
} from "../../assets";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React", icon: reactjs },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
  },

  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Node.js", icon: nodejs },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    ],
  },

  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", icon: mongodb },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Git", icon: git },
      { name: "Docker", icon: docker },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <>
      {/* Header */}

      <div className="mb-20 text-center">

        {/* Badge */}

        <div className="flex justify-center mb-6">
  <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-8 py-3 shadow-[0_0_25px_rgba(34,211,238,0.15)]">

    <div className="relative flex h-3 w-3">
      <span className="h-3 w-3 rounded-full bg-[#915EFF] animate-pulse"></span>
    </div>

    <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-300">
      TECH STACK
    </span>

  </div>
</div>

        {/* Heading */}

        <h2 className="font-black text-white lg:text-[70px] md:text-[60px] sm:text-[50px] text-[38px]">
          My Technical{" "}
          <span className="bg-gradient-to-r from-[#915EFF] to-[#6EE7FF] bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* Description */}

        <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
          A curated list of the technologies, tools and languages I use
          to engineer scalable and performant digital solutions.
        </p>
      </div>

      {/* Categories */}

      {skillCategories.map((category) => (
        <div key={category.title} className="mb-20">

          <div className="flex items-center gap-6 mb-10">
            <h3 className="text-4xl font-bold text-white whitespace-nowrap">
              {category.title}
            </h3>

            <div className="h-[1px] flex-1 bg-[#915EFF]/30"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {category.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#915EFF] hover:shadow-[0_0_25px_rgba(145,94,255,0.25)]"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-20 w-20 object-contain"
                />

                <p className="mt-5 text-center text-lg font-semibold text-white">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      ))}
    </>
  );
};

export default SectionWrapper(Skills, "skills");