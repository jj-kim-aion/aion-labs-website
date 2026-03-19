import React from 'react';

const EnterpriseHeroSection: React.FC = () => {
  return (
    <section className="enterprise-section-hero relative overflow-hidden">
      {/* Background Pattern - Abstract AI/Data Flow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-enterprise-navy-300 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-enterprise-gold-300 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-enterprise-navy-400 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-enterprise-gold-400 rounded-lg rotate-12"></div>
      </div>

      <div className="enterprise-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Authority Badge */}
          <div className="mb-8 inline-flex items-center">
            <span className="px-4 py-2 text-sm font-semibold tracking-wider uppercase text-enterprise-navy-600 bg-enterprise-light-gray border border-enterprise-gray-200 rounded-full">
              The AI Agency of the Future
            </span>
          </div>

          {/* Hero Headline - Chelsea's Enhanced Messaging */}
          <h1 className="enterprise-heading-hero mb-6">
            <span className="block">Strategic</span>
            <span className="block enterprise-accent-text">•</span>
            <span className="block">Technical</span>
            <span className="block enterprise-accent-text">•</span>
            <span className="block enterprise-gradient-text">Creative Excellence</span>
          </h1>

          {/* Value Proposition - Authority Focused */}
          <p className="enterprise-subheading mb-8 max-w-4xl mx-auto">
            Enterprise AI implementation without the enterprise headaches. We deploy breakthrough AI research into market-leading platforms that drive measurable ROI while your competition is still planning pilots.
          </p>

          {/* Enterprise Credibility Stats - Stripe Inspired */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="enterprise-stat-number">500+</div>
              <div className="enterprise-stat-label">AI implementations delivered</div>
            </div>
            <div className="text-center">
              <div className="enterprise-stat-number">127%</div>
              <div className="enterprise-stat-label">Average ROI increase</div>
            </div>
            <div className="text-center">
              <div className="enterprise-stat-number">3</div>
              <div className="enterprise-stat-label">Month deployment average</div>
            </div>
            <div className="text-center">
              <div className="enterprise-stat-number">24/7</div>
              <div className="enterprise-stat-label">AI-powered delivery</div>
            </div>
          </div>

          {/* Enterprise CTAs - Multiple Pathways */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#strategic-consultation" className="enterprise-button-primary">
              Schedule Strategic Consultation
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#capability-assessment" className="enterprise-button-secondary">
              Take Capability Assessment
            </a>
          </div>

          {/* Social Proof - Enterprise Focus */}
          <div className="mt-12 text-center">
            <p className="enterprise-body text-enterprise-gray-500 mb-4">
              Trusted by Fortune 500 leaders in AI transformation
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="px-6 py-2 bg-enterprise-gray-100 rounded-lg">
                <span className="enterprise-technical">Enterprise Client 1</span>
              </div>
              <div className="px-6 py-2 bg-enterprise-gray-100 rounded-lg">
                <span className="enterprise-technical">Enterprise Client 2</span>
              </div>
              <div className="px-6 py-2 bg-enterprise-gray-100 rounded-lg">
                <span className="enterprise-technical">Enterprise Client 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent via-transparent to-transparent"></div>
    </section>
  );
};

export default EnterpriseHeroSection;