

const Projects = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl text-pink-500 mb-6">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((project) => (
          <div key={project} className="bg-[#252547] rounded-lg p-4">
            <img
              src={`/path-to-project-${project}.jpg`}
              alt={`Project ${project}`}
              className="w-full h-40 object-cover mb-4"
            />
            <div className="flex justify-center">
              <button className="bg-cyan-400 rounded-full p-2 hover:bg-cyan-300 transition-colors">
                <svg className="w-6 h-6 text-[#1A1A2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;