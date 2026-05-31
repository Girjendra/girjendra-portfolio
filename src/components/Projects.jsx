function Projects() {
  const projects = [
    {
      title: "Diabetes Predictor App",
      image: "/projects/diabetes.png",
      tech: "Python • Scikit-Learn • Streamlit",
      description:
        "Machine Learning application that predicts diabetes risk based on health parameters.",
      github: "https://github.com/Girjendra/diabetes-predictor-app",
    },
    {
      title: "Grid O-X App",
      image: "/projects/gridox-win.png",
      tech: "Java • Android Studio • XML",
      description:
        "Android Tic-Tac-Toe game featuring game state management and winner detection.",
      github: "https://github.com/Girjendra/Grid_O-X_app",
    },
    {
      title: "MathMaster Kids",
      image: "/projects/mathmaster-home.png",
      tech: "Java • Android Studio",
      description:
        "Interactive educational Android application designed to improve arithmetic skills.",
      github: "https://github.com/Girjendra/mathmaster-kids",
    },
    {
      title: "Web Chess App",
      image: "/projects/chess-placeholder.png",
      tech: "Flask • Python • HTML/CSS",
      description:
        "Web-based chess application with move validation and game-state tracking.",
      github: "https://github.com/Girjendra/web-chess-app",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20"
    >
       <div
         className="bg-slate-800 rounded-2xl overflow-hidden border border-cyan-500/30
         hover:-translate-y-2
         hover:shadow-xl
         hover:shadow-cyan-500/20
         transition-all duration-300"
       >

        <h2 className="text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300 h-full flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 flex flex-col flex-grow">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-cyan-400 mb-3">
                  {project.tech}
                </p>

                <p className="text-slate-300 mb-5">
                  {project.description}
                </p>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center border border-cyan-400 px-5 py-3 rounded-lg mt-auto hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                    View Project
                </a>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;