import React from "react";
import "./featuredprojects.scss";
import booking from "../../../images/booking-screenshot.png";

function FeaturedProjects() {


  return (
    <section className="featured_projects">
      <h2> Featured Project</h2>
      <div className="featured_projects_wrapper">
        <img src={booking} alt="booking.com project" />

        <div className="project_information">
          <a href="https://www.booking.com/" target="_blank" rel="noopener noreferrer">
            <h5>Booking Replica</h5>
          </a>
          <p>
            A replica of booking.com website built with{" "}
            <strong>Reactjs/NodeJs</strong> with admin portal that track in
              bookings and cancellations part of it visualised as charts
            </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
