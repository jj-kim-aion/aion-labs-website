import React from "react";

const FounderSection: React.FC = () => {
  return (
    <section className="relative bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="mb-4 inline-flex items-center rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              Leadership
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet Our Founder
            </h2>
          </div>
          
          <div className="mt-12">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-bold text-white">NA</span>
                  </div>
                </div>
                
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Nikos Acuna (Head of AI)
                  </h3>
                  <p className="text-sky-300 font-semibold mb-4">
                    Founder & CEO
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Visionary leader driving the transformation of AI research into market-leading enterprise platforms. 
                    Nikos founded Aion Labs with the mission to build "The AI Agency of the Future" - combining 
                    breakthrough research with practical business solutions that create sustainable competitive advantages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;