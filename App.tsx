import React from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Audience from './components/Audience';
import ValuePillars from './components/ValuePillars';
import Curriculum from './components/Curriculum';
import Research from './components/Research';
import Pricing from './components/Pricing';
import SignUp from './components/SignUp';
import FreeResource from './components/FreeResource';
import Bio from './components/Bio';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-slate-200">
      <Header />
      <main>
        <Hero />
        {/* 
          NOTE: This section is skipped for now and will be stored for later in the future.
          Do not delete.
          <Audience /> 
        */}
        <ValuePillars />
        <Curriculum />
        <Research />
        <Pricing />
        <SignUp />
        <FreeResource />
        <Bio />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;