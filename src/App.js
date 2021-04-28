import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import React from "react";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
