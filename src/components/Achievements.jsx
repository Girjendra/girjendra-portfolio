function Achievements() {
  const achievements = [
    "760+ DSA Problems Solved",
    "Completed GeekStreak60 Challenge",
    "Research Intern at IIITDM Jabalpur",
    "26+ Coding Contests",
    "9.42 CGPA",
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <h2 className="text-5xl font-bold text-center mb-12">
        Achievements
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <div className="bg-slate-800 p-8 rounded-2xl">
          <img
            src="/achievements/gfg-expert-potd.png"
            alt="GFG Badge"
            className="w-40 mx-auto mb-6"
          />

          <h3 className="text-2xl font-bold text-center text-cyan-400">
            GFG Expert POTD Solver
          </h3>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl">
          <ul className="space-y-4">
            {achievements.map((item, index) => (
              <li key={index} className="text-lg">
                🏆 {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Achievements;