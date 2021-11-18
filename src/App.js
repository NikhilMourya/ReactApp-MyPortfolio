import Intro from './components/Intro';
import './App.css';
import { About } from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
