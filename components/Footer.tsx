import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] py-16 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mb-8">
          <Shield className="w-4 h-4" />
          <span>Your data is secure. Read our <Link to="/privacy-policy" className="underline text-slate-400 hover:text-white">Privacy Policy</Link>.</span>
        </div>
        <p className="text-slate-600 text-xs mb-4">
          © {new Date().getFullYear()} Tim's AI Tips - Professional ESL Workflows. All rights reserved.
        </p>
        <div className="flex justify-center space-x-8">
          <Link to="/privacy-policy" className="text-slate-700 hover:text-slate-400 text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy</Link>
          <a href="#" className="text-slate-700 hover:text-slate-400 text-[10px] font-bold uppercase tracking-widest transition-colors">Terms</a>
          <a href="mailto:tim@timsaitips.com" className="text-slate-700 hover:text-slate-400 text-[10px] font-bold uppercase tracking-widest transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;