
const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl text-pink-500 mb-6">Skills</h2>
      <div className="bg-[#252547] rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-pink-500 mb-3">Tecnologías Front-end</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 rounded-full">HTML</span>
            <span className="px-3 py-1 bg-yellow-600 rounded-full">JavaScript</span>
            <span className="px-3 py-1 bg-blue-400 rounded-full">React</span>
            <span className="px-3 py-1 bg-purple-600 rounded-full">Bootstrap</span>
          </div>
        </div>
        <div>
          <h3 className="text-pink-500 mb-3">Tecnologías Back-end</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-yellow-700 rounded-full">Python</span>
            <span className="px-3 py-1 bg-green-600 rounded-full">Node.js</span>
          </div>
        </div>
        <div>
          <h3 className="text-pink-500 mb-3">Software y herramientas</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-800 rounded-full">Visual Studio Code</span>
            <span className="px-3 py-1 bg-orange-600 rounded-full">Figma</span>
            <span className="px-3 py-1 bg-green-700 rounded-full">MongoDB</span>
            <span className="px-3 py-1 bg-gray-700 rounded-full">GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;