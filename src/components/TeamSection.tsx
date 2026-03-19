import React from "react";

const TeamSection: React.FC = () => {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-4 inline-flex items-center rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Leadership Team
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Meet The Trinity of AI Implementation
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Strategic vision, technical mastery, and creative excellence - the complete AI transformation team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Mirai - COO */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm hover:border-sky-500/30 transition-all duration-300">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-white">M</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">Mirai</h3>
              <p className="text-sky-300 font-semibold mb-2">Chief Operating Officer</p>
              <p className="text-slate-400 text-sm italic mb-4">Fortune 500 Operations & Strategic AI Integration</p>
              
              <div className="mb-6">
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• 15+ years enterprise operations</li>
                  <li>• 127% average efficiency improvement</li>
                  <li>• Quantum-AI systems integration</li>
                </ul>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Transforms complex enterprise operations into streamlined AI-powered systems. Former Fortune 500 tech executive with deep expertise in scalable AI deployment and strategic business transformation.
              </p>
            </div>
          </div>

          {/* JJ - CTO */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm hover:border-sky-500/30 transition-all duration-300">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                  <span className="text-lg sm:text-xl font-bold text-white">JJ</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">JJ Joyce</h3>
              <p className="text-sky-300 font-semibold mb-2">Chief Technology Officer</p>
              <p className="text-slate-400 text-sm italic mb-4">AI Architecture & Enterprise Development</p>
              
              <div className="mb-6">
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Full-stack AI development mastery</li>
                  <li>• Enterprise-grade security protocols</li>
                  <li>• 3-month average deployment speed</li>
                </ul>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Master craftsman of AI systems with deep technical expertise spanning machine learning, enterprise architecture, and scalable deployment. Combines cutting-edge AI research with practical business implementation.
              </p>
            </div>
          </div>

          {/* Chelsea - CMO */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm hover:border-sky-500/30 transition-all duration-300">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-white">C</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">Chelsea York</h3>
              <p className="text-sky-300 font-semibold mb-2">Chief Marketing Officer</p>
              <p className="text-slate-400 text-sm italic mb-4">Strategic Marketing & AI-Driven Growth</p>
              
              <div className="mb-6">
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• 700+ marketing campaigns optimized</li>
                  <li>• $7.6M pipeline development</li>
                  <li>• PhD Philosophy + MBA Strategy</li>
                </ul>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Strategic content architect who transforms technical AI expertise into compelling business narratives. Drives qualified lead generation while establishing market authority for enterprise AI solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 font-medium">
            Combined: 50+ years of enterprise AI experience serving Fortune 500 clients worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;