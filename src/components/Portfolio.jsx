import About from './sections/About';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white">
      <header>
        {/* Contenido del header */}
      </header>
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
};

export default Portfolio;