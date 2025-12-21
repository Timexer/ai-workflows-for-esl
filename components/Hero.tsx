import React from 'react';
import Button from './ui/Button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-8 md:mb-10 leading-tight max-w-6xl mx-auto">
            Stop wasting 10-20 hours <br />
            every week on prep that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500">AI can do for You</span>
          </h1>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="#signup">
            <Button size="lg" className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border-none px-10 py-5 md:px-14 md:py-6 text-xl md:text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(192,38,211,0.4)] transform transition hover:scale-105 active:scale-95">
              Secure Your Spot (3 hours)
            </Button>
          </a>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-10 text-slate-400 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 md:w-4 md:h-4 text-fuchsia-500" />
              <span>Grounded in British Council/Cambridge standards</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 md:w-4 md:h-4 text-fuchsia-500" />
              <span>Develop ready-to-use templates in 180 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 md:w-4 md:h-4 text-fuchsia-500" />
              <span>100% Practical</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-fuchsia-900/20 blur-[120px] rounded-full -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
    </section>
  );
};
export default Hero;