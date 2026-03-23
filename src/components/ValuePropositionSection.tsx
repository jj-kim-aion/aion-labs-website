'use client';

import React, { useEffect, useRef, useState } from 'react';

const ValuePropositionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="premium-section-xl relative overflow-hidden premium-grain-overlay"
      style={{ background: '#000000' }}
    >
      {/* Floating Ambient Gradients */}
      <div className="premium-ambient-bg">
        <div className="premium-gradient-orb premium-gradient-orb-1"></div>
        <div className="premium-gradient-orb premium-gradient-orb-2"></div>
      </div>

      <div className="premium-container relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 premium-reveal ${isVisible ? 'in-view' : ''}`}>
          <div className="premium-label mb-4">WHY CHOOSE US</div>
          <h2 className="premium-heading-xl mb-6">
            Why Fortune 500s Choose
            <br />
            <span className="premium-gradient-text">Aion Labs</span>
          </h2>
          <p className="premium-body-lg max-w-3xl mx-auto">
            We combine battle-tested AI frameworks with autonomous operations that scale
            seamlessly from pilot to enterprise-wide deployment.
          </p>
        </div>

        {/* Asymmetrical Bento Grid - Featured + Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {/* Featured Value Prop - Left (2/3 width) */}
          <div
            className={`lg:col-span-3 premium-reveal ${isVisible ? 'in-view' : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="premium-card-shell h-full hover:shadow-gold transition-all duration-500">
              <div className="premium-card-core flex flex-col gap-6">
                {/* Icon */}
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Proven AI Frameworks
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Battle-tested methodologies from 500+ successful deployments across every industry vertical and enterprise scale.
                  </p>
                  <p className="text-sm text-amber-400 font-semibold">
                    ✓ 90-day implementation roadmap
                  </p>
                  <p className="text-sm text-white/60 mt-2">
                    Week-by-week execution plan with clear milestones and measurable outcomes
                  </p>
                </div>

                {/* Metrics */}
                <div className="pt-4 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-amber-400">500+</div>
                      <p className="text-xs text-white/60 mt-1">Deployments</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-400">98%</div>
                      <p className="text-xs text-white/60 mt-1">On-time delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stacked Value Props - Right (1/3 width) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Card 1: Measurable ROI */}
            <div
              className={`premium-reveal ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="premium-card-shell h-full hover:shadow-gold transition-all duration-500">
                <div className="premium-card-core">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8L5.586 19.414A2 2 0 0 1 4 18.828v-2v-6.414a2 2 0 0 1 .586-1.414l12-12z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">127%</h4>
                      <p className="text-xs text-white/60">Average ROI</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Measurable ROI within 6 months with transparent tracking and quarterly reviews.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Autonomous Operations */}
            <div
              className={`premium-reveal ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="premium-card-shell h-full hover:shadow-gold transition-all duration-500">
                <div className="premium-card-core">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Self-Optimizing</h4>
                      <p className="text-xs text-white/60">Systems at scale</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Autonomous AI operations that learn and improve continuously with your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-16 text-center premium-reveal ${isVisible ? 'in-view' : ''}`}>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            See how your organization can achieve similar results with our proven framework and enterprise-grade AI systems.
          </p>
          <button className="relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 px-8 py-4 font-semibold text-white transition-all duration-400 ease-spring hover:shadow-gold active:scale-[0.98] group inline-flex items-center gap-3">
            <span>Start Your Transformation</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
