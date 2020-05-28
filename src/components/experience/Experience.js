import React from "react";
import "./experience.css";
import ltp from "../../images/ltp.png";
import booking from "../../images/booking.png";
import liveRamp from "../../images/liveRamp.png"
import { handleScrollAnimations } from "../scrollEvent.js";

const experience = [
  {
    company: "LTP Business psychologist",
    position: "Junior software developer",
    date: "Jun 2019 - Present",
    logo: ltp,
  },
  {
    company: "Booking.com",
    position: "Intern frontend developer",
    date: "Jan - May 2019",
    logo: booking,
  },
  {
    company: "Faktor B.V",
    note: 'The company is currently called LiveRamp',
    position: "Intern junior web developer",
    date: "Jun 2018 - Jan 2019",
    logo: liveRamp
  },
];


const Experience = () => {
  handleScrollAnimations("exp-wrapper", "slideRight", 950);

  const renderExp = () => {
    return experience.map(({ company, position, date, logo, note }) => {
      return (
        <div className="exp-card" key={`key__${company}`}>
          {logo && <img src={logo} alt="logo" />}
          <h3>{company}</h3>
          {note && <h4>{note}</h4>}
          <p>{position}</p>
          <p>{date}</p>
        </div>
      );
    });
  };

  return (
    <section className="exp">
      <h2>Experience</h2>
      <div className="exp-wrapper">{renderExp()}</div>
    </section>
  );
};

export default Experience;
