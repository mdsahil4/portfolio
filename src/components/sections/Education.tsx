import { FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-6xl px-5 py-20"
    >
      {/* Heading */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[5px] text-cyan-400">
          Academic Path
        </p>

        <h2 className="mt-3 text-4xl font-black text-white md:text-6xl">
          My Educational{" "}
          <span className="bg-gradient-to-r from-[#915EFF] to-[#6EE7FF] bg-clip-text text-transparent">
            Journey
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 md:text-base">
          The foundational steps that shaped my technical expertise
          and problem-solving mindset.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mt-16 border-l-2 border-[#915EFF] pl-6">

        {/* BTECH */}
        <div className="relative mb-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <div className="absolute -left-[33px] top-7 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Bachelor of Technology
              </h3>

              <p className="mt-2 text-base text-gray-300">
                Pranveer Singh Institute of Technology (PSIT)
              </p>

              <p className="mt-2 text-sm text-gray-500">
                <FaMapMarkerAlt className="inline-block mr-2" />
                Kanpur, India
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className="inline-block rounded-full bg-cyan-500 px-4 py-1 text-sm font-bold text-white">
                2023 – 2026
              </div>

              <p className="mt-2 text-sm text-gray-300">
                Completed
              </p>
            </div>

          </div>
        </div>

        {/* DIPLOMA */}
        <div className="relative mb-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <div className="absolute -left-[33px] top-7 h-4 w-4 rounded-full bg-pink-500 shadow-[0_0_15px_#ec4899]" />

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Diploma in Civil Engineering
              </h3>

              <p className="mt-2 text-base text-gray-300">
                Maharana Pratap College of Engineering
              </p>

              <p className="mt-2 text-sm text-gray-500">
                <FaMapMarkerAlt className="inline-block mr-2" />
                Kanpur, India
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className="inline-block rounded-full bg-pink-500 px-4 py-1 text-sm font-bold text-white">
                2020 – 2023
              </div>

              <p className="mt-2 text-sm text-gray-300">
                Completed
              </p>
            </div>

          </div>
        </div>

        {/* 12TH */}
        <div className="relative mb-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <div className="absolute -left-[33px] top-7 h-4 w-4 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7]" />

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Intermediate (12th)
              </h3>

              <p className="mt-2 text-base text-gray-300">
                The Model Intermediate College
              </p>

              <p className="mt-2 text-sm text-gray-500">
                <FaMapMarkerAlt className="inline-block mr-2" />
                Kanpur, India
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className="inline-block rounded-full bg-purple-500 px-4 py-1 text-sm font-bold text-white">
                2020
              </div>

              <p className="mt-2 text-sm text-gray-300">
                Completed
              </p>
            </div>

          </div>
        </div>

        {/* 10TH */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <div className="absolute -left-[33px] top-7 h-4 w-4 rounded-full bg-green-500 shadow-[0_0_15px_#22c55e]" />

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <h3 className="text-xl font-bold text-white md:text-2xl">
                High School (10th)
              </h3>

              <p className="mt-2 text-base text-gray-300">
                The Model Intermediate College
              </p>

              <p className="mt-2 text-sm text-gray-500">
                <FaMapMarkerAlt className="inline-block mr-2" />
                Kanpur, India
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className="inline-block rounded-full bg-green-500 px-4 py-1 text-sm font-bold text-white">
                2018
              </div>

              <p className="mt-2 text-sm text-gray-300">
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