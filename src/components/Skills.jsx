function Skills() {
  const coreSkills = [
    "C++",
    "Java",
    "Python",
    "DSA",
    "Competitive Programming",
    "Machine Learning",
    "Android Development",
    "Git & GitHub",
  ];

  const learningSkills = [
    "Deep Learning",
    "Computer Networks",
    "Cybersecurity",
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <h2 className="text-5xl font-bold text-center mb-12">
        Skills
      </h2>

      {/* Core Skills */}
      <div className="max-w-5xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold text-cyan-400 text-center mb-6">
          Core Skills
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {coreSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 px-6 py-3 rounded-full border border-cyan-500
              hover:bg-cyan-500 hover:text-black hover:scale-105
              transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Currently Learning */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-cyan-400 text-center mb-6">
          Currently Learning
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {learningSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 px-6 py-3 rounded-full border border-yellow-500
              hover:bg-yellow-500 hover:text-black hover:scale-105
              transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;