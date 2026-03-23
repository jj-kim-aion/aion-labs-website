'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: Array<{
    label: string;
    value: string;
    color: string;
  }>;
  outcome: string;
  featured: boolean;
}

const ResultsShowcaseSection: React.FC = () => {
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

  const caseStudies: CaseStudy[] = [
    {
      company: 'Global Financial Services',
      industry: 'Financial Services',
      challenge: 'Document processing bottleneck preventing 500+ daily loan applications from being reviewed in time.',
      solution: 'Multi-model AI document intelligence system with custom training on proprietary data formats.',
      metrics: [
        { label: 'Processing Time', value: '94%', color: 'amber' },
        { label: 'Accuracy', value: '99.7%', color: 'green' },
        { label: 'Annual Savings', value: '$8.2M', color: 'blue' },
      ],
      outcome: '12 weeks to production. Eliminated 3 FTE headcount needs. ROI: 340% in year one.',
      featured: true,
    },
    {
      company: 'Healthcare Platform',
      industry: 'Healthcare',
      challenge: 'Patient data fragmented across 15 legacy systems preventing personalized care.',
      solution: 'Federated learning system with HIPAA-compliant orchestration.',
      metrics: [
        { label: 'Systems Unified', value: '15', color: 'purple' },
        { label: 'Care Improvement', value: '47%', color: 'pink' },
      ],
      outcome: '8 weeks deployment. Improved patient outcomes measurably.',
      featured: false,
    },
    {
      company: 'Manufacturing Conglomerate',
      industry: 'Manufacturing',
      challenge: 'Equipment failures causing random production shutdowns and $12M annual loss.',
      solution: 'IoT sensor fusion + time-series AI for predictive maintenance.',
      metrics: [
        { label: 'Downtime Cut', value: '73%', color: 'orange' },
        { label: 'First Year ROI', value: '420%', color: 'green' },
      ],
      outcome: '10 weeks to value. Prevented 47 critical failures in first 6 months.',
      featured: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="premium-section-xl relative overflow-hidden premium-grain-overlay"
      style={{ background: '#000000' }}
    >
      {/* Floating Ambient Gradients */}
      <div className="premium-ambient-bg">
        <div className="premium-gradient-orb premium-gradient-orb-2"></div>
        <div className="premium-gradient-orb premium-gradient-orb-3"></div>
      </div>

      <div className="premium-container relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 premium-reveal ${isVisible ? 'in-view' : ''}`}>
          <div className="premium-label mb-4">PROVEN RESULTS</div>
          <h2 className="premium-heading-xl mb-6">
            Real Results,
            <br />
            <span className="premium-gradient-text">Real Revenue</span>
          </h2>
          <p className="premium-body-lg max-w-3xl mx-auto">
            See how enterprise leaders transformed their operations and generated measurable
            ROI using our framework and autonomous AI systems.
          </p>
        </div>

        {/* Asymmetrical Bento Grid - Featured + Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {/* Featured Case Study - Left (2/3 width) */}
          {caseStudies
            .filter((cs) => cs.featured)
            .map((study, idx) => (
              <div
                key={idx}
                className={`lg:col-span-3 premium-reveal ${isVisible ? 'in-view' : ''}`}
                style={{ transitionDelay: '0.1s' }}
              >
                <div className="premium-card-shell h-full group hover:shadow-gold transition-all duration-500">
                  <div className="premium-card-core flex flex-col gap-6">
                    {/* Header */}
                    <div>
                      <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{study.company}</h3>
                      <p className="text-white/70 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-sm font-semibold text-amber-400 mb-2 uppercase tracking-wider">
                        Our Approach
                      </h4>
                      <p className="text-white/80">{study.solution}</p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      {study.metrics.map((metric, midx) => (
                        <div key={midx} className="text-center">
                          <div className="text-3xl font-bold text-amber-400 mb-1">
                            {metric.value}
                          </div>
                          <p className="text-xs text-white/60">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Outcome */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-white/80 italic">"{study.outcome}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Stacked Smaller Cases - Right (1/3 width) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {caseStudies
              .filter((cs) => !cs.featured)
              .map((study, idx) => (
                <div
                  key={idx}
                  className={`premium-reveal ${isVisible ? 'in-view' : ''}`}
                  style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div className="premium-card-shell h-full hover:shadow-gold transition-all duration-500 group">
                    <div className="premium-card-core flex flex-col gap-4">
                      {/* Header */}
                      <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                            {study.industry}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white">{study.company}</h4>
                      </div>

                      {/* Challenge */}
                      <p className="text-sm text-white/70 leading-snug">{study.challenge}</p>

                      {/* Key Metrics */}
                      <div className="pt-3 border-t border-white/10 space-y-2">
                        {study.metrics.map((metric, midx) => (
                          <div key={midx} className="flex items-center justify-between">
                            <span className="text-xs text-white/60">{metric.label}</span>
                            <span className="text-sm font-bold text-amber-400">{metric.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Outcome */}
                      <p className="text-xs text-white/60 italic pt-3 border-t border-white/10">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center premium-reveal ${isVisible ? 'in-view' : ''}`}>
          <div className="premium-card-shell inline-block max-w-2xl">
            <div className="premium-card-core">
              <p className="text-white/80 mb-6">
                See how your organization can achieve similar results. Schedule a 30-minute strategy call
                with our deployment team.
              </p>
              <button className="relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 px-8 py-4 font-semibold text-white transition-all duration-400 ease-spring hover:shadow-gold active:scale-[0.98] group inline-flex items-center gap-3">
                <span>Schedule Consultation</span>
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
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcaseSection;
