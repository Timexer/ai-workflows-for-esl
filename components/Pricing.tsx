import React from 'react';
import Button from './ui/Button';
import { Zap, Target, PiggyBank, Map } from 'lucide-react';

const Pricing: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-5 h-5 text-fuchsia-400" />,
      title: "7 questions, 5 minutes",
      description: "Before the workshop, you’ll receive access to my ESL AI Implementation Coach to help you identify your needs and areas in which AI could benefit you the most."
    },
    {
      icon: <Target className="w-5 h-5 text-fuchsia-400" />,
      title: "Personalized workflows",
      description: "You’ll build ready-to-use workflows tailored to your specific ESL teaching context."
    },
    {
      icon: <PiggyBank className="w-5 h-5 text-fuchsia-400" />,
      title: "Prep Time Reclaimed",
      description: "Shift hours from repetitive task creation to student connection."
    },
    {
      icon: <Map className="w-5 h-5 text-fuchsia-400" />,
      title: "Implementation Plan",
      description: "Specific tools and next steps for Monday morning."
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Ready to reclaim your prep time?
          </h2>
          <p className="text-slate-400 text-2xl max-w-4xl mx-auto leading-relaxed">
            Stop wondering "if AI is worth it" — join the hands-on workshop to build your own <span className="text-fuchsia-500 font-bold underline decoration-fuchsia-500/30">AI workflows</span> that help you tailor your lessons to your student’s needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 rounded-xl bg-[#121212] border border-white/5 group hover:border-fuchsia-500/30 transition-colors">
              <div className="mb-6 p-3 bg-[#1e1e1e] rounded-lg w-fit group-hover:bg-fuchsia-500/20 transition-colors">
                {benefit.icon}
              </div>
              <h4 className="text-white font-bold mb-3 text-lg tracking-tight">{benefit.title}</h4>
              <p className="text-slate-500 text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* 
        <div className="flex flex-col items-center">
          <a href="#signup" className="w-full max-w-sm">
            <Button size="lg" fullWidth className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 py-6 text-xl font-bold rounded-xl shadow-[0_10px_40px_rgba(192,38,211,0.2)]">
              Start Your Diagnostic Now
            </Button>
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-500 text-xs font-medium">
            <span className="flex items-center gap-1">✓ Build it live during the workshop</span>
            <span className="flex items-center gap-1">✓ Personal feedback provided</span>
            <span className="flex items-center gap-1">✓ Results in under 180 mins</span>
          </div>
        </div>
        */}
      </div>

      {/* Glow Effect Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-fuchsia-900/10 blur-[100px] rounded-full -z-10"></div>
    </section>
  );
};

export default Pricing;