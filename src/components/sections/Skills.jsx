const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto max-w-4xl bg-[#252547] p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-pink-500 text-center mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-cyan-400 mb-2">Tecnologías Front-end</h3>
            <ul className="flex flex-wrap gap-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Astro</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 mb-2">Tecnologías Back-end</h3>
            <ul className="flex flex-wrap gap-2">
              <li>Python</li>
              <li>Django</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
