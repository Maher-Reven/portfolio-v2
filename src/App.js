import React from "react";
import "./App.css";

import Skills from "./components/skills/Skills.js";
import Experience from "./components/experience/Experience";
import About from "./components/about/About.js";
import FeaturedProjects from "./components/projects/FeaturedProjects/FeaturedProjects";
import OtherProjects from "./components/projects/OtherProjects/OtherProjects";

import Header from "./components/header/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <div className="projects-wrapper">
          <FeaturedProjects />
          <OtherProjects />
        </div>
      </main>
    </div>
  );
}

export default App;
