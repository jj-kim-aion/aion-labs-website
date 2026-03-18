import React from "react";

const LeadMagnetSection: React.FC = () => {
  return (
    <section className="bg-slate-900/50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-4 inline-flex items-center rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Free Assessment
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Start Your AI Transformation Today
          </h2>
          <p className="text-lg text-slate-300">
            Get your complimentary AI Readiness Assessment—the same framework we use with Fortune 500 clients.
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="block w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="block w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                >
                  <option value="">Select Role</option>
                  <option value="ceo">CEO</option>
                  <option value="cto">CTO</option>
                  <option value="operations">Operations</option>
                  <option value="strategy">Strategy</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company-size" className="block text-sm font-medium text-slate-300 mb-2">
                  Company Size *
                </label>
                <select
                  id="company-size"
                  name="companySize"
                  required
                  className="block w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                >
                  <option value="">Select Size</option>
                  <option value="<50">&lt;50 employees</option>
                  <option value="50-500">50-500 employees</option>
                  <option value="500-5000">500-5000 employees</option>
                  <option value="5000+">5000+ employees</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="ai-interest" className="block text-sm font-medium text-slate-300 mb-2">
                  Primary AI Interest *
                </label>
                <select
                  id="ai-interest"
                  name="aiInterest"
                  required
                  className="block w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                >
                  <option value="">Select Interest</option>
                  <option value="process-automation">Process Automation</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="customer-experience">Customer Experience</option>
                  <option value="operations">Operations</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                  placeholder="your@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="block w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
              >
                Get My Free Assessment
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-slate-400 mt-6">
            Join 2,847 executives who've transformed their operations with AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;