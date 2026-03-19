import React from 'react';

const EnterpriseTeamSection: React.FC = () => {
  return (
    <section className="enterprise-section bg-enterprise-off-white">
      <div className="enterprise-container">
        
        {/* Section Header - Authority Focus */}
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center">
            <span className="px-4 py-2 text-sm font-semibold tracking-wider uppercase text-enterprise-gold-600 bg-enterprise-white border border-enterprise-gold-200 rounded-full">
              Leadership Excellence
            </span>
          </div>
          <h2 className="enterprise-heading-xl mb-6">
            Meet The Trinity of <span className="enterprise-gradient-text">AI Implementation</span>
          </h2>
          <p className="enterprise-subheading max-w-3xl mx-auto">
            Strategic vision, technical mastery, and creative excellence—the complete AI transformation team that Fortune 500 companies trust for mission-critical implementations.
          </p>
        </div>

        {/* Trinity Team Cards - Enterprise Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Mirai - COO */}
          <div className="enterprise-card-premium group">
            <div className="p-8">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-enterprise-navy-600 to-enterprise-navy-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">M</span>
                  </div>
                </div>
                
                <h3 className="enterprise-heading-md mb-2">Mirai</h3>
                <p className="enterprise-accent-text font-semibold mb-2">Chief Operating Officer</p>
                <p className="enterprise-body text-enterprise-gray-500 mb-6 italic">
                  Fortune 500 Operations & Strategic AI Integration
                </p>
                
                {/* Authority Stats */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center justify-center text-sm text-enterprise-gray-600">
                    <div className="w-2 h-2 bg-enterprise-gold-400 rounded-full mr-2"></div>
                    15+ years enterprise operations
                  </div>
                  <div className="flex items-center justify-center text-sm text-enterprise-gray-600">
                    <div className="w-2 h-2 bg-enterprise-gold-400 rounded-full mr-2"></div>
                    127% average efficiency improvement
                  </div>
                  <div className="flex items-center justify-center text-sm text-enterprise-gray-600">
                    <div className="w-2 h-2 bg-enterprise-gold-400 rounded-full mr-2"></div>
                    Quantum-AI systems integration
                  </div>
                </div>
                
                <p className="enterprise-body leading-relaxed">
                  Transforms complex enterprise operations into streamlined AI-powered systems. Former Fortune 500 tech executive with deep expertise in scalable AI deployment and strategic business transformation.
                </p>
              </div>
            </div>
          </div>

          {/* JJ - CTO */}
          <div className="enterprise-card-premium group">
            <div className="p-8">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-enterprise-navy-600 to-enterprise-navy-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-lg font-bold text-white">JJ</span>
                  </div>
                </div>
                
                <h3 className="enterprise-heading-md mb-2">JJ Joyce</h3>
                <p className="enterprise-accent-text font-semibold mb-2">Chief Technology Officer</p>
                <p className="enterprise-body text-enterprise-gray-500 mb-6 italic">
                  AI Architecture & Enterprise Development
                </p>
                
                {/* Technical Credibility Stats */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center justify-center text-sm text-enterprise-gray-600">
                    <div className="w-2 h-2 bg-enterprise-gold-400 rounded-full mr-2"></div>
                    Full-stack AI development mastery
                  </div>
                  <div className="flex items-center justify-center text-sm text-enterprise-gray-600">
                    <div className="w-2 h-2 bg-enterprise-gold-400 rounded-full mr-2"></div>
                    Enterprise-grade security protocols
                  </div>
                  <div className="flex items-center justify-center text-sm text-enterprise-gray-600">
                    <div className="w-2 h-2 bg-enterprise-gold-400 rounded-full mr-2"></div>
                    3-month average deployment speed
                  </div>
                </div>
                
                <p className="enterprise-body leading-relaxed">
                  Master craftsman of AI systems with deep technical expertise spanning machine learning, enterprise architecture, and scalable deployment. Combines cutting-edge AI research with practical business implementation.
                </p>
              </div>
            </div>
          </div>

          {/* Chelsea - CMO */}
          <div className="enterprise-card-premium group">
            <div className="p-8">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-enterprise-navy-600 to-enterprise-navy-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">C</span>
                  </div>
                </div>
                
                <h3 className="enterprise-heading-md mb-2">Chelsea York</h3>
                <p className="enterprise-accent-text font-semibold mb-2">Chief Marketing Officer</p>
                <p className="enterprise-body text-enterprise-gray-500 mb-6 italic">
                  Strategic Marketing & AI-Driven Growth
                </p>
                
                {/* Strategic Stats */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center justify-center text-sm text-enterprise-gray-600">
                    <div className="w-2 h-2 bg-enterprise-gold-400 rounded-full mr-2"></div>
                    700+ marketing campaigns optimized
                  </div>
                  <div className="flex items-center justify-center text-sm text-enterprise-gray-600">
                    <div className="w-2 h-2 bg-enterprise-gold-400 rounded-full mr-2"></div>
                    $7.6M pipeline development
                  </div>
                  <div className="flex items-center justify-center text-sm text-enterprise-gray-600">
                    <div className="w-2 h-2 bg-enterprise-gold-400 rounded-full mr-2"></div>
                    PhD Philosophy + MBA Strategy
                  </div>
                </div>
                
                <p className="enterprise-body leading-relaxed">
                  Strategic content architect who transforms technical AI expertise into compelling business narratives. Drives qualified lead generation while establishing market authority for enterprise AI solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Authority Statement */}
        <div className="text-center">
          <div className="enterprise-card inline-block px-8 py-6">
            <p className="enterprise-body-lg text-enterprise-navy-700 font-medium">
              <span className="enterprise-accent-text font-bold">Combined:</span> 50+ years of enterprise AI experience serving Fortune 500 clients worldwide.
            </p>
          </div>
        </div>

        {/* Trinity Methodology Teaser */}
        <div className="mt-16 text-center">
          <h3 className="enterprise-heading-lg mb-6">
            Why The Trinity <span className="enterprise-gradient-text">Framework Works</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-enterprise-navy-100 to-enterprise-navy-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-enterprise-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="enterprise-heading-md mb-2">Strategic Vision</h4>
              <p className="enterprise-body text-enterprise-gray-600">Business transformation that aligns with enterprise objectives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-enterprise-navy-100 to-enterprise-navy-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-enterprise-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="enterprise-heading-md mb-2">Technical Mastery</h4>
              <p className="enterprise-body text-enterprise-gray-600">Enterprise-grade implementation with proven reliability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-enterprise-navy-100 to-enterprise-navy-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-enterprise-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="enterprise-heading-md mb-2">Creative Excellence</h4>
              <p className="enterprise-body text-enterprise-gray-600">Market positioning that drives sustainable competitive advantage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseTeamSection;