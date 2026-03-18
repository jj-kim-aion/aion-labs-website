import React from "react";

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText }) => {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.15),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            The AI Agency of the Future
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-base"
            >
              {ctaText}
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-700/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-600/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-base"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
