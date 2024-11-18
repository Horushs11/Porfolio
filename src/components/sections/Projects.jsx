import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Aplicación gestión de equipos",
      description: "Aplicación para la gestión de entidades deportivas",
      image: "/project1.png",
      github: "#",
      liveDemo: "#",
    },
    {
      title: "Aplicación gestión de equipos",
      description: "Aplicación para la gestión de entidades deportivas",
      image: "/project2.png",
      github: "#",
      liveDemo: "#",
    },
    {
      title: "Aplicación gestión de equipos",
      description: "Aplicación para la gestión de entidades deportivas",
      image: "/project3.png",
      github: "#",
      liveDemo: "#",
    },
  ];

  return (
    <section id="proyectos" className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto max-w-5xl bg-[#252547] p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-pink-500 text-center mb-6">Proyectos</h2>
        <div className="flex overflow-x-scroll scrollbar-hide gap-4">
          {projects.map((project, index) => (
            <div key={index} className="min-w-[300px] bg-gray-800 p-4 rounded-lg">
              <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
              <h3 className="text-xl text-cyan-400">{project.title}</h3>
              <p className="text-cyan-300">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <a href={project.github} className="text-cyan-400">
                  <FaGithub size={20} />
                </a>
                <a href={project.liveDemo} className="text-cyan-400">
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
