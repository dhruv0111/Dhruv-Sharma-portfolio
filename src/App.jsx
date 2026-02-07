import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import RecruiterSummary from './components/RecruiterSummary';
import HireMeFor from './components/HireMeFor';
import Proof from './components/Proof';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <RecruiterSummary />
      <HireMeFor />
      <Proof />
      <Contact />
    </div>
  );
}

export default App;
