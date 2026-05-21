const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 py-8 text-center">
      <h2 className="text-2xl font-bold text-[#915EFF]">
        Mohd Sahil
      </h2>

      <p className="mt-3 text-secondary">
        Full Stack Developer | Problem Solver
      </p>

      <div className="mt-5 flex justify-center gap-6">
        <a
          href="https://github.com/mdsahil4"
          target="_blank"
          className="text-white transition hover:text-[#915EFF]"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mohd-sahil-thecs/"
          target="_blank"
          className="text-white transition hover:text-[#915EFF]"
        >
          LinkedIn
        </a>

        <a
          href="https://leetcode.com/u/mohdsahil2323/"
          target="_blank"
          className="text-white transition hover:text-[#915EFF]"
        >
          LeetCode
        </a>
      </div>

      <p className="mt-6 text-sm text-secondary">
        © 2026 Mohd Sahil. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;