import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy-loaded components
const Home = lazy(() => import("./page/homepage/home"));
const Story = lazy(() => import("./page/storypage/Story"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div style={{ textAlign: "center", marginTop: "20px" }}>⏳ Loading...</div>}>
        <Routes>
          <Route path="/lazyloading" element={<Home />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
