import React from "react";

const MethodologySection: React.FC = () => {
  return (
    <section className="bg-slate-900/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-4 inline-flex items-center rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Our Process
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            The Aion Implementation Framework
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Our proven 4-phase methodology ensures enterprise-grade AI deployment without enterprise-grade complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Assessment & Strategy</h3>
                <p className="text-sm text-sky-300 mb-4">Week 1-2</p>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  AI readiness evaluation
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  ROI forecasting
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  Implementation roadmap
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Custom Development</h3>
                <p className="text-sm text-sky-300 mb-4">Week 3-8</p>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  Tailored AI architecture
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  System integration
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  Security protocols
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Deployment & Testing</h3>
                <p className="text-sm text-sky-300 mb-4">Week 9-10</p>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  Staged rollout
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  Performance validation
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  Team training
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Optimization & Scale</h3>
                <p className="text-sm text-sky-300 mb-4">Ongoing</p>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  Continuous improvement
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  Performance monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  Strategic expansion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;