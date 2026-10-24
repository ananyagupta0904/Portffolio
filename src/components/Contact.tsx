import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Copy, Check, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.emailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const emailHref = `mailto:${portfolioData.personal.emailPlaceholder}?subject=Opportunity%20Inquiry%20-%20Ananya%20Gupta`;

  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-indigo-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Contact Ananya
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in discussing full-time software engineering roles, graduate internships, or open-source collaborations? Connect directly through email or professional networks.
          </p>
        </div>

        {/* 4-Card Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card 1: Email */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0f1e] border border-slate-200 dark:border-indigo-950/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                Direct Email
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white font-mono break-all mb-4">
                {portfolioData.personal.emailPlaceholder}
              </h3>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
              <a
                href={emailHref}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors"
              >
                <span>Compose Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Address'}</span>
              </button>
            </div>
          </div>

          {/* Card 2: LinkedIn */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0f1e] border border-slate-200 dark:border-indigo-950/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800/60 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                Professional Network
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white font-mono break-all mb-4">
                linkedin.com/in/ananya-gupta-placeholder
              </h3>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
              <a
                href={portfolioData.personal.linkedinPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: GitHub */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0f1e] border border-slate-200 dark:border-indigo-950/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-indigo-950/80 border border-slate-300 dark:border-indigo-800/60 flex items-center justify-center text-slate-800 dark:text-indigo-400 mb-4">
                <Github className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                Code Repositories
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white font-mono break-all mb-4">
                github.com/ananya-gupta-placeholder
              </h3>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
              <a
                href={portfolioData.personal.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: Location & Status */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0f1e] border border-slate-200 dark:border-indigo-950/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                Location & Availability
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                {portfolioData.personal.location}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Open to full-time graduate opportunities, remote software roles, and on-site positions.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
              <div className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Hire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Note on contact info */}
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-[#090d1a] border border-slate-200 dark:border-indigo-950/60 text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex items-center justify-between flex-wrap gap-2">
          <span>
            <strong className="text-slate-800 dark:text-slate-300">Privacy Notice:</strong> Contact details use clearly marked placeholders until updated with live credentials.
          </span>
          <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
            Response turnaround within 24 hours
          </span>
        </div>
      </div>
    </section>
  );
};
