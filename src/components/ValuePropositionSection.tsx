import React from "react";

const ValuePropositionSection: React.FC = () => {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">
            Why Fortune 500s Choose Aion Labs
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Proven AI Frameworks</h3>
            <p className="text-slate-300">Battle-tested methodologies from 500+ deployments</p>
          </div>
          
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600">
                <span className="text-2xl">📊</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Measurable ROI</h3>
            <p className="text-slate-300">Average 127% ROI within 6 months</p>
          </div>
          
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Autonomous Operations</h3>
            <p className="text-slate-300">Self-optimizing systems that scale with your business</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;