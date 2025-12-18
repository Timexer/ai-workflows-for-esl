import React from 'react';
import { MODULES } from '../constants';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Curriculum: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="curriculum">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Workshop Outline</h2>
          <p className="text-slate-600">Three hours of high-impact, hands-on building.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {MODULES.map((module, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-200 transition-colors relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-500"></div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-slate-900">{module.title}</h3>
                <div className="flex items-center text-brand-700 bg-brand-50 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  <Clock className="w-4 h-4 mr-1.5" />
                  {module.duration}
                </div>
              </div>
              <ul className="space-y-3">
                {module.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-slate-600">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;