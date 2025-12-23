import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './components/Homepage';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToHashElement from './components/ScrollToHashElement';

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="min-h-screen bg-[#0a0a0a] font-sans text-slate-200">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aiworkshop" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;