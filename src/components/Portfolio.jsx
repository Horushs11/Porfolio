import Sidebar from "./components/Sidebar";
import Inicio from "./components/sections/Inicio";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <Inicio />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;