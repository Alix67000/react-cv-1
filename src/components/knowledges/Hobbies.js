import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérets</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Cours à pied</span>
        </li>
        <li className="hobby">
          <i className="fas fa-hiking"></i>
          <span>Cours à pied</span>
        </li>
        <li className="hobby">
          <i className="fas fa-seedling"></i>
          <span>Sport</span>
        </li>
        <li className="hobby">
          <i className="fas fa-bitcoin"></i>
          <span>Crypto-monnaie</span>
        </li>

        <li className="hobby">
          <i className="fas fa-rocket"></i>
          <span>Espace</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
