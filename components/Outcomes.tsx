import React from 'react';
import { Check, BookOpen, Zap, Layers } from 'lucide-react';

const Outcomes: React.FC = () => {
  return (
    <section id="outcomes" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Stop Guessing, Start Creating</h2>
          <p className="text-slate-400 text-xl max-w-4xl mx-auto">
            By the end of this workshop, you’ll confidently create high-quality ESL materials in minutes, not hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">

          {/* Column 1: Skills */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-900 rounded-lg border border-brand-700">
                <BookOpen className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Generate Activities</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-base"><strong className="text-white">Reading:</strong> Craft comprehension tasks tailored to levels with tailored vocabulary support.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-base"><strong className="text-white">Listening:</strong> Design exercises with pre-listening and detailed comprehension steps.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-base"><strong className="text-white">Speaking:</strong> Build role-play scenarios, discussion prompts & assessment rubrics.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-base"><strong className="text-white">Writing:</strong> Design prompts with feedback frames and self-editing checklists.</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Tools */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-900/50 rounded-lg border border-amber-700/50">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Use the Right Tool</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-base"><strong className="text-white">edcafe:</strong> Quick activity generation and interactive student chatbots.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-base"><strong className="text-white">Magic School:</strong> Rubrics, differentiation, and meaningful assessments.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-base"><strong className="text-white">Brisk:</strong> Text leveling and quick scaffolding directly in Google Docs.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-base"><strong className="text-white">ChatGPT/Gemini:</strong> Nuanced prompt engineering and custom content creation.</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Workflows */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-900/50 rounded-lg border border-purple-700/50">
                <Layers className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Build Real Workflows</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-base">Create a full 30-minute lesson skeleton live in the workshop.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-base">Save and reuse templates to cut prep time by 70%.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-base">Know exactly when to trust AI and when to pause.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-base">Apply British Council’s 10 Principles for Human-Centred AI.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Visual Mockup Section */}
        <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
          <div className="bg-slate-700 px-6 py-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs font-mono text-slate-400">Activity_Generator_Output.v2</span>
          </div>
          <div className="p-8 font-mono text-sm leading-relaxed">
            <div className="text-brand-400 mb-2">// Sample Output: B1 Speaking Roleplay</div>
            <div className="text-slate-300 mb-4">
              <span className="text-white font-bold">[Task Description]</span>: You are at a networking event. Student A is looking for a new supplier. Student B is an account manager at 'GlobalLink'.
            </div>
            <div className="bg-slate-900/50 p-4 rounded border-l-4 border-brand-500 space-y-2">
              <p className="text-brand-200">✓ Target Vocab: "competitive rates", "scalability", "seamless integration"</p>
              <p className="text-brand-200">✓ DOK Level: 3 (Strategic Thinking)</p>
              <p className="text-brand-200">✓ CEFR Level: B1 (Threshold)</p>
              <p className="text-slate-400 mt-4 italic">// This took 15 seconds to generate using the 'DOK Prompt Frame' provided in the workshop.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;