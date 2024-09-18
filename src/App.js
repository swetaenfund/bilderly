import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage.js'; // Landing Page Component
import HomePage from './pages/Homepage.js'; // Chat UI Page Component
import SurfaceElements from './pages/Example.js';
import GridWithPaper from './pages/ComponentPage.js';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/example" element={<SurfaceElements />} />
        <Route path="/comp" element={<GridWithPaper />} />
      </Routes>
    </Router>
  );
};

export default App;
