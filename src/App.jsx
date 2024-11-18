import Header from './components/Header';
import Inicio from './components/sections/Inicio';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

const MainContent = () => {
  return (
    <div className="main-content">
      <Header />
      <div className="section">
        <Inicio />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <Education />
      </div>
      <div className="section">
        <Skills />
      </div>
      <div className="section">
        <Contact />
      </div>
    </div>
  );
};

export default MainContent;