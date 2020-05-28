import React from "react";
import "./about.css";
import resume from "../../images/resume.pdf";
const About = () => {
  return (
    <section className="about">
      <h2>About me</h2>
      <a href={resume} target='_blank' rel="noopener noreferrer">Resume <i className="fa fa-arrow-circle-right" ></i></a>
      <p>
        Hi again, as I mentioned above I am a Front-End Developer.
        When I'm not in front of my computer screen, I'm probably Gym-ing,
        Gaming, or crossing off another item off the bucket list.
        <br />
        I enjoy bridging the gap between engineering and design — combining my technical
        knowledge with my 'keen eye for design' to create beautiful products. My
        goal is to always build applications that are scalable and efficient
        under the hood, while providing engaging, pixel-perfect user experiences.
      </p>
    </section>
  );
};

export default About;
