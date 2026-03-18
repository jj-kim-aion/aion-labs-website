import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="bg-slate-900/50 border-y border-slate-700/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-sky-400 sm:text-3xl">500+</p>
            <p className="text-sm text-slate-300">AI implementations delivered</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-sky-400 sm:text-3xl">127%</p>
            <p className="text-sm text-slate-300">average ROI increase</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-sky-400 sm:text-3xl">3-month</p>
            <p className="text-sm text-slate-300">deployment average</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;