import React, { useEffect, useRef, useState } from 'react';

const LeadMagnetSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    role: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
          <div className="premium-label mb-4">FREE RESOURCE</div>
          <h2 className="premium-heading-xl mb-6">
            The Enterprise AI
            <br />
            <span className="premium-gradient-text">Implementation Playbook</span>
          </h2>
          <p className="premium-body-lg max-w-3xl mx-auto">
            The exact 127-page framework Fortune 500 companies use to deploy AI systems that
            generate measurable ROI within 90 days. No theory. Just battle-tested execution
            strategies.
          </p>
        </div>

        {/* Asymmetrical Bento Layout - Form + Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 max-w-6xl mx-auto">
          {/* Left: Premium Form Card - Larger */}
          <div
            className={`lg:col-span-4 premium-reveal ${isVisible ? 'in-view' : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="premium-card-shell h-full">
              <div className="premium-card-core">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-white/90 mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your organization"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 outline-none"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-white/90 mb-3">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 outline-none appearance-none"
                    >
                      <option value="" className="bg-black">Select your role</option>
                      <option value="ceo" className="bg-black">CEO / President</option>
                      <option value="cto" className="bg-black">CTO / VP Engineering</option>
                      <option value="cfo" className="bg-black">CFO / VP Finance</option>
                      <option value="coo" className="bg-black">COO / Operations</option>
                      <option value="strategy" className="bg-black">Chief Strategy Officer</option>
                      <option value="other" className="bg-black">Other Executive</option>
                    </select>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 outline-none"
                    />
                  </div>

                  {/* CTA Button with Nested Icon */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 px-6 py-4 font-semibold text-white transition-all duration-400 ease-spring hover:shadow-gold active:scale-[0.98] group flex items-center justify-between"
                    >
                      <span>Get Free Playbook</span>
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

                  <p className="text-xs text-white/50 text-center pt-2">
                    Instant access. No spam. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Right: Benefits Grid - Smaller Stacked */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {/* Benefit 1 */}
            <div
              className={`premium-reveal ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="premium-card-shell h-full hover:shadow-gold transition-all duration-400">
                <div className="premium-card-core">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/90 text-sm mb-1">90-Day Roadmap</h4>
                      <p className="text-white/60 text-xs">Week-by-week execution plan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div
              className={`premium-reveal ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="premium-card-shell h-full hover:shadow-gold transition-all duration-400">
                <div className="premium-card-core">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/90 text-sm mb-1">ROI Framework</h4>
                      <p className="text-white/60 text-xs">Measure and optimize value</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div
              className={`premium-reveal ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="premium-card-shell h-full hover:shadow-gold transition-all duration-400">
                <div className="premium-card-core">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/90 text-sm mb-1">Team Playbook</h4>
                      <p className="text-white/60 text-xs">Build and structure your AI team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm mb-4">
            Trusted by 2,400+ executives across Fortune 500 companies
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
