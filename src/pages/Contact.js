import React from "react";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Strasbourg</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <span>06 89 71 310</span>
            </li>

            <li>
              <i className="fas fa-envelope"></i>
              <span>omidquester@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            <a href="www.google.com" target="_blank" rel="noopener noreferrer">
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="www.google.com" target="_blank" rel="noopener noreferrer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a href="www.google.com" target="_blank" rel="noopener noreferrer">
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="www.google.com" target="_blank" rel="noopener noreferrer">
              <h4>Codepen</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
