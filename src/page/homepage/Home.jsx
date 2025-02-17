import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.css";

const Home = () => {
  return (
    <div className="full-page-container">
      <div className="home-container">
        <h1>Welcome to the Lazy Loaded Story! 📖</h1>
        <p>Click below to start reading.</p>
        <div className="links">
          <Link to="/" className="button">Home</Link>
          <Link to="/story" className="button">Start Reading</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
