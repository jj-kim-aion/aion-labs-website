import React from "react";

const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-slate-900/50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="mb-8">
          <p className="mb-4 inline-flex items-center rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Ready to Start?
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Ready to Lead with AI?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Join the Fortune 500 companies already transforming their operations with Aion Labs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Schedule Strategy Call
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-700/50 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-600/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Download AI Framework
          </button>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
          <div className="space-y-2 text-slate-300">
            <p>
              <span className="font-medium text-sky-300">Email:</span>{" "}
              <a href="mailto:hello@aionresearch.io" className="text-sky-400 hover:text-sky-300 transition-colors">
                hello@aionresearch.io
              </a>
            </p>
            <p>
              <span className="font-medium text-sky-300">Phone:</span>{" "}
              <span className="text-slate-300">Available upon request</span>
            </p>
            <p className="text-sm text-slate-400 mt-4">
              Response within 2 business hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;