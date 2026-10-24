import React from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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

      <div className="w-full max-w-none mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Centered Hero Content - Full Width */}
        <div className="w-full space-y-6 text-center">
          {/* Academic Kicker / Status */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium">
            <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>BCA Graduate</span>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
            <span>MCA Scholar (Final Year)</span>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
            <span className="text-slate-600 dark:text-slate-300">Software Development</span>
          </div>

          {/* Display Greeting & Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-300 dark:to-sky-300">Ananya Gupta</span>.
          </h1>

          {/* Headline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
            MCA Student <span className="text-indigo-600 dark:text-indigo-400">|</span> Aspiring Software Developer <span className="text-indigo-600 dark:text-indigo-400">|</span> Tech Enthusiast
          </p>

          {/* Short Introduction */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed w-full max-w-5xl mx-auto">
            Passionate about building scalable full-stack web applications, architecting clean database systems, and solving complex algorithmic problems. Committed to continuous learning and crafting human-centered digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};