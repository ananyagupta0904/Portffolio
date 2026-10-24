import React from 'react';
import { Code2, Database, BrainCircuit, Rocket, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: "Full-Stack Web Engineering",
      description: "Developing responsive client applications with React.js and modern CSS, paired with robust Node.js/Express and Python backend APIs."
    },
    {
      icon: Database,
      title: "Data & Architecture Foundations",
      description: "Designing normalized relational schemas in MySQL and flexible document stores in MongoDB, ensuring performant data access."
    },
    {
      icon: BrainCircuit,
      title: "Algorithmic Problem Solving",
      description: "Grounding development in computer science fundamentals: optimized time-space complexity, trees, graphs, and core algorithms."
    },
    {
      icon: Rocket,
      title: "Continuous Technical Growth",
      description: "Transitioning seamlessly from BCA foundational coursework to advanced MCA paradigms, rapid prototyping, and industry best practices."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-indigo-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            A grounded software engineer in the making with a solid academic continuum spanning Bachelor’s and Master’s degrees in Computer Applications.
          </p>
        </div>

        {/* 2-Column Split: Detailed Story & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-5 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {portfolioData.personal.fullBio.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}

            {/* Quick summary highlights */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Undergraduate: Bachelor of Computer Applications (BCA) completed</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Postgraduate: Master of Computer Applications (MCA) in progress</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Primary focus: Web Development, Systems Architecture & Software Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#0a0f1e] border border-slate-200 dark:border-indigo-950/80 hover:border-indigo-300 dark:hover:border-indigo-800/70 shadow-sm hover:shadow transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
