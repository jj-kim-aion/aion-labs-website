import React from "react";

const ValuePropositionSection: React.FC = () => {
  return (
    <section className="premium-section spacious-section relative bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-enterprise-gold-300 to-transparent opacity-5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center">
            <div className="glass-effect px-5 py-2 text-xs font-semibold uppercase tracking-widest text-enterprise-gold-600 rounded-full">
              Why Choose Us
            </div>
          </div>
          <h2 className="enterprise-heading-xl mb-4 text-center max-w-4xl mx-auto">
            Why Fortune 500s Choose Aion Labs
          </h2>
          <p className="text-lg text-enterprise-gray-600 max-w-3xl mx-auto">
            We combine proven AI frameworks with autonomous operations that scale
          </p>
        </div>
        
        {/* Value Propositions - Asymmetric grid with glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group premium-card stagger-item md:row-span-2 h-full flex flex-col justify-center">
            <div className="mb-8 flex justify-center">
              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Glowing background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-enterprise-gold-400 to-enterprise-gold-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-enterprise-gold-300 to-enterprise-gold-500 text-white text-3xl shadow-lg group-hover:shadow-xl transition-shadow">
                  ⚡
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-enterprise-navy-900 mb-3 text-center">Proven AI Frameworks</h3>
            <p className="text-center text-enterprise-gray-700 leading-relaxed flex-grow">
              Battle-tested methodologies from 500+ deployments across every industry vertical
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="group premium-card stagger-item flex flex-col justify-center" style={{transitionDelay: '0.1s'}}>
            <div className="mb-8 flex justify-center">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-enterprise-gold-400 to-enterprise-gold-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-enterprise-gold-300 to-enterprise-gold-500 text-white text-3xl shadow-lg group-hover:shadow-xl transition-shadow">
                  📊
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-enterprise-navy-900 mb-3 text-center">Measurable ROI</h3>
            <p className="text-center text-enterprise-gray-700 leading-relaxed">
              Average 127% ROI within 6 months with transparent tracking
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="group premium-card stagger-item flex flex-col justify-center" style={{transitionDelay: '0.2s'}}>
            <div className="mb-8 flex justify-center">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-enterprise-gold-400 to-enterprise-gold-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-enterprise-gold-300 to-enterprise-gold-500 text-white text-3xl shadow-lg group-hover:shadow-xl transition-shadow">
                  🤖
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-enterprise-navy-900 mb-3 text-center">Autonomous Operations</h3>
            <p className="text-center text-enterprise-gray-700 leading-relaxed">
              Self-optimizing systems that scale with your business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;