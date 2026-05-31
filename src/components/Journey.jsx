function Journey() {
    const milestones = [
        {
            title: "2024 • Started DSA Journey",
            description: "Began learning Data Structures and Algorithms using C++.",
        },
        {
            title: "2026 • 760+ Problems Solved",
            description: "Solved problems across multiple coding platforms.",
        },
        {
            title: "2026 • Completed GeekStreak60",
            description: "Successfully completed the GeeksforGeeks 60-Day POTD Challenge.",
        },
        {
            title: "2026 • GFG Expert POTD Solver",
            description: "Earned the Expert POTD Solver badge through consistent practice.",
        },
        {
            title: "2026 • 1712 CodeStudio Rating",
            description: "Achieved a peak rating of 1712 and secured Rank 34 in Weekly Contest 229.",
        },
        {
            title: "2026 • 26+ Coding Contests",
            description: "Participated regularly in CodeStudio and CodeChef contests.",
        },
        {
            title: "2026 • Research Intern @ IIITDM Jabalpur",
            description: "Selected for a research internship focused on Computer Networks, Cyber Security, Machine Learning and Deep Learning.",
        },
    ];

  return (
    <section
      id="journey"
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Coding Journey
        </h2>

        <div className="relative border-l-4 border-cyan-500 ml-6">

          {milestones.map((item, index) => (
            <div
              key={index}
              className="mb-12 ml-8"
            >
              <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[12px]"></div>

              <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-400">
                  {item.title}
                </h3>

                <p className="text-slate-300 mt-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Journey;