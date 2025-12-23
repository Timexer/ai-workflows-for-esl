import React from 'react';
import { Target, BarChart3, Wrench, Timer } from 'lucide-react';
import { motion } from 'framer-motion';

const ValuePillars: React.FC = () => {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-fuchsia-500" />,
      title: "WHERE TO START",
      description: "Cut through conflicting advice about AI in teaching."
    },
    {
      icon: <Timer className="w-6 h-6 text-fuchsia-500" />,
      title: "TIME RECLAIMED",
      description: "Imagine the hours you'll shift from manual prep to student interaction. Reclaim your weekends."
    },
    {
      icon: <Wrench className="w-6 h-6 text-fuchsia-500" />,
      title: "WHICH TOOLS",
      description: "A short list of tools that teachers are already using successfully in real classrooms."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-fuchsia-500" />,
      title: "PEER VALIDATION",
      description: "Compare what you build and use with other teachers so you’re not guessing whether something actually works."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="outcomes" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What if you could learn, with other teachers, how AI <br />
            can realistically support your teaching without <br />
            compromising your standards?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-lg mt-10 italic">
            <span className="flex items-center gap-2">Discover your personal automation potential during our live hands-on session.</span>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={item} className="p-8 rounded-xl bg-[#121212] border border-white/5 hover:bg-[#161616] transition-colors hover:border-fuchsia-500/30 group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{pillar.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 py-8 px-12 rounded-2xl bg-[#0f0f0f] border border-fuchsia-500/20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-fuchsia-400 font-bold mb-2 uppercase tracking-widest text-sm">Built live in the workshop</h4>
          <p className="text-white text-xl font-medium">
            You get concrete tools, processes, and next steps - not abstract theory or one-off demos you’ll never use again.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 py-8 px-12 rounded-2xl bg-[#0f0f0f] border border-blue-500/20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-blue-400 font-bold mb-2 uppercase tracking-widest text-sm">Founding Cohort</h4>
          <p className="text-white text-xl font-medium">
            This is the founding cohort.
            You’re joining a small group of teachers who are shaping how this approach develops sharing what works, what doesn’t, and setting realistic standards for AI use in ESL classrooms.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePillars;