const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-10 bg-[#252547] py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="text-pink-500 text-xl font-bold">Mi Portafolio</div>
      <nav className="flex gap-8 text-cyan-400">
        <a href="#inicio" className="hover:text-pink-500 transition-colors">Inicio</a>
        <a href="#sobre-mi" className="hover:text-pink-500 transition-colors">Sobre mí</a>
        <a href="#proyectos" className="hover:text-pink-500 transition-colors">Proyectos</a>
        <a href="#educacion" className="hover:text-pink-500 transition-colors">Educación</a>
        <a href="#skills" className="hover:text-pink-500 transition-colors">Skills</a>
        <a href="#contacto" className="hover:text-pink-500 transition-colors">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
