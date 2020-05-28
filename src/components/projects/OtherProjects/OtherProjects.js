import React from "react";
import "./otherprojects.css";

const projects = [
  {
    title: "Personal Website V1",
    link: "#",
    description:
      "My first portfolio website I designed and built in 2020. I've improved my experience with HTML, CSS/Sass, React.",
    usedTechs: ["JavaScript", "React", "HTML", "Sass"],
  },
  {
    title: "Isomorphic React",
    link: "https://github.com/moesi88/isomorphic-react",
    description:
      "This application is a basic API client which gathers data from an outside API (in this case, Stackoverflow) and generates an isomorphic, single-page application (SPA).",
    usedTechs: [
      "JavaScript",
      "React",
      "HTML",
      "Sass",
      "Stackoverflow developers api",
    ],
  },
  {
    title: "Expensify",
    link: "https://github.com/moesi88/Expensify-APP",
    description:
      "React application manage in and out payments,with a store that keeps user information safe via authentication functionality using firebase, this app developed during following Udemy course",
    usedTechs: [
      "React (UI)",
      "Redux (state management)",
      "Firebase (Database/auth)",
      "Express (Server)",
    ],
  },

  {
    title: "OOP SlotMachine",
    link: "https://github.com/moesi88/OOP-slotMachine2",
    description:
      "Simple game simulating slot machine functionality using OOP technic in JS",
    usedTechs: ["JavaScript (OOP style)", "CSS", "HTML"],
  },
  {
    title: "Puzzle Game",
    link: "https://github.com/moesi88/puzzelGame",
    description:
      "Puzzle game that we used to play when we were kids (i've learned via this implementation how to handle drag and drop functionality with pure JS)",
    usedTechs: ["JavaScript ", "CSS", "HTML"],
  },
  {
    title: "Memory Game",
    link: "https://github.com/moesi88/memory-game",
    description:
      "Simple memory game based on colors matching implemented with JavaScript es5",
    usedTechs: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "SPA JS",
    link: "https://github.com/moesi88/SPA-JS",
    description:
      "This app simulating the SPA technic with pure js functionality",
    usedTechs: ["JavaScript", "Express", "CSS", "HTML"],
  },
  {
    title: "HackerRank",
    link: "https://github.com/moesi88/HackerRank",
    description:
      "This is programming playground solutions where I practice algorithmic minded solutions for issues been provided by HackerRank website",
    usedTechs: ["JavaScript", "Python"],
  },
];

function OtherProjects() {
  const renderUl = (arr) => {
    return (
      <ul>
        {arr.map((el, index) => {
          return <li key={`key__${index}`}>{el}</li>;
        })}
      </ul>
    );
  };

  const renderProjects = () => {
    return projects.map(({ title, link, description, usedTechs }) => {
      return (
        <div className="project-card" key={`key__${title}`}>
          <h3>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
          <p>{description}</p>
          {renderUl(usedTechs)}
        </div>
      );
    });
  };

  return <div className="other-projects-wrapper">{renderProjects()}</div>;
}

export default OtherProjects;
