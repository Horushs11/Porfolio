// src/App.jsx

import Sidebar from "./components/Sidebar";
import Inicio from "./components/sections/Inicio";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pl-20">
      <Sidebar />
      <div className="ml-20">
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center">
          <Inicio />
        </section>

        <section id="sobre-mi" className="min-h-screen flex items-center justify-center">
          <About />
        </section>

        <section id="proyectos" className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>

        <section id="educacion" className="min-h-screen flex items-center justify-center">
          <Education />
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>

        <section id="contacto" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
