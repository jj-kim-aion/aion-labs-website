import React from "react";

const SocialProofSection: React.FC = () => {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-4 inline-flex items-center rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Client Success
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-12">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <blockquote className="text-slate-300 mb-6 italic">
              "Game-changing implementation. ROI exceeded projections by 40%."
            </blockquote>
            <div className="border-t border-slate-600 pt-4">
              <p className="text-white font-semibold">Sarah Chen</p>
              <p className="text-sky-300">CTO</p>
              <p className="text-slate-400 text-sm">Fortune 100 Financial Services</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <blockquote className="text-slate-300 mb-6 italic">
              "Finally, AI that actually works for enterprise scale."
            </blockquote>
            <div className="border-t border-slate-600 pt-4">
              <p className="text-white font-semibold">Marcus Rodriguez</p>
              <p className="text-sky-300">CEO</p>
              <p className="text-slate-400 text-sm">Global Manufacturing Leader</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <blockquote className="text-slate-300 mb-6 italic">
              "Aion delivered in 3 months what our internal team couldn't in 18."
            </blockquote>
            <div className="border-t border-slate-600 pt-4">
              <p className="text-white font-semibold">Dr. Jennifer Walsh</p>
              <p className="text-sky-300">Head of Innovation</p>
              <p className="text-slate-400 text-sm">Healthcare Technology Platform</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-400 mb-8">Trusted by leading organizations worldwide</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 items-center opacity-50">
            {/* Placeholder client logos */}
            <div className="h-16 bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-600/30">
              <span className="text-slate-400 text-sm">Client Logo</span>
            </div>
            <div className="h-16 bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-600/30">
              <span className="text-slate-400 text-sm">Client Logo</span>
            </div>
            <div className="h-16 bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-600/30">
              <span className="text-slate-400 text-sm">Client Logo</span>
            </div>
            <div className="h-16 bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-600/30">
              <span className="text-slate-400 text-sm">Client Logo</span>
            </div>
            <div className="h-16 bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-600/30">
              <span className="text-slate-400 text-sm">Client Logo</span>
            </div>
            <div className="h-16 bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-600/30">
              <span className="text-slate-400 text-sm">Client Logo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;