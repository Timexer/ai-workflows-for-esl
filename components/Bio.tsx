import React from 'react';

const Bio: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

            {/* Left Column: Polaroid Image */}
            <div className="md:col-span-5 relative">
              <div className="relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white p-3 shadow-2xl rounded-sm">
                  <img
                    src="https://res.cloudinary.com/drlymuj5s/image/upload/v1766081758/1759952995384_de5bhc.jpg"
                    alt="Tim - ESL Trainer"
                    className="w-full aspect-[3/4] object-cover rounded-sm filter contrast-105"
                  />
                </div>
                {/* Subtle Glow/Shadow behind */}
                <div className="absolute top-4 left-4 w-full h-full bg-brand-200 blur-2xl -z-10 opacity-60"></div>
              </div>
            </div>

            {/* Right Column: Bio Text */}
            <div className="md:col-span-7 space-y-8">
              <div>
                <h3 className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">Meet Your Instructor: Tim</h3>
                <p className="text-brand-600 font-bold text-xl uppercase tracking-wide">ESL Business English Trainer & AI Education Specialist</p>
                <div className="h-1 w-20 bg-brand-400 mt-4 rounded-full"></div>
              </div>

              <div className="prose prose-xl text-slate-600 leading-relaxed">
                <p>
                  Tim is a certified <span className="font-bold text-slate-800 italic">Gen AI leader from Google</span> and a <span className="font-bold text-slate-800 italic">CELTA-certified</span> teacher with years of experience in the ESL classroom. He specializes in bridging the gap between traditional pedagogy and modern technology, helping teachers use AI responsibly without deteriorating teaching quality. Having trained hundreds of students, Tim provides practical, ethical workflows tested with real-world Business English clients.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-4">
                {/* Stats Box */}
                <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-100 shadow-sm min-w-[160px] text-center">
                  <span className="block text-5xl font-black text-slate-900">12+</span>
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider mt-1 block">Years Teaching</span>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-6">
                  <img
                    src="https://res.cloudinary.com/drlymuj5s/image/upload/v1766081786/Celta_aape5l.png"
                    alt="CELTA Certified"
                    className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                  />
                  <img
                    src="https://res.cloudinary.com/drlymuj5s/image/upload/v1766081688/GenAI_badge_xgbvu2.png"
                    alt="Google Gen AI Leader"
                    className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
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