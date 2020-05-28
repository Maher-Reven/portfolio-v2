import React from "react";
import { handleScrollAnimations } from "../scrollEvent.js";
import profile from "../../images/maher.jpeg";
import "./header.css";


const Header = () => {


  window.addEventListener("scroll", (e) => {

    let scrollTop = document.scrollingElement.scrollTop;
    let element = document.getElementsByClassName('intro-wrapper')[0];
    if (scrollTop > 10) {
      element.setAttribute('style', 'animation: createBorder 1s forwards');
    }

    if (scrollTop < 5) {
      element.setAttribute('style', 'animation: removeBorder .5s forwards');
    }
  });

  return (
    <header>
      <div className="hello">
        <h3>
          <span id="he">He</span>llo!
        </h3>
      </div>
      <div className="intro-wrapper">
        <div className="summery-wrapper">
          <div className="summery">
            <h2>I'm Maher Kurdi</h2>
            <h1>
              Front End <br />
              Developer
            </h1>
            <p>
              Focused on building beautiful
              <br /> interfaces & experiences!
            </p>
            <div className="socials">
              <a href="https://www.linkedin.com/in/maherskrde/" target='_blank' rel="noopener noreferrer">
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/moesi88" target='_blank' rel="noopener noreferrer">
                <i className="fa fa-github fa-2x"></i>
              </a>
              <a href="mailto:moesi88@icloud.com" target='_blank' rel="noopener noreferrer">
                <i className="fa fa-envelope-open fa-2x"></i>
              </a>
              <a href="https://twitter.com/MaherSKurdi1" target='_blank' rel="noopener noreferrer">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/maher88si/" target='_blank' rel="noopener noreferrer">
                <i className="fa fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="img-wrapper">
          <img src={profile} alt="profile_pic" />
        </div>
      </div>
    </header>
  );
};

export default Header;
