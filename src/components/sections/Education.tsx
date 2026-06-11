import { FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-6xl px-5 py-20"
    >
      {/* Heading */}
      <div className="text-center">
        <div className="flex justify-center mb-6">
  <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-8 py-3 shadow-[0_0_25px_rgba(34,211,238,0.15)]">

    <div className="relative flex h-3 w-3">
      <span className="h-3 w-3 rounded-full bg-[#915EFF] animate-pulse"></span>
    </div>

    <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-300">
      ACADEMIC PATH
    </span>

  </div>
</div>

        <h2 className="mt-3 text-5xl font-black text-white md:text-6xl">
          My Educational{" "}
          <span className="bg-gradient-to-r from-[#915EFF] to-[#6EE7FF] bg-clip-text text-transparent">
            Journey
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-center text-[20px] leading-[32px] text-[#cbd5e1]">
  The foundational steps that shaped my technical expertise and
  problem-solving mindset.
</p>
      </div>

      {/* Timeline */}
      <div className="relative mt-20 border-l-2 border-[#915EFF] pl-8">

        {/* BTECH */}
        <div className="group relative mb-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.20)]">

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 transition duration-500 group-hover:opacity-100"></div>

          <div className="absolute -left-[41px] top-8 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] transition-all duration-500 group-hover:scale-150"></div>

          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
                Bachelor of Technology
              </h3>

              <p className="mt-2 text-lg text-gray-300">
                Pranveer Singh Institute of Technology (PSIT)
              </p>

              <p className="mt-3 flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt />
                Kanpur, India
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className="inline-block rounded-full bg-cyan-500 px-5 py-2 text-sm font-bold text-white transition duration-300 group-hover:scale-110">
                2023 – 2026
              </div>

              <p className="mt-3 text-gray-300">Completed</p>
            </div>
          </div>
        </div>

        {/* DIPLOMA */}
        <div className="group relative mb-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.20)]">

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 transition duration-500 group-hover:opacity-100"></div>

          <div className="absolute -left-[41px] top-8 h-5 w-5 rounded-full bg-pink-500 shadow-[0_0_20px_#ec4899] transition-all duration-500 group-hover:scale-150"></div>

          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white transition duration-300 group-hover:text-pink-300">
                Diploma in Civil Engineering
              </h3>

              <p className="mt-2 text-lg text-gray-300">
                Maharana Pratap College of Engineering
              </p>

              <p className="mt-3 flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt />
                Kanpur, India
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className="inline-block rounded-full bg-pink-500 px-5 py-2 text-sm font-bold text-white transition duration-300 group-hover:scale-110">
                2020 – 2023
              </div>

              <p className="mt-3 text-gray-300">
                Completed
              </p>
            </div>
          </div>
        </div>

        {/* 12TH */}
        <div className="group relative mb-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40">

          <div className="absolute -left-[41px] top-8 h-5 w-5 rounded-full bg-purple-500 shadow-[0_0_20px_#a855f7] transition-all duration-500 group-hover:scale-150"></div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Intermediate (12th)
              </h3>

              <p className="mt-2 text-lg text-gray-300">
                The Model Intermediate College
              </p>

              <p className="mt-3 flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt />
                Kanpur, India
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className="inline-block rounded-full bg-purple-500 px-5 py-2 text-sm font-bold text-white">
                2020
              </div>

              <p className="mt-3 text-gray-300">
                Completed
              </p>
            </div>
          </div>
        </div>

        {/* 10TH */}
        <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-green-500/40">

          <div className="absolute -left-[41px] top-8 h-5 w-5 rounded-full bg-green-500 shadow-[0_0_20px_#22c55e] transition-all duration-500 group-hover:scale-150"></div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">
                High School (10th)
              </h3>

              <p className="mt-2 text-lg text-gray-300">
                The Model Intermediate College
              </p>

              <p className="mt-3 flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt />
                Kanpur, India
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className="inline-block rounded-full bg-green-500 px-5 py-2 text-sm font-bold text-white">
                2018
              </div>

              <p className="mt-3 text-gray-300">
                Completed
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;