import React from "react";
import "./skills.css";
import languages from "../../images/skillsIcons/coding.png";
import framework from "../../images/skillsIcons/framework.png";
import tools from "../../images/skillsIcons/settings.png";
import paintbrush from "../../images/skillsIcons/paintbrush.png";
import { handleScrollAnimations } from "../scrollEvent.js";

const skills = {
  languages: [
    languages,
    "JavaScript",
    "Python",
    "HTML",
    "CSS/Sass",
    "SQL",
    "Bash",
  ],
  frameworks: [framework, "React", " Node", "Wordpress"],
  tools: [
    tools,
    " Git & Github",
    " Chrome Devtools",
    "Postman",
    "MongoDB",
    "AWS",
    "Docker",
  ],
  design: [
    paintbrush,
    "Sketch",
    "inDesign",
    "InVision",
    "UserTesting",
    "Wireframing",
  ],
};

const Skills = () => {
  handleScrollAnimations("skills-wrapper", "appear", 530);

  const returnUL = (arr) => {
    return (
      <ul>
        {arr.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    );
  };
  const renderSkills = () => {
    let content = [];
    for (let key in skills) {
      content.push(
        <div key={key} className={`${key} skill-card`}>
          <img className="skill-icon" src={skills[key][0]} alt={key} />
          <h3>{key.toUpperCase()}</h3>
          {returnUL(skills[key].slice(1))}
        </div>
      );
    }

    return content;
  };

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-wrapper">{renderSkills()}</div>
    </section>
  );
};

export default Skills;
