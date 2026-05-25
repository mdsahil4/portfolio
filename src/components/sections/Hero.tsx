import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { styles } from "../../constants/styles";
import { profile } from "../../assets";

const Hero = () => {
  return (
    <section className="relative mx-auto flex h-screen w-full items-center overflow-hidden bg-black">

      {/* Light Purple Wave Background */}
      <div className="absolute inset-0 overflow-hidden bg-black">

        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
        >
          {Array.from({ length: 35 }).map((_, i) => (
            <path
              key={i}
              d={`M0,${850 - i * 18}
              C300,${650 - i * 15}
              500,${900 - i * 12}
              700,${600 - i * 10}
              C900,${300 - i * 8}
              1100,${500 - i * 6}
              1440,${0 + i * 4}`}
              stroke="rgba(196,181,253,0.25)"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </svg>

      </div>

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,#4c1d95_0%,transparent_30%)] opacity-40" />

      {/* Main Container */}
      <div
        className={`${styles.paddingX} relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row`}
      >

        {/* LEFT SIDE */}
        <div className="flex-1">

          {/* Heading */}
          <h1 className="whitespace-nowrap text-[55px] font-black leading-none text-white md:text-[90px]">
            Hi, I'm{" "}
            <span className="inline-block bg-gradient-to-r from-[#915EFF] to-[#6EE7FF] bg-clip-text text-transparent">
              Mohd Sahil
            </span>
          </h1>

          {/* Sub Heading */}
          <div className="mt-6 leading-relaxed">

            <h2 className="text-2xl font-bold text-[#915EFF] sm:text-4xl">
              Software Engineer, AI Enthusiast
            </h2>

            <h2 className="mt-2 text-2xl font-semibold text-gray-300 sm:text-4xl">
              and Full Stack Developer
            </h2>

          </div>

          {/* Typing Animation */}
          <div className="mt-6 text-xl font-semibold text-[#6EE7FF] sm:text-2xl">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
                "React Developer",
                2000,
                "Competitive Programmer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-5">

            <a
              href="https://linkedin.com/in/mohd-sahil-thecs/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#915EFF] p-3 text-white transition duration-300 hover:scale-110 hover:bg-[#915EFF]"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://github.com/mdsahil4"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#915EFF] p-3 text-white transition duration-300 hover:scale-110 hover:bg-[#915EFF]"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#915EFF] p-3 text-white transition duration-300 hover:scale-110 hover:bg-[#915EFF]"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://leetcode.com/u/mohdsahil2323/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#915EFF] p-3 text-white transition duration-300 hover:scale-110 hover:bg-[#915EFF]"
            >
              <SiLeetcode size={24} />
            </a>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#work"
              className="rounded-2xl bg-gradient-to-r from-[#915EFF] to-[#6d28d9] px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_#915EFF] transition duration-300 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[#915EFF] px-8 py-4 text-lg font-bold text-white transition duration-300 hover:bg-[#915EFF]"
            >
              View Resume
            </a>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex flex-1 items-center justify-center">

          {/* Glow */}
          <div className="absolute h-[350px] w-[350px] rounded-full bg-[#915EFF] blur-[120px] opacity-30" />

          {/* Profile Image */}
          <img
            src={profile}
            alt="Mohd Sahil"
            className="relative z-10 mt-8 h-[350px] w-[350px] rounded-full border-4 border-[#915EFF] object-cover object-[center_20%] shadow-[0_0_50px_#915EFF]"
          />

          {/* Online Badge */}
          <div className="absolute bottom-8 right-5 z-20 flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-bold text-white shadow-lg">

            <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

            ONLINE

          </div>

        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-10 flex w-full justify-center">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-[#915EFF] p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-[#915EFF]"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;