import React from 'react';
import { motion } from 'framer-motion';

const SignUp: React.FC = () => {
  return (
    <section id="signup" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Reserve Your Seat</h2>
            <p className="text-slate-600 text-xl">
              Fill in the form below to register your interest.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfYUMV6CO1xwM6KZnFL6ovVQalXJMnTvkI9OohN6JiX4zDNgQ/viewform?embedded=true"
              width="640"
              height="2752"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Workshop Registration Form"
              className="w-full max-w-full"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignUp;