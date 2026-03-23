import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="premium-section spacious-section relative">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-enterprise-gold-300 to-transparent opacity-30"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">
          {/* Stat 1 */}
          <div className="group relative text-center stagger-item">
            <div className="glass-effect-subtle p-8 rounded-xl transition-all duration-500 group-hover:glass-effect">
              <div className="text-4xl sm:text-5xl font-bold mb-3">
                <span className="enterprise-gradient-text">500+</span>
              </div>
              <p className="text-sm sm:text-base text-enterprise-gray-700 font-medium tracking-wide">
                AI implementations delivered
              </p>
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-enterprise-gold-300 to-enterprise-gold-500 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500 -z-10"></div>
          </div>

          {/* Stat 2 */}
          <div className="group relative text-center stagger-item" style={{transitionDelay: '0.1s'}}>
            <div className="glass-effect-subtle p-8 rounded-xl transition-all duration-500 group-hover:glass-effect">
              <div className="text-4xl sm:text-5xl font-bold mb-3">
                <span className="enterprise-gradient-text">127%</span>
              </div>
              <p className="text-sm sm:text-base text-enterprise-gray-700 font-medium tracking-wide">
                Average ROI increase
              </p>
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-enterprise-gold-300 to-enterprise-gold-500 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500 -z-10"></div>
          </div>

          {/* Stat 3 */}
          <div className="group relative text-center stagger-item" style={{transitionDelay: '0.2s'}}>
            <div className="glass-effect-subtle p-8 rounded-xl transition-all duration-500 group-hover:glass-effect">
              <div className="text-4xl sm:text-5xl font-bold mb-3">
                <span className="enterprise-gradient-text">3-month</span>
              </div>
              <p className="text-sm sm:text-base text-enterprise-gray-700 font-medium tracking-wide">
                Deployment average
              </p>
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-enterprise-gold-300 to-enterprise-gold-500 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Bottom separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-enterprise-gold-300 to-transparent opacity-30"></div>
    </section>
  );
};

export default StatsSection;