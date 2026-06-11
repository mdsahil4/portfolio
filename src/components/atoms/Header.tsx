import React from "react";
import { motion } from "framer-motion";

import { textVariant } from "../../utils/motion";

interface IHeader {
  useMotion: boolean;
  p: string;
  h2: string;
}

export const Header: React.FC<IHeader> = ({ useMotion, p, h2 }) => {
  const Content = () => (
    <div className="text-center">

      {/* Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-3 rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 px-8 py-3 shadow-[0_0_25px_rgba(145,94,255,0.15)]">

          <div className="relative">
            <span className="inline-flex h-3 w-3 rounded-full bg-[#915EFF] animate-pulse"></span>
          </div>

          <span className="text-sm font-semibold uppercase tracking-[3px] text-[#c4b5fd]">
            {p}
          </span>

        </div>
      </div>

      {/* Heading */}
      <h2 className="text-5xl font-black text-white md:text-6xl">
        {h2.split(" ")[0]}{" "}
        <span className="bg-gradient-to-r from-[#915EFF] to-[#6EE7FF] bg-clip-text text-transparent">
          {h2.split(" ").slice(1).join(" ")}
        </span>
      </h2>

    </div>
  );

  return useMotion ? (
    <motion.div variants={textVariant()}>
      <Content />
    </motion.div>
  ) : (
    <Content />
  );
};