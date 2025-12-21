import React from 'react';
import { BookMarked } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-slate-100 rounded-lg">
              <BookMarked className="w-6 h-6 text-slate-700" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Grounded in Research, Not Hype</h2>
          </div>

          <div className="prose prose-lg text-slate-600">
            <p className="mb-6">
              You're not learning hype. You're learning frameworks used by the world's largest language education organizations, plus practical workflows that have been tested with real teachers and learners. This workshop draws on:
            </p>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>
                  <strong>British Council:</strong> "AI Activities and Resources for English Language Teachers" (Peachey & Crichton, 2024) - 43 peer-reviewed activities.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>
                  <strong>British Council:</strong> "Human-Centred AI: Lessons for English Learning and Assessment" (2025) - 10 principles for responsible use.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>
                  <strong>Cambridge:</strong> Six Principles for Ethical AI in English Language Education (2025).
                </span>
              </li>
              <li className="flex gap-4">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>
                  <strong>Research:</strong> Oxford English Language Teaching Journal insights on AI for reading, listening, speaking, and writing.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;