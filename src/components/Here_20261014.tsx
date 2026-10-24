import React from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProfileGraphic } from './MockupGraphics';

interface HeroProps {
  onOpenResume: () => void;
  onNavigateToProjects: () => void;
  onNavigateToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onNavigateToProjects,
  onNavigateToContact,
}) => {
  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Academic Kicker / Status */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium">
              <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>BCA Graduate</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span>MCA Scholar (Final Year)</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-600 dark:text-slate-300">Software Development</span>
            </div>

            {/* Display Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-300 dark:to-sky-300">Ananya Gupta</span>.
            </h1>

            {/* Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
              MCA Student <span className="text-indigo-600 dark:text-indigo-400">|</span> Aspiring Software Developer <span className="text-indigo-600 dark:text-indigo-400">|</span> Tech Enthusiast
            </p>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate about building scalable full-stack web applications, architecting clean database systems, and solving complex algorithmic problems. Committed to continuous learning and crafting human-centered digital experiences.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onNavigateToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base transition-all duration-150 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 hover:text-slate-900 dark:bg-[#0f172a] dark:hover:bg-[#18233e] dark:text-slate-200 dark:hover:text-white font-medium text-sm sm:text-base transition-all duration-150 border border-slate-300 dark:border-indigo-900/60 hover:border-indigo-500/50 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shadow-sm"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-slate-200/60 dark:hover:bg-slate-800/40 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium text-sm sm:text-base transition-all duration-150 border border-slate-300 dark:border-slate-700/60 hover:border-slate-500 cursor-pointer whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Proof & Profiles */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">Connect:</span>
              <a
                href={portfolioData.personal.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition-colors"
                title="View GitHub Profile"
              >
                <Github className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="font-mono text-xs">GitHub</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={portfolioData.personal.linkedinPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-white transition-colors"
                title="View LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span className="font-mono text-xs">LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="font-mono text-xs text-slate-600 dark:text-slate-400">
                {portfolioData.personal.location}
              </span>
            </div>
          </div>

          {/* Right Column: Visual Container (Profile Portrait Graphic) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-gradient-to-b dark:from-[#0f172a]/90 dark:via-[#0a0f1d] dark:to-[#070b16] border border-slate-200 dark:border-indigo-950/80 shadow-2xl backdrop-blur-md">
              <ProfileGraphic size="hero" />

              {/* Bottom bio kicker */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-center">
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Focused on Modern Web Stacks & Software Systems
                </div>
                <div className="text-[11px] text-indigo-600 dark:text-indigo-400/90 font-mono mt-1 font-semibold">
                  React.js · Node.js · Python · MySQL · MongoDB
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Full-Width Metric Strip Below Hero Split */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200 dark:border-indigo-950/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-[#0b101e]/60 border border-slate-200 dark:border-slate-800/70 hover:border-indigo-300 dark:hover:border-indigo-900/60 shadow-sm transition-colors"
            >
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono font-medium">
                {stat.label}
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 mt-1 truncate">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
