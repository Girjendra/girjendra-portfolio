function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-8">
          Let's Connect
        </h2>

        <p className="text-slate-300 text-lg mb-12">
          I'm always open to discussing AI/ML, research,
          development, and new opportunities.
        </p>

        <div className="space-y-6">

          <a
            href="mailto:shivaji12889@gmail.com"
            className="block bg-slate-800/40 border border-slate-700 rounded-xl p-5 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
          >
            📧 shivaji12889@gmail.com
          </a>

          <a
            href="https://github.com/Girjendra"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-slate-800/40 border border-slate-700 rounded-xl p-5 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
          >
            💻 GitHub — github.com/Girjendra
          </a>

          <a
            href="https://www.linkedin.com/in/girjendra/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-slate-800/40 border border-slate-700 rounded-xl p-5 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
          >
            🔗 LinkedIn — linkedin.com/in/girjendra/
          </a>

          <a
            href="/resume.pdf"
            download
            className="block bg-slate-800/40 border border-slate-700 rounded-xl p-5
            hover:border-cyan-400 hover:-translate-y-1
            hover:shadow-lg hover:shadow-cyan-500/10
            transition-all duration-300"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;