import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <span className={`font-black text-2xl tracking-tighter text-white uppercase italic`}>
                TIM<span className="text-fuchsia-500">.AI</span>
            </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10">
            <a href="#outcomes" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Outcomes</a>
            <a href="#audience" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">The Problem</a>
            <a href="#signup">
              <Button size="sm" className="bg-white text-black hover:bg-slate-200 border-none font-bold rounded-full px-6">
                Join Workshop
              </Button>
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;