import React from "react";
import { Link } from "react-router-dom";

const navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/aliprofil.jpg" alt="profil" />
        </div>
        <h3>Ali AHMADI</h3>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span> Accueil</span>
            </Link>
          </li>
          <li>
            <Link to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span> Competence</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="navActive">
              <i className="fas fa-envelope"></i>
              <span> Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.google.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="google.fr" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="google.fr" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="signature">
        <p>Made by love - 2022</p>
      </div>
    </div>
  );
};

export default navigation;
