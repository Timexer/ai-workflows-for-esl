import React from 'react';

const Bio: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="relative flex-shrink-0">
              <div className="w-56 h-56 md:w-64 md:h-64 relative z-10 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-200">
                <img 
                  src="https://picsum.photos/seed/tim_esl_instructor/500/500" 
                  alt="Tim - ESL Trainer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 -left-4 w-full h-full rounded-full border-2 border-brand-200 z-0 scale-110"></div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Meet Your Instructor: Tim</h3>
              <p className="text-brand-600 font-medium mb-4">ESL Business English Trainer & AI Education Specialist</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Tim is a certified Gen AI leader from Google and a CELTA-certified teacher with years of experience in the ESL classroom. He specializes in bridging the gap between traditional pedagogy and modern technology, helping teachers use AI responsibly without deteriorating teaching quality. Having trained hundreds of students, Tim provides practical, ethical workflows tested with real-world Business English clients.
              </p>
              <div className="inline-flex gap-4">
                 <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                    <span className="block text-xl font-bold text-slate-900">12+</span>
                    <span className="text-xs text-slate-500">Years Teaching</span>
                 </div>
                 <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                    <span className="block text-xl font-bold text-slate-900 leading-tight">Certified</span>
                    <span className="text-xs text-slate-500">GenAI Leader<br/>CELTA</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;