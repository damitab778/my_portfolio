import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";

function App() {
  return (
    <ActiveSectionProvider>
      <div className="app">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </ActiveSectionProvider>
  );
}

export default App;
