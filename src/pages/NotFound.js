import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Look like you're lost</h3>
        <p>the page you are looking for not avaible!</p>
        <Link exact to="/">
          <i className="fas fa-home"></i>
          <span> Accueil</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
