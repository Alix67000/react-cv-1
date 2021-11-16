import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Ali ahmadi</h1>
          <h2>Développeur Front-end</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
