import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Portfolio from './components/Portfolio'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#1A1A2E]">
        <Sidebar />
        <main className="flex-1 ml-48">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/educacion" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App