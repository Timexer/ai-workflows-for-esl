import React from 'react';
import { Flame, Clock, ShieldAlert } from 'lucide-react';

const Audience: React.FC = () => {
  const cards = [
    {
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      title: "\"I don't know where to start\"",
      description: "You hear everywhere about AI, but no one tells you concretely WHAT to use in YOUR specific ESL context. Influencers sell vision, not solutions."
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "\"I don't have time to experiment\"",
      description: "You teach 25+ hours a week. You respond to emails at 11:00 PM. Another 'tech exploration project'? No, thank you."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-blue-500" />,
      title: "\"I'm afraid of generic outputs\"",
      description: "You've seen low-quality AI materials that mix up B1 and C1 levels. You don't want to be 'just another AI teacher' using hallucinations."
    }
  ];

  return (
    <section id="audience" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 max-w-2xl mx-auto">
          3 reasons why you still haven't implemented AI <br/>
          <span className="text-slate-500 font-normal text-2xl">(even though you know you should):</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {cards.map((card, index) => (
            <div key={index} className="p-10 rounded-2xl bg-[#161616] border border-white/5 hover:border-fuchsia-500/30 transition-all group">
              <div className="mb-6 p-4 bg-[#1e1e1e] rounded-2xl w-fit shadow-inner group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-fuchsia-900/10 to-transparent border border-white/5 text-center">
            <p className="text-slate-400 italic">
               <span className="text-white font-bold">The effect?</span> You stay in place. Your competition (even the smaller ones) starts to pull ahead. Meanwhile, you manually do things that could be running on autopilot.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Audience;