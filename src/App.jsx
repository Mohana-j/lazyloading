import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Lazy-loaded components
const Home = lazy(() => import("./page/homepage/home"));
const Story = lazy(() => import("./page/storypage/Story"));

const App = () => {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#f8f9fa", marginBottom: "20px" }}>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
          {/* Navigation Links */}
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "#333" }}>Home</Link>
          </li>
          <li>
            <Link to="/story" style={{ textDecoration: "none", color: "#333" }}>Story</Link>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<div style={{ textAlign: "center", marginTop: "20px" }}>⏳ Loading...</div>}>
        <Routes>
          <Route path="/lazyloading" element={<Home />} />
          <Route path="/lazyloading/story" element={<Story />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
