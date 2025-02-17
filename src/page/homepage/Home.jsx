import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.css";

const Home = () => {
  return (
    <div className="full-page-container">
      <div className="home-container">
        <h1 className="home-title">Welcome to the Lazy Loaded Story! 📖</h1>
        <p className="home-description">
          Discover a mystical journey filled with wonder, adventure, and magic. Click below to start reading your story.
        </p>
        <div className="links">
          {/* Links to Home and Story pages */}
          <Link to="/" className="button home-button">Home</Link>
          <Link to="/story" className="button start-reading-button">Start Reading</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
