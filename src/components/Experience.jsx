function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl mx-auto w-full">

        <h2 className="text-5xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                Research Intern
              </h3>

              <p className="text-xl mt-2">
                IIITDM Jabalpur
              </p>
            </div>

            <p className="text-slate-400 mt-3 md:mt-0">
              May 2026 – July 2026
            </p>

          </div>

          <p className="text-slate-300 leading-8 mt-6">
            Currently working as a Research Intern at IIITDM Jabalpur,
            exploring Computer Networks, Cyber Security, Machine Learning,
            and Deep Learning concepts. Gaining hands-on experience through
            research-oriented learning and practical implementation.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">

            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">
              Computer Networks
            </span>

            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">
              Cyber Security
            </span>

            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">
              Machine Learning
            </span>

            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">
              Deep Learning
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;