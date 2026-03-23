import React from 'react';

const EnterpriseHeroSection: React.FC = () => {
  return (
    <section className="premium-hero relative">
      {/* Ambient gradient shapes with enhanced animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-enterprise-gold-300 to-transparent opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-gradient-to-tl from-enterprise-navy-400 to-transparent opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="enterprise-container relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          
          {/* Authority Badge - Enhanced with glass effect */}
          <div className="mb-12 inline-flex items-center stagger-item">
            <div className="glass-effect-subtle px-5 py-3 text-xs font-semibold tracking-widest uppercase text-enterprise-navy-700 rounded-full backdrop-blur-sm">
              ✨ The AI Agency of the Future
            </div>
          </div>

          {/* Hero Headline - Animated gradient text */}
          <h1 className="enterprise-heading-hero mb-8 stagger-item text-5xl md:text-6xl lg:text-7xl max-w-5xl mx-auto">
            <span className="block leading-tight">Strategic</span>
            <span className="block text-2xl md:text-3xl text-enterprise-gold-500 my-3">•</span>
            <span className="block leading-tight">Technical</span>
            <span className="block text-2xl md:text-3xl text-enterprise-gold-500 my-3">•</span>
            <span className="block leading-tight enterprise-gradient-text">Creative Excellence</span>
          </h1>

          {/* Value Proposition - Better typography */}
          <p className="enterprise-subheading mb-12 max-w-4xl mx-auto text-lg md:text-xl stagger-item text-enterprise-gray-700">
            Enterprise AI implementation without the enterprise headaches. We deploy breakthrough AI research into market-leading platforms that drive measurable ROI while your competition is still planning pilots.
          </p>

          {/* Enterprise Credibility Stats - Asymmetric layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="premium-card stagger-item text-center">
              <div className="text-3xl md:text-4xl font-bold text-enterprise-navy-900 mb-2">500+</div>
              <div className="text-sm text-enterprise-gray-600 font-medium">AI implementations delivered</div>
            </div>
            <div className="premium-card stagger-item text-center">
              <div className="text-3xl md:text-4xl font-bold enterprise-gradient-text mb-2">127%</div>
              <div className="text-sm text-enterprise-gray-600 font-medium">Average ROI increase</div>
            </div>
            <div className="premium-card stagger-item text-center">
              <div className="text-3xl md:text-4xl font-bold text-enterprise-navy-900 mb-2">3</div>
              <div className="text-sm text-enterprise-gray-600 font-medium">Month deployment avg</div>
            </div>
            <div className="premium-card stagger-item text-center">
              <div className="text-3xl md:text-4xl font-bold text-enterprise-gold-500 mb-2">24/7</div>
              <div className="text-sm text-enterprise-gray-600 font-medium">AI-powered delivery</div>
            </div>
          </div>

          {/* Enterprise CTAs - Enhanced buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 stagger-item">
            <a href="#strategic-consultation" className="enterprise-button-primary group">
              Schedule Strategic Consultation
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#capability-assessment" className="enterprise-button-secondary">
              Take Capability Assessment
            </a>
          </div>

          {/* Social Proof - Premium treatment */}
          <div className="stagger-item">
            <p className="text-sm text-enterprise-gray-600 font-medium mb-6">
              Trusted by Fortune 500 leaders in AI transformation
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 opacity-70">
              <div className="premium-card text-center py-2 px-4">
                <span className="text-xs font-semibold text-enterprise-navy-700">Enterprise Client 1</span>
              </div>
              <div className="premium-card text-center py-2 px-4">
                <span className="text-xs font-semibold text-enterprise-navy-700">Enterprise Client 2</span>
              </div>
              <div className="premium-card text-center py-2 px-4">
                <span className="text-xs font-semibold text-enterprise-navy-700">Enterprise Client 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHeroSection;