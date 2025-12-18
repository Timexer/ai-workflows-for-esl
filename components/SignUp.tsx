import React, { useState } from 'react';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const SignUp: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="signup" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
            <p className="text-slate-600">I'll be in touch within 24 hours with the final details.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Reserve Your Seat</h2>
            <p className="text-slate-600">
              Fill in the quick form below. Once we have at least 5 confirmed teachers, I'll send the final date/time and a payment link to secure your seat.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Your Name</label>
              <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="Jane Doe" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Your Email</label>
              <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="jane@school.com" />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-semibold text-slate-700 mb-1">Country / Time Zone</label>
              <input type="text" id="country" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="e.g. Spain (CET)" />
            </div>

            <div>
              <label htmlFor="context" className="block text-sm font-semibold text-slate-700 mb-1">Main Teaching Context</label>
              <select id="context" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all">
                <option>Business English</option>
                <option>Exam Prep (IELTS/Cambridge)</option>
                <option>General English (Adults)</option>
                <option>Young Learners / Teens</option>
                <option>Higher Education / EAP</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-sm font-semibold text-slate-700">Would you pay $39 for this 3-hour workshop?</p>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="pay" value="yes" defaultChecked className="text-brand-600 focus:ring-brand-500" />
                  <span className="ml-2 text-slate-600 text-sm">Yes</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="pay" value="maybe" className="text-brand-600 focus:ring-brand-500" />
                  <span className="ml-2 text-slate-600 text-sm">Maybe</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="pay" value="no" className="text-brand-600 focus:ring-brand-500" />
                  <span className="ml-2 text-slate-600 text-sm">Not now</span>
                </label>
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 text-brand-600 rounded focus:ring-brand-500" />
                <span className="text-sm text-slate-600 leading-relaxed">I'm interested in sponsoring another teacher's seat <span className="text-slate-400 block text-xs mt-0.5">(You can nominate a colleague to attend at a discount after signing up)</span></span>
              </label>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <label className="flex items-start gap-3">
                <input type="checkbox" required defaultChecked className="mt-1 text-brand-600 rounded focus:ring-brand-500" />
                <span className="text-sm text-slate-500">I agree to receive emails about the workshop and future AI + ESL resources. I understand my data is kept private.</span>
              </label>
            </div>

            <Button type="submit" fullWidth size="lg">I'm Interested – Keep Me Updated</Button>

            <p className="text-center text-xs text-slate-400 mt-4">
              You'll hear from me within 24 hours. Questions? Email tim@timsaitips.com
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default SignUp;