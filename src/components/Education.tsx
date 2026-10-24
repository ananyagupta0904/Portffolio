import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-200 dark:border-indigo-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Rigorous computing education spanning undergraduate and postgraduate degrees with deep exposure to software development, data structures, and enterprise systems.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8">
          {portfolioData.education.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0a0f1e] border border-slate-200 dark:border-indigo-950/80 hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {/* Top Row: Degree Title & Timeframe */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
                      {item.degree}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.fullDegreeName}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                    <span className="text-slate-800 dark:text-slate-200">{item.institution}</span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="text-right space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium font-mono bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium flex items-center justify-end gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.grade}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {/* Coursework & Highlights Grid */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/60 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Coursework */}
                <div className="lg:col-span-7 space-y-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold font-mono">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>Key Coursework & Subjects</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 text-xs rounded bg-slate-100 dark:bg-[#10172c] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold font-mono">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>Academic Highlights</span>
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
