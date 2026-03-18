import React from "react";

const ResultsShowcaseSection: React.FC = () => {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-4 inline-flex items-center rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Proven Results
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real Results, Real Revenue
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Fortune 500 Manufacturer</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Operational cost reduction:</span>
                <span className="text-sky-400 font-bold">42%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Implementation time:</span>
                <span className="text-sky-400 font-bold">3 months</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Annual savings:</span>
                <span className="text-sky-400 font-bold">$2.3M</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Global Tech Platform</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Faster onboarding:</span>
                <span className="text-sky-400 font-bold">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Customer satisfaction:</span>
                <span className="text-sky-400 font-bold">127%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Deployment time:</span>
                <span className="text-sky-400 font-bold">6 weeks</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Enterprise Logistics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Process automation:</span>
                <span className="text-sky-400 font-bold">60%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Accuracy improvement:</span>
                <span className="text-sky-400 font-bold">99.7%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Cost savings:</span>
                <span className="text-sky-400 font-bold">$5.1M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcaseSection;