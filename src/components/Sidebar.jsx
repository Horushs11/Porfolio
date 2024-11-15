import { FaLinkedin, FaGithub } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-52 bg-[#252547] flex flex-col justify-between items-center py-8">
      {/* Iconos superiores */}
      <div className="flex flex-col items-center gap-4"></div>

      {/* Menú de navegación */}
      <nav className="flex flex-col items-center gap-8 text-cyan-400">
        <a href="#inicio" className="text-cyan-400 hover:text-pink-500">
          Inicio
        </a>
        <a href="#sobre-mi" className="hover:text-pink-500 transition-colors">
          Sobre mí
        </a>
        <a href="#proyectos" className="hover:text-pink-500 transition-colors">
          Proyectos
        </a>
        <a href="#educacion" className="hover:text-pink-500 transition-colors">
          Educación
        </a>
        <a href="#skills" className="hover:text-pink-500 transition-colors">
          Skills
        </a>
        <a href="#contacto" className="hover:text-pink-500 transition-colors">
          Contacto
        </a>
      </nav>

      {/* Espacio para futuros iconos en la parte inferior */}
      <div className="flex flex-col items-center gap-4">
        <FaLinkedin size={24} className="text-cyan-400 cursor-pointer" />
        <FaGithub size={24} className="text-cyan-400 cursor-pointer" />
      </div>
    </aside>
  );
};

export default Sidebar;
