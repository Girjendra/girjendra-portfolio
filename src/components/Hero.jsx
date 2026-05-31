function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="text-center lg:text-left">
          <p className="text-cyan-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Girjendra Lodha
          </h1>

          <h2 className="text-2xl text-cyan-400 mb-4">
            Research Intern @ IIITDM Jabalpur
          </h2>

          <p className="text-slate-300 text-lg mb-8">
            AI/ML Aspirant | Problem Solver
          </p>

          <p className="text-slate-300 text-lg mb-8">
            B.Tech CSE (AI/ML) • JIET Guna
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold
              hover:bg-cyan-400 hover:scale-105 hover:-translate-y-1
              hover:shadow-lg hover:shadow-cyan-500/30
              transition-all duration-300"
            >
              Resume
            </a>

            <a
              href="https://github.com/Girjendra"
              target="_blank"
              className="border border-cyan-500 text-white px-8 py-4 rounded-xl font-semibold
              hover:bg-cyan-500 hover:text-black hover:scale-105 hover:-translate-y-1
              hover:shadow-lg hover:shadow-cyan-500/30
              transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/girjendra/"
              target="_blank"
              className="border border-cyan-500 text-white px-8 py-4 rounded-xl font-semibold
              hover:bg-cyan-500 hover:text-black hover:scale-105 hover:-translate-y-1
              hover:shadow-lg hover:shadow-cyan-500/30
              transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/profile.png"
            alt="Girjendra"
            className="w-72 h-72 lg:w-80 lg:h-80 object-cover object-center rounded-full border-4 border-cyan-500 shadow-2xl"
            style={{ objectPosition: "70% center" }}
          />
        </div>

        {/* Stats */}
        <div className="md:col-span-2 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center
              hover:-translate-y-2
              hover:border-cyan-400
              hover:shadow-lg
              hover:shadow-cyan-500/20
              transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-cyan-400">760+</h3>
              <p className="text-slate-300 mt-2">Problems Solved</p>
            </div>

            <div
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center
              hover:-translate-y-2
              hover:border-cyan-400
              hover:shadow-lg
              hover:shadow-cyan-500/20
              transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-cyan-400">9.42</h3>
              <p className="text-slate-300 mt-2">CGPA</p>
            </div>

            <div
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center
              hover:-translate-y-2
              hover:border-cyan-400
              hover:shadow-lg
              hover:shadow-cyan-500/20
              transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-cyan-400">26+</h3>
              <p className="text-slate-300 mt-2">Contests</p>
            </div>

            <div
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center
              hover:-translate-y-2
              hover:border-cyan-400
              hover:shadow-lg
              hover:shadow-cyan-500/20
              transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-cyan-400"></h3>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-cyan-400 mb-4">
                  Current
                </h3>

                <p className="text-xl text-slate-300">
                  Research Internship
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;