function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6">
      <h2 className="text-5xl font-bold text-center mb-12">
        Certificates
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            GeekStreak60 POTD Challenge
          </h3>

          <a
            href="https://media.geeksforgeeks.org/auth-certificates/1779215400/433f1e19ad865be0a64a86f85e8b8b10.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 text-black px-5 py-2 rounded-lg"
          >
            View Certificate
          </a>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Dynamic Programming Camp
          </h3>

          <a
            href="https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/Dynamic_Programming_camp/girjendra-lodha.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 text-black px-5 py-2 rounded-lg"
          >
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}

export default Certificates;